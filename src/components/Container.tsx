import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}

/**
 * Responsive container with max-width constraints
 */
export function Container({ children, className = "", size = "default" }: ContainerProps) {
  const sizes = {
    narrow: "max-w-4xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  };

  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
