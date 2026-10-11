import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  align = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5 sm:space-y-2",
        align === "center" ? "items-center text-center max-w-3xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {tag && (
        <div className="flex items-center gap-2">
          <span className="w-6 h-[2px] bg-[#FFDC00]" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#FFDC00]">
            {tag}
          </span>
          {align === "center" && <span className="w-6 h-[2px] bg-[#FFDC00]" />}
        </div>
      )}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#FFFFFF] tracking-tight uppercase leading-tight font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
