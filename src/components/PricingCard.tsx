import React from "react";
import { siteConfig } from "@/config/site";
import { Button } from "./Button";

/**
 * Pricing card component
 */
export function PricingCard() {
  const { pricing } = siteConfig;

  const features = [
    "Unlimited adaptive study sessions",
    "Full SAT Math coverage",
    "Full SAT Reading & Writing coverage",
    "Real-time difficulty adjustment",
    "Spaced repetition scheduling",
    "Mastery tracking & analytics",
    "Forgetting prevention check-ins",
    "Mobile & desktop access",
  ];

  return (
    <div className="relative mx-auto max-w-md">
      {/* Popular badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 text-sm font-semibold text-white shadow-lg">
          Most Flexible
        </div>
      </div>

      <div className="rounded-3xl border-2 border-primary/30 bg-gradient-to-b from-muted/50 to-muted/30 p-8 shadow-2xl shadow-primary/20">
        {/* Plan Name */}
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {pricing.planName}
        </h3>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-5xl font-bold text-foreground">
              {pricing.currency}{pricing.price}
            </span>
            <span className="ml-2 text-xl text-muted-foreground">
              /{pricing.interval}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {pricing.billingNote}
          </p>
          <p className="text-sm text-muted-foreground">
            {pricing.commitmentNote}
          </p>
        </div>

        {/* CTA */}
        <Button variant="primary" size="lg" href="/#start" className="w-full mb-6">
          {siteConfig.cta.primary}
        </Button>

        {/* Features */}
        <div className="space-y-3 border-t border-border pt-6">
          <p className="text-sm font-semibold text-foreground mb-4">
            Everything included:
          </p>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <svg
                className="h-5 w-5 text-success flex-shrink-0 mt-0.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="ml-3 text-sm text-muted-foreground">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
