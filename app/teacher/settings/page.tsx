"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { User, Lock, Bell, Mail, Shield, Smartphone, Camera, Save, RefreshCw, Briefcase, FileCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TeacherSettings() {
  const sections = [
    { id: 'profile', icon: User, title: 'Academic Profile', desc: 'Faculty details, bio and contact info' },
    { id: 'journal', icon: FileCheck, title: 'Journal Preferences', desc: 'Default scoring modes and attendance limits' },
    { id: 'security', icon: Lock, title: 'Security & Access', desc: '2FA, session keys and password management' },
    { id: 'notify', icon: Bell, title: 'Staff Notifications', desc: 'Faculty alerts and student request pings' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Staff Account Console</h1>
        <p className="text-slate-500 font-medium">Manage your teaching credentials, faculty access, and automated journal preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         <div className="flex flex-col gap-3">
            {sections.map((s) => (
               <div key={s.id} className={cn(
                  "p-5 rounded-3xl flex items-center gap-4 cursor-pointer transition-all border shadow-sm",
                  s.id === 'profile' ? "bg-white border-[var(--color-primary)] text-slate-900" : "bg-white border-transparent text-slate-400 hover:border-slate-200 hover:text-slate-600"
               )}>
                  <div className={cn(
                     "size-10 rounded-2xl flex items-center justify-center shrink-0",
                     s.id === 'profile' ? "bg-[var(--color-primary)] text-white" : "bg-slate-50 text-slate-400"
                  )}>
                     <s.icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col truncate">
                     <span className="text-sm font-black tracking-tight">{s.title}</span>
                     <span className="text-[10px] truncate font-medium opacity-60">{s.desc}</span>
                  </div>
               </div>
            ))}
         </div>

         <div className="lg:col-span-3 space-y-6">
            <Card className="border-border shadow-md bg-white overflow-hidden">
               <CardHeader className="bg-slate-50 border-b border-border p-6 flex flex-row items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="size-12 rounded-3xl bg-indigo-50 text-[var(--color-primary)] flex items-center justify-center border border-indigo-100 font-black">
                        PR
                     </div>
                     <div>
                        <CardTitle className="text-xl font-bold">Academic Identity</CardTitle>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Employee UID: FAC-7429-001</p>
                     </div>
                  </div>
                  <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight px-8 shadow-xl hover:opacity-90">
                     Update Credentials
                  </Button>
               </CardHeader>
               <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Academic Name</label>
                        <input type="text" defaultValue="Prof. Sarah Miller" className="w-full h-12 bg-slate-50 border border-slate-200 rounded-2xl px-5 text-sm font-bold text-slate-700 focus:ring-1 focus:ring-[var(--color-primary)] shadow-sm outline-none" />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Faculty Department</label>
                        <div className="h-12 bg-slate-100 border border-slate-200 rounded-2xl px-5 text-sm font-black text-slate-400 flex items-center gap-3">
                           <Briefcase className="h-4 w-4" /> Computer Science & Engineering
                        </div>
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Academic Email</label>
                        <div className="relative">
                           <Mail className="h-4 w-4 absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                           <input type="text" defaultValue="s.miller@unimanage.edu" className="w-full h-12 bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-5 text-sm font-bold text-slate-700 outline-none shadow-sm" />
                        </div>
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Office Number</label>
                        <input type="text" defaultValue="Zone-C, Room 402" className="w-full h-12 bg-slate-50 border border-slate-200 rounded-2xl px-5 text-sm font-bold text-slate-700 outline-none shadow-sm" />
                     </div>
                  </div>

                  <div className="p-6 bg-[var(--color-primary)]/5 rounded-3xl border border-[var(--color-primary)]/10">
                     <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                           <div className="size-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[var(--color-primary)]">
                              <Smartphone className="h-5 w-5" />
                           </div>
                           <div>
                              <h4 className="text-sm font-black text-slate-900">Mobile Journal Sync</h4>
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Last Sync: 12 minutes ago</p>
                           </div>
                        </div>
                        <Button className="h-9 px-4 bg-white text-[var(--color-primary)] border border-[var(--color-primary)]/10 font-bold text-[10px] uppercase shadow-sm">Sync Now</Button>
                     </div>
                     <p className="text-xs text-slate-500 font-medium leading-relaxed border-l-2 border-[var(--color-primary)]/20 pl-4">
                        Enable this to automatically synchronize your offline journal entries when your mobile app connects to the faculty network.
                     </p>
                  </div>
               </CardContent>
            </Card>

            <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
               <div className="flex items-center gap-6">
                  <div className="size-16 rounded-3xl bg-white/10 flex items-center justify-center border border-white/10 shrink-0">
                     <Shield className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div className="text-left">
                     <h4 className="text-xl font-black">Security Health</h4>
                     <p className="text-xs text-slate-400 mt-1 font-medium">Your account is protected by hardware security keys and institutional VPN policy.</p>
                  </div>
               </div>
               <Button className="h-12 px-10 bg-white text-slate-900 font-black uppercase text-[11px] tracking-widest hover:bg-slate-50 border-none shadow-xl">
                  Advanced Security
               </Button>
            </div>
         </div>
      </div>
    </div>
  );
}
