import React from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  improvement?: string;
}

/**
 * Testimonial card for social proof
 */
export function TestimonialCard({ quote, author, role, improvement }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-muted/30 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
      {improvement && (
        <div className="mb-4 inline-flex items-center rounded-full bg-success/10 px-3 py-1 text-sm font-semibold text-success">
          +{improvement} points
        </div>
      )}
      <blockquote className="mb-4 text-base text-foreground leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="text-sm font-semibold text-foreground">{author}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
