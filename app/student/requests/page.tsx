"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MessageSquare, Plus, Search, Filter, Clock, CheckCircle2, XCircle, FileText, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StudentRequests() {
  const requests = [
    { id: 'REQ-101', type: 'Attendance Correction', date: '25 Feb 2026', status: 'Pending', msg: 'Missing attendance for Programming lab on Feb 22.' },
    { id: 'REQ-098', type: 'Official Transcript', date: '20 Feb 2026', status: 'Approved', msg: 'Requested digital copy with rectorate stamp.' },
    { id: 'REQ-085', type: 'Exam Reschedule', date: '10 Feb 2026', status: 'Rejected', msg: 'Conflicting schedule with medical certificate.' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Academic Requests</h1>
          <p className="text-slate-500 font-medium">Submit and track formal communication with faculty administration</p>
        </div>
        <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm px-6">
           <Plus className="h-4 w-4" /> New Request
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-4">
            {requests.map((req) => (
               <Card key={req.id} className="border-border shadow-sm bg-white overflow-hidden hover:border-[var(--color-primary)] transition-all group">
                  <div className="p-6">
                     <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                           <div className="size-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center border border-border group-hover:bg-[var(--color-primary)]/5 group-hover:text-[var(--color-primary)] transition-colors">
                              <MessageSquare className="h-5 w-5" />
                           </div>
                           <div>
                              <h3 className="text-lg font-black text-slate-900">{req.type}</h3>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{req.id} • {req.date}</p>
                           </div>
                        </div>
                        <span className={cn(
                           "px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border",
                           req.status === 'Approved' ? "bg-green-50 text-green-700 border-green-100" : 
                           req.status === 'Pending' ? "bg-amber-50 text-amber-700 border-amber-100" : "bg-red-50 text-red-700 border-red-100"
                        )}>
                           {req.status}
                        </span>
                     </div>
                     <p className="text-xs text-slate-600 font-medium leading-relaxed border-l-2 border-slate-100 pl-4 mb-6">
                        {req.msg}
                     </p>
                     <div className="flex justify-end">
                        <Button variant="ghost" size="sm" className="h-10 text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 gap-2">
                           View Conversation <ChevronRight className="h-4 w-4" />
                        </Button>
                     </div>
                  </div>
               </Card>
            ))}
         </div>

         <div className="space-y-6">
            <Card className="border-border shadow-sm bg-[var(--color-primary)] text-white overflow-hidden">
               <div className="p-6">
                  <h4 className="text-lg font-black mb-4">Common Inquiries</h4>
                  <div className="space-y-3">
                     {[
                        'Attendance adjustments',
                        'Transcript requests',
                        'Special circumstance notice',
                        'Account access issues'
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
                           <div className="size-2 rounded-full bg-slate-400 group-hover:bg-white transition-colors"></div>
                           <span className="text-xs font-bold text-slate-300 group-hover:text-white">{item}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </Card>

            <Card className="border-border shadow-sm bg-slate-50 border-dashed border-2 p-6 flex flex-col items-center text-center">
               <div className="size-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-slate-400" />
               </div>
               <h4 className="text-sm font-black text-slate-900">Request Guidelines</h4>
               <p className="text-[11px] text-slate-400 font-medium mt-2 leading-relaxed">
                  Support responses typically occur within 24-48 business hours. Ensure all relevant documents are attached.
               </p>
            </Card>
         </div>
      </div>
    </div>
  );
}
