"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { DashboardCard } from '@/components/ui/DashboardCard';
import { GraduationCap, Calendar, AlertTriangle, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function StudentDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Academic Overview</h1>
        <p className="text-slate-500 font-medium">Spring Semester 2026 • Faculty of Engineering</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard 
          title="Current GPA" 
          value="3.84" 
          icon={GraduationCap} 
        />
        <DashboardCard 
          title="Attendance" 
          value="92%" 
          icon={Calendar} 
          trend={{ value: 2, isUp: false }}
        />
        <DashboardCard 
          title="Absence Limit" 
          value="4/6" 
          icon={AlertTriangle} 
          color="red"
          description="Risk in Software Engineering"
        />
        <DashboardCard 
          title="Total Credits" 
          value="30" 
          icon={BookOpen} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border shadow-sm">
          <CardHeader className="border-b border-border bg-slate-50/50 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold">Active Subjects & Progress</CardTitle>
            <Button variant="ghost" size="sm" className="text-[var(--color-primary)]">View All</Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {[
                { name: 'Software Engineering', teacher: 'Dr. James Smith', attendance: '14/18', score: 82, status: 'At Risk' },
                { name: 'Database Management', teacher: 'Dr. Maria Garcia', attendance: '16/18', score: 94, status: 'Excellent' },
                { name: 'Artificial Intelligence', teacher: 'Prof. Robert Wilson', attendance: '18/18', score: 88, status: 'Good' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="text-left flex-1">
                    <div className="flex items-center gap-3">
                      <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                      {item.status === 'At Risk' && (
                        <span className="bg-red-100 text-red-600 text-[10px] font-black uppercase tracking-tighter px-2 py-0.5 rounded-full">At Risk</span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 font-medium">{item.teacher} • Attendance: {item.attendance}</p>
                    <div className="mt-3 max-w-xs space-y-1.5">
                       <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                         <span>Current Grade Potential</span>
                         <span>{item.score}%</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                         <div className={`h-full rounded-full ${item.status === 'At Risk' ? 'bg-red-500' : 'bg-[var(--color-primary)]'}`} style={{ width: `${item.score}%` }}></div>
                       </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="p-2">
                    <ChevronRight className="h-5 w-5 text-slate-400" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="border-b border-border bg-slate-50/50 text-left">
            <CardTitle className="text-lg font-bold">Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
             {[
               { time: '09:00 - 10:30', subject: 'Software Engineering', room: 'B204', icon: Clock },
               { time: '11:00 - 12:30', subject: 'Database Systems', room: 'C102', icon: Clock },
             ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50/50 border border-border text-left">
                   <div className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] p-2.5 rounded-lg h-fit">
                      <item.icon className="h-5 w-5" />
                   </div>
                   <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.time}</p>
                      <h4 className="text-base font-bold text-slate-900 leading-tight mt-0.5">{item.subject}</h4>
                      <p className="text-xs text-slate-500 font-medium mt-1">Room {item.room}</p>
                   </div>
                </div>
             ))}
             <Button className="w-full h-11 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white font-bold tracking-tight">
               Open Full Schedule
             </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
