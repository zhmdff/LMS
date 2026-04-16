"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BarChart3, TrendingUp, AlertTriangle, Users, BookOpen, Clock, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DeptMonitoring() {
  const stats = [
    { title: "Avg. Attendance", value: "88.4%", trend: "+2.4%", isUp: true, icon: Clock },
    { title: "Pass Rate", value: "91.2%", trend: "-0.8%", isUp: false, icon: BarChart3 },
    { title: "Students at Risk", value: "42", trend: "+5", isUp: false, icon: AlertTriangle, color: "red" },
    { title: "Active Faculty", value: "38", trend: "0%", isUp: true, icon: Users },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Academic Monitoring</h1>
        <p className="text-slate-500 font-medium">Real-time performance metrics and risk assessment for the degree departments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, idx) => (
          <Card key={idx} className="border-border shadow-sm bg-white overflow-hidden text-left relative group hover:border-[var(--color-primary)] transition-all">
            <div className={`absolute top-0 left-0 w-1 h-full ${item.color === "red" ? "bg-red-500" : "bg-[var(--color-primary)]"}`}></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-slate-50 text-slate-400 p-2.5 rounded-xl border border-border group-hover:bg-[var(--color-primary)]/5 group-hover:text-[var(--color-primary)] transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className={`flex items-center gap-1 text-[11px] font-black ${item.isUp ? "text-green-600" : "text-red-500"}`}>
                  {item.isUp ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {item.trend}
                </div>
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.title}</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">{item.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border shadow-sm bg-white">
          <CardHeader className="bg-slate-50/50 border-b border-border flex flex-row items-center justify-between p-4 px-6">
            <div className="text-left">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[var(--color-primary)]" />
                <CardTitle className="text-lg font-bold">Subject Performance Matrix</CardTitle>
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Comparison across core departmental subjects</p>
            </div>
            <Button variant="outline" size="sm" className="bg-white border-border text-xs font-bold gap-2">
              Daily Period <TrendingUp className="h-3 w-3" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto text-left">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-slate-50/30">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Avg. Score</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Attendance</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Failure Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-white">
                  {[
                    { name: "Software Engineering", score: 78.5, att: "92%", risk: "Low", color: "bg-green-100 text-green-700" },
                    { name: "Database Systems", score: 82.2, att: "88%", risk: "Low", color: "bg-green-100 text-green-700" },
                    { name: "Linear Algebra", score: 62.4, att: "74%", risk: "High", color: "bg-red-100 text-red-700" },
                    { name: "Discrete Math", score: 68.1, att: "81%", risk: "Medium", color: "bg-amber-100 text-amber-700" },
                  ].map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900 not-italic">{item.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-slate-500 text-center">{item.score}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-slate-500 text-center">{item.att}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className={cn("px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest", item.color)}>{item.risk}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm bg-white overflow-hidden text-left flex flex-col">
          <CardHeader className="bg-[var(--color-primary)] text-white p-5">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-400" />
              <CardTitle className="text-base font-bold">Groups at Failure Risk</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex-1">
            <div className="divide-y divide-slate-100">
              {[
                { name: "Group 645C", reason: "High absence rate in Calculus", risk: "Critical", students: 12 },
                { name: "Group 638B", reason: "Common failure in Logic gate module", risk: "Elevated", students: 8 },
                { name: "Group 640A", reason: "Missed deadline for lab reports", risk: "Low", students: 4 },
              ].map((group, idx) => (
                <div key={idx} className="p-5 hover:bg-slate-50 transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-base font-black text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">{group.name}</h4>
                    <span className={cn("text-[9px] font-black uppercase tracking-widest", group.risk === "Critical" ? "text-red-500" : group.risk === "Elevated" ? "text-amber-500" : "text-blue-500")}>{group.risk}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{group.reason}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase">
                      <Users className="h-3.5 w-3.5" /> {group.students} Affected
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 px-3 text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)] bg-[var(--color-primary)]/5">
                      Notify Tutor
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto p-4 border-t border-slate-50">
              <Button className="w-full h-11 bg-slate-50 border border-border text-slate-700 font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all">Generate Full Audit</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
