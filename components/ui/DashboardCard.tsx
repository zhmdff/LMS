"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isUp: boolean;
  };
  color?: string; // We'll use brand primary by default
}

export function DashboardCard({ title, value, description, icon: Icon, trend }: DashboardCardProps) {
  return (
    <Card className="border-slate-200 shadow-sm transition-colors hover:border-[var(--color-primary)]">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/5 text-[var(--color-primary)]">
            <Icon className="h-5 w-5" />
          </div>
          {trend && (
            <div className={cn(
              "text-xs font-bold px-2 py-1 rounded-md",
              trend.isUp ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
            )}>
              {trend.isUp ? "+" : "-"}{trend.value}%
            </div>
          )}
        </div>
        <div className="mt-4 text-left">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{title}</h3>
          <div className="text-2xl font-black text-[var(--color-primary)] tracking-tight mt-1">{value}</div>
          {description && (
            <p className="text-[11px] text-slate-400 mt-1 font-medium">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
