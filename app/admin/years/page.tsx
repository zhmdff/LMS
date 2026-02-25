"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, Plus, CheckCircle2, AlertTriangle, ChevronRight, Lock, Unlock } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminAcademicYears() {
  const years = [
    { id: 1, name: '2025-2026', springStatus: 'Open', fallStatus: 'Completed', current: true },
    { id: 2, name: '2024-2025', springStatus: 'Archived', fallStatus: 'Archived', current: false },
    { id: 3, name: '2026-2027', springStatus: 'Planning', fallStatus: 'Planning', current: false },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Academic Timeline</h1>
          <p className="text-slate-500 font-medium">Configure academic years and lock/unlock registration semesters university-wide</p>
        </div>
        <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm px-6">
           <Plus className="h-4 w-4" /> Initialize New Year
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-4">
            {years.map((y) => (
               <Card key={y.id} className={cn(
                  "border-border shadow-sm transition-all group overflow-hidden bg-white text-left",
                  y.current ? "border-[var(--color-primary)] ring-1 ring-[var(--color-primary)]/10 shadow-lg" : "hover:border-slate-300"
               )}>
                  <div className="p-6">
                     <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-4">
                           <div className={cn(
                              "p-3 rounded-2xl border transition-colors",
                              y.current ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]" : "bg-slate-50 text-slate-400 border-border"
                           )}>
                              <Calendar className="h-6 w-6" />
                           </div>
                           <div>
                              <h3 className="text-2xl font-black text-slate-900 tracking-tight">{y.name}</h3>
                              {y.current && (
                                 <div className="flex items-center gap-1.5 mt-1">
                                    <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Active Academic Period</span>
                                 </div>
                              )}
                           </div>
                        </div>
                        <Button variant="ghost" size="sm" className="h-10 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[var(--color-primary)]">
                           History <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between group/sem">
                           <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Fall Semester</p>
                              <span className={cn(
                                 "text-sm font-black",
                                 y.fallStatus === 'Completed' ? "text-slate-600" : y.fallStatus === 'Archived' ? "text-slate-400" : "text-[var(--color-primary)]"
                              )}>{y.fallStatus}</span>
                           </div>
                           <Button variant="ghost" size="sm" className="size-10 p-0 rounded-xl bg-white border border-border text-slate-400 opacity-0 group-hover/sem:opacity-100 transition-opacity">
                              {y.fallStatus === 'Archived' ? <Lock className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
                           </Button>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between group/sem">
                           <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Spring Semester</p>
                              <span className={cn(
                                 "text-sm font-black",
                                 y.springStatus === 'Open' ? "text-green-600" : y.springStatus === 'Archived' ? "text-slate-400" : "text-slate-600"
                              )}>{y.springStatus}</span>
                           </div>
                           <Button variant="ghost" size="sm" className="size-10 p-0 rounded-xl bg-white border border-border text-slate-400 opacity-0 group-hover/sem:opacity-100 transition-opacity">
                              {y.springStatus === 'Open' ? <Unlock className="h-4 w-4 text-green-500" /> : <Lock className="h-4 w-4" />}
                           </Button>
                        </div>
                     </div>
                  </div>
               </Card>
            ))}
         </div>

         <div className="space-y-6">
            <Card className="border-border shadow-sm bg-slate-900 text-white overflow-hidden">
               <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                     <AlertTriangle className="h-6 w-6 text-amber-500" />
                     <h3 className="text-xl font-bold">Freeze Protocol</h3>
                  </div>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed mb-8">
                     Changing the active academic year will freeze all data modification for previous periods. Finalize all grades before proceeding.
                  </p>
                  <Button className="w-full h-12 bg-white text-slate-900 font-bold hover:bg-slate-50 shadow-lg">
                     New Year Wizard
                  </Button>
               </div>
            </Card>

            <Card className="border-border shadow-sm">
               <CardHeader className="bg-slate-50/50 border-b border-border text-left">
                  <CardTitle className="text-lg font-bold">Timeline Reminders</CardTitle>
               </CardHeader>
               <CardContent className="p-6 space-y-6 text-left">
                  <div className="flex gap-4">
                     <div className="size-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                     </div>
                     <div>
                        <p className="text-sm font-bold text-slate-900">Final Grade Deadline</p>
                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed">June 15, 2026 is the hard lock for Spring Semester grades.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <Calendar className="h-5 w-5" />
                     </div>
                     <div>
                        <p className="text-sm font-bold text-slate-900">Curriculum Sync</p>
                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Semester curricula are synced 30 days before start date.</p>
                     </div>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
