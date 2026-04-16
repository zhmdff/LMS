"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BarChart3, PieChart, Download, Filter, Search, FileText, Calendar, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminReports() {
  const reports = [
    { title: "Global University Statistics", category: "Academic", format: "PDF/XLS", lastGenerated: "2 Hours ago" },
    { title: "Financial Audit - Spring 2026", category: "Finance", format: "PDF", lastGenerated: "1 Day ago" },
    { title: "Faculty Efficiency Index", category: "HR", format: "XLS", lastGenerated: "3 Days ago" },
    { title: "Infrastructure Resource Log", category: "IT", format: "JSON", lastGenerated: "5 Minutes ago" },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">University Intelligence</h1>
        <p className="text-slate-500 font-medium">High-level insights: Cross-faculty analytics and system-wide performance reporting</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Students</p>
          <p className="text-3xl font-black text-slate-900">4,289</p>
          <p className="text-[10px] font-bold text-green-600">+12% vs last year</p>
        </Card>
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Staff</p>
          <p className="text-3xl font-black text-slate-900">356</p>
          <p className="text-[10px] font-bold text-slate-400">28 Departments</p>
        </Card>
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg. University GPA</p>
          <p className="text-3xl font-black text-slate-900">3.12</p>
          <p className="text-[10px] font-bold text-amber-500">-0.05 variation</p>
        </Card>
        <Card className="border-border shadow-sm bg-[var(--color-primary)] p-6 flex flex-col gap-1 text-left text-white">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Health</p>
          <p className="text-3xl font-black">99.9%</p>
          <p className="text-[10px] font-bold text-emerald-400">Optimized</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border shadow-sm bg-white overflow-hidden flex flex-col">
          <CardHeader className="bg-slate-50/50 border-b border-border p-4 px-6 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-slate-400" />
              <CardTitle className="text-lg font-bold">Analytic Generation Hub</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 bg-white text-[10px] font-black">
                LAST 30 DAYS
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto text-left">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-slate-50/30">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Report Title</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Format</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Last Run</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Download</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-white">
                  {reports.map((r, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-slate-400 group-hover:text-[var(--color-primary)]" />
                          <span className="text-sm font-bold text-slate-900">{r.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-xs font-black text-slate-500">{r.format}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-[10px] font-bold text-slate-400">{r.lastGenerated}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <Button variant="ghost" size="sm" className="h-8 w-8 text-slate-300 hover:text-[var(--color-primary)]">
                          <Download className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-border shadow-sm bg-white">
            <CardHeader className="bg-slate-50/50 border-b border-border text-left">
              <CardTitle className="text-base font-bold">Custom Report Builder</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Data Dimension</label>
                <Button variant="outline" className="w-full justify-between h-11 bg-slate-50 border-border text-xs font-bold font-italic">
                  Select Dimension <Filter className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Time Period</label>
                <Button variant="outline" className="w-full justify-between h-11 bg-slate-50 border-border text-xs font-bold font-italic">
                  Semester: Spring 2026 <Calendar className="h-4 w-4" />
                </Button>
              </div>
              <Button className="w-full h-12 bg-[var(--color-primary)] text-white font-black uppercase text-[10px] tracking-widest shadow-lg mt-4">Compile Live Report</Button>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm bg-emerald-50 border-emerald-100 overflow-hidden">
            <CardContent className="p-6 text-left flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-emerald-600" />
                <h4 className="text-base font-black text-emerald-900">Compliance Pulse</h4>
              </div>
              <p className="text-xs text-emerald-700 font-medium leading-relaxed">Attendance marking compliance reached 98.4% this morning across all faculties.</p>
              <Button variant="ghost" className="w-full h-10 text-[9px] font-black uppercase tracking-widest text-emerald-600 hover:bg-emerald-100">
                View Detailed Audit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
