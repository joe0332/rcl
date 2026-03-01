"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";
import { Button } from "./Button";

/**
 * Sticky navigation header
 */
export function Nav() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
              <span className="text-lg font-bold text-white">R</span>
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {siteConfig.name}
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Button variant="primary" size="sm" href="/#start">
              {siteConfig.cta.primary}
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
