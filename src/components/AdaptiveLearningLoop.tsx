import React from "react";

/**
 * Visual representation of the adaptive learning loop
 * Standout differentiator showing the continuous cycle
 */
export function AdaptiveLearningLoop() {
  const steps = [
    {
      number: 1,
      title: "Answer Question",
      icon: (
        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Evaluate Performance",
      subtitle: "Correct or Incorrect",
      icon: (
        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Update Mastery",
      subtitle: "Adjust topic strength",
      icon: (
        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Reschedule Next Review",
      subtitle: "Sooner if weak, later if strong",
      icon: (
        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: 5,
      title: "Retention Check-In",
      subtitle: "Prevent forgetting over time",
      icon: (
        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-foreground mb-4">
          The Adaptive Learning Loop
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every answer you give updates your personalized study schedule in real-time.
          This continuous cycle is what makes Recall Labs adaptive.
        </p>
      </div>

      {/* Loop Steps */}
      <div className="relative">
        {/* Connection line (desktop only) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="rounded-xl border border-border bg-muted/30 p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-sm mb-4 mx-auto">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary mb-4 mx-auto">
                  {step.icon}
                </div>

                {/* Title */}
                <h4 className="font-semibold text-foreground mb-2 text-sm">
                  {step.title}
                </h4>

                {/* Subtitle */}
                {step.subtitle && (
                  <p className="text-xs text-muted-foreground">
                    {step.subtitle}
                  </p>
                )}
              </div>

              {/* Arrow indicator (mobile only) */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <svg className="h-6 w-6 text-primary/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cycle indicator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 px-4 py-2">
            <svg className="h-5 w-5 text-primary animate-spin" style={{ animationDuration: '3s' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-sm font-semibold text-foreground">Repeats continuously until test day</span>
          </div>
        </div>
      </div>
    </div>
  );
}
