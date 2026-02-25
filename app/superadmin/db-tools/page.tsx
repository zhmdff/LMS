"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Database, Terminal, FileCode, Play, Trash2, RefreshCw, Layers, Zap, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SuperAdminDBTools() {
  const migrations = [
    { id: 'M-282', title: 'Add_Attendance_History_Table', execution: '2.5s', date: '25 Feb 2026', status: 'Success' },
    { id: 'M-279', title: 'Optimize_Grades_Indexing', execution: '8.4s', date: '21 Feb 2026', status: 'Success' },
    { id: 'M-275', title: 'Schema_Update_User_Roles', execution: '1.2s', date: '15 Feb 2026', status: 'Reverted' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Database Engineering Tools</h1>
        <p className="text-slate-500 font-medium">Low-level data management: Schema migrations, query optimization, and maintenance scripts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left relative overflow-hidden group">
           <Zap className="h-10 w-10 absolute -right-2 -bottom-2 text-slate-50 rotate-12 group-hover:text-[var(--color-primary)]/5 transition-colors" />
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Query Load</p>
           <p className="text-3xl font-black text-slate-900 tracking-tighter">Low</p>
           <p className="text-[10px] font-bold text-emerald-600">240 QPS Avg.</p>
        </Card>
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left relative overflow-hidden group">
           <Layers className="h-10 w-10 absolute -right-2 -bottom-2 text-slate-50 rotate-12 group-hover:text-[var(--color-primary)]/5 transition-colors" />
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Index Health</p>
           <p className="text-3xl font-black text-slate-900 tracking-tighter">98%</p>
           <p className="text-[10px] font-bold text-emerald-600">Optimized</p>
        </Card>
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left relative overflow-hidden group">
           <Database className="h-10 w-10 absolute -right-2 -bottom-2 text-slate-50 rotate-12 group-hover:text-[var(--color-primary)]/5 transition-colors" />
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Storage Latency</p>
           <p className="text-3xl font-black text-slate-900 tracking-tighter">4ms</p>
           <p className="text-[10px] font-bold text-slate-400">SSD Cluster</p>
        </Card>
        <Card className="border-border shadow-sm bg-[var(--color-primary)] p-6 flex flex-col gap-1 text-left relative overflow-hidden group text-white">
           <Terminal className="h-10 w-10 absolute -right-2 -bottom-2 text-white/5 rotate-12 group-hover:text-white/10 transition-colors" />
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Engine Status</p>
           <p className="text-3xl font-black tracking-tighter uppercase">Postgres</p>
           <p className="text-[10px] font-bold text-emerald-400">V16.2 Prime</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <Card className="lg:col-span-2 border-border shadow-sm bg-white overflow-hidden flex flex-col">
            <CardHeader className="bg-slate-50/50 border-b border-border p-4 px-6 flex flex-row items-center justify-between">
               <div className="flex items-center gap-2">
                  <FileCode className="h-5 w-5 text-slate-400" />
                  <CardTitle className="text-lg font-bold">Migration Terminal</CardTitle>
               </div>
               <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 bg-white text-[10px] font-black uppercase"><RefreshCw className="h-3 w-3 mr-2" /> SCAN</Button>
               </div>
            </CardHeader>
            <CardContent className="p-0">
               <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border">
                     <thead className="bg-slate-50/30">
                        <tr>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Migration ID</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Description</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Execution</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Status</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-border bg-white">
                        {migrations.map((m) => (
                           <tr key={m.id} className="hover:bg-slate-50 transition-colors group">
                              <td className="px-6 py-4 whitespace-nowrap text-xs font-black text-slate-400">{m.id}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <div className="flex flex-col">
                                    <span className="text-sm font-bold text-slate-900 not-italic">{m.title}</span>
                                    <span className="text-[10px] font-medium text-slate-400">{m.date}</span>
                                 </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center text-xs font-black text-slate-500 font-mono">{m.execution}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <span className={cn(
                                    "px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest",
                                    m.status === 'Success' ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                                 )}>{m.status}</span>
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
               <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                     <Terminal className="h-8 w-8 text-amber-500" />
                     <h3 className="text-xl font-bold">SQL Console</h3>
                  </div>
                  <div className="bg-black/50 p-4 rounded-xl border border-white/10 font-mono text-[11px] text-emerald-400 mb-6">
                     <p>SELECT count(*) FROM students WHERE status='Active';</p>
                     <p className="text-slate-500 mt-2">// Result: 4,200 rows</p>
                  </div>
                  <Button className="w-full h-12 bg-white text-slate-900 font-bold hover:bg-slate-50 flex items-center justify-center gap-2">
                     <Play className="h-4 w-4" /> Run Interactive CLI
                  </Button>
               </div>
            </Card>

            <Card className="border-border shadow-sm border-red-100 bg-red-50">
               <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                     <Trash2 className="h-6 w-6 text-red-600" />
                     <h4 className="text-base font-black text-red-900">Vacuum & Cleanup</h4>
                  </div>
                  <p className="text-xs text-red-700 font-medium leading-relaxed">
                     Defragment indices and reclaim storage space from deleted records. This process might cause temporary high latency.
                  </p>
                  <Button className="w-full h-10 bg-red-600 text-white font-black uppercase tracking-widest text-[9px] hover:bg-red-700 mt-4 border-none">Execute Vacuum</Button>
               </CardContent>
            </Card>
         </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex gap-3 text-left">
         <Info className="h-5 w-5 text-slate-400 shrink-0" />
         <p className="text-[11px] text-slate-400 font-bold leading-relaxed uppercase tracking-tight">
            Safety Warning: Any DDL instructions executed through this console bypass routine application-level validation. Ensure a snapshot is taken before manipulation.
         </p>
      </div>
    </div>
  );
}
