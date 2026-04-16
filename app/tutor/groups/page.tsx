"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, Search, Filter, BookOpen, GraduationCap, ChevronRight, User } from "lucide-react";

export default function TutorGroups() {
  const groups = [
    { id: 1, name: "640A", specialty: "Computer Science", students: 24, semester: 6, avgPerformance: 82 },
    { id: 2, name: "640B", specialty: "Computer Science", students: 22, semester: 6, avgPerformance: 78 },
    { id: 3, name: "640C", specialty: "Computer Science", students: 20, semester: 4, avgPerformance: 85 },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Managed Groups</h1>
        <p className="text-slate-500 font-medium">Overview of academic cohorts under your mentorship</p>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-border shadow-sm bg-white">
        <div className="relative w-full md:w-96">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Search groups..." className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-border rounded-lg text-sm focus:ring-1 focus:ring-[var(--color-primary)] outline-none" />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest gap-2 bg-white">
            <Filter className="h-4 w-4" /> All Semesters
          </Button>
          <div className="h-6 w-[1px] bg-slate-200 mx-1"></div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Groups: {groups.length}</p>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <Card key={group.id} className="border-border shadow-sm hover:border-[var(--color-primary)] transition-all group bg-white overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">{group.name}</h3>
                  <p className="text-xs font-bold text-slate-500 mt-1">{group.specialty}</p>
                </div>
                <div className="bg-[var(--color-primary)]/5 text-[var(--color-primary)] px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-[var(--color-primary)]/10">Semester {group.semester}</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Total Students</span>
                  <div className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-slate-300" />
                    <span className="text-sm font-black text-slate-700">{group.students}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Avg. Performance</span>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-3.5 w-3.5 text-slate-300" />
                    <span className="text-sm font-black text-slate-700">{group.avgPerformance}%</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight shadow-md hover:opacity-90">Student Records</Button>
                <Button variant="outline" className="h-11 border-border px-3 hover:bg-slate-50">
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
