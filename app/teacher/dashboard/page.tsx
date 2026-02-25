"use client";

import React from 'react';
import { DashboardCard } from '@/components/ui/DashboardCard';
import { Users, BookOpen, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function TeacherDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Teacher Dashboard</h1>
        <p className="text-slate-500 font-medium">Welcome back, Professor! Here's your academic summary.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard 
          title="Active Students" 
          value="124" 
          icon={Users} 
          trend={{ value: 4, isUp: true }}
        />
        <DashboardCard 
          title="Total Courses" 
          value="6" 
          icon={BookOpen} 
        />
        <DashboardCard 
          title="Next Class In" 
          value="45m" 
          icon={Calendar} 
          description="Software Engineering (640A)"
        />
        <DashboardCard 
          title="Attendance Score" 
          value="98.2%" 
          icon={CheckCircle} 
          trend={{ value: 1.2, isUp: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border shadow-sm">
          <CardHeader className="border-b border-border bg-slate-50/50">
            <CardTitle className="text-lg font-bold">Upcoming Classes</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {[
                { time: '09:00 - 10:30', subject: 'Software Engineering', group: '640A', room: 'B204' },
                { time: '11:00 - 12:30', subject: 'Database Systems', group: '638C', room: 'C102' },
                { time: '14:00 - 15:30', subject: 'Data Structures', group: '641B', room: 'Lab 4' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4 text-left">
                    <div className="bg-[var(--color-primary)]/5 text-[var(--color-primary)] p-2 rounded-lg font-bold text-xs">
                      {item.time}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.subject}</h4>
                      <p className="text-xs text-slate-500 font-medium">Group {item.group} • Room {item.room}</p>
                    </div>
                  </div>
                  <Link href="/teacher/classes/1">
                    <Button variant="outline" size="sm">View Class</Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="border-b border-border bg-slate-50/50 text-left">
            <CardTitle className="text-lg font-bold">Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {[
                { name: 'Leyla Quliyeva', type: 'Medical Excuse', date: '25 Feb' },
                { name: 'Məmməd Aliyev', type: 'Retake Request', date: '24 Feb' },
              ].map((req, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border bg-slate-50/50">
                  <div className="text-left">
                    <p className="text-sm font-bold text-slate-900">{req.name}</p>
                    <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{req.type}</p>
                  </div>
                  <Button size="sm" className="h-8 text-[10px] uppercase font-bold tracking-widest px-3">Review</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
