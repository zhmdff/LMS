"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Users, Search, Filter, Plus, Mail, Shield, MoreVertical, UserCheck, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminUserManagement() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@uni.edu', role: 'Teacher', dept: 'Computer Science', status: 'Active' },
    { id: 2, name: 'Sarah Connor', email: 'sarah@uni.edu', role: 'Admin', dept: 'Rectorate', status: 'Active' },
    { id: 3, name: 'Alan Turing', email: 'alan@uni.edu', role: 'DeptHead', dept: 'Engineering', status: 'Active' },
    { id: 4, name: 'Emily Watts', email: 'emily@uni.edu', role: 'Tutor', dept: 'Arts & Design', status: 'Locked' },
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Admin': return <Shield className="h-4 w-4" />;
      case 'DeptHead': return <ShieldAlert className="h-4 w-4" />;
      case 'Teacher': return <UserCheck className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'bg-red-50 text-red-600 border-red-100';
      case 'DeptHead': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'Teacher': return 'bg-blue-50 text-blue-600 border-blue-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Access Control & Staff</h1>
          <p className="text-slate-500 font-medium">Directory of all authorized personnel: Manage roles, security clearance, and faculty accounts</p>
        </div>
        <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm px-6">
           <Plus className="h-4 w-4" /> Register Staff Member
        </Button>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-border shadow-sm bg-white">
        <div className="relative w-full md:w-96">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by name, email or department..." 
            className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-border rounded-lg text-sm focus:ring-1 focus:ring-[var(--color-primary)] outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest gap-2 bg-white">
             <Filter className="h-4 w-4" /> Role: All
          </Button>
          <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Personnel: 128</span>
        </div>
      </Card>

      <Card className="border-border shadow-sm bg-white overflow-hidden">
         <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
               <thead className="bg-slate-50/50">
                  <tr>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Staff Member</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Role / Clearance</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Department</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-border bg-white">
                  {users.map((user) => (
                     <tr key={user.id} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center gap-4">
                              <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-400 border border-border group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                                 {user.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div className="flex flex-col">
                                 <h4 className="text-sm font-bold text-slate-900">{user.name}</h4>
                                 <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                                    <Mail className="h-3 w-3" /> {user.email}
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className={cn(
                              "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border inline-flex items-center gap-2",
                              getRoleColor(user.role)
                           )}>
                              {getRoleIcon(user.role)}
                              {user.role}
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-600">
                           {user.dept}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                           <span className={cn(
                              "text-[10px] font-black px-2 py-0.5 rounded-full",
                              user.status === 'Active' ? "text-green-600 bg-green-50" : "text-red-500 bg-red-50"
                           )}>{user.status}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                           <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-300 hover:text-slate-600">
                              <MoreVertical className="h-4 w-4" />
                           </Button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </Card>
    </div>
  );
}
