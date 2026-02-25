"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BookOpen, FileCheck, AlertCircle, Plus, LayoutGrid, Calendar, ChevronRight } from 'lucide-react';

export default function DeptCurriculum() {
  const semesters = [
    { num: 1, subjects: 6, credits: 30, status: 'Active' },
    { num: 2, subjects: 6, credits: 30, status: 'Active' },
    { num: 3, subjects: 5, credits: 28, status: 'Active' },
    { num: 4, subjects: 6, credits: 32, status: 'Draft' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1 text-left">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Curriculum Management</h1>
          <p className="text-slate-500 font-medium">Define subject sequences across semesters for departmental specialties</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="h-11 border-border font-bold tracking-tight gap-2 bg-white text-slate-600 px-6">
              <BookOpen className="h-4 w-4" /> Specialty: CS
           </Button>
           <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm px-6">
              <Plus className="h-4 w-4" /> Add Master Plan
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {semesters.map((sem) => (
            <Card key={sem.num} className="border-border shadow-sm bg-white overflow-hidden text-left hover:border-[var(--color-primary)] transition-all group">
               <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                     <div className="bg-[var(--color-primary)]/5 text-[var(--color-primary)] size-12 rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                        {sem.num}
                     </div>
                     <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${
                        sem.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                     }`}>
                        {sem.status}
                     </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 leading-tight">Semester {sem.num}</h3>
                  <div className="space-y-4 mt-6">
                     <div className="flex justify-between items-center py-2 border-b border-slate-50">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subjects</span>
                        <span className="text-sm font-black text-slate-700">{sem.subjects}</span>
                     </div>
                     <div className="flex justify-between items-center py-2 border-b border-slate-50">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Credits</span>
                        <div className="flex items-center gap-1.5 font-black text-slate-700">
                           <LayoutGrid className="h-3.5 w-3.5 text-slate-300" />
                           <span className="text-sm">{sem.credits}</span>
                        </div>
                     </div>
                  </div>
                  <Button className="w-full mt-6 h-11 bg-slate-50 border border-border text-slate-600 font-bold tracking-tight hover:bg-[var(--color-primary)] hover:text-white transition-all text-xs">
                     Edit Subjects
                  </Button>
               </div>
            </Card>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <Card className="lg:col-span-2 border-border shadow-sm bg-white overflow-hidden text-left">
            <CardHeader className="bg-slate-50/50 border-b border-border flex flex-row items-center justify-between p-4 px-6">
               <div className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-emerald-500" />
                  <CardTitle className="text-lg font-bold">Curriculum Validation Rules</CardTitle>
               </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-border">
                     <p className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3">Credit Limits</p>
                     <p className="text-xs text-slate-500 leading-relaxed font-medium">Standard undergraduate semesters cannot exceed 32 credits without rectorate approval.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-border">
                     <p className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3">Prerequisites</p>
                     <p className="text-xs text-slate-500 leading-relaxed font-medium">Core STEM subjects must be sequence-mapped. Ensure CS101 is completed before CS201.</p>
                  </div>
               </div>
               <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="bg-white/10 p-2.5 rounded-lg">
                        <Calendar className="h-5 w-5 text-white" />
                     </div>
                     <div>
                        <p className="text-sm font-bold">Global Curriculum Sync</p>
                        <p className="text-[10px] text-slate-400 font-medium">Last automated alignment check: 2 hours ago</p>
                     </div>
                  </div>
                  <Button size="sm" className="bg-white text-slate-900 font-bold">Perform Check</Button>
               </div>
            </CardContent>
         </Card>

         <Card className="border-border shadow-sm bg-white">
            <CardHeader className="bg-slate-50/50 border-b border-border text-left">
               <CardTitle className="text-base font-bold">Recent Updates</CardTitle>
            </CardHeader>
            <CardContent className="p-2">
               {[
                  { msg: 'Added "Cloud Computing" to Semester 8', user: 'Admin' },
                  { msg: 'Modified Credits for "Linear Algebra"', user: 'DeptHead' },
                  { msg: 'Archived 2024 Course Plans', user: 'System' },
               ].map((log, idx) => (
                  <div key={idx} className="p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors flex items-center justify-between group">
                     <div className="text-left">
                        <p className="text-xs font-bold text-slate-900">{log.msg}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">Changed by {log.user}</p>
                     </div>
                     <ChevronRight className="h-4 w-4 text-slate-200 group-hover:text-slate-400" />
                  </div>
               ))}
               <Button variant="ghost" className="w-full h-12 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[var(--color-primary)]">
                  Full Audit History
               </Button>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
