import React from "react";

interface ComparisonRow {
  feature: string;
  traditional: string;
  recallprep: string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

/**
 * Comparison table component
 */
export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="px-4 py-4 text-left text-sm font-semibold text-muted-foreground">
              Feature
            </th>
            <th className="px-4 py-4 text-left text-sm font-semibold text-muted-foreground">
              Traditional Prep
            </th>
            <th className="px-4 py-4 text-left text-sm font-semibold text-primary">
              RecallPrep
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-border/50 transition-colors hover:bg-muted/20"
            >
              <td className="px-4 py-4 text-sm font-medium text-foreground">
                {row.feature}
              </td>
              <td className="px-4 py-4 text-sm text-muted-foreground">
                {row.traditional}
              </td>
              <td className="px-4 py-4 text-sm font-semibold text-foreground">
                {row.recallprep}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
