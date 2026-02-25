"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Settings, Save, Globe, Lock, ShieldCheck, Database, Server, RefreshCw } from 'lucide-react';

export default function SuperAdminConfig() {
  const settingsGroups = [
    { 
       title: 'General Identity', 
       icon: Globe, 
       items: [
          { name: 'University Name', value: 'UniManage Federal University', type: 'text' },
          { name: 'Primary Domain', value: 'unimanage.edu.az', type: 'text' },
          { name: 'Timezone', value: 'Asia/Baku (GMT+4)', type: 'select' },
       ]
    },
    { 
       title: 'Academic Core', 
       icon: BookOpen, 
       items: [
          { name: 'Maximum Semester Credits', value: '32', type: 'number' },
          { name: 'Min. Attendance % for Exam', value: '75', type: 'number' },
          { name: 'Grading Scale', value: '100-Point System (Standard)', type: 'select' },
       ]
    }
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">System Configuration</h1>
          <p className="text-slate-500 font-medium">Global environmental variables and foundational university parameters</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="h-11 bg-white border-border text-slate-400 font-bold tracking-tight gap-2">
              <RefreshCw className="h-4 w-4" /> Reset to Defaults
           </Button>
           <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm px-6">
              <Save className="h-4 w-4" /> Commit Changes
        </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            {settingsGroups.map((group, idx) => (
               <div key={idx} className="space-y-4">
                  <div className="flex items-center gap-3 ml-1">
                     <group.icon className="h-5 w-5 text-slate-400" />
                     <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">{group.title}</h3>
                  </div>
                  <Card className="border-border shadow-sm bg-white overflow-hidden divide-y divide-slate-100">
                     {group.items.map((item, i) => (
                        <div key={i} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                           <div className="flex flex-col text-left">
                              <span className="text-sm font-bold text-slate-700">{item.name}</span>
                              <span className="text-[10px] font-medium text-slate-400">SYSTEM_VAR_{item.name.replace(/\s+/g, '_').toUpperCase()}</span>
                           </div>
                           <div className="flex items-center gap-4 w-full md:w-auto">
                              {item.type === 'text' && (
                                 <input type="text" defaultValue={item.value} className="w-full md:w-64 h-10 px-4 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 focus:ring-1 focus:ring-[var(--color-primary)] outline-none" />
                              )}
                              {item.type === 'number' && (
                                 <input type="number" defaultValue={item.value} className="w-32 h-10 px-4 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 focus:ring-1 focus:ring-[var(--color-primary)] outline-none" />
                              )}
                              {item.type === 'select' && (
                                 <div className="w-full md:w-64 h-10 px-4 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 flex items-center justify-between cursor-pointer">
                                    {item.value} <Settings className="h-4 w-4 text-slate-300" />
                                 </div>
                              )}
                           </div>
                        </div>
                     ))}
                  </Card>
               </div>
            ))}
         </div>

         <div className="space-y-6">
            <Card className="border-border shadow-sm bg-slate-900 text-white overflow-hidden">
               <div className="p-6 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                     <ShieldCheck className="h-8 w-8 text-emerald-400" />
                     <h4 className="text-xl font-bold">Security & SSL</h4>
                  </div>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-xs text-slate-400 font-bold uppercase">SSL Certificate</span>
                        <span className="text-xs text-emerald-400 font-black">VALID (282 Days)</span>
                     </div>
                     <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-xs text-slate-400 font-bold uppercase">HSTS Protocol</span>
                        <span className="text-xs text-emerald-400 font-black">ENFORCED</span>
                     </div>
                     <div className="flex justify-between items-center py-2">
                        <span className="text-xs text-slate-400 font-bold uppercase">XSS Protection</span>
                        <span className="text-xs text-emerald-400 font-black">STRICT</span>
                     </div>
                  </div>
               </div>
            </Card>

            <Card className="border-border shadow-sm bg-white overflow-hidden">
               <CardHeader className="bg-slate-50/50 border-b border-border">
                  <CardTitle className="text-base font-bold">API Connectivity</CardTitle>
               </CardHeader>
               <CardContent className="p-6 space-y-4">
                  {[
                     { name: 'Core API Layer', latency: '42ms', status: 'Online' },
                     { name: 'Auth Server', latency: '12ms', status: 'Online' },
                     { name: 'Asset Bucket', latency: '128ms', status: 'High Load' },
                  ].map((s, idx) => (
                     <div key={idx} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                           <div className={cn(
                              "size-2 rounded-full",
                              s.status === 'Online' ? "bg-green-500" : "bg-amber-500"
                           )}></div>
                           <span className="text-xs font-bold text-slate-700">{s.name}</span>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 font-mono">{s.latency}</span>
                     </div>
                  ))}
                  <Button variant="outline" className="w-full mt-4 h-10 border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[var(--color-primary)]">
                     Full Connectivity Test
                  </Button>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}

function BookOpen({ className }: { className?: string }) {
  return <svg className={className} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
}
