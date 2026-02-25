"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BookOpen, Search, Filter, Plus, GraduationCap, ArrowRight } from 'lucide-react';

export default function AdminSpecialties() {
  const specialties = [
    { id: 1, name: 'Computer Science', code: 'CS', faculty: 'Engineering', duration: '4 Years', groups: 12 },
    { id: 2, name: 'Software Engineering', code: 'SWE', faculty: 'Engineering', duration: '4 Years', groups: 8 },
    { id: 3, name: 'Information Technology', code: 'IT', faculty: 'Engineering', duration: '4 Years', groups: 6 },
    { id: 4, name: 'Digital Media Design', code: 'DMD', faculty: 'Arts & Design', duration: '4 Years', groups: 4 },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Academic Specialties</h1>
          <p className="text-slate-500 font-medium">Define degree programs and specialty codes for departmental assignment</p>
        </div>
        <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm px-6">
           <Plus className="h-4 w-4" /> Add Specialty
        </Button>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-border shadow-sm bg-white">
        <div className="relative w-full md:w-96">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search programs..." 
            className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-border rounded-lg text-sm focus:ring-1 focus:ring-[var(--color-primary)] outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest gap-2 bg-white">
             <Filter className="h-4 w-4" /> All Faculties
          </Button>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Total: {specialties.length}</p>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {specialties.map((s) => (
            <Card key={s.id} className="border-border shadow-sm bg-white hover:border-[var(--color-primary)] transition-all group overflow-hidden">
               <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                     <div className="flex gap-4">
                        <div className="bg-slate-50 text-slate-400 p-3 rounded-2xl group-hover:bg-[var(--color-primary)]/5 group-hover:text-[var(--color-primary)] transition-colors h-fit">
                           <BookOpen className="h-6 w-6" />
                        </div>
                        <div>
                           <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-black text-[var(--color-primary)] tracking-widest bg-[var(--color-primary)]/5 px-2 py-0.5 rounded-full uppercase">{s.code}</span>
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{s.faculty}</span>
                           </div>
                           <h3 className="text-xl font-black text-slate-900 leading-tight">{s.name}</h3>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                     <div className="p-3 rounded-xl bg-slate-50/50 border border-slate-100 flex flex-col gap-1">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Enrollment Cycle</span>
                        <span className="text-sm font-bold text-slate-700">{s.duration}</span>
                     </div>
                     <div className="p-3 rounded-xl bg-slate-50/50 border border-slate-100 flex flex-col gap-1">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Groups</span>
                        <div className="flex items-center gap-2">
                           <GraduationCap className="h-3.5 w-3.5 text-slate-300" />
                           <span className="text-sm font-bold text-slate-700">{s.groups}</span>
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-3">
                     <Button className="flex-1 h-11 bg-[var(--color-primary)] text-white font-bold text-xs tracking-tight shadow-sm hover:opacity-90">
                        Program Curriculum
                     </Button>
                     <Button variant="outline" className="h-11 border-border px-4 text-slate-600 hover:bg-slate-50">
                        <ArrowRight className="h-4 w-4" />
                     </Button>
                  </div>
               </div>
            </Card>
         ))}
      </div>
    </div>
  );
}
