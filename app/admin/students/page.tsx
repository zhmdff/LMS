"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Users, Search, Filter, Plus, User, MoreVertical, GraduationCap, Mail, Phone, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminStudents() {
  const students = [
    { id: 'STU001', name: 'Alex Morgan', specialty: 'CS', group: '640A', gpa: 3.82, status: 'Active' },
    { id: 'STU002', name: 'Sarah Johnson', specialty: 'CS', group: '640A', gpa: 3.45, status: 'Active' },
    { id: 'STU003', name: 'Michael Chen', specialty: 'SWE', group: '638B', gpa: 3.92, status: 'Active' },
    { id: 'STU004', name: 'Jessica Parker', specialty: 'IT', group: '645C', gpa: 2.85, status: 'Probation' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Student Directory</h1>
          <p className="text-slate-500 font-medium">Universal database of all enrolled students: Manage status, records, and global filters</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="h-11 bg-white border-border text-slate-600 font-bold tracking-tight gap-2">
              <ExternalLink className="h-4 w-4" /> Import Excel
           </Button>
           <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm px-6">
              <Plus className="h-4 w-4" /> Enroll Student
           </Button>
        </div>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-border shadow-sm bg-white">
        <div className="relative w-full md:w-96">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by name, ID or group..." 
            className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-border rounded-lg text-sm focus:ring-1 focus:ring-[var(--color-primary)] outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest gap-2 bg-white">
             <Filter className="h-4 w-4" /> Filter Specialty
          </Button>
          <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest gap-2 bg-white">
             <Filter className="h-4 w-4" /> Status: All
          </Button>
          <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total: 4,289</span>
        </div>
      </Card>

      <Card className="border-border shadow-sm bg-white overflow-hidden">
         <div className="overflow-x-auto text-left">
            <table className="min-w-full divide-y divide-border">
               <thead className="bg-slate-50/50">
                  <tr>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Student Information</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Group</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">GPA</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-border bg-white">
                  {students.map((stu) => (
                     <tr key={stu.id} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center gap-4">
                              <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-400 border border-border group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                                 {stu.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div className="flex flex-col">
                                 <h4 className="text-sm font-bold text-slate-900 not-italic">{stu.name}</h4>
                                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stu.id} • {stu.specialty}</p>
                              </div>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-black text-slate-600 uppercase">
                           {stu.group}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                           <span className="text-sm font-black text-[var(--color-primary)]">{stu.gpa}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className={cn(
                              "px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest",
                              stu.status === 'Active' ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                           )}>{stu.status}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                           <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="sm" className="h-8 w-8 text-slate-300 hover:text-slate-600">
                                 <Mail className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 text-slate-300">
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
            <p className="text-[10px] font-bold text-slate-400">Security Note: Student records are encrypted and access is logged in system audit.</p>
            <div className="flex gap-2">
               <Button variant="outline" size="sm" className="h-8 bg-white text-[10px] font-black uppercase tracking-widest">Previous</Button>
               <Button variant="outline" size="sm" className="h-8 bg-white text-[10px] font-black uppercase tracking-widest">Next</Button>
            </div>
         </div>
      </Card>
    </div>
  );
}
