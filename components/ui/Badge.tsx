"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-[var(--color-primary)] text-white",
    secondary: "bg-slate-100 text-slate-900 border border-[#E2E8F0]",
    destructive: "bg-red-100 text-red-800 border border-red-200",
    success: "bg-green-100 text-green-800 border border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    outline: "border border-border text-slate-600",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors focus:outline-none",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
