import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";

/**
 * Site footer with links and copyright
 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                <span className="text-lg font-bold text-white">R</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {siteConfig.footer.links.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-sm text-muted-foreground">
              {siteConfig.footer.copyright}
            </p>
            <a
              href={`mailto:${siteConfig.footer.email}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {siteConfig.footer.email}
            </a>
          </div>

          {/* Legal Disclaimers */}
          <div className="space-y-3 text-xs text-muted-foreground/80 leading-relaxed max-w-4xl">
            <p>{siteConfig.disclaimers.trademark}</p>
            <p>{siteConfig.disclaimers.results}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
