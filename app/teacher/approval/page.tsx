"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckSquare, Calendar, Users, ShieldCheck, AlertCircle, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TeacherGradeApproval() {
  const pendingApprovals = [
    { id: 1, type: 'Attendance', subject: 'Software Engineering', group: '640A', date: '25 Feb 2026', entries: 24 },
    { id: 2, type: 'Activity Score', subject: 'Software Engineering', group: '640A', date: '25 Feb 2026', entries: 12 },
    { id: 3, type: 'Attendance', subject: 'Database Systems', group: '638C', date: '24 Feb 2026', entries: 26 },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Daily Grade Approval</h1>
        <p className="text-slate-500 font-medium">Finalize daily logs to lock entries and ensure academic integrity</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
           {pendingApprovals.map((item) => (
             <Card key={item.id} className="border-border shadow-sm bg-white overflow-hidden text-left hover:border-[var(--color-primary)] transition-all group">
                <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                   <div className="flex items-start gap-4">
                      <div className={cn(
                        "p-3 rounded-2xl border border-border group-hover:shadow-md transition-all",
                        item.type === 'Attendance' ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600"
                      )}>
                         {item.type === 'Attendance' ? <Calendar className="h-6 w-6" /> : <CheckSquare className="h-6 w-6" />}
                      </div>
                      <div>
                         <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.subject}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Group {item.group}</span>
                         </div>
                         <h3 className="text-xl font-bold text-slate-900">{item.type} Approval</h3>
                         <div className="flex items-center gap-4 mt-1.5">
                            <div className="flex items-center gap-1 text-xs font-bold text-slate-500">
                               <Calendar className="h-3.5 w-3.5" /> {item.date}
                            </div>
                            <div className="flex items-center gap-1 text-xs font-bold text-[var(--color-primary)]">
                               <Users className="h-3.5 w-3.5" /> {item.entries} Total Entries
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="flex gap-2">
                       <Button variant="outline" size="sm" className="h-10 px-3 border-border text-red-400 hover:bg-red-50 hover:border-red-200">
                          <Trash2 className="h-4 w-4" />
                       </Button>
                       <Button className="h-10 px-6 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm text-xs">
                          <ShieldCheck className="h-4 w-4" /> Approve & Lock
                       </Button>
                   </div>
                </div>
             </Card>
           ))}

           {pendingApprovals.length === 0 && (
              <div className="py-20 flex flex-col items-center justify-center text-center bg-slate-50/50 rounded-3xl border border-dashed border-border">
                 <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                    <ShieldCheck className="h-8 w-8 text-green-500" />
                 </div>
                 <h3 className="text-lg font-bold text-slate-900">All Logs Finalized</h3>
                 <p className="text-sm text-slate-500 max-w-xs mt-2">You have no pending approvals for the selected period. Great job!</p>
              </div>
           )}
        </div>

        <div className="space-y-6">
           <Card className="border-border shadow-sm bg-[var(--color-primary)] text-white overflow-hidden">
              <div className="p-6">
                 <div className="flex items-center gap-3 mb-6">
                    <ShieldCheck className="h-8 w-8 text-emerald-400" />
                    <h3 className="text-xl font-bold">Lock Protocol</h3>
                 </div>
                 <div className="space-y-5">
                    <div className="flex gap-4 text-left">
                       <div className="size-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[10px] font-bold">1</div>
                       <p className="text-xs text-slate-300 font-medium leading-relaxed">Approving a log permanently locks the records in the global database.</p>
                    </div>
                    <div className="flex gap-4 text-left">
                       <div className="size-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[10px] font-bold">2</div>
                       <p className="text-xs text-slate-300 font-medium leading-relaxed">Locked entries cannot be edited even by department heads without admin override.</p>
                    </div>
                    <div className="flex gap-4 text-left">
                       <div className="size-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[10px] font-bold">3</div>
                       <p className="text-xs text-slate-300 font-medium leading-relaxed">A full audit trail is generated for every approval action taken by staff.</p>
                    </div>
                 </div>
                 <Button className="w-full mt-8 h-12 bg-white text-slate-900 font-bold hover:bg-slate-100">
                    Review Approval History
                 </Button>
              </div>
           </Card>

           <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex gap-3 text-left">
              <AlertCircle className="h-5 w-5 text-amber-500 shrink-0" />
              <p className="text-[11px] text-amber-700 font-bold leading-relaxed uppercase">
                 Incomplete approvals by midnight may freeze system access for attendance modules until addressed.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
