"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ShieldAlert, Fingerprint, Lock, ShieldCheck, Key, Eye, EyeOff, Smartphone, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SuperAdminSecurity() {
  const securityPolices = [
    { name: 'Multi-Factor Authentication (MFA)', status: 'Enforced', level: 'Critical' },
    { name: 'Password Rotation Policy', status: '90 Days', level: 'High' },
    { name: 'Session Inactivity Timeout', status: '30 Minutes', level: 'Medium' },
    { name: 'IP Whitelisting (Admin Panel)', status: 'Active', level: 'Critical' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Security & Access Fortress</h1>
        <p className="text-slate-500 font-medium">Global security protocols: MFA enforcement, session management, and intrusion prevention</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-6">
            <Card className="border-border shadow-sm bg-white overflow-hidden text-left">
               <CardHeader className="bg-slate-50/50 border-b border-border flex flex-row items-center justify-between p-4 px-6">
                  <div className="flex items-center gap-2">
                     <Lock className="h-5 w-5 text-slate-400" />
                     <CardTitle className="text-lg font-bold">Authentication Policies</CardTitle>
                  </div>
                  <Button variant="outline" size="sm" className="h-8 bg-white text-[10px] font-black uppercase">Global Refresh</Button>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                     {securityPolices.map((policy, idx) => (
                        <div key={idx} className="p-6 flex items-center justify-between group hover:bg-slate-50 transition-colors">
                           <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-2">
                                 <span className={cn(
                                    "text-[9px] font-black uppercase tracking-widest",
                                    policy.level === 'Critical' ? "text-red-500" : policy.level === 'High' ? "text-amber-500" : "text-blue-500"
                                 )}>{policy.level} Impact</span>
                              </div>
                              <h4 className="text-base font-black text-slate-900">{policy.name}</h4>
                           </div>
                           <div className="flex items-center gap-4">
                              <span className="text-sm font-black text-[var(--color-primary)]">{policy.status}</span>
                              <Button variant="ghost" size="sm" className="size-10 p-0 text-slate-200 hover:text-slate-900">
                                 <MoreVertical className="h-4 w-4" />
                              </Button>
                           </div>
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Card className="border-border shadow-sm bg-white p-6 border-l-4 border-l-[var(--color-primary)]">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="size-12 rounded-2xl bg-[var(--color-primary)]/5 flex items-center justify-center text-[var(--color-primary)]">
                        <Fingerprint className="h-6 w-6" />
                     </div>
                     <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Biometric Auth</h4>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                     Enable WebAuthn for hardware-level security keys and platform authenticators.
                  </p>
                  <Button className="w-full h-10 border-[var(--color-primary)] bg-white text-[var(--color-primary)] border font-black uppercase tracking-widest text-[9px] hover:bg-[var(--color-primary)] hover:text-white transition-all">Enable Hardware Keys</Button>
               </Card>
               <Card className="border-border shadow-sm bg-white p-6 border-l-4 border-l-emerald-500">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="size-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <ShieldCheck className="h-6 w-6" />
                     </div>
                     <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Threat Shield</h4>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                     Real-time brute force protection and anomaly detection is active.
                  </p>
                  <Button className="w-full h-10 border-emerald-500 bg-white text-emerald-600 border font-black uppercase tracking-widest text-[9px] hover:bg-emerald-500 hover:text-white transition-all">View Blocked IPs</Button>
               </Card>
            </div>
         </div>

         <div className="space-y-6">
            <Card className="border-border shadow-sm bg-slate-900 text-white overflow-hidden">
               <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                     <ShieldAlert className="h-8 w-8 text-amber-500" />
                     <h3 className="text-xl font-bold">Lockdown Mode</h3>
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed mb-8">
                     In case of a detected breach, Lockdown Mode immediately terminates all sessions and requires physical admin token to reset.
                  </p>
                  <Button className="w-full h-12 bg-red-600 text-white font-black uppercase tracking-widest text-[11px] hover:bg-red-700 shadow-xl border-none">Initiate Terminal Lock</Button>
               </div>
            </Card>

            <Card className="border-border shadow-sm bg-white overflow-hidden">
               <CardHeader className="bg-slate-50 border-b border-border">
                  <CardTitle className="text-base font-bold">Active Admin Sessions</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                     {[
                        { user: 'admin_master', device: 'MacOS / Chrome', location: 'Baku, AZ', current: true },
                        { user: 'sec_officer', device: 'Windows / Firefox', location: 'London, UK', current: false },
                     ].map((s, idx) => (
                        <div key={idx} className="p-4 flex flex-col gap-2">
                           <div className="flex justify-between items-start">
                              <span className="text-xs font-bold text-slate-900">{s.user}</span>
                              {s.current ? (
                                 <span className="text-[8px] font-black text-emerald-600 uppercase">Your Session</span>
                              ) : (
                                 <Button variant="ghost" size="sm" className="h-6 px-2 text-[8px] font-black uppercase text-red-500 bg-red-50">Revoke</Button>
                              )}
                           </div>
                           <div className="flex items-center gap-3 text-[10px] text-slate-400 font-medium">
                              <Smartphone className="h-3 w-3" /> {s.device} • {s.location}
                           </div>
                        </div>
                     ))}
                  </div>
                  <Button variant="ghost" className="w-full h-11 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-red-600 border-t border-slate-50">Revoke All Other Sessions</Button>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
