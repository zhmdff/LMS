"use client";

import React from 'react';
import { DashboardCard } from '@/components/ui/DashboardCard';
import { Shield, Server, Database, Activity, HardDrive, Cpu, Terminal } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function SuperAdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">System Infrastructure</h1>
        <p className="text-slate-500 font-medium">Global Core Node • Version 2.4.0-build.82</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard 
          title="Server Uptime" 
          value="99.98%" 
          icon={Activity} 
        />
        <DashboardCard 
          title="CPU Load" 
          value="14%" 
          icon={Cpu} 
        />
        <DashboardCard 
          title="Database" 
          value="Online" 
          icon={Database} 
        />
        <DashboardCard 
          title="Active Sessions" 
          value="1,245" 
          icon={Server} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border shadow-sm">
          <CardHeader className="border-b border-border bg-slate-50/50 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold">Security & Logs</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="bg-slate-950 p-4 font-mono text-[12px] text-green-400 overflow-hidden rounded-b-xl border-t border-slate-800">
              <div className="space-y-1">
                <p><span className="text-slate-500">[2026-02-25 16:30:12]</span> <span className="text-blue-400">INFO:</span> System startup routine initiated...</p>
                <p><span className="text-slate-500">[2026-02-25 16:30:14]</span> <span className="text-blue-400">INFO:</span> Database clusters synchronized.</p>
                <p><span className="text-slate-500">[2026-02-25 16:30:45]</span> <span className="text-yellow-400">WARN:</span> Node 4 response time > 200ms</p>
                <p><span className="text-slate-500">[2026-02-25 16:31:02]</span> <span className="text-blue-400">INFO:</span> Weekly backup completed successfully.</p>
                <p><span className="text-slate-500">[2026-02-25 16:32:15]</span> <span className="text-green-400">SUCCESS:</span> API Gateway integrity check passed.</p>
                <p className="animate-pulse">_</p>
              </div>
            </div>
          </CardContent>
          <div className="p-4 border-t border-border flex justify-between bg-white rounded-b-xl">
             <Button variant="outline" size="sm" className="gap-2">
               <Terminal className="h-4 w-4" /> Open Console
             </Button>
             <Button size="sm" className="bg-[var(--color-primary)]">Download Logs</Button>
          </div>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="border-b border-border bg-slate-50/50 text-left">
            <CardTitle className="text-lg font-bold">System Resources</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-6">
             <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase text-slate-500">
                   <span>RAM Usage</span>
                   <span>4.2GB / 16GB</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-500 w-[26%]"></div>
                </div>
             </div>
             <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase text-slate-500">
                   <span>Storage</span>
                   <span>142GB / 500GB</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-indigo-500 w-[34%]"></div>
                </div>
             </div>
             <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase text-slate-500">
                   <span>Network</span>
                   <span>12.4 Mbps</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-500 w-[12%]"></div>
                </div>
             </div>
             <Button className="w-full bg-[var(--color-primary)] text-white">Full Report</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
