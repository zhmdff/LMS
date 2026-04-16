"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, LayoutGrid, List, ChevronRight, Bookmark } from "lucide-react";
import Link from "next/link";

export default function TeacherClasses() {
  const classes = [
    { id: 1, name: "Software Engineering", group: "640A", students: 24, type: "Lecture", attendance: "14/18", avgScore: 82 },
    { id: 2, name: "Database Systems", group: "638C", students: 26, type: "Practice", attendance: "16/18", avgScore: 91 },
    { id: 3, name: "Data Structures", group: "641B", students: 22, type: "Lecture", attendance: "12/15", avgScore: 78 },
    { id: 4, name: "Web Development", group: "640A", students: 18, type: "Practice", attendance: "18/18", avgScore: 94 },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-1 text-left">
          <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">Assigned Classes</h1>
          <p className="text-slate-500 font-medium">Active groups for the current academic semester</p>
        </div>
        <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-lg h-fit">
          <Button variant="ghost" size="sm" className="h-8 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            <LayoutGrid className="h-4 w-4 mr-2" /> Grid
          </Button>
          <Button variant="ghost" size="sm" className="bg-white shadow-sm h-8 px-3 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            <List className="h-4 w-4 mr-2" /> List
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {classes.map((item) => (
          <Card key={item.id} className="border-border shadow-sm hover:border-[var(--color-primary)] transition-all group bg-white overflow-hidden">
            <CardContent className="p-0 text-left">
              <div className="flex flex-col md:flex-row md:items-center">
                {/* Left Section: Icon & Info */}
                <div className="p-6 flex flex-1 items-center gap-6">
                  <div className="size-16 rounded-2xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 flex items-center justify-center text-3xl font-semibold text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all shadow-inner">{item.name[0]}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 leading-tight group-hover:translate-x-1 transition-transform tracking-tight">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <Users className="h-3.5 w-3.5 text-slate-300" />
                      <p className="text-sm text-slate-500 font-semibold uppercase">
                        Group {item.group} • <span className="text-slate-400 font-medium">{item.students} Students</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Middle Section: Stats */}
                <div className="px-6 py-4 md:py-0 flex items-center gap-8 border-t md:border-t-0 md:border-l border-slate-50">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-2 text-left">Attendance</span>
                    <p className="text-lg font-semibold text-slate-700 leading-none">{item.attendance}</p>
                  </div>
                  <div className="h-8 w-[1px] bg-slate-100"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-2 text-left">Current Score</span>
                    <p className="text-lg font-semibold text-slate-700 leading-none">{item.avgScore} / 100</p>
                  </div>
                </div>

                {/* Right Section: Actions */}
                <div className="p-6 border-t md:border-t-0 md:border-l border-slate-50 bg-slate-50/5">
                  <Link href={`/teacher/classes/${item.id}`}>
                    <Button className="h-12 px-8 bg-white border border-border text-[var(--color-primary)] font-semibold uppercase text-[11px] tracking-widest shadow-sm hover:bg-[var(--color-primary)] hover:text-white transition-all flex items-center gap-2 group/btn">
                      Open Class Journal
                      <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
