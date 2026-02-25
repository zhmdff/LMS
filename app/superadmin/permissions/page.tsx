"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Shield, Key, Users, BookOpen, Clock, Settings, ArrowRight, Lock, CheckCircle2, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SuperAdminPermissions() {
  const roles = [
    { name: 'SuperAdmin', access: 'Unrestricted', users: 2, scopes: 'Global' },
    { name: 'Admin', access: 'University-wide', users: 12, scopes: 'Academic/Staff' },
    { name: 'DeptHead', access: 'Departmental', users: 28, scopes: 'Curriculum/Grades' },
    { name: 'Teacher', access: 'Classroom', users: 240, scopes: 'Journals/Scores' },
    { name: 'Tutor', access: 'Cohort', users: 45, scopes: 'Mentorship/Attendance' },
    { name: 'Student', access: 'Personal', users: 4200, scopes: 'Profile/Grades' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Role-Based Access Control (RBAC)</h1>
        <p className="text-slate-500 font-medium">Define permission scopes and inheritance for all university user roles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {roles.map((role, idx) => (
            <Card key={idx} className="border-border shadow-sm bg-white hover:border-[var(--color-primary)] transition-all group overflow-hidden">
               <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                     <div className="flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                           <Shield className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">{role.name}</h3>
                     </div>
                     <span className="text-[9px] font-black uppercase tracking-widest text-[var(--color-primary)] bg-[var(--color-primary)]/5 px-2.5 py-1 rounded-full border border-[var(--color-primary)]/10">
                        {role.access}
                     </span>
                  </div>

                  <div className="space-y-4 mb-8">
                     <div className="flex items-center justify-between py-2 border-b border-slate-50">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Permission Scopes</span>
                        <span className="text-xs font-black text-slate-700">{role.scopes}</span>
                     </div>
                     <div className="flex items-center justify-between py-2 border-b border-slate-50">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Assigned Users</span>
                        <div className="flex items-center gap-2">
                           <Users className="h-3.5 w-3.5 text-slate-300" />
                           <span className="text-xs font-black text-slate-700">{role.users}</span>
                        </div>
                     </div>
                  </div>

                  <Button className="w-full h-11 bg-slate-50 border border-slate-100 text-slate-600 font-bold tracking-tight hover:bg-[var(--color-primary)] hover:text-white transition-all text-xs">
                     Policy Configuration
                  </Button>
               </div>
            </Card>
         ))}
      </div>

      <Card className="border-border shadow-sm bg-white overflow-hidden">
         <CardHeader className="bg-slate-50/50 border-b border-border flex flex-row items-center justify-between p-4 px-6">
            <div className="flex items-center gap-2">
               <Key className="h-5 w-5 text-slate-400" />
               <CardTitle className="text-lg font-bold">Dynamic Permission Matrix</CardTitle>
            </div>
            <Button variant="outline" size="sm" className="h-8 bg-white text-[10px] font-black uppercase gap-2">
               Inheritance Flow <ChevronDown className="h-3 w-3" />
            </Button>
         </CardHeader>
         <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div className="space-y-6">
                  <div className="flex items-center gap-3">
                     <Lock className="h-4 w-4 text-[var(--color-primary)]" />
                     <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Restricted Modules</h4>
                  </div>
                  <div className="space-y-3">
                     {['System Config', 'Database Tools', 'Security Logs', 'API Management'].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                           <span className="text-xs font-bold text-slate-600">{item}</span>
                           <CheckCircle2 className="h-3.5 w-3.5 text-red-500" />
                        </div>
                     ))}
                  </div>
               </div>
               <div className="md:col-span-3 flex items-center justify-center border-2 border-dashed border-slate-100 rounded-3xl p-12 bg-slate-50/30">
                  <div className="flex flex-col items-center max-w-sm text-center">
                     <div className="size-16 rounded-full bg-white shadow-md flex items-center justify-center mb-6">
                        <Settings className="h-8 w-8 text-[var(--color-primary)]" />
                     </div>
                     <h4 className="text-lg font-black text-slate-900">Advanced Policy Builder</h4>
                     <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed mb-8">
                        Select a role card to start defining specific CRUD (Create, Read, Update, Delete) permissions for system modules.
                     </p>
                     <Button className="h-11 px-10 bg-[var(--color-primary)] text-white font-bold tracking-tight shadow-xl">
                        Launch Matrix Designer
                     </Button>
                  </div>
               </div>
            </div>
         </CardContent>
      </Card>
    </div>
  );
}
