"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plus, Calendar, FileText, ChevronRight, User, Settings2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TeacherKollekvium() {
  const kollekviums = [
    { id: 1, title: 'Kollekvium #1', subject: 'Software Engineering', group: '640A', date: '15 Mar 2026', maxScore: 30, status: 'Draft' },
    { id: 2, title: 'Kollekvium #1', subject: 'Database Systems', group: '638C', date: '18 Mar 2026', maxScore: 30, status: 'Scheduled' },
    { id: 3, title: 'Intro Quiz', subject: 'Web Development', group: '640A', date: '20 Feb 2026', maxScore: 10, status: 'Completed' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1 text-left">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Kollekvium Center</h1>
          <p className="text-slate-500 font-medium">Create and manage standardized midterm examinations</p>
        </div>
        <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm">
           <Plus className="h-4 w-4" /> Create Kollekvium
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
           {kollekviums.map((item) => (
             <Card key={item.id} className="border-border shadow-sm bg-white overflow-hidden text-left hover:border-[var(--color-primary)] transition-all group">
                <div className="p-6">
                   <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-4">
                         <div className="bg-slate-50 text-slate-400 p-4 rounded-2xl border border-border group-hover:bg-[var(--color-primary)]/5 group-hover:text-[var(--color-primary)] transition-colors">
                            <FileText className="h-7 w-7" />
                         </div>
                         <div>
                            <div className="flex items-center gap-2 mb-1">
                               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.subject} • Group {item.group}</span>
                               <span className={cn(
                                  "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full",
                                  item.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                                  item.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
                               )}>
                                  {item.status}
                               </span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                            <div className="flex items-center gap-4 mt-2">
                               <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                                  <Calendar className="h-3.5 w-3.5" /> {item.date}
                               </div>
                               <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                               <div className="text-xs font-bold text-[var(--color-primary)]">Max Score: {item.maxScore} pts</div>
                            </div>
                         </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-10 w-10 p-0 text-slate-300 hover:text-[var(--color-primary)]">
                         <Settings2 className="h-5 w-5" />
                      </Button>
                   </div>

                   <div className="flex gap-3">
                      <Button className="flex-1 h-11 bg-slate-50 border border-border text-slate-600 font-bold tracking-tight hover:bg-[var(--color-primary)] hover:text-white transition-all text-xs">
                         {item.status === 'Completed' ? 'View Results' : 'Enter Scores'}
                      </Button>
                      <Button variant="outline" className="h-11 px-6 border-border text-slate-400 hover:bg-slate-50">
                         <ChevronRight className="h-4 w-4" />
                      </Button>
                   </div>
                </div>
             </Card>
           ))}
        </div>

        <div className="space-y-6">
           <Card className="border-border shadow-sm">
              <CardHeader className="bg-slate-50/50 border-b border-border text-left">
                 <CardTitle className="text-lg font-bold">Upcoming Exam Rules</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4 text-left">
                 <div className="flex gap-3">
                    <div className="size-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                       <Clock className="h-4 w-4" />
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                       Results must be entered within <span className="font-black text-slate-900">72 hours</span> after the exam date.
                    </p>
                 </div>
                 <div className="flex gap-3">
                    <div className="size-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                       <User className="h-4 w-4" />
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                       Total Kollekvium points account for <span className="font-black text-slate-900">30%</span> of the final grade.
                    </p>
                 </div>
              </CardContent>
           </Card>

           <Card className="border-border shadow-sm bg-slate-50/30">
              <CardContent className="p-6 text-center flex flex-col items-center">
                 <div className="size-16 rounded-3xl bg-white border border-border shadow-sm flex items-center justify-center mb-4">
                    <Calendar className="h-8 w-8 text-[var(--color-primary)]" />
                 </div>
                 <h4 className="text-sm font-bold text-slate-900">Schedule Examination</h4>
                 <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Notify the students and administration by scheduling the next kollekvium at least 7 days in advance.
                 </p>
                 <Button variant="outline" className="mt-6 w-full h-11 border-[var(--color-primary)] text-[var(--color-primary)] font-black uppercase text-[10px] tracking-widest hover:bg-[var(--color-primary)] hover:text-white">
                    Open Calendar
                 </Button>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}

function Clock({ className }: { className?: string }) {
  return <svg className={className} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}
