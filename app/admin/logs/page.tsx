"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { History, Search, Filter, Download, Terminal, User, Shield, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminLogs() {
  const logs = [
    { id: 1, action: 'User Login', user: 'sarah@uni.edu', ip: '192.168.1.45', timestamp: '2 minutes ago', type: 'Auth' },
    { id: 2, action: 'Grade Modified', user: 'john@uni.edu', ip: '192.168.1.12', timestamp: '15 minutes ago', type: 'Academic' },
    { id: 3, action: 'Attendance Locked', user: 'System', ip: '-', timestamp: '30 minutes ago', type: 'System' },
    { id: 4, action: 'Specialty Added', user: 'admin_master', ip: '10.0.0.8', timestamp: '1 hour ago', type: 'Admin' },
    { id: 5, action: 'Database Backup', user: 'System', ip: '-', timestamp: '2 hours ago', type: 'Security' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">System Audit logs</h1>
          <p className="text-slate-500 font-medium">Comprehensive trail of all administrative and academic actions performed across the university</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="h-11 bg-white border-border text-slate-600 font-bold tracking-tight gap-2">
              <Download className="h-4 w-4" /> Export CSV
           </Button>
           <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm px-6">
              <Terminal className="h-4 w-4" /> Live Log View
           </Button>
        </div>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-border shadow-sm bg-white">
        <div className="relative w-full md:w-96">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by action, user or ID..." 
            className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-border rounded-lg text-sm focus:ring-1 focus:ring-[var(--color-primary)] outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest gap-2 bg-white">
             <Filter className="h-4 w-4" /> Type: All
          </Button>
          <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Showing: 5/14,289 Logs</span>
        </div>
      </Card>

      <Card className="border-border shadow-sm bg-white overflow-hidden">
         <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
               <thead className="bg-slate-50/50">
                  <tr>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Action</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">User Identifier</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">IP Address</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Timestamp</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Log Type</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-border bg-white">
                  {logs.map((log) => (
                     <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center gap-3">
                              <history className="h-4 w-4 text-[var(--color-primary)]" />
                              <span className="text-sm font-bold text-slate-900">{log.action}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center gap-2">
                              <User className="h-3.5 w-3.5 text-slate-300" />
                              <span className="text-xs font-bold text-slate-600">{log.user}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs font-bold text-slate-400 font-mono">{log.ip}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs font-bold text-slate-500">{log.timestamp}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className={cn(
                              "px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border",
                              log.type === 'Security' ? "bg-red-50 text-red-600 border-red-100" :
                              log.type === 'Auth' ? "bg-blue-50 text-blue-600 border-blue-100" :
                              log.type === 'Academic' ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                              "bg-slate-50 text-slate-600 border-slate-100"
                           )}>
                              {log.type}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </Card>

      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex gap-3 text-left">
         <Info className="h-5 w-5 text-slate-400 shrink-0" />
         <p className="text-[11px] text-slate-400 font-bold leading-relaxed uppercase tracking-tight">
            Retention Policy: System logs are stored for 180 days before being automatically archived to compressed cloud storage.
         </p>
      </div>
    </div>
  );
}

function history({ className }: { className?: string }) {
  return <svg className={className} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V12L15 15"/><circle cx="12" cy="12" r="10"/></svg>;
}
