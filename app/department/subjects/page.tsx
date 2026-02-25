"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BookOpen, Search, Filter, Plus, Users, GraduationCap, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DeptSubjects() {
  const subjects = [
    { id: 1, name: 'Software Engineering', code: 'CS301', credits: 6, teachers: 3, groups: 8, status: 'Active' },
    { id: 2, name: 'Database Systems', code: 'CS302', credits: 6, teachers: 2, groups: 6, status: 'Active' },
    { id: 3, name: 'Computer Networks', code: 'CS305', credits: 5, teachers: 2, groups: 4, status: 'Active' },
    { id: 4, name: 'Artificial Intelligence', code: 'CS410', credits: 6, teachers: 1, groups: 2, status: 'Pending' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1 text-left">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Subject Catalog</h1>
          <p className="text-slate-500 font-medium">Manage department curriculum and subject mappings</p>
        </div>
        <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm">
           <Plus className="h-4 w-4" /> Add New Subject
        </Button>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-border shadow-sm bg-white">
        <div className="relative w-full md:w-96">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search subjects by name or code..." 
            className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-border rounded-lg text-sm focus:ring-1 focus:ring-[var(--color-primary)] outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest gap-2 bg-white">
             <Filter className="h-4 w-4" /> Filter
          </Button>
          <div className="h-6 w-[1px] bg-slate-200 mx-1"></div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Subjects: {subjects.length}</p>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((item) => (
          <Card key={item.id} className="border-border shadow-sm hover:border-[var(--color-primary)] transition-all group bg-white overflow-hidden text-left">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <span className="text-[10px] font-black text-[var(--color-primary)] uppercase tracking-widest bg-[var(--color-primary)]/5 px-2 py-0.5 rounded-full border border-[var(--color-primary)]/10">{item.code}</span>
                    <h3 className="text-2xl font-black text-slate-900 mt-2 tracking-tight group-hover:text-[var(--color-primary)] transition-colors">{item.name}</h3>
                    <p className="text-sm font-bold text-slate-400 mt-0.5">{item.credits} Academic Credits</p>
                 </div>
                 <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                    item.status === 'Active' ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                 )}>
                    {item.status}
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                 <div className="p-4 rounded-2xl bg-slate-50 border border-border flex items-center gap-4">
                    <div className="bg-white p-2.5 rounded-xl shadow-sm">
                       <Users className="h-5 w-5 text-slate-400" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Teachers</p>
                       <p className="text-xl font-black text-slate-700">{item.teachers}</p>
                    </div>
                 </div>
                 <div className="p-4 rounded-2xl bg-slate-50 border border-border flex items-center gap-4">
                    <div className="bg-white p-2.5 rounded-xl shadow-sm">
                       <GraduationCap className="h-5 w-5 text-slate-400" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Groups</p>
                       <p className="text-xl font-black text-slate-700">{item.groups}</p>
                    </div>
                 </div>
              </div>

              <div className="flex gap-3">
                 <Button className="flex-1 h-12 bg-[var(--color-primary)] text-white font-bold tracking-tight shadow-md hover:opacity-90">
                    Manage Curriculum
                 </Button>
                 <Button variant="outline" className="h-12 w-12 border-border p-0 flex items-center justify-center hover:bg-slate-50">
                    <ArrowUpRight className="h-5 w-5 text-slate-400" />
                 </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
