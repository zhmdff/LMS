"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Settings, ShieldAlert, Clock, Save, History, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminAttendanceRules() {
  const rules = [
    { id: 1, name: 'Standard Absence Limit', value: '25%', type: 'Threshold', status: 'Active' },
    { id: 2, name: 'Attendance Scoring', value: '1 point per 10% attendance', type: 'Formula', status: 'Active' },
    { id: 3, name: 'Lock Duration', value: '15 Minutes', type: 'System', status: 'Active' },
    { id: 4, name: 'Late Arrival Window', value: '5 Minutes', type: 'Policy', status: 'Inactive' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Attendance Regulations</h1>
          <p className="text-slate-500 font-medium">Configure global thresholds, scoring formulas, and lesson locking periods</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="h-11 bg-white border-border text-slate-600 font-bold tracking-tight gap-2">
              <History className="h-4 w-4" /> Change Logs
           </Button>
           <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm px-6">
              <Save className="h-4 w-4" /> Save All Changes
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-4">
            {rules.map((rule) => (
               <Card key={rule.id} className="border-border shadow-sm bg-white overflow-hidden hover:border-[var(--color-primary)] transition-all group">
                  <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                     <div className="flex items-center gap-4">
                        <div className="size-12 rounded-2xl bg-slate-50 text-slate-400 border border-border flex items-center justify-center group-hover:bg-[var(--color-primary)]/5 group-hover:text-[var(--color-primary)] transition-colors">
                           <Settings className="h-6 w-6" />
                        </div>
                        <div>
                           <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{rule.type}</span>
                              <span className={cn(
                                 "size-1.5 rounded-full",
                                 rule.status === 'Active' ? "bg-green-500" : "bg-slate-300"
                              )}></span>
                           </div>
                           <h3 className="text-lg font-black text-slate-900">{rule.name}</h3>
                           <p className="text-sm font-black text-[var(--color-primary)] mt-1">{rule.value}</p>
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="h-10 px-4 text-xs font-bold text-slate-400 hover:text-slate-600">Edit</Button>
                        <Button variant="ghost" size="sm" className="size-10 p-0 text-slate-300 hover:text-red-500">
                           <Trash2 className="h-4 w-4" />
                        </Button>
                     </div>
                  </div>
               </Card>
            ))}
            <Button variant="outline" className="w-full h-14 border-dashed border-2 border-slate-200 text-slate-400 font-bold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
               <Plus className="h-5 w-5" /> Add Custom Regulation
            </Button>
         </div>

         <div className="space-y-6">
            <Card className="border-border shadow-sm bg-slate-900 text-white overflow-hidden">
               <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                     <ShieldAlert className="h-8 w-8 text-amber-500" />
                     <h3 className="text-xl font-bold">Policy Enforcement</h3>
                  </div>
                  <div className="space-y-4">
                     <div className="flex gap-4">
                        <div className="size-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[10px] font-bold">!</div>
                        <p className="text-xs text-slate-300 font-medium leading-relaxed">Threshold changes are applied to the entire university immediately.</p>
                     </div>
                     <div className="flex gap-4">
                        <div className="size-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[10px] font-bold">!</div>
                        <p className="text-xs text-slate-300 font-medium leading-relaxed">Students exceeding the limit are automatically flagged for "Absence Block" (QB).</p>
                     </div>
                  </div>
                  <Button className="w-full mt-8 h-12 bg-white text-slate-900 font-bold hover:bg-slate-50 shadow-lg">
                     Regulatory Overview
                  </Button>
               </div>
            </Card>

            <Card className="border-border shadow-sm bg-white">
               <CardHeader className="bg-slate-50/50 border-b border-border">
                  <CardTitle className="text-base font-bold">System Lock Duration</CardTitle>
               </CardHeader>
               <CardContent className="p-6 text-center">
                  <div className="size-20 rounded-full border-4 border-[var(--color-primary)] border-t-slate-100 flex items-center justify-center mx-auto mb-4">
                     <Clock className="h-8 w-8 text-[var(--color-primary)]" />
                  </div>
                  <p className="text-2xl font-black text-slate-900">15m 00s</p>
                  <p className="text-xs text-slate-400 font-medium mt-2">Maximum window for teachers to mark attendance before the session is locked.</p>
                  <div className="mt-6 space-y-2">
                     <input type="range" className="w-full accent-[var(--color-primary)]" min="5" max="60" step="5" defaultValue="15" />
                     <div className="flex justify-between text-[10px] font-black text-slate-400">
                        <span>5M</span>
                        <span>30M</span>
                        <span>60M</span>
                     </div>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
