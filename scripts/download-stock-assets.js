const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Unsplash high-res curated automotive photos (Unsplash License - free commercial use)
const imagesToFetch = [
  {
    name: 'public/images/services/service-diagnostico',
    url: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1600&q=80', // Mechanic working on engine bay with inspection / electronics
  },
  {
    name: 'public/images/services/service-remap',
    url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1600&q=80', // High performance engine bay / turbo tuning
  },
  {
    name: 'public/images/services/service-4x4-premium',
    url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80', // Premium 4x4 offroad vehicle in rugged terrain
  },
  {
    name: 'public/images/gallery/gallery-bays',
    url: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80', // Automotive workshop bay
  },
  {
    name: 'public/images/gallery/gallery-mechanic',
    url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80', // Professional automotive technician inspecting vehicle
  },
  {
    name: 'public/images/gallery/gallery-4x4-trail',
    url: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&w=1200&q=80', // 4x4 pickup truck on adventure / dunes
  },
  {
    name: 'public/images/gallery/gallery-performance',
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80', // Porsche / luxury vehicle performance
  },
  {
    name: 'public/images/gallery/gallery-diagnostics',
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80', // BMW luxury performance car
  },
  {
    name: 'public/images/gallery/gallery-tuning',
    url: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80', // High-end sports & performance car
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status ' + res.statusCode));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  for (const item of imagesToFetch) {
    try {
      console.log('Downloading ' + item.name + '...');
      const buf = await download(item.url);
      await sharp(buf)
        .jpeg({ quality: 88 })
        .toFile(item.name + '.jpg');
      await sharp(buf)
        .webp({ quality: 85 })
        .toFile(item.name + '.webp');
      console.log('Saved ' + item.name);
    } catch (e) {
      console.error('Failed to download ' + item.name, e.message);
    }
  }
  console.log('All images downloaded and optimized!');
}

run();
