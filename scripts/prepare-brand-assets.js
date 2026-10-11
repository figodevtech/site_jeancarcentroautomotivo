const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processBrandAssets() {
  const rootDir = path.resolve(__dirname, '..');
  const midiaLogo = path.resolve(rootDir, '../midia/Logo JeanCar Centro Automotivo em Azul e Amarelo.png');
  const brandDir = path.resolve(rootDir, 'public/images/brand');
  const publicDir = path.resolve(rootDir, 'public');

  if (!fs.existsSync(brandDir)) fs.mkdirSync(brandDir, { recursive: true });

  // 1. Copy original logo
  fs.copyFileSync(midiaLogo, path.join(brandDir, 'logo-original.png'));

  // 2. Flood fill transparency for the official logo
  const { data, info } = await sharp(midiaLogo).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    rgba[i * 4] = data[i * 3];
    rgba[i * 4 + 1] = data[i * 3 + 1];
    rgba[i * 4 + 2] = data[i * 3 + 2];
    rgba[i * 4 + 3] = 255;
  }

  const visited = new Uint8Array(width * height);
  const queue = [];

  function isBackgroundWhite(x, y) {
    const idx = (y * width + x) * 4;
    const r = rgba[idx];
    const g = rgba[idx + 1];
    const b = rgba[idx + 2];
    // Background pixels are very close to pure white (>244)
    return r >= 244 && g >= 244 && b >= 244;
  }

  // Push borders into flood queue
  for (let x = 0; x < width; x++) {
    if (isBackgroundWhite(x, 0)) { queue.push([x, 0]); visited[x] = 1; }
    if (isBackgroundWhite(x, height - 1)) { queue.push([x, height - 1]); visited[(height - 1) * width + x] = 1; }
  }
  for (let y = 0; y < height; y++) {
    if (isBackgroundWhite(0, y)) { queue.push([0, y]); visited[y * width] = 1; }
    if (isBackgroundWhite(width - 1, y)) { queue.push([width - 1, y]); visited[y * width + width - 1] = 1; }
  }

  let head = 0;
  while (head < queue.length) {
    const [cx, cy] = queue[head++];
    const pIdx = (cy * width + cx) * 4;
    rgba[pIdx + 3] = 0; // Alpha 0

    const neighbors = [
      [cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]
    ];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIndex = ny * width + nx;
        if (!visited[nIndex] && isBackgroundWhite(nx, ny)) {
          visited[nIndex] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  // Find bounding box
  let minX = width, minY = height, maxX = 0, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (rgba[(y * width + x) * 4 + 3] > 0) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const pad = 12;
  const cropX = Math.max(0, minX - pad);
  const cropY = Math.max(0, minY - pad);
  const cropW = Math.min(width - cropX, (maxX - minX + 1) + pad * 2);
  const cropH = Math.min(height - cropY, (maxY - minY + 1) + pad * 2);

  const transparentBase = sharp(rgba, { raw: { width, height, channels: 4 } });
  
  // Save full transparent logo cropped
  await transparentBase
    .clone()
    .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(brandDir, 'logo.png'));

  // Save webp version
  await transparentBase
    .clone()
    .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
    .webp({ quality: 95 })
    .toFile(path.join(brandDir, 'logo.webp'));

  // Create favicon & icon (speedometer portion or compact badge)
  const iconSize = 256;
  const iconCropW = Math.round(cropW * 0.65);
  await transparentBase
    .clone()
    .extract({ left: cropX, top: cropY, width: iconCropW, height: cropH })
    .resize(iconSize, iconSize, { fit: 'contain', background: { r: 6, g: 43, b: 145, alpha: 1 } })
    .png()
    .toFile(path.join(brandDir, 'logo-icon.png'));

  // Copy to public/icon.png and public/apple-icon.png
  fs.copyFileSync(path.join(brandDir, 'logo-icon.png'), path.join(publicDir, 'icon.png'));
  fs.copyFileSync(path.join(brandDir, 'logo-icon.png'), path.join(publicDir, 'apple-icon.png'));
  fs.copyFileSync(path.join(brandDir, 'logo-icon.png'), path.join(publicDir, 'favicon.ico'));

  // Create Open Graph (OG) 1200x630 banner
  const logoBuffer = await sharp(path.join(brandDir, 'logo.png'))
    .resize(700, null, { fit: 'inside' })
    .toBuffer();

  const ogSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#090B10" />
        <stop offset="40%" stop-color="#101726" />
        <stop offset="100%" stop-color="#062B91" />
      </linearGradient>
      <linearGradient id="yellowGlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FFDC00" stop-opacity="0.8" />
        <stop offset="100%" stop-color="#0719EA" stop-opacity="0" />
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)" />
    <!-- Dynamic speed accents -->
    <path d="M-100,500 L600,0 L700,0 L0,500 Z" fill="white" opacity="0.03" />
    <path d="M200,630 L900,0 L940,0 L240,630 Z" fill="#0719EA" opacity="0.15" />
    <line x1="80" y1="460" x2="1120" y2="460" stroke="#FFDC00" stroke-width="3" opacity="0.6" />
    
    <text x="80" y="520" font-family="system-ui, sans-serif" font-weight="800" font-size="44" fill="#FFFFFF" letter-spacing="1">
      ESPECIALISTAS EM VEÍCULOS 4X4 E PREMIUM
    </text>
    <text x="80" y="565" font-family="system-ui, sans-serif" font-weight="500" font-size="24" fill="#FFDC00" letter-spacing="0.5">
      Manutenção • Diagnóstico Avançado • REMAP • +10 Anos de Referência
    </text>
  </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .composite([
      {
        input: logoBuffer,
        top: 100,
        left: 250,
      }
    ])
    .png()
    .toFile(path.join(brandDir, 'og-image.png'));

  console.log('Brand assets generated successfully!');
}

processBrandAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
