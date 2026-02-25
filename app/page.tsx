"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { GraduationCap, Users, ShieldCheck, UserCheck, BookOpen, LayoutDashboard, School } from 'lucide-react';
import { Role } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleRoleSelect = (role: Role) => {
    router.push(`/${role}/dashboard`);
  };

  const roles: { role: Role; title: string, icon: any, color: string }[] = [
    { role: 'student', title: 'Student', icon: GraduationCap, color: 'bg-[var(--color-primary)]' },
    { role: 'teacher', title: 'Teacher', icon: Users, color: 'bg-[var(--color-primary)]' },
    { role: 'deptHead', title: 'Dept Head', icon: UserCheck, color: 'bg-[var(--color-primary)]' },
    { role: 'admin', title: 'University Admin', icon: ShieldCheck, color: 'bg-[var(--color-primary)]' },
    { role: 'superAdmin', title: 'IT Admin', icon: LayoutDashboard, color: 'bg-[var(--color-primary)]' },
    { role: 'tutor', title: 'Tutor', icon: BookOpen, color: 'bg-[var(--color-primary)]' },
  ];

  return (
    <div className="min-h-screen bg-[#f6f6f7] flex flex-col items-center justify-center p-6 font-display w-full">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <div className="w-full space-y-4 text-center mb-12">
          <div className="inline-flex p-3 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
            <School className="h-10 w-10" />
          </div>
          <h1 className="text-4xl font-black tracking-tight text-[var(--color-primary)]">
            UniManage <span className="text-slate-400 font-bold">Portal</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-sm mx-auto">
            Academic Management Platform. Select your portal to continue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {roles.map((item) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.role} 
                className="group cursor-pointer hover:border-[var(--color-primary)] transition-all border-slate-200 shadow-sm hover:shadow-xl bg-white overflow-hidden"
                onClick={() => handleRoleSelect(item.role)}
              >
                <CardContent className="p-10 flex flex-col items-center text-center">
                  <div className="p-5 rounded-2xl bg-slate-50 text-slate-400 mb-6 transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 shadow-inner">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-black text-[var(--color-primary)] tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 mt-2 text-xs font-bold uppercase tracking-widest">Proceed to {item.role} workspace</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="mt-16 text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">
          &copy; 2026 UniManage Infrastructure • Secure Academic Environment
        </p>
      </div>
    </div>

  );
}
