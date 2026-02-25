"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, Clock, MapPin, AlertTriangle, FileText, ChevronRight, Download, Award, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StudentExams() {
  const upcomingExams = [
    { id: 1, subject: 'Software Engineering', date: 'March 12, 2026', time: '10:00', duration: '90m', room: 'Arena-B', type: 'Kollekvium II', status: 'Scheduled' },
    { id: 2, subject: 'Database Systems', date: 'March 15, 2026', time: '14:30', duration: '120m', room: 'Lab-104', type: 'Final Exam', status: 'Scheduled' },
  ];

  const examResults = [
    { id: 101, subject: 'Linear Algebra', date: 'Feb 10, 2026', score: 24, max: 30, type: 'Kollekvium I', result: 'Passed' },
    { id: 102, subject: 'Physics II', date: 'Feb 12, 2026', score: 18, max: 30, type: 'Kollekvium I', result: 'Passed' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Examination Hub</h1>
        <p className="text-slate-500 font-medium">Monitor upcoming exam schedules, seat assignments, and historical results</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-6">
            <Card className="border-border shadow-sm bg-white overflow-hidden flex flex-col">
               <CardHeader className="bg-slate-50 border-b border-border flex flex-row items-center justify-between p-4 px-6">
                  <div className="flex items-center gap-2">
                     <Calendar className="h-5 w-5 text-slate-400" />
                     <CardTitle className="text-lg font-bold">Upcoming Assessments</CardTitle>
                  </div>
                  <Button variant="outline" size="sm" className="h-8 bg-white text-[10px] font-black uppercase tracking-widest gap-2">
                     <Download className="h-4 w-4" /> Exam Permit
                  </Button>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                     {upcomingExams.map((exam) => (
                        <div key={exam.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50 transition-colors group">
                           <div className="flex items-center gap-6">
                              <div className="size-16 rounded-3xl bg-slate-900 text-white flex flex-col items-center justify-center shrink-0 shadow-lg group-hover:bg-[var(--color-primary)] transition-colors">
                                 <span className="text-[10px] font-black uppercase tracking-tighter opacity-70">MAR</span>
                                 <span className="text-2xl font-black leading-none">{exam.date.split(' ')[1].replace(',', '')}</span>
                              </div>
                              <div>
                                 <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[9px] font-black text-[var(--color-primary)] bg-[var(--color-primary)]/5 px-2 py-0.5 rounded-full border border-[var(--color-primary)]/10 uppercase tracking-widest">{exam.type}</span>
                                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{exam.status}</span>
                                 </div>
                                 <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-[var(--color-primary)] transition-colors">{exam.subject}</h3>
                                 <div className="flex flex-wrap items-center gap-4 mt-2">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                       <Clock className="h-3.5 w-3.5" /> {exam.time} ({exam.duration})
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                       <MapPin className="h-3.5 w-3.5" /> Room {exam.room}
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <Button className="h-11 bg-white border border-border text-slate-700 font-black uppercase text-[10px] tracking-widest px-8 hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-sm">
                              Hall Entry Details
                           </Button>
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>

            <Card className="border-border shadow-sm bg-white overflow-hidden flex flex-col">
               <CardHeader className="bg-slate-50/50 border-b border-border p-4 px-6">
                  <div className="flex items-center gap-2">
                     <Award className="h-5 w-5 text-slate-400" />
                     <CardTitle className="text-lg font-bold">Historical Results</CardTitle>
                  </div>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="overflow-x-auto text-left">
                     <table className="min-w-full divide-y divide-border">
                        <thead className="bg-slate-50/30">
                           <tr>
                              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Subject</th>
                              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Date</th>
                              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Score</th>
                              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Outcome</th>
                           </tr>
                        </thead>
                           <tbody className="divide-y divide-border bg-white">
                           {examResults.map((result) => (
                              <tr key={result.id} className="hover:bg-slate-50 transition-colors">
                                 <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex flex-col">
                                       <span className="text-sm font-bold text-slate-900 not-italic">{result.subject}</span>
                                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{result.type}</span>
                                    </div>
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap text-center text-xs font-bold text-slate-500">{result.date}</td>
                                 <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <span className="text-sm font-black text-[var(--color-primary)]">{result.score} / {result.max}</span>
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <span className="text-[10px] font-black text-green-600 bg-green-50 px-2.5 py-1 rounded-full uppercase tracking-widest border border-green-100">{result.result}</span>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </CardContent>
            </Card>
         </div>

         <div className="space-y-6">
            <Card className="border-border shadow-sm bg-slate-900 text-white overflow-hidden">
               <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="size-16 rounded-3xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                     <ShieldCheck className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-black">Exam Preparation</h4>
                  <p className="text-xs text-slate-400 mt-2 font-medium leading-relaxed mb-8">
                     Ensure you have your physical student ID and the digital exam permit downloaded for scanning at the hall entrance.
                  </p>
                  <Button className="w-full h-12 bg-white text-slate-900 font-black uppercase text-[11px] tracking-widest hover:bg-slate-50 shadow-xl border-none">
                     Rules of Conduct
                  </Button>
               </CardContent>
            </Card>

            <Card className="border-border shadow-sm bg-amber-50 border-amber-100 p-6 flex gap-4 text-left">
               <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0" />
               <div className="space-y-1">
                  <h4 className="text-sm font-black text-amber-900 leading-tight">Appeal Window</h4>
                  <p className="text-[11px] text-amber-700 font-medium leading-relaxed">
                     Appeals for Kollekvium results must be submitted within 72 hours of score publication. Visit the Requests module to file an appeal.
                  </p>
               </div>
            </Card>

            <Card className="border-border shadow-sm bg-white overflow-hidden">
               <CardHeader className="bg-slate-50/50 border-b border-border">
                  <CardTitle className="text-sm font-bold">Materials & Syllabi</CardTitle>
               </CardHeader>
               <CardContent className="p-4 space-y-3">
                  {['Software Eng. Final Prep', 'Database Normalization Guide', 'Calculus II Practice Set'].map((item, idx) => (
                     <div key={idx} className="flex justify-between items-center p-3 rounded-xl border border-slate-100 hover:border-[var(--color-primary)] transition-all cursor-pointer group">
                        <div className="flex items-center gap-3">
                           <FileText className="h-4 w-4 text-slate-300 group-hover:text-[var(--color-primary)]" />
                           <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900">{item}</span>
                        </div>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-200 group-hover:text-[var(--color-primary)]" />
                     </div>
                  ))}
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
