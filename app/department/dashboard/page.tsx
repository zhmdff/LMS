"use client";

import React from 'react';
import { DashboardCard } from '@/components/ui/DashboardCard';
import { Users, GraduationCap, BookOpen, AlertCircle, FileText, CheckSquare } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function DeptHeadDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Department Administration</h1>
        <p className="text-slate-500 font-medium">Faculty of Engineering • Computer Science Department</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard 
          title="Total Students" 
          value="842" 
          icon={GraduationCap} 
        />
        <DashboardCard 
          title="Faculty Members" 
          value="38" 
          icon={Users} 
        />
        <DashboardCard 
          title="Curriculum Items" 
          value="42" 
          icon={BookOpen} 
        />
        <DashboardCard 
          title="Alerts" 
          value="5" 
          icon={AlertCircle} 
          color="red"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border shadow-sm">
          <CardHeader className="border-b border-border bg-slate-50/50 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold">Faculty Teaching Load</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {[
                { name: 'Dr. James Smith', hours: 18, subjects: 3, status: 'Overload' },
                { name: 'Dr. Maria Garcia', hours: 14, subjects: 2, status: 'Normal' },
                { name: 'Prof. Robert Wilson', hours: 12, subjects: 2, status: 'Normal' },
                { name: 'Dr. Linda Taylor', hours: 22, subjects: 4, status: 'Critical' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{item.subjects} Subjects • {item.hours} hrs/week</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    item.status === 'Critical' ? 'bg-red-100 text-red-700' : 
                    item.status === 'Overload' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="border-b border-border bg-slate-50/50 text-left">
            <CardTitle className="text-lg font-bold">Pending Tasks</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            {[
              { task: 'Approve Exam Schedule', type: 'Exams' },
              { task: 'Review Course Material', type: 'Academic' },
              { task: 'Faculty Meeting', type: 'General' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 text-left">
                <div className="bg-slate-100 p-2 rounded-lg h-fit">
                  <CheckSquare className="h-4 w-4 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.task}</p>
                  <p className="text-[11px] text-slate-400 font-medium uppercase">{item.type}</p>
                </div>
              </div>
            ))}
            <Button className="w-full mt-2">Go to Tasks</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
