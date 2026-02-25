"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, Clock, MapPin, User, ChevronLeft, ChevronRight, Printer } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StudentSchedule() {
  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  const schedule = [
    { day: 'Monday', time: '09:00', subject: 'Linear Algebra', room: 'B-302', type: 'Lecture', instructor: 'Dr. James Miller' },
    { day: 'Monday', time: '11:00', subject: 'Software Engineering', room: 'Lab-12', type: 'Lab', instructor: 'Prof. Sarah Smith' },
    { day: 'Tuesday', time: '10:00', subject: 'Database Systems', room: 'A-105', type: 'Lecture', instructor: 'Dr. John Doe' },
    { day: 'Wednesday', time: '09:00', subject: 'Linear Algebra', room: 'B-302', type: 'Lecture', instructor: 'Dr. James Miller' },
    { day: 'Wednesday', time: '14:00', subject: 'Academic English', room: 'C-201', type: 'Seminar', instructor: 'Ms. Emily Blunt' },
    { day: 'Thursday', time: '11:00', subject: 'Software Engineering', room: 'A-220', type: 'Lecture', instructor: 'Prof. Sarah Smith' },
    { day: 'Friday', time: '10:00', subject: 'Database Systems', room: 'Lab-05', type: 'Lab', instructor: 'Dr. John Doe' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Weekly Timetable</h1>
          <p className="text-slate-500 font-medium">Monitor session timings, room assignments, and instructor details for your semester groups</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="h-11 bg-white border-border text-slate-600 font-bold tracking-tight gap-2 shadow-sm">
              <Printer className="h-4 w-4" /> Print PDF
           </Button>
           <div className="flex bg-slate-100 p-1 rounded-xl">
              <Button size="sm" className="h-9 px-4 bg-white shadow-sm text-[var(--color-primary)] font-bold text-xs ring-0">Weekly View</Button>
              <Button size="sm" variant="ghost" className="h-9 px-4 text-slate-400 font-bold text-xs hover:text-[var(--color-primary)]">Daily</Button>
           </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-white border border-border rounded-2xl shadow-sm">
         <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="size-10 p-0 rounded-xl text-slate-400 border border-slate-100"><ChevronLeft className="h-5 w-5" /></Button>
            <div className="flex flex-col text-left">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Academic Period</span>
               <h3 className="text-base font-black text-[var(--color-primary)]">Feb 23 - Feb 27, 2026</h3>
            </div>
            <Button variant="ghost" size="sm" className="size-10 p-0 rounded-xl text-slate-400 border border-slate-100"><ChevronRight className="h-5 w-5" /></Button>
         </div>
         <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-slate-300" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">Week 4 / 15</span>
         </div>
      </div>

      <Card className="border-border shadow-md bg-white overflow-hidden flex flex-col">
         <div className="overflow-x-auto">
            <div className="min-w-[1000px]">
               <div className="grid grid-cols-[80px_repeat(5,1fr)] bg-slate-50/50 border-b border-border">
                  <div className="p-4"></div>
                  {weekDays.map(day => (
                     <div key={day} className="p-4 text-center border-l border-border first:border-l-0">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{day}</span>
                     </div>
                  ))}
               </div>
               
               <div className="relative">
                  {timeSlots.map((slot, idx) => (
                     <div key={slot} className="grid grid-cols-[80px_repeat(5,1fr)] border-b border-slate-100 last:border-b-0">
                        <div className="p-4 flex items-center justify-center border-r border-border bg-slate-50/30">
                           <span className="text-[10px] font-black text-slate-400">{slot}</span>
                        </div>
                        {weekDays.map(day => {
                           const classItem = schedule.find(s => s.day === day && s.time === slot);
                           return (
                              <div key={`${day}-${slot}`} className="p-2 border-l border-slate-100 first:border-l-0 min-h-[100px] hover:bg-slate-50/50 transition-colors">
                                 {classItem && (
                                    <div className={cn(
                                       "h-full rounded-xl p-3 text-left border shadow-sm transition-transform hover:scale-[1.02] cursor-pointer",
                                       classItem.type === 'Lecture' ? "bg-indigo-50 border-indigo-100 text-indigo-700" :
                                       classItem.type === 'Lab' ? "bg-emerald-50 border-emerald-100 text-emerald-700" :
                                       "bg-amber-50 border-amber-100 text-amber-700"
                                    )}>
                                       <div className="flex justify-between items-start mb-2">
                                          <span className="text-[8px] font-black uppercase tracking-widest border border-current/20 px-1.5 py-0.5 rounded-full">{classItem.type}</span>
                                          <div className="flex items-center gap-1 text-[9px] font-bold">
                                             <MapPin className="h-3 w-3" /> {classItem.room}
                                          </div>
                                       </div>
                                       <h4 className="text-xs font-black leading-tight mb-2 h-8 overflow-hidden">{classItem.subject}</h4>
                                       <div className="mt-auto pt-2 border-t border-current/10 flex items-center gap-2">
                                          <div className="size-5 rounded-full bg-current/10 flex items-center justify-center text-[7px] font-black">
                                             {classItem.instructor.split(' ').map(n => n[0]).join('')}
                                          </div>
                                          <span className="text-[9px] font-medium opacity-70 truncate">{classItem.instructor}</span>
                                       </div>
                                    </div>
                                 )}
                              </div>
                           );
                        })}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </Card>
    </div>
  );
}
