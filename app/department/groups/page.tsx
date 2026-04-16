"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, Search, Filter, Plus, UserCheck, BarChart3, ChevronRight } from "lucide-react";

export default function DeptGroups() {
  const groups = [
    { id: 1, name: "640A", specialty: "Computer Science", students: 24, semester: 6, status: "Active" },
    { id: 2, name: "640B", specialty: "Computer Science", students: 22, semester: 6, status: "Active" },
    { id: 3, name: "638C", specialty: "Information Technology", students: 26, semester: 8, status: "Active" },
    { id: 4, name: "645A", specialty: "Software Engineering", students: 20, semester: 4, status: "Active" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1 text-left">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Academic Groups</h1>
          <p className="text-slate-500 font-medium">Manage student cohorts and monitor branch performance</p>
        </div>
        <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm">
          <Plus className="h-4 w-4" /> Create Group
        </Button>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-border shadow-sm bg-white">
        <div className="relative w-full md:w-96">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Search groups..." className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-border rounded-lg text-sm focus:ring-1 focus:ring-[var(--color-primary)] outline-none" />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest gap-2 bg-white">
            <Filter className="h-4 w-4" /> Specialty
          </Button>
          <div className="h-6 w-[1px] bg-slate-200 mx-1"></div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active: {groups.length}</p>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((item) => (
          <Card key={item.id} className="border-border shadow-sm hover:border-[var(--color-primary)] transition-all group bg-white overflow-hidden text-left">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">{item.name}</h3>
                  <p className="text-xs font-bold text-slate-500 mt-1">{item.specialty}</p>
                </div>
                <div className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-green-200">{item.status}</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Semester</span>
                  <span className="text-sm font-black text-slate-700">{item.semester}th</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Student Count</span>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-slate-300" />
                    <span className="text-sm font-black text-slate-700">{item.students}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Assigned Tutor</span>
                  <span className="text-sm font-bold text-slate-600">Unassigned</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 h-11 bg-slate-50 border border-border text-slate-600 font-bold tracking-tight hover:bg-[var(--color-primary)] hover:text-white transition-all text-xs">View Students</Button>
                <Button variant="outline" className="h-11 border-border px-3 hover:bg-slate-50">
                  <BarChart3 className="h-4 w-4 text-slate-400" />
                </Button>
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
