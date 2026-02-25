"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { School, Users, BookOpen, Plus, Search, MoreVertical, Globe, Building2 } from 'lucide-react';

export default function AdminFaculties() {
  const faculties = [
    { id: 1, name: 'Faculty of Engineering', depts: 5, students: 1240, dean: 'Dr. Sarah Connor', color: 'bg-blue-600' },
    { id: 2, name: 'Faculty of Arts & Design', depts: 3, students: 840, dean: 'Prof. Julian Moore', color: 'bg-purple-600' },
    { id: 3, name: 'Faculty of Computer Science', depts: 4, students: 1560, dean: 'Dr. Alan Turing', color: 'bg-emerald-600' },
    { id: 4, name: 'Faculty of Business', depts: 3, students: 920, dean: 'Dr. Peter Drucker', color: 'bg-amber-600' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Faculties Management</h1>
          <p className="text-slate-500 font-medium">Global university structure: Add and organize core academic branches</p>
        </div>
        <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm px-6">
           <Plus className="h-4 w-4" /> Add New Faculty
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {faculties.map((f) => (
            <Card key={f.id} className="border-border shadow-md bg-white hover:shadow-xl transition-all group overflow-hidden">
               <div className="p-8">
                  <div className="flex justify-between items-start mb-10">
                     <div className="flex items-center gap-6">
                        <div className={`p-4 rounded-3xl text-white shadow-lg ${f.color}`}>
                           <School className="h-8 w-8" />
                        </div>
                        <div>
                           <h3 className="text-2xl font-black text-slate-900 tracking-tight">{f.name}</h3>
                           <div className="flex items-center gap-2 mt-1 py-1 px-3 bg-slate-50 rounded-lg border border-slate-100 w-fit">
                              <Building2 className="h-3.5 w-3.5 text-slate-400" />
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{f.dean}</span>
                           </div>
                        </div>
                     </div>
                     <Button variant="ghost" className="h-10 w-10 p-0 text-slate-300 hover:text-slate-600">
                        <MoreVertical className="h-5 w-5" />
                     </Button>
                  </div>

                  <div className="grid grid-cols-3 gap-6 mb-10">
                     <div className="flex flex-col text-left p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                           <Globe className="h-4 w-4 text-slate-400" />
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Departments</span>
                        </div>
                        <p className="text-2xl font-black text-slate-900">{f.depts}</p>
                     </div>
                     <div className="flex flex-col text-left p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                           <Users className="h-4 w-4 text-slate-400" />
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Students</span>
                        </div>
                        <p className="text-2xl font-black text-slate-900">{f.students}</p>
                     </div>
                     <div className="flex flex-col text-left p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                           <BookOpen className="h-4 w-4 text-slate-400" />
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Programs</span>
                        </div>
                        <p className="text-2xl font-black text-slate-900">{f.id * 3 + 2}</p>
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <Button className="flex-1 h-12 bg-white border border-slate-200 text-slate-700 font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-sm">
                        Department List
                     </Button>
                     <Button className="flex-1 h-12 bg-[var(--color-primary)] text-white font-bold shadow-md hover:translate-y-[-1px] transition-all">
                        Faculty Settings
                     </Button>
                  </div>
               </div>
            </Card>
         ))}
      </div>
    </div>
  );
}
