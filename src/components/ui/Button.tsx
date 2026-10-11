import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 rounded cursor-pointer select-none group relative overflow-hidden focus:outline-none whitespace-nowrap";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3.5 gap-2",
    lg: "text-base px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#FFDC00] text-[#090B10] hover:bg-[#FFE333] hover:shadow-[0_0_24px_rgba(255,220,0,0.4)] active:scale-[0.98] border border-[#FFDC00]",
    secondary:
      "bg-[#0719EA] text-white hover:bg-[#062B91] hover:shadow-[0_0_24px_rgba(7,25,234,0.4)] active:scale-[0.98] border border-[#0719EA]",
    outline:
      "bg-transparent text-[#F3F5F8] border border-white/20 hover:border-[#FFDC00] hover:text-[#FFDC00] hover:bg-white/[0.04] active:scale-[0.98]",
    ghost:
      "bg-transparent text-[#F3F5F8] hover:text-[#FFDC00] hover:bg-white/[0.05]",
  };

  const classes = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
