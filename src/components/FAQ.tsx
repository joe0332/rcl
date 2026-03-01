"use client";

import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

/**
 * FAQ accordion component
 */
export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border border-border bg-muted/30 overflow-hidden transition-all duration-300 hover:border-primary/30"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between"
          >
            <span className="font-semibold text-foreground pr-8">
              {item.question}
            </span>
            <svg
              className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`px-6 transition-all duration-300 ${
              openIndex === index
                ? "max-h-96 pb-4 opacity-100"
                : "max-h-0 pb-0 opacity-0"
            } overflow-hidden`}
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
