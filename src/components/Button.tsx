import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

/**
 * Reusable button component for CTAs
 * Uses explicit inline styles for critical colors to ensure visibility
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "shadow-lg border-2",
    secondary: "shadow-lg border-2",
    outline: "border-2 border-border text-foreground hover:bg-muted focus:ring-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Explicit inline styles for guaranteed visibility
  const getInlineStyles = (): React.CSSProperties => {
    if (variant === "primary") {
      return {
        backgroundColor: "#8b5cf6", // violet
        color: "#ffffff", // white
        borderColor: "#8b5cf6",
      };
    }
    if (variant === "secondary") {
      return {
        backgroundColor: "#06b6d4", // cyan
        color: "#ffffff", // white
        borderColor: "#06b6d4",
      };
    }
    return {};
  };

  const getHoverClass = () => {
    if (variant === "primary") return "hover:!bg-[#7c3aed] hover:!border-[#7c3aed]";
    if (variant === "secondary") return "hover:!bg-[#0891b2] hover:!border-[#0891b2]";
    return "hover:border-primary/50";
  };

  const getFocusClass = () => {
    if (variant === "primary") return "focus:ring-[#8b5cf6]";
    if (variant === "secondary") return "focus:ring-[#06b6d4]";
    return "focus:ring-primary";
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${getHoverClass()} ${getFocusClass()} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} style={getInlineStyles()}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={getInlineStyles()}>
      {children}
    </button>
  );
}
