"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Building2, Users, Search, Filter, Plus, Mail } from 'lucide-react';

export default function AdminDepartments() {
  const departments = [
    { id: 1, name: 'Computer Science', faculty: 'Engineering', head: 'John Doe', staff: 42, students: 850 },
    { id: 2, name: 'Mechanical Engineering', faculty: 'Engineering', head: 'Jane Smith', staff: 35, students: 600 },
    { id: 3, name: 'Digital Media', faculty: 'Arts & Design', head: 'Robert Brown', staff: 28, students: 420 },
    { id: 4, name: 'Strategic Management', faculty: 'Business', head: 'Alice Wilson', staff: 20, students: 380 },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">University Departments</h1>
          <p className="text-slate-500 font-medium">Manage subdivisions and appoint department heads for academic coordination</p>
        </div>
        <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm px-6">
           <Plus className="h-4 w-4" /> Create Department
        </Button>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-border shadow-sm bg-white">
        <div className="relative w-full md:w-96">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Filter departments..." 
            className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-border rounded-lg text-sm focus:ring-1 focus:ring-[var(--color-primary)] outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest gap-2 bg-white">
             <Filter className="h-4 w-4" /> Faculty Filter
          </Button>
          <div className="h-6 w-[1px] bg-slate-200 mx-1"></div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total: {departments.length}</p>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {departments.map((d) => (
            <Card key={d.id} className="border-border shadow-sm bg-white hover:border-[var(--color-primary)] transition-all group overflow-hidden">
               <div className="p-6">
                  <div className="flex gap-4 mb-6">
                     <div className="bg-slate-100 p-3 rounded-2xl group-hover:bg-[var(--color-primary)]/5 transition-colors">
                        <Building2 className="h-6 w-6 text-slate-400 group-hover:text-[var(--color-primary)]" />
                     </div>
                     <div>
                        <h3 className="text-lg font-black text-slate-900 leading-tight mb-1">{d.name}</h3>
                        <span className="text-[9px] font-black text-[var(--color-primary)] uppercase tracking-widest bg-[var(--color-primary)]/5 px-2 py-0.5 rounded-full border border-[var(--color-primary)]/10">{d.faculty}</span>
                     </div>
                  </div>

                  <div className="space-y-4 mb-8">
                     <div className="flex items-center justify-between py-2 border-b border-slate-50">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Department Head</span>
                        <div className="flex items-center gap-2">
                           <span className="text-sm font-black text-slate-700">{d.head}</span>
                           <Mail className="h-3.5 w-3.5 text-slate-300" />
                        </div>
                     </div>
                     <div className="flex items-center justify-between py-2 border-b border-slate-50">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Teaching Staff</span>
                        <span className="text-sm font-black text-slate-700">{d.staff}</span>
                     </div>
                     <div className="flex items-center justify-between py-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Students</span>
                        <span className="text-sm font-black text-[var(--color-primary)]">{d.students}</span>
                     </div>
                  </div>

                  <div className="flex gap-2">
                     <Button className="flex-1 h-10 bg-slate-50 border border-border text-slate-600 font-bold tracking-tight hover:bg-[var(--color-primary)] hover:text-white transition-all text-xs">
                        Edit Head
                     </Button>
                     <Button className="flex-1 h-10 bg-[var(--color-primary)] text-white font-bold tracking-tight text-xs hover:opacity-90">
                        Analytics
                     </Button>
                  </div>
               </div>
            </Card>
         ))}
      </div>
    </div>
  );
}
