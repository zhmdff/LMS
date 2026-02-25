"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FileText, Download, Filter, Search, PieChart, BarChart } from 'lucide-react';

export default function DeptReports() {
  const reportTemplates = [
    { title: 'Academic Performance Monthly', desc: 'GPA and pass rate distribution across all department groups.', type: 'Academic' },
    { title: 'Attendance Compliance Audit', desc: 'Detailed absence report highlighting students over the threshold.', type: 'Compliance' },
    { title: 'Faculty Workload Analysis', desc: 'Summary of teaching hours and subject assignments per instructor.', type: 'Management' },
    { title: 'Examination Results Summary', desc: 'Statistical breakdown of kollekvium and final exam performance.', type: 'Academic' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Departmental Reporting</h1>
        <p className="text-slate-500 font-medium">Generate and export comprehensive data summaries for internal review</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {reportTemplates.map((report, idx) => (
            <Card key={idx} className="border-border shadow-sm bg-white hover:border-[var(--color-primary)] transition-all group overflow-hidden">
               <div className="p-6 flex flex-col h-full">
                  <div className="bg-slate-50 text-slate-400 p-3 rounded-2xl w-fit mb-6 border border-border group-hover:bg-[var(--color-primary)]/5 group-hover:text-[var(--color-primary)] transition-colors">
                     <FileText className="h-6 w-6" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[var(--color-primary)] bg-[var(--color-primary)]/5 px-2 py-0.5 rounded-full w-fit mb-2">{report.type}</span>
                  <h3 className="text-lg font-black text-slate-900 leading-tight mb-2">{report.title}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mb-8 flex-1">{report.desc}</p>
                  <Button className="w-full h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm">
                     <Download className="h-4 w-4" /> Generate Report
                  </Button>
               </div>
            </Card>
         ))}
      </div>

      <Card className="border-border shadow-sm bg-white overflow-hidden flex flex-col">
         <CardHeader className="bg-slate-50/50 border-b border-border flex flex-row items-center justify-between p-4 px-6">
            <div className="flex items-center gap-2">
               <BarChart className="h-5 w-5 text-slate-400" />
               <CardTitle className="text-lg font-bold">Custom Report Builder</CardTitle>
            </div>
            <Button variant="outline" size="sm" className="h-9 px-4 text-[10px] font-black uppercase tracking-widest gap-2 bg-white">
               Saved Presets
            </Button>
         </CardHeader>
         <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Data Source</label>
                  <Button variant="outline" className="w-full h-12 justify-between px-4 font-bold border-border bg-slate-50 text-slate-700">
                     Select Category <Filter className="h-4 w-4" />
                  </Button>
               </div>
               <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Date Range</label>
                  <div className="grid grid-cols-2 gap-2">
                     <Button variant="outline" className="h-12 border-border bg-slate-50 text-[11px] font-bold text-slate-400">Start Date</Button>
                     <Button variant="outline" className="h-12 border-border bg-slate-50 text-[11px] font-bold text-slate-400">End Date</Button>
                  </div>
               </div>
               <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Format</label>
                  <div className="flex bg-slate-100 p-1 rounded-xl h-12">
                     <button className="flex-1 rounded-lg bg-white shadow-sm text-xs font-black text-[var(--color-primary)] uppercase tracking-widest">PDF</button>
                     <button className="flex-1 rounded-lg text-xs font-black text-slate-400 uppercase tracking-widest">Excel</button>
                     <button className="flex-1 rounded-lg text-xs font-black text-slate-400 uppercase tracking-widest">JSON</button>
                  </div>
               </div>
            </div>
            <div className="mt-10 pt-8 border-t border-slate-50 flex justify-end gap-3">
               <Button variant="outline" className="h-12 px-8 border-border text-slate-400 font-bold hover:bg-slate-50">Reset Filters</Button>
               <Button className="h-12 px-10 bg-[var(--color-primary)] text-white font-black uppercase text-xs tracking-widest shadow-xl hover:translate-y-[-2px] transition-all">Download Generated Report</Button>
            </div>
         </CardContent>
      </Card>
    </div>
  );
}
