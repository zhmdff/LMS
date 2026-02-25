"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, Search, Filter, AlertTriangle, CheckCircle2, MoreVertical, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TutorAttendance() {
  const atRiskStudents = [
    { id: 1, name: 'Alex Morgan', group: '640A', subject: 'Calculus I', hours: 14, limit: 18, risk: 'Critical' },
    { id: 2, name: 'Sarah Johnson', group: '640A', subject: 'Linear Algebra', hours: 10, limit: 18, risk: 'High' },
    { id: 3, name: 'Michael Chen', group: '640B', subject: 'Physics II', hours: 8, limit: 18, risk: 'Medium' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Attendance Monitoring</h1>
        <p className="text-slate-500 font-medium">Track absence thresholds and intervene for at-risk students in your groups</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <Card className="lg:col-span-2 border-border shadow-sm bg-white overflow-hidden flex flex-col">
            <CardHeader className="bg-slate-50/50 border-b border-border flex flex-row items-center justify-between p-4 px-6">
               <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <CardTitle className="text-lg font-bold">Students at Absence Risk</CardTitle>
               </div>
               <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 bg-white text-[10px] font-black uppercase">Export List</Button>
               </div>
            </CardHeader>
            <CardContent className="p-0">
               <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border">
                     <thead className="bg-slate-50/30">
                        <tr>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Student</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Subject</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Hours / Limit</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Risk Level</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-border bg-white">
                        {atRiskStudents.map((item) => (
                           <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <div className="flex flex-col">
                                    <span className="text-sm font-bold text-slate-900 not-italic">{item.name}</span>
                                    <span className="text-[10px] font-black text-slate-400 uppercase">{item.group}</span>
                                 </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-600">{item.subject}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-black text-[var(--color-primary)]">{item.hours} / {item.limit}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <span className={cn(
                                    "px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest",
                                    item.risk === 'Critical' ? "bg-red-100 text-red-700" : item.risk === 'High' ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"
                                 )}>
                                    {item.risk}
                                 </span>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </CardContent>
         </Card>

         <div className="space-y-6">
            <Card className="border-border shadow-sm bg-[var(--color-primary)] text-white">
               <CardContent className="p-6 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                     <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-white" />
                     </div>
                     <div>
                        <h3 className="text-xl font-black">Intervention Flow</h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Procedural Steps</p>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="flex gap-4">
                        <div className="size-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0">1</div>
                        <p className="text-xs text-slate-300 font-medium leading-relaxed">Notify students when they reach 50% of the absence limit.</p>
                     </div>
                     <div className="flex gap-4">
                        <div className="size-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0">2</div>
                        <p className="text-xs text-slate-300 font-medium leading-relaxed">Collect official documentation for excused absences.</p>
                     </div>
                     <div className="flex gap-4">
                        <div className="size-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0">3</div>
                        <p className="text-xs text-slate-300 font-medium leading-relaxed">Forward valid documents to the Admin for record unlock.</p>
                     </div>
                  </div>
                  <Button className="w-full h-11 bg-white text-[var(--color-primary)] font-bold shadow-xl hover:bg-slate-50">Correction Letter</Button>
               </CardContent>
            </Card>

            <Card className="border-border shadow-sm bg-white">
               <CardHeader className="bg-slate-50/50 border-b border-border text-left">
                  <CardTitle className="text-base font-bold">Group Attendance Avg</CardTitle>
               </CardHeader>
               <CardContent className="p-4 space-y-4 text-left">
                  {[
                     { name: 'Group 640A', avg: '92%' },
                     { name: 'Group 640B', avg: '88%' },
                     { name: 'Group 640C', avg: '95%' },
                  ].map((g, idx) => (
                     <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                           <span>{g.name}</span>
                           <span>{g.avg}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full bg-[var(--color-primary)] rounded-full" style={{ width: g.avg }}></div>
                        </div>
                     </div>
                  ))}
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
