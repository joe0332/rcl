import React from "react";
import { siteConfig } from "@/config/site";

/**
 * Before/After adaptive study shift proof card
 * Shows concrete example of how adaptation changes weekly study focus
 */
export function BeforeAfterProofCard() {
  const { adaptiveProofCard } = siteConfig;

  return (
    <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-muted/50 to-muted/30 p-6 shadow-lg">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-foreground mb-1">
          {adaptiveProofCard.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {adaptiveProofCard.subtitle}
        </p>
      </div>

      {/* Before/After Comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Before Column */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            {adaptiveProofCard.beforeLabel}
          </div>
          {adaptiveProofCard.examples.map((example, index) => (
            <div key={`before-${index}`} className="flex items-baseline justify-between text-sm">
              <span className="text-muted-foreground">{example.topic}</span>
              <span className="text-foreground font-medium">{example.before}</span>
            </div>
          ))}
        </div>

        {/* After Column */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-primary uppercase tracking-wide">
            {adaptiveProofCard.afterLabel}
          </div>
          {adaptiveProofCard.examples.map((example, index) => (
            <div key={`after-${index}`} className="space-y-1">
              <div className="flex items-baseline justify-between text-sm">
                <span className="text-muted-foreground">{example.topic}</span>
                <span className="text-primary font-semibold">{example.after}</span>
              </div>
              <div className="text-xs text-success italic">↑ {example.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Takeaway */}
      <div className="pt-3 border-t border-border">
        <p className="text-sm text-muted-foreground italic">
          {adaptiveProofCard.takeaway}
        </p>
      </div>
    </div>
  );
}
