import React from "react";

interface MockupCardProps {
  status: "needs-review" | "mastered" | "check-in";
  topic: string;
  detail: string;
}

/**
 * UI mockup card showing adaptive study states
 */
export function MockupCard({ status, topic, detail }: MockupCardProps) {
  const statusConfig = {
    "needs-review": {
      bg: "from-error/20 to-warning/20",
      border: "border-error/50",
      badge: "bg-error/20 text-error",
      label: "Needs Review",
    },
    mastered: {
      bg: "from-success/20 to-primary/20",
      border: "border-success/50",
      badge: "bg-success/20 text-success",
      label: "Mastered",
    },
    "check-in": {
      bg: "from-secondary/20 to-primary/20",
      border: "border-secondary/50",
      badge: "bg-secondary/20 text-secondary",
      label: "Check-In Due",
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className={`rounded-xl border ${config.border} bg-gradient-to-br ${config.bg} p-4 backdrop-blur-sm`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`rounded-full ${config.badge} px-3 py-1 text-xs font-semibold`}>
          {config.label}
        </div>
        <div className="flex items-center space-x-1">
          <div className="h-2 w-2 rounded-full bg-foreground/40" />
          <div className="h-2 w-2 rounded-full bg-foreground/40" />
          <div className="h-2 w-2 rounded-full bg-foreground/40" />
        </div>
      </div>
      <h4 className="text-sm font-semibold text-foreground mb-1">{topic}</h4>
      <p className="text-xs text-muted-foreground">{detail}</p>
    </div>
  );
}
