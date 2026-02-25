"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Clock, AlertCircle, FileStack } from 'lucide-react';

export default function StudentCurriculum() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Academic Curriculum</h1>
        <p className="text-slate-500 font-medium">Semester 6 • Total Credits Registered: 32</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <Card className="border-border shadow-sm overflow-hidden bg-white">
            <CardHeader className="border-b border-border bg-slate-50/50 flex flex-row items-center justify-between">
              <div className="text-left">
                <CardTitle className="text-lg font-bold">Spring Semester 2026</CardTitle>
                <p className="text-sm text-slate-500 font-medium mt-0.5">Registration Status: <span className="text-green-600 font-black uppercase">Approved</span></p>
              </div>
              <Button size="sm" variant="outline" className="gap-2">
                 <FileStack className="h-4 w-4" /> Download PDF
              </Button>
            </CardHeader>
            <CardContent className="p-0">
               <div className="overflow-x-auto text-left">
                  <table className="min-w-full divide-y divide-border">
                     <thead className="bg-slate-50/50">
                        <tr>
                           <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-left">Code</th>
                           <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-left">Subject Name</th>
                           <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-left">Credits</th>
                           <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-left">Type</th>
                           <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-left">Status</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-border bg-white">
                        {[
                           { code: 'CS301', name: 'Software Engineering', credits: 6, type: 'Major', status: 'Active' },
                           { code: 'CS302', name: 'Database Systems', credits: 6, type: 'Major', status: 'Active' },
                           { code: 'CS305', name: 'Artificial Intelligence', credits: 5, type: 'Elective', status: 'Active' },
                           { code: 'MAT201', name: 'Probability Theory (Retake)', credits: 5, type: 'Secondary', status: 'Retake', isRetake: true },
                           { code: 'ENG104', name: 'Academic English', credits: 4, type: 'University', status: 'Active' },
                           { code: 'GEN201', name: 'History of Art', credits: 6, type: 'Elective', status: 'Active' },
                        ].map((item, idx) => (
                           <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-slate-400 text-left">{item.code}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900 text-left">
                                 <div className="flex items-center gap-2">
                                    {item.name}
                                    {item.isRetake && <span className="bg-amber-100 text-amber-700 text-[9px] font-black uppercase px-2 py-0.5 rounded-full">Retake</span>}
                                 </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-600 text-left">{item.credits}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-600 text-left">{item.type}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-left">
                                 <div className="flex items-center gap-1.5 text-xs font-bold">
                                    {item.status === 'Active' ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Clock className="h-4 w-4 text-amber-500" />}
                                    <span className={item.status === 'Active' ? 'text-green-700' : 'text-amber-700'}>{item.status}</span>
                                 </div>
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
           <Card className="border-border shadow-sm">
              <CardHeader className="bg-slate-50/50 border-b border-border text-left">
                 <CardTitle className="text-base font-bold">Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                 <div className="flex justify-between items-end">
                    <div className="text-left">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Major Credits</p>
                       <p className="text-2xl font-black text-[var(--color-primary)]">12</p>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Elective</p>
                       <p className="text-2xl font-black text-slate-600">11</p>
                    </div>
                 </div>
                 <div className="pt-4 border-t border-slate-100 flex flex-col gap-1.5 text-left">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Credits</p>
                    <div className="flex items-baseline gap-2">
                       <span className="text-4xl font-black text-[var(--color-primary)]">32</span>
                       <span className="text-slate-400 font-bold">/ 240</span>
                    </div>
                 </div>
                 <Button className="w-full h-11 bg-[var(--color-primary)]">Modify Curriculum</Button>
              </CardContent>
           </Card>

           <Card className="border-border shadow-sm">
              <CardHeader className="bg-slate-50/50 border-b border-border text-left">
                 <CardTitle className="text-base font-bold">Archives</CardTitle>
              </CardHeader>
              <CardContent className="p-2 space-y-1">
                 {[
                   'Semester 5 (Fall 2025)',
                   'Semester 4 (Spring 2025)',
                   'Semester 3 (Fall 2024)',
                   'Semester 2 (Spring 2024)',
                   'Semester 1 (Fall 2023)',
                 ].map((sem, idx) => (
                    <button key={idx} className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                       <span>{sem}</span>
                       <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-[var(--color-primary)] transition-colors" />
                    </button>
                 ))}
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return <svg className={className} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"/></svg>;
}
