"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BarChart3, PieChart, TrendingUp, Download, Search, Filter, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TeacherReports() {
  const performanceStats = [
    { subject: 'Software Engineering', avg: 84, failRate: '4%', attendance: '96%' },
    { subject: 'Database Systems', avg: 78, failRate: '12%', attendance: '88%' },
    { subject: 'Web Architecture', avg: 82, failRate: '8%', attendance: '92%' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Academic Analytics</h1>
          <p className="text-slate-500 font-medium">Comprehensive performance reports and distribution analytics for your assigned subjects</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="h-11 bg-white border-border text-slate-600 font-bold tracking-tight gap-2 shadow-sm px-6">
              <Download className="h-4 w-4" /> Export All Data
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left relative overflow-hidden group">
           <TrendingUp className="h-10 w-10 absolute -right-2 -bottom-2 text-slate-50 rotate-12 group-hover:text-emerald-500/5 transition-colors" />
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Faculty Avg. Score</p>
           <p className="text-3xl font-black text-[var(--color-primary)] tracking-tighter">82.4</p>
           <p className="text-[10px] font-bold text-emerald-600">+2.4 from last semester</p>
        </Card>
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left relative overflow-hidden group">
           <PieChart className="h-10 w-10 absolute -right-2 -bottom-2 text-slate-50 rotate-12 group-hover:text-blue-500/5 transition-colors" />
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg. Attendance</p>
           <p className="text-3xl font-black text-blue-600 tracking-tighter">91.8%</p>
           <p className="text-[10px] font-bold text-slate-400">Target: 95%</p>
        </Card>
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left relative overflow-hidden group">
           <BarChart3 className="h-10 w-10 absolute -right-2 -bottom-2 text-slate-50 rotate-12 group-hover:text-red-500/5 transition-colors" />
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fail Risk (QB)</p>
           <p className="text-3xl font-black text-red-600 tracking-tighter">14 Students</p>
           <p className="text-[10px] font-bold text-red-400">Requires Intervention</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <Card className="lg:col-span-2 border-border shadow-sm bg-white overflow-hidden flex flex-col">
            <CardHeader className="bg-slate-50 border-b border-border p-4 px-6 flex flex-row items-center justify-between">
               <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-slate-400" />
                  <CardTitle className="text-lg font-bold">Subject Performance Matrix</CardTitle>
               </div>
               <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="h-8 px-4 text-[10px] font-black uppercase tracking-widest bg-white">
                     <Filter className="h-3 w-3 mr-2" /> Current Semester
                  </Button>
               </div>
            </CardHeader>
            <CardContent className="p-0">
               <div className="overflow-x-auto text-left">
                  <table className="min-w-full divide-y divide-border">
                     <thead className="bg-slate-50/30">
                        <tr>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Avg. Score</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Attendance</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Fail Rate</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-border bg-white">
                        {performanceStats.map((stat, idx) => (
                           <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <span className="text-sm font-bold text-slate-900 not-italic">{stat.subject}</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                 <span className="text-sm font-black text-[var(--color-primary)]">{stat.avg}</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                 <span className="text-sm font-black text-slate-600">{stat.attendance}</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                 <span className={cn(
                                    "px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border",
                                    parseInt(stat.failRate) > 10 ? "bg-red-50 text-red-700 border-red-100" : "bg-green-50 text-green-700 border-green-100"
                                 )}>{stat.failRate}</span>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </CardContent>
         </Card>

         <div className="space-y-6">
            <Card className="border-border shadow-sm bg-[var(--color-primary)] text-white p-8 text-center flex flex-col items-center">
               <div className="size-16 rounded-3xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                  <GraduationCap className="h-8 w-8 text-white" />
               </div>
               <h4 className="text-xl font-black">Rank Distribution</h4>
               <p className="text-xs text-slate-400 mt-2 font-medium leading-relaxed mb-8">
                  Visualize the grade distribution across all your student groups to identify bell curve anomalies.
               </p>
               <Button className="w-full h-12 bg-white text-slate-900 font-black uppercase text-[11px] tracking-widest hover:bg-slate-50 shadow-xl border-none">
                  Generate Visual Chart
               </Button>
            </Card>

            <Card className="border-border shadow-sm bg-white overflow-hidden">
               <CardHeader className="bg-slate-50/50 border-b border-border">
                  <CardTitle className="text-sm font-bold">Performance Breakdown</CardTitle>
               </CardHeader>
               <CardContent className="p-6 space-y-4">
                  {[
                     { label: 'High Achievers (90+)', value: 24 },
                     { label: 'Passing (60-89)', value: 182 },
                     { label: 'At Risk (<60)', value: 14 },
                  ].map((item, idx) => (
                     <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-end">
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                           <span className="text-xs font-black text-[var(--color-primary)]">{item.value} Students</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                           <div className={cn(
                              "h-full rounded-full",
                              idx === 0 ? "bg-emerald-500" : idx === 1 ? "bg-blue-500" : "bg-red-500"
                           )} style={{ width: `${(item.value / 220) * 100}%` }}></div>
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
