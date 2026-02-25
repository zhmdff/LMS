"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { User, Lock, Bell, Globe, Shield, Smartphone, Camera, Save, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StudentSettings() {
  const sections = [
    { id: 'profile', icon: User, title: 'Personal Information', desc: 'Manage your contact details and public profile data' },
    { id: 'security', icon: Lock, title: 'Security & Privacy', desc: 'Secure your account with 2FA and password management' },
    { id: 'notify', icon: Bell, title: 'Notification Center', desc: 'Configure how you receive grade and attendance alerts' },
    { id: 'display', icon: Globe, title: 'Regional & Display', desc: 'Language preferences and visual interface settings' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Account Settings</h1>
        <p className="text-slate-500 font-medium">Customize your student portal experience and manage security parameters</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         <div className="flex flex-col gap-2">
            {sections.map((s) => (
               <div key={s.id} className={cn(
                  "p-4 rounded-2xl flex items-center gap-4 cursor-pointer transition-all border",
                  s.id === 'profile' ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-lg" : "bg-white border-transparent text-slate-400 hover:bg-slate-50 hover:text-slate-600"
               )}>
                  <s.icon className="h-5 w-5 shrink-0" />
                  <div className="flex flex-col truncate">
                     <span className="text-sm font-bold">{s.title}</span>
                     <span className={cn("text-[10px] truncate", s.id === 'profile' ? "text-slate-400" : "text-slate-400")}>{s.desc}</span>
                  </div>
               </div>
            ))}
         </div>

         <div className="lg:col-span-3 space-y-6">
            <Card className="border-border shadow-sm bg-white overflow-hidden">
               <CardHeader className="bg-slate-50/50 border-b border-border p-6 flex flex-row items-center justify-between">
                  <div>
                     <CardTitle className="text-xl font-bold">Profile Identity</CardTitle>
                     <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-widest">Official University Handle: alex.morgan@unimanage.edu</p>
                  </div>
                  <Button className="h-10 bg-[var(--color-primary)] text-white font-bold tracking-tight px-6 gap-2">
                     <Save className="h-4 w-4" /> Save Identity
                  </Button>
               </CardHeader>
               <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-10 items-start mb-10">
                     <div className="relative group shrink-0">
                        <div className="size-32 rounded-3xl bg-slate-100 flex items-center justify-center border-4 border-white shadow-xl overflow-hidden group-hover:opacity-80 transition-opacity">
                           <User className="h-12 w-12 text-slate-300" />
                        </div>
                        <button className="absolute -bottom-2 -right-2 bg-[var(--color-primary)] text-white p-2.5 rounded-2xl shadow-xl hover:scale-110 transition-transform">
                           <Camera className="h-4 w-4" />
                        </button>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Legal Name</label>
                           <input type="text" defaultValue="Alex Morgan" className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-sm font-bold text-slate-700 focus:ring-1 focus:ring-[var(--color-primary)] outline-none" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Student Code</label>
                           <input type="text" value="STU-2025-0452" disabled className="w-full h-12 bg-slate-100 border border-slate-200 rounded-xl px-4 text-sm font-bold text-slate-400 cursor-not-allowed" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Contact Phone</label>
                           <div className="relative">
                              <Smartphone className="h-4 w-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                              <input type="text" defaultValue="+994 50 123 45 67" className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 text-sm font-bold text-slate-700 outline-none" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Language</label>
                           <div className="flex bg-slate-100 p-1.5 rounded-xl h-12">
                              <button className="flex-1 bg-white shadow-sm rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)]">AZERBAIJANI</button>
                              <button className="flex-1 text-[10px] font-black uppercase tracking-widest text-slate-400">ENGLISH</button>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="pt-10 border-t border-slate-100 space-y-8">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                           <div className="size-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                              <Shield className="h-5 w-5" />
                           </div>
                           <div>
                              <h4 className="text-sm font-bold text-slate-900">Two-Factor Authentication</h4>
                              <p className="text-[11px] text-slate-400 font-medium mt-0.5">Protect your student data with an extra layer of security</p>
                           </div>
                        </div>
                        <div className="h-6 w-11 bg-slate-200 rounded-full relative cursor-pointer">
                           <div className="size-4 bg-white rounded-full absolute left-1 top-1 shadow-sm transition-all"></div>
                        </div>
                     </div>

                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                           <div className="size-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                              <Bell className="h-5 w-5" />
                           </div>
                           <div>
                              <h4 className="text-sm font-bold text-slate-900">Push Notifications</h4>
                              <p className="text-[11px] text-slate-400 font-medium mt-0.5">Real-time alerts for grade publications and absence warnings</p>
                           </div>
                        </div>
                        <div className="h-6 w-11 bg-emerald-500 rounded-full relative cursor-pointer">
                           <div className="size-4 bg-white rounded-full absolute right-1 top-1 shadow-sm transition-all"></div>
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>

            <div className="flex justify-end gap-3">
               <span className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-tight">Last session activity was logged from 192.168.1.45</span>
               <Button variant="ghost" size="sm" className="h-8 text-[10px] font-black text-red-500 uppercase tracking-widest bg-red-50 hover:bg-red-100">
                  Deactivate Session
               </Button>
            </div>
         </div>
      </div>
    </div>
  );
}
