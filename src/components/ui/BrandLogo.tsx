import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface BrandLogoProps {
  variant?: "transparent" | "badge";
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "transparent",
  size = "md",
  className,
  priority = false,
}) => {
  // Original aspect ratio is 1214 / 572 = ~2.12
  const dimensions = {
    sm: { width: 140, height: 66 },
    md: { width: 185, height: 87 },
    lg: { width: 240, height: 113 },
  };

  const dim = dimensions[size];

  if (variant === "badge") {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center p-2 rounded-lg bg-[#062B91]/40 border border-[#0719EA]/40 backdrop-blur-md shadow-lg shadow-[#0719EA]/10 hover:border-[#FFDC00]/60 transition-colors",
          className
        )}
      >
        <Image
          src="/images/brand/logo.png"
          alt="JeanCar Centro Automotivo"
          width={dim.width}
          height={dim.height}
          priority={priority}
          className="h-auto w-auto object-contain max-h-[64px]"
        />
      </div>
    );
  }

  return (
    <div className={cn("inline-flex items-center select-none", className)}>
      <Image
        src="/images/brand/logo.png"
        alt="JeanCar Centro Automotivo"
        width={dim.width}
        height={dim.height}
        priority={priority}
        className={cn(
          "w-auto object-contain transition-transform duration-300 hover:scale-105",
          size === "sm" && "h-10 sm:h-11",
          size === "md" && "h-11 sm:h-13",
          size === "lg" && "h-14 sm:h-18"
        )}
      />
    </div>
  );
};
