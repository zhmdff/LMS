"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { UserPlus, UserCheck, Search, Filter, Mail, Phone, BookOpen } from 'lucide-react';

export default function DeptAssignTeachers() {
  const assignments = [
    { id: 1, teacher: 'Dr. James Smith', subject: 'Software Engineering', groups: ['640A', '640B'], load: '18/20 hrs', status: 'Assigned' },
    { id: 2, teacher: 'Dr. Maria Garcia', subject: 'Database Systems', groups: ['638C', '639A'], load: '14/20 hrs', status: 'Assigned' },
    { id: 3, teacher: 'Prof. Robert Wilson', subject: 'Data Structures', groups: ['641B'], load: '12/20 hrs', status: 'Assigned' },
    { id: 4, teacher: 'Dr. Linda Taylor', subject: 'Unassigned', groups: [], load: '0/20 hrs', status: 'Available' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Faculty Assignment</h1>
        <p className="text-slate-500 font-medium">Assign instructors to subjects and manage teaching workloads</p>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-border shadow-sm bg-white">
        <div className="relative w-full md:w-96">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search faculty by name..." 
            className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-border rounded-lg text-sm focus:ring-1 focus:ring-[var(--color-primary)] outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest gap-2 bg-white">
             <Filter className="h-4 w-4" /> Load Filter
          </Button>
          <Button className="h-10 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm text-xs px-6">
             <UserPlus className="h-4 w-4" /> Add Teacher
          </Button>
        </div>
      </Card>

      <div className="space-y-4">
        {assignments.map((item) => (
          <Card key={item.id} className="border-border shadow-sm bg-white overflow-hidden text-left hover:border-[var(--color-primary)] transition-all group">
            <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
               <div className="flex items-center gap-5">
                  <div className="size-14 rounded-2xl bg-slate-100 flex items-center justify-center border border-border group-hover:bg-[var(--color-primary)]/5 transition-colors">
                     <UserCheck className="h-7 w-7 text-slate-400 group-hover:text-[var(--color-primary)]" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900">{item.teacher}</h3>
                     <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs font-bold text-slate-500 flex items-center gap-1"><Mail className="h-3 w-3" /> email@university.edu</span>
                        <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                        <span className="text-xs font-bold text-slate-500 flex items-center gap-1"><Phone className="h-3 w-3" /> +994 50 000 00 00</span>
                     </div>
                  </div>
               </div>

               <div className="flex flex-wrap items-center gap-12">
                  <div className="flex flex-col text-left">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject Mapping</span>
                     <div className="flex items-center gap-2 mt-1">
                        <BookOpen className="h-4 w-4 text-[var(--color-primary)]" />
                        <span className="text-sm font-bold text-slate-700">{item.subject}</span>
                     </div>
                  </div>
                  <div className="flex flex-col text-left">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Teaching Load</span>
                     <p className="text-sm font-bold text-slate-700 mt-1">{item.load}</p>
                  </div>
                  <div className="flex flex-col text-left">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Groups</span>
                     <div className="flex gap-1.5 mt-1">
                        {item.groups.length > 0 ? item.groups.map(g => (
                           <span key={g} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-md border border-slate-200">{g}</span>
                        )) : <span className="text-slate-300 text-[10px] font-bold">No groups</span>}
                     </div>
                  </div>
               </div>

               <Button className="h-11 px-8 bg-slate-50 border border-border text-slate-600 font-bold tracking-tight hover:bg-[var(--color-primary)] hover:text-white transition-all text-xs">
                  {item.status === 'Assigned' ? 'Edit Assignment' : 'Assign Subject'}
               </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
