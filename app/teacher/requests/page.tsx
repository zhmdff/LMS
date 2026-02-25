"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MessageSquare, Plus, Clock, CheckCircle2, XCircle, Search, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TeacherRequests() {
  const requests = [
    { id: 'REQ-882', title: 'Attendance Correction', student: 'Alex Morgan', group: '640A', date: '25 Feb 2026', status: 'Pending', type: 'Correction' },
    { id: 'REQ-875', title: 'Grade Review Request', student: 'Sarah Johnson', group: '640A', date: '22 Feb 2026', status: 'Approved', type: 'Review' },
    { id: 'REQ-860', title: 'Technical Issue Log', student: 'Michael Chen', group: '638C', date: '20 Feb 2026', status: 'Rejected', type: 'Other' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1 text-left">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Formal Academic Requests</h1>
          <p className="text-slate-500 font-medium">Communicate with administration for changes in finalized academic records</p>
        </div>
        <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm">
           <Plus className="h-4 w-4" /> New Correction Letter
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
         <Card className="lg:col-span-3 border-border shadow-sm bg-white overflow-hidden text-left flex flex-col">
            <CardHeader className="border-b border-border bg-slate-50/50 flex flex-row items-center justify-between p-4">
               <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-900">Request Inbox</span>
                  <span className="bg-[var(--color-primary)] text-white text-[10px] font-black px-2 py-0.5 rounded-full">3</span>
               </div>
               <div className="relative w-64">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search requests..." 
                    className="w-full pl-9 pr-3 py-2 bg-white border border-border rounded-lg text-xs focus:ring-1 focus:ring-[var(--color-primary)] outline-none"
                  />
               </div>
            </CardHeader>
            <CardContent className="p-0">
               <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border">
                     <thead className="bg-slate-50/30">
                        <tr>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">ID</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Subject / Student</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Date</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Status</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-border bg-white">
                        {requests.map((req) => (
                           <tr key={req.id} className="hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-xs font-black text-[var(--color-primary)]">{req.id}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <div className="flex flex-col">
                                    <span className="text-sm font-bold text-slate-900">{req.title}</span>
                                    <span className="text-[10px] font-medium text-slate-500">{req.student} • Group {req.group}</span>
                                 </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-xs font-bold text-slate-500">{req.date}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <div className={cn(
                                    "px-2.5 py-1 inline-flex items-center gap-1.5 text-[9px] leading-4 font-black uppercase tracking-wider rounded-full",
                                    req.status === 'Approved' ? "bg-green-100 text-green-700" : 
                                    req.status === 'Pending' ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"
                                 )}>
                                    {req.status === 'Approved' ? <CheckCircle2 className="h-3 w-3" /> : 
                                     req.status === 'Pending' ? <Clock className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                                    {req.status}
                                 </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                 <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400">
                                    <MoreHorizontal className="h-4 w-4" />
                                 </Button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </CardContent>
         </Card>

         <div className="space-y-6">
            <Card className="border-border shadow-sm">
               <CardHeader className="bg-slate-50 border-b border-border text-left">
                  <CardTitle className="text-sm font-bold">Frequently Asked</CardTitle>
               </CardHeader>
               <CardContent className="p-4 space-y-4 text-left">
                  <div className="space-y-1">
                     <p className="text-xs font-bold text-slate-700">How to correct attendance?</p>
                     <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Create a "Correction Letter", specify the date, student, and attach the reason for the error.</p>
                  </div>
                  <div className="h-[1px] bg-slate-100 w-full"></div>
                  <div className="space-y-1">
                     <p className="text-xs font-bold text-slate-700">Processing time?</p>
                     <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Administration typically reviews correction requests within 24 to 48 hours during business days.</p>
                  </div>
               </CardContent>
            </Card>

            <Card className="border-border shadow-sm bg-[var(--color-primary)] text-white">
               <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="size-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                     <MessageSquare className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-base font-bold">Urgent Issue?</h4>
                  <p className="text-xs text-slate-400 mt-2 font-medium">Contact technical support directly for system bugs or login issues.</p>
                  <Button className="w-full mt-6 h-11 bg-white text-[var(--color-primary)] font-bold tracking-tight">Support Chat</Button>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
