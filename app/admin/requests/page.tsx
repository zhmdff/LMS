"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MessageSquare, CheckCircle2, XCircle, Search, Filter, MoreHorizontal, User, Clock, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminCorrectionRequests() {
  const requests = [
    { id: 'REQ-882', title: 'Absence to Participation', sender: 'Prof. James Smith', role: 'Teacher', date: '25 Feb 2026', priority: 'High', status: 'Pending' },
    { id: 'REQ-879', title: 'Grade Entry Correction', sender: 'Dr. Maria Garcia', role: 'Teacher', date: '24 Feb 2026', priority: 'Medium', status: 'Reviewing' },
    { id: 'REQ-875', title: 'Late Assignment Grace', sender: 'Sarah Johnson', role: 'Student', date: '22 Feb 2026', priority: 'Low', status: 'Approved' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Record Correction Inbox</h1>
        <p className="text-slate-500 font-medium">Administrative override requests: Review and authorize changes to locked academic logs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
         <Card className="lg:col-span-3 border-border shadow-sm bg-white overflow-hidden flex flex-col">
            <CardHeader className="border-b border-border bg-slate-50/50 p-4 px-6 flex flex-row items-center justify-between">
               <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-900">Pending Actions</span>
                  <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">2</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="relative w-64">
                     <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                     <input type="text" placeholder="Search requests..." className="w-full pl-9 pr-3 py-2 bg-white border border-border rounded-lg text-xs outline-none" />
                  </div>
                  <Button variant="outline" size="sm" className="h-8 px-3 border-border bg-white text-[10px] font-black"><Filter className="h-3 w-3 mr-2" /> FILTER</Button>
               </div>
            </CardHeader>
            <CardContent className="p-0">
               <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border">
                     <thead className="bg-slate-50/30">
                        <tr>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Priority</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Sender / Request Details</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Date</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Status</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-border bg-white">
                        {requests.map((r) => (
                           <tr key={r.id} className="hover:bg-slate-50 transition-colors group">
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <span className={cn(
                                    "text-[9px] font-black uppercase tracking-widest",
                                    r.priority === 'High' ? "text-red-600" : r.priority === 'Medium' ? "text-amber-600" : "text-blue-600"
                                 )}>{r.priority}</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-border">
                                       <User className="h-5 w-5" />
                                    </div>
                                    <div>
                                       <p className="text-sm font-bold text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">{r.title}</p>
                                       <p className="text-[11px] font-medium text-slate-500">{r.sender} • {r.role}</p>
                                    </div>
                                 </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-xs font-bold text-slate-400">{r.date}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <div className={cn(
                                    "px-2.5 py-1 inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest rounded-full",
                                    r.status === 'Approved' ? "bg-green-100 text-green-700" : 
                                    r.status === 'Pending' ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"
                                 )}>
                                    {r.status === 'Approved' ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                                    {r.status}
                                 </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                 <Button variant="ghost" size="sm" className="h-8 w-8 text-slate-300 hover:text-slate-600">
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
            <Card className="border-border shadow-sm bg-slate-900 text-white overflow-hidden">
               <div className="p-6 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                     <ShieldCheck className="h-8 w-8 text-emerald-400" />
                     <h3 className="text-xl font-bold">Admin Override</h3>
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                     Authorize changes to finalized records. Every approved request generates a system-wide audit entry tied to your credentials.
                  </p>
                  <Button className="w-full h-12 bg-white text-slate-900 font-bold hover:bg-slate-100 shadow-xl">
                     Open Audit Console
                  </Button>
               </div>
            </Card>

            <Card className="border-border shadow-sm bg-white overflow-hidden">
               <CardHeader className="bg-slate-50/50 border-b border-border">
                  <CardTitle className="text-base font-bold">Quick Verification</CardTitle>
               </CardHeader>
               <CardContent className="p-4 flex flex-col gap-3">
                  <div className="p-3 rounded-xl border border-border bg-slate-50 flex items-center justify-between group cursor-pointer hover:border-[var(--color-primary)] transition-all">
                     <div className="flex items-center gap-3">
                        <MessageSquare className="h-4 w-4 text-slate-400 group-hover:text-[var(--color-primary)]" />
                        <span className="text-xs font-bold text-slate-700">Check Technical Logs</span>
                     </div>
                     <ChevronRight className="h-3 w-3 text-slate-300" />
                  </div>
                  <div className="p-3 rounded-xl border border-border bg-slate-50 flex items-center justify-between group cursor-pointer hover:border-[var(--color-primary)] transition-all">
                     <div className="flex items-center gap-3">
                        <MessageSquare className="h-4 w-4 text-slate-400 group-hover:text-[var(--color-primary)]" />
                        <span className="text-xs font-bold text-slate-700">Faculty Response Portal</span>
                     </div>
                     <ChevronRight className="h-3 w-3 text-slate-300" />
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
   return <svg className={className} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"/></svg>;
}
