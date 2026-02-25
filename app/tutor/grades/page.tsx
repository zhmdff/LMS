"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { School, Search, Filter, BookOpen, User, ChevronRight, BarChart3, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TutorGrades() {
  const topStudents = [
    { id: 1, name: 'Emily Watts', group: '640A', gpa: 3.96, rank: 1 },
    { id: 2, name: 'Michael Brown', group: '640A', gpa: 3.88, rank: 2 },
    { id: 3, name: 'Jessica Parker', group: '640B', gpa: 3.85, rank: 1 },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Academic Performance</h1>
        <p className="text-slate-500 font-medium">Monitor grade distribution and academic standing for students in your cohorts</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-6">
            <Card className="border-border shadow-sm bg-white overflow-hidden flex flex-col">
               <CardHeader className="bg-slate-50/50 border-b border-border p-4 px-6 flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                     <BarChart3 className="h-5 w-5 text-slate-400" />
                     <CardTitle className="text-lg font-bold">Performance Rankings</CardTitle>
                  </div>
                  <div className="relative w-48">
                     <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                     <input type="text" placeholder="Search student..." className="w-full pl-8 pr-3 py-1.5 bg-white border border-border rounded-lg text-[11px] outline-none" />
                  </div>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="overflow-x-auto">
                     <table className="min-w-full divide-y divide-border">
                        <thead className="bg-slate-50/30">
                           <tr>
                              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Rank</th>
                              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Student</th>
                              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Group</th>
                              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">GPA</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-white">
                           {topStudents.map((item) => (
                              <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-slate-300 group-hover:text-[var(--color-primary)]">#{item.rank}</td>
                                 <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                       <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-[10px] text-slate-400">
                                          {item.name.split(' ').map(n => n[0]).join('')}
                                       </div>
                                       <span className="text-sm font-bold text-slate-900 not-italic">{item.name}</span>
                                    </div>
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap text-center text-xs font-black text-slate-500 uppercase">{item.group}</td>
                                 <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-black text-[var(--color-primary)]">{item.gpa}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Card className="border-border shadow-sm bg-white p-6 text-left hover:border-[var(--color-primary)] transition-all group">
                  <div className="size-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                     <School className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 leading-tight">Exam Analysis</h3>
                  <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">
                     Detailed breakdown of semester exam results for all subjects in your managed groups.
                  </p>
                  <Button variant="ghost" className="mt-6 w-full justify-between h-10 px-4 bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]">
                     Full Report <ChevronRight className="h-4 w-4" />
                  </Button>
               </Card>
               <Card className="border-border shadow-sm bg-white p-6 text-left hover:border-[var(--color-primary)] transition-all group">
                  <div className="size-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                     <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 leading-tight">Retake Tracking</h3>
                  <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">
                     Identify students who failed core subjects and track their retake qualification status.
                  </p>
                  <Button variant="ghost" className="mt-6 w-full justify-between h-10 px-4 bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]">
                     Manage List <ChevronRight className="h-4 w-4" />
                  </Button>
               </Card>
            </div>
         </div>

         <div className="space-y-6">
            <Card className="border-border shadow-sm bg-white overflow-hidden text-left">
               <CardHeader className="bg-slate-50 border-b border-border flex flex-row items-center justify-between">
                  <CardTitle className="text-base font-bold">Group GPA Averages</CardTitle>
                  <Download className="h-4 w-4 text-slate-300" />
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                     {[
                        { name: 'Group 640A', gpa: 3.42, students: 24, status: 'Performing' },
                        { name: 'Group 640B', gpa: 3.12, students: 22, status: 'Average' },
                        { name: 'Group 640C', gpa: 3.58, students: 20, status: 'Top Tier' },
                     ].map((g, idx) => (
                        <div key={idx} className="p-5 hover:bg-slate-50 transition-colors group cursor-pointer">
                           <div className="flex justify-between items-start mb-2">
                              <h4 className="text-base font-black text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">{g.name}</h4>
                              <span className="text-xl font-black text-[var(--color-primary)]">{g.gpa}</span>
                           </div>
                           <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{g.students} Students</span>
                              <span className={cn(
                                 "text-[9px] font-black uppercase tracking-widest",
                                 g.status === 'Top Tier' ? "text-green-600" : g.status === 'Performing' ? "text-blue-600" : "text-amber-500"
                              )}>{g.status}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>

            <Card className="border-border shadow-sm bg-[var(--color-primary)] text-white">
               <CardContent className="p-6 text-center">
                  <div className="size-16 rounded-3xl bg-white/10 flex items-center justify-center mx-auto mb-4 border border-white/10">
                     <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-black">Performance Audit</h4>
                  <p className="text-xs text-slate-400 mt-2 font-medium leading-relaxed">
                     Generate a comprehensive academic standing report for all assigned groups to be presented at the faculty board meeting.
                  </p>
                  <Button className="mt-8 w-full h-12 bg-white text-[var(--color-primary)] font-black uppercase tracking-widest text-[11px] hover:bg-slate-50 shadow-xl">Generate Board Export</Button>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
