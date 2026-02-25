"use client";

import React from 'react';
import { DashboardCard } from '@/components/ui/DashboardCard';
import { Users, GraduationCap, ClipboardCheck, MessageSquare, Clock, UserCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function TutorDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Tutor Workspace</h1>
        <p className="text-slate-500 font-medium">Assigned Groups: 640A, 642B, 645C</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard 
          title="Total Students" 
          value="72" 
          icon={Users} 
        />
        <DashboardCard 
          title="Groups Managed" 
          value="3" 
          icon={UserCheck} 
        />
        <DashboardCard 
          title="Avg. Attendance" 
          value="94%" 
          icon={ClipboardCheck} 
        />
        <DashboardCard 
          title="New Messages" 
          value="8" 
          icon={MessageSquare} 
          trend={{ value: 2, isUp: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border shadow-sm">
          <CardHeader className="border-b border-border bg-slate-50/50 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold">Group Performance Tracking</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {[
                { group: '640A', students: 24, attendance: '96%', performance: 'High' },
                { group: '642B', students: 26, attendance: '92%', performance: 'Average' },
                { group: '645C', students: 22, attendance: '88%', performance: 'Warning' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-xl">Group {item.group}</h4>
                    <p className="text-sm text-slate-500 font-medium">{item.students} Students • Average Attendance: {item.attendance}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    item.performance === 'Warning' ? 'bg-red-100 text-red-700' : 
                    item.performance === 'Average' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {item.performance}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="border-b border-border bg-slate-50/50 text-left">
            <CardTitle className="text-lg font-bold">Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            {[
              { event: 'Midterm Report Due', date: 'Tomorrow', urgency: 'High' },
              { event: 'Group 640A Consultation', date: '27 Feb', urgency: 'Low' },
              { event: 'Attendance Audit', date: '01 Mar', urgency: 'Medium' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1 text-left p-3 rounded-lg bg-slate-50/50 border border-border">
                <p className="text-sm font-bold text-slate-900">{item.event}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {item.date}
                  </span>
                  <span className={`text-[9px] font-black uppercase ${
                    item.urgency === 'High' ? 'text-red-600' : 
                    item.urgency === 'Medium' ? 'text-amber-600' : 'text-blue-600'
                  }`}>
                    {item.urgency}
                  </span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">Open Calendar</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
