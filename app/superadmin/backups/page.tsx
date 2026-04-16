"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Database, Download, RotateCcw, ShieldCheck, Clock, Plus, HardDrive, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SuperAdminBackups() {
  const backups = [
    { id: "BKP-001", name: "Auto-Full_University_Prod", size: "2.4 GB", date: "25 Feb 2026, 04:00", type: "Daily Full", status: "Healthy" },
    { id: "BKP-002", name: "Manual_Before_Grading_Sys_Update", size: "840 MB", date: "22 Feb 2026, 11:24", type: "Manual Diff", status: "Healthy" },
    { id: "BKP-003", name: "Auto-Full_University_Prod", size: "2.3 GB", date: "21 Feb 2026, 04:00", type: "Daily Full", status: "Archived" },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Database & Media Snapshots</h1>
        <p className="text-slate-500 font-medium">Data redundancy management: Automated cloud backups and manual system restores</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Storage Status</p>
          <p className="text-3xl font-black text-slate-900">84.2 GB</p>
          <p className="text-[10px] font-bold text-emerald-600">21% of 400 GB Used</p>
        </Card>
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Backup</p>
          <p className="text-2xl font-black text-slate-900">12h 42m ago</p>
          <p className="text-[10px] font-bold text-slate-400">Status: Verified</p>
        </Card>
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Next Scheduled</p>
          <p className="text-2xl font-black text-[var(--color-primary)]">Today, 04:00</p>
          <p className="text-[10px] font-bold text-slate-400">Target: S3 Glacier</p>
        </Card>
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Redundancy</p>
          <p className="text-3xl font-black text-slate-900">3 Nodes</p>
          <p className="text-[10px] font-bold text-emerald-600">Geo-Distributed</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border shadow-sm bg-white overflow-hidden flex flex-col">
          <CardHeader className="bg-slate-50/50 border-b border-border p-4 px-6 flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-slate-400" />
              <CardTitle className="text-lg font-bold">Snapshot History</CardTitle>
            </div>
            <Button className="h-9 px-6 bg-[var(--color-primary)] text-white font-black uppercase text-[10px] tracking-widest gap-2">
              <Plus className="h-4 w-4" /> Create Snapshot
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-slate-50/30">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Details</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Type</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Size</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-white">
                  {backups.map((bkp) => (
                    <tr key={bkp.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900 not-italic">{bkp.name}</span>
                          <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                            <CalendarIcon className="h-3 w-3" /> {bkp.date}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-[10px] font-black uppercase tracking-widest text-slate-500">{bkp.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-xs font-black text-slate-600">{bkp.size}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 text-slate-300 hover:text-[var(--color-primary)]">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 text-slate-300 hover:text-amber-600">
                            <RotateCcw className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-border shadow-sm bg-slate-100 border-dashed border-2 overflow-hidden">
            <div className="p-8 text-center flex flex-col items-center">
              <div className="size-16 rounded-3xl bg-white shadow-md flex items-center justify-center mb-6">
                <HardDrive className="h-8 w-8 text-[var(--color-primary)]" />
              </div>
              <h4 className="text-lg font-black text-slate-900">Off-site Replication</h4>
              <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">Enable real-time synchronization to secondary cloud regions for 100% disaster recovery compliance.</p>
              <Button variant="outline" className="mt-8 w-full h-12 border-[var(--color-primary)] text-[var(--color-primary)] font-black uppercase tracking-widest text-[10px] hover:bg-[var(--color-primary)] hover:text-white transition-all">
                Configure Replication
              </Button>
            </div>
          </Card>

          <Card className="border-border shadow-sm bg-emerald-50 border-emerald-100">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
                <h4 className="text-base font-black text-emerald-900">Integrity Verified</h4>
              </div>
              <p className="text-xs text-emerald-700 font-medium leading-relaxed">Automated checksum verification passed for all snapshots in the primary cluster. Data is consistent and restorable.</p>
              <div className="flex items-center gap-2 mt-2">
                <RefreshCw className="h-3.5 w-3.5 text-emerald-600 animate-spin" />
                <span className="text-[10px] font-black text-emerald-600 uppercase">Live monitoring active</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
