"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BookOpen, User, MoreVertical, LayoutGrid, List, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function StudentClasses() {
  const activeClasses = [
    { id: 1, name: 'Software Engineering', teacher: 'Dr. James Smith', attendance: '14/18', score: 82, type: 'Lecture' },
    { id: 2, name: 'Database Management', teacher: 'Dr. Maria Garcia', attendance: '16/18', score: 94, type: 'Practice' },
    { id: 3, name: 'Artificial Intelligence', teacher: 'Prof. Robert Wilson', attendance: '15/15', score: 88, type: 'Lecture' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-1 text-left">
          <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">My Classes</h1>
          <p className="text-slate-500 font-medium">Active academic sessions for Spring Semester 2026</p>
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
        {activeClasses.map((item) => (
          <Card key={item.id} className="border-border shadow-sm hover:border-[var(--color-primary)] transition-all group bg-white overflow-hidden">
            <CardContent className="p-0">
               <div className="flex flex-col md:flex-row md:items-center">
                  {/* Left Section: Icon & Info */}
                  <div className="p-6 flex flex-1 items-center gap-6">
                     <div className="size-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl font-semibold text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all shadow-inner">
                        {item.name[0]}
                     </div>
                     <div className="text-left">
                        <div className="flex items-center gap-2 mb-1">
                           <span className="text-[10px] font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/5 px-2 py-0.5 rounded uppercase tracking-widest border border-[var(--color-primary)]/10">{item.type}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 leading-tight group-hover:translate-x-1 transition-transform">{item.name}</h3>
                        <div className="flex items-center gap-2 mt-1.5">
                           <User className="h-3.5 w-3.5 text-slate-300" />
                           <p className="text-sm text-slate-400 font-medium">{item.teacher}</p>
                        </div>
                     </div>
                  </div>

                  {/* Middle Section: Stats */}
                  <div className="px-6 py-4 md:py-0 flex items-center gap-8 border-t md:border-t-0 md:border-l border-slate-50">
                     <div className="flex flex-col text-left">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-2">Attendance</span>
                        <p className="text-lg font-semibold text-slate-700 leading-none">{item.attendance}</p>
                     </div>
                     <div className="h-8 w-[1px] bg-slate-100"></div>
                     <div className="flex flex-col text-left">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-2">Current Score</span>
                        <p className="text-lg font-semibold text-slate-700 leading-none">{item.score} / 100</p>
                     </div>
                  </div>

                  {/* Right Section: Actions */}
                  <div className="p-6 border-t md:border-t-0 md:border-l border-slate-50 bg-slate-50/30">
                     <Link href={`/student/classes/${item.id}`}>
                        <Button className="h-12 px-8 bg-[var(--color-primary)] text-white font-semibold uppercase text-[11px] tracking-widest shadow-xl hover:opacity-90 transition-all flex items-center gap-2 group/btn">
                           Enter Classroom
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
