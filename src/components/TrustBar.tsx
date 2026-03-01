import React from "react";
import { siteConfig } from "@/config/site";

interface TrustBarProps {
  variant?: "default" | "compact";
}

/**
 * Compact credibility strip with trust signals
 * Displays below hero CTAs on landing and pricing pages
 */
export function TrustBar({ variant = "default" }: TrustBarProps) {
  if (variant === "compact") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mt-6">
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 text-success" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>{siteConfig.stats.studentsHelped} students helped</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 text-success" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>{siteConfig.stats.questionsAdaptive} adaptive sessions</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 text-success" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>7-day money-back guarantee</span>
        </div>
      </div>
    );
  }

  return (
    <div className="border-y border-border bg-muted/20 py-6 mt-8">
      <div className="flex flex-col md:flex-row items-center justify-around gap-6">
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground">{siteConfig.stats.studentsHelped}</p>
          <p className="text-xs text-muted-foreground">Students helped</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground">{siteConfig.stats.questionsAdaptive}</p>
          <p className="text-xs text-muted-foreground">Adaptive sessions</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground">{siteConfig.stats.averageImprovement}</p>
          <p className="text-xs text-muted-foreground">Avg. improvement</p>
        </div>
      </div>
    </div>
  );
}
