"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Search, Filter, Download, Info, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StudentGrades() {
  const grades = [
    { subject: 'Software Engineering', activity: 9.5, attendance: 10, kollekvium: 24, exam: 42, total: 85.5, status: 'Passed' },
    { subject: 'Database Management', activity: 8.0, attendance: 9, kollekvium: 22, exam: 45, total: 84.0, status: 'Passed' },
    { subject: 'Artificial Intelligence', activity: 7.5, attendance: 10, kollekvium: 20, exam: 38, total: 75.5, status: 'Passed' },
    { subject: 'Probability Theory (Retake)', activity: 6.0, attendance: 6, kollekvium: 18, exam: '-', total: 30.0, status: 'Pending' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1 text-left">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Academic Gradebook</h1>
          <p className="text-slate-500 font-medium">Comprehensive grade distribution for Spring 2026</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" size="sm" className="h-10 text-[10px] font-black uppercase tracking-widest gap-2 bg-white">
              <Download className="h-4 w-4" /> Export Report (PDF)
           </Button>
        </div>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-border shadow-sm bg-white">
        <div className="flex items-center gap-3 w-full md:w-auto">
           <div className="flex flex-col text-left">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5 ml-1">Academic Year</span>
              <Button variant="outline" className="h-10 px-4 flex items-center gap-4 bg-slate-50 border-border text-slate-700 font-bold min-w-[140px] justify-between">
                 2025-2026 <ChevronDown className="h-4 w-4 text-slate-400" />
              </Button>
           </div>
           <div className="flex flex-col text-left">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5 ml-1">Semester</span>
              <Button variant="outline" className="h-10 px-4 flex items-center gap-4 bg-slate-50 border-border text-slate-700 font-bold min-w-[140px] justify-between">
                 Spring <ChevronDown className="h-4 w-4 text-slate-400" />
              </Button>
           </div>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
           <div className="bg-slate-50 px-4 py-2 rounded-xl border border-border flex items-center gap-4 min-w-[200px] justify-between">
              <div className="text-left">
                 <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">GPA Calculation</p>
                 <p className="text-xl font-black text-[var(--color-primary)]">3.84</p>
              </div>
              <div className="h-10 w-[1px] bg-slate-200 mx-2"></div>
              <div className="text-right">
                 <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Rank</p>
                 <p className="text-xl font-black text-slate-600">4 / 28</p>
              </div>
           </div>
        </div>
      </Card>

      <Card className="border-border shadow-sm overflow-hidden flex flex-col bg-white">
        <div className="overflow-x-auto text-left">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Activity (10)</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Attendance (10)</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Kollekvium (30)</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Exam (50)</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Total (100)</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-border">
              {grades.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">{item.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-slate-500 text-center">{item.activity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-slate-500 text-center">{item.attendance}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-slate-500 text-center">{item.kollekvium}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-slate-500 text-center">{item.exam}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-[var(--color-primary)] text-center">{item.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={cn(
                      "px-2.5 py-1 inline-flex text-[10px] leading-4 font-black uppercase tracking-wider rounded-full",
                      item.status === 'Passed' ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                    )}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-border bg-slate-50/30 flex items-center gap-3">
           <Info className="h-4 w-4 text-slate-400" />
           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
              Attendance points are calculated automatically based on absence threshold rules.
           </p>
        </div>
      </Card>
    </div>
  );
}
