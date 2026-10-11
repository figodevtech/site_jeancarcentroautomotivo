import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "yellow" | "blue" | "dark" | "outline";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "blue",
  className,
  icon,
}) => {
  const variantStyles = {
    yellow: "bg-[#FFDC00]/15 text-[#FFDC00] border-[#FFDC00]/30",
    blue: "bg-[#0719EA]/15 text-[#5B7BFA] border-[#0719EA]/30",
    dark: "bg-white/[0.05] text-[#F3F5F8] border-white/10",
    outline: "border-white/20 text-[#F3F5F8]/80 bg-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border backdrop-blur-xs",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
