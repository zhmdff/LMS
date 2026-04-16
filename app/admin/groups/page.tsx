"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, Search, Filter, Plus, UserCheck, LayoutGrid, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminGroups() {
  const groups = [
    { id: 1, name: "640A", specialty: "Computer Science", students: 24, semester: 6, tutor: "Dr. Emily Watson" },
    { id: 2, name: "640B", specialty: "Computer Science", students: 22, semester: 6, tutor: "Prof. Robert Miller" },
    { id: 3, name: "638C", specialty: "Information Technology", students: 26, semester: 8, tutor: "Dr. Sarah Smith" },
    { id: 4, name: "645A", specialty: "Software Engineering", students: 20, semester: 4, tutor: "Unassigned" },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">University Groups</h1>
          <p className="text-slate-500 font-medium">Global view of all cohorts: Manage formation, tutor assignment, and graduation</p>
        </div>
        <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm px-6">
          <Plus className="h-4 w-4" /> Create New Group
        </Button>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-border shadow-sm bg-white">
        <div className="relative w-full md:w-96">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Search groups by code or specialty..." className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-border rounded-lg text-sm focus:ring-1 focus:ring-[var(--color-primary)] outline-none" />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest gap-2 bg-white">
            <Filter className="h-4 w-4" /> Filter Semester
          </Button>
          <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest gap-2 bg-white">
            <Filter className="h-4 w-4" /> All Specialties
          </Button>
        </div>
      </Card>

      <Card className="border-border shadow-sm bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Group Code</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Specialty Program</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Semester</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Students</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Assigned Tutor</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {groups.map((group) => (
                <tr key={group.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap text-lg font-black text-[var(--color-primary)]">{group.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-700">{group.specialty}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="bg-slate-100 text-slate-600 text-[10px] font-black px-2 py-0.5 rounded-full border border-slate-200">{group.semester}th</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-black text-slate-500">{group.students}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className={cn("size-6 rounded-full flex items-center justify-center text-[8px] font-black text-white", group.tutor === "Unassigned" ? "bg-slate-300" : "bg-emerald-500")}>
                        {group.tutor === "Unassigned"
                          ? "?"
                          : group.tutor
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                      </div>
                      <span className={cn("text-xs font-bold", group.tutor === "Unassigned" ? "text-slate-400" : "text-slate-700")}>{group.tutor}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-300 hover:text-slate-600">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-slate-50/50 border-t border-border flex justify-between items-center">
          <p className="text-[10px] font-bold text-slate-400">Showing {groups.length} active cohorts found in system</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-8 bg-white text-[10px] font-black uppercase tracking-widest">
              Previous
            </Button>
            <Button variant="outline" size="sm" className="h-8 bg-white text-[10px] font-black uppercase tracking-widest">
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
