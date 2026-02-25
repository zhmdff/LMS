"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BookOpen, Search, Filter, Plus, Clock, FileText, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminSubjects() {
  const subjects = [
    { id: 1, name: 'Software Engineering', code: 'CS301', category: 'Core Major', credits: 6, totalHours: 90, status: 'Active' },
    { id: 2, name: 'Database Systems', code: 'CS302', category: 'Core Major', credits: 6, totalHours: 90, status: 'Active' },
    { id: 3, name: 'Linear Algebra', code: 'MATH105', category: 'General Ed', credits: 5, totalHours: 75, status: 'Active' },
    { id: 4, name: 'Cyber Security', code: 'CS420', category: 'Elective', credits: 4, totalHours: 60, status: 'Maintenance' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Global Subject Registry</h1>
          <p className="text-slate-500 font-medium">Standardized course database: Define codes, descriptions, and universal credit weights</p>
        </div>
        <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm px-6">
           <Plus className="h-4 w-4" /> Create Course Entry
        </Button>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-border shadow-sm bg-white">
        <div className="relative w-full md:w-96">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by name, code or category..." 
            className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-border rounded-lg text-sm focus:ring-1 focus:ring-[var(--color-primary)] outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest gap-2 bg-white">
             {/* Category filter placeholder */}
             All Categories <ChevronDown className="h-4 w-4" />
          </Button>
          <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Count: 142 Entries</span>
        </div>
      </Card>

      <Card className="border-border shadow-sm bg-white overflow-hidden">
         <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
               <thead className="bg-slate-50/50">
                  <tr>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Course Details</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Category</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">ECTS Credits</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Total Hours</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Status</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-border bg-white">
                  {subjects.map((sub) => (
                     <tr key={sub.id} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center gap-4">
                              <div className="bg-slate-50 text-slate-400 p-2.5 rounded-xl border border-border group-hover:bg-[var(--color-primary)]/5 group-hover:text-[var(--color-primary)] transition-colors h-fit">
                                 <BookOpen className="h-5 w-5" />
                              </div>
                              <div>
                                 <p className="text-sm font-black text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">{sub.name}</p>
                                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{sub.code}</p>
                              </div>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">{sub.category}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-black text-slate-700">{sub.credits}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                           <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-500">
                             <Clock className="h-3.5 w-3.5" /> {sub.totalHours}H
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className={cn(
                              "px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border inline-flex items-center gap-1",
                              sub.status === 'Active' ? "bg-green-100 text-green-700 border-green-200" : "bg-amber-100 text-amber-700 border-amber-200"
                           )}>
                              <div className={cn("size-1.5 rounded-full", sub.status === 'Active' ? "bg-green-500" : "bg-amber-500")}></div>
                              {sub.status}
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                           <div className="flex items-center justify-end gap-2">
                              <Button variant="outline" size="sm" className="h-8 px-3 text-[10px] font-black uppercase tracking-widest border-border text-slate-600">
                                 <FileText className="h-4 w-4 mr-2" /> Syllabus
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-300">
                                 <MoreVertical className="h-4 w-4" />
                              </Button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className="p-4 bg-slate-50/50 border-t border-border flex justify-between items-center">
            <p className="text-[10px] font-bold text-slate-400">Locked Course Records: Only Admins can modify base course data</p>
         </div>
      </Card>
    </div>
  );
}
