"use client";

import React from 'react';
import { DashboardCard } from '@/components/ui/DashboardCard';
import { Users, School, BookOpen, Activity, UserPlus, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">University Overview</h1>
        <p className="text-slate-500 font-medium">Monitoring university-wide academic performance and operations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard 
          title="Total Students" 
          value="4,289" 
          icon={Users} 
          trend={{ value: 12, isUp: true }}
        />
        <DashboardCard 
          title="Faculty Members" 
          value="245" 
          icon={School} 
        />
        <DashboardCard 
          title="Active Courses" 
          value="156" 
          icon={BookOpen} 
        />
        <DashboardCard 
          title="System Health" 
          value="99.9%" 
          icon={Activity} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border shadow-sm">
          <CardHeader className="border-b border-border bg-slate-50/50 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold">Recent Student Registrations</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {[
                { name: 'Alex Morgan', id: '#2024001', faculty: 'Engineering', date: '10 mins ago' },
                { name: 'Sarah Johnson', id: '#2024002', faculty: 'Arts', date: '25 mins ago' },
                { name: 'Michael Chen', id: '#2024003', faculty: 'Computer Science', date: '1 hour ago' },
                { name: 'Emily Parker', id: '#2024004', faculty: 'Business', date: '2 hours ago' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4 text-left">
                    <div className="bg-slate-100 p-2 rounded-lg">
                      <UserPlus className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">{item.id} • {item.faculty}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {item.date}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="border-b border-border bg-slate-50/50 text-left">
            <CardTitle className="text-lg font-bold">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex flex-col gap-3">
            <Button className="w-full justify-start gap-3 h-12">
              <UserPlus className="h-5 w-5" /> Add New Student
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3 h-12">
              <School className="h-5 w-5" /> Manage Faculty
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3 h-12">
              <BookOpen className="h-5 w-5" /> Course Catalog
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
