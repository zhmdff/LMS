"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { History, Calendar, Award, ChevronRight, FileText } from 'lucide-react';

export default function StudentHistory() {
  const semesters = [
    { 
       id: 1, 
       name: 'Fall Semester 2025', 
       gpa: 3.75, 
       subjectsCount: 6,
       credits: 30,
       status: 'Completed',
       subjects: [
          { name: 'Data Structures', grade: 'A', score: 92 },
          { name: 'Discrete Mathematics', grade: 'B+', score: 88 },
          { name: 'Computer Architecture', grade: 'A-', score: 90 },
       ]
    },
    { 
       id: 2, 
       name: 'Spring Semester 2025', 
       gpa: 3.68, 
       subjectsCount: 5,
       credits: 28,
       status: 'Completed',
       subjects: [
          { name: 'Object Oriented Programming', grade: 'A', score: 95 },
          { name: 'Linear Algebra', grade: 'B', score: 82 },
       ]
    },
    { 
       id: 3, 
       name: 'Fall Semester 2024', 
       gpa: 3.92, 
       subjectsCount: 6,
       credits: 30,
       status: 'Completed',
       subjects: [
          { name: 'Introduction to Programming', grade: 'A+', score: 98 },
          { name: 'Calculus I', grade: 'A', score: 94 },
       ]
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Academic History</h1>
        <p className="text-slate-500 font-medium">Complete transcript of your educational journey at UniManage</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-4">
            {semesters.map((sem) => (
               <Card key={sem.id} className="border-border shadow-sm bg-white overflow-hidden text-left hover:border-[var(--color-primary)] transition-all group">
                  <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                     <div className="flex items-start gap-4">
                        <div className="bg-slate-50 text-slate-400 p-3 rounded-xl border border-border group-hover:bg-[var(--color-primary)]/5 group-hover:text-[var(--color-primary)] transition-colors">
                           <Calendar className="h-6 w-6" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-slate-900">{sem.name}</h3>
                           <p className="text-sm font-medium text-slate-500 mt-0.5">{sem.subjectsCount} Subjects • {sem.credits} Credits</p>
                           <div className="flex items-center gap-4 mt-3">
                              <div className="flex flex-col">
                                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Semester GPA</span>
                                 <span className="text-lg font-black text-[var(--color-primary)]">{sem.gpa}</span>
                              </div>
                              <div className="w-[1px] h-8 bg-slate-100 mx-2"></div>
                              <div className="flex flex-col">
                                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Academic Status</span>
                                 <span className="text-xs font-black text-green-600 uppercase tracking-wider bg-green-50 px-2 py-0.5 rounded-full mt-1">{sem.status}</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <Button variant="outline" className="h-11 px-6 font-bold tracking-tight gap-2 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:border-[var(--color-primary)] transition-all">
                        View Transcript <ChevronRight className="h-4 w-4" />
                     </Button>
                  </div>
               </Card>
            ))}
         </div>

         <div className="space-y-6">
            <Card className="border-border shadow-sm bg-[var(--color-primary)] text-white">
               <CardContent className="p-6 flex flex-col gap-6 text-left">
                  <div className="flex items-center gap-4">
                     <div className="bg-white/10 p-3 rounded-2xl">
                        <Award className="h-8 w-8 text-white" />
                     </div>
                     <div>
                        <p className="text-slate-300 text-xs font-bold uppercase tracking-widest">Cumulative GPA</p>
                        <p className="text-4xl font-black">3.76</p>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-sm font-medium text-slate-300">Total Semesters</span>
                        <span className="font-black">3</span>
                     </div>
                     <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-sm font-medium text-slate-300">Total Subjects</span>
                        <span className="font-black">17</span>
                     </div>
                     <div className="flex justify-between items-center py-2">
                        <span className="text-sm font-medium text-slate-300">Total Passed Credits</span>
                        <span className="font-black">88 / 240</span>
                     </div>
                  </div>
                  <Button className="w-full h-12 bg-white text-[var(--color-primary)] font-bold tracking-tight hover:bg-slate-50">
                     Official Academic Record
                  </Button>
               </CardContent>
            </Card>

            <Card className="border-border shadow-sm">
               <CardHeader className="bg-slate-50/50 border-b border-border text-left">
                  <CardTitle className="text-base font-bold">Top Performing Subjects</CardTitle>
               </CardHeader>
               <CardContent className="p-4 space-y-4">
                  {[
                    { name: 'Introduction to Programming', score: 98, grade: 'A+' },
                    { name: 'Object Oriented Programming', score: 95, grade: 'A' },
                    { name: 'Calculus I', score: 94, grade: 'A' },
                  ].map((item, idx) => (
                     <div key={idx} className="flex items-center justify-between p-3 rounded-xl border border-border bg-slate-50/30 text-left">
                        <div>
                           <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                           <p className="text-xs text-slate-400 font-medium">Final Score: {item.score}</p>
                        </div>
                        <span className="text-lg font-black text-[var(--color-primary)]">{item.grade}</span>
                     </div>
                  ))}
                  <Button variant="ghost" className="w-full text-slate-400 font-bold text-xs hover:text-[var(--color-primary)]">
                    Load More History
                  </Button>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
