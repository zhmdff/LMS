"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight, Printer, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TeacherSchedule() {
  const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const schedule = [
    { day: "Monday", time: "09:00", subject: "Advanced Algorithms", room: "B-302", type: "Lecture", group: "CS-640A" },
    { day: "Monday", time: "11:00", subject: "Software Quality", room: "Lab-12", type: "Lab", group: "CS-640B" },
    { day: "Tuesday", time: "10:00", subject: "Database Design", room: "A-105", type: "Lecture", group: "SWE-638B" },
    { day: "Wednesday", time: "09:00", subject: "Advanced Algorithms", room: "B-302", type: "Lecture", group: "CS-640A" },
    { day: "Wednesday", time: "14:00", subject: "Web Architecture", room: "C-201", type: "Seminar", group: "IT-645C" },
    { day: "Thursday", time: "11:00", subject: "Software Quality", room: "A-220", type: "Lecture", group: "CS-640B" },
    { day: "Friday", time: "10:00", subject: "Database Design", room: "Lab-05", type: "Lab", group: "SWE-638B" },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Lecturer Timetable</h1>
          <p className="text-slate-500 font-medium">Manage your teaching sessions, classroom assignments, and student group schedules</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="h-11 bg-white border-border text-slate-600 font-bold tracking-tight gap-2 shadow-sm">
            <Printer className="h-4 w-4" /> Export Schedule
          </Button>
          <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm px-6">
            <Calendar className="h-4 w-4" /> Academic Calendar
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-white border border-border rounded-2xl shadow-sm">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="size-10 p-0 rounded-xl text-slate-400 border border-slate-100">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Academic Period</span>
            <h3 className="text-base font-black text-[var(--color-primary)]">Semester 2, Week 4</h3>
          </div>
          <Button variant="ghost" size="sm" className="size-10 p-0 rounded-xl text-slate-400 border border-slate-100">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-400">Spring 2026</span>
          <div className="h-4 w-[1px] bg-slate-200"></div>
          <span className="text-xs font-black text-[var(--color-primary)] uppercase tracking-widest">Total: 18 Hours / Week</span>
        </div>
      </div>

      <Card className="border-border shadow-md bg-white overflow-hidden flex flex-col">
        <div className="overflow-x-auto text-left">
          <div className="min-w-[1000px]">
            <div className="grid grid-cols-[80px_repeat(5,1fr)] bg-slate-50 border-b border-border">
              <div className="p-4"></div>
              {weekDays.map((day) => (
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
                  {weekDays.map((day) => {
                    const classItem = schedule.find((s) => s.day === day && s.time === slot);
                    return (
                      <div key={`${day}-${slot}`} className="p-2 border-l border-slate-100 first:border-l-0 min-h-[110px] hover:bg-slate-50/50 transition-colors">
                        {classItem && (
                          <div className={cn("h-full rounded-2xl p-4 text-left border shadow-sm transition-all hover:shadow-md cursor-pointer", classItem.type === "Lecture" ? "bg-white border-indigo-200" : classItem.type === "Lab" ? "bg-white border-emerald-200" : "bg-white border-amber-200")}>
                            <div className="flex justify-between items-start mb-2">
                              <div className={cn("size-8 rounded-xl flex items-center justify-center", classItem.type === "Lecture" ? "bg-indigo-50 text-indigo-600" : classItem.type === "Lab" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600")}>
                                <BookOpen className="h-4 w-4" />
                              </div>
                              <div className="flex items-center gap-1 text-[9px] font-black uppercase text-slate-400">
                                <MapPin className="h-3 w-3" /> {classItem.room}
                              </div>
                            </div>
                            <h4 className="text-sm font-black text-slate-900 leading-tight mb-2 truncate">{classItem.subject}</h4>
                            <div className="mt-auto flex items-center justify-between pt-2 border-t border-slate-50">
                              <div className="flex items-center gap-1.5">
                                <Users className="h-3 w-3 text-slate-300" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase">{classItem.group}</span>
                              </div>
                              <span className={cn("text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-md", classItem.type === "Lecture" ? "bg-indigo-50 text-indigo-600" : classItem.type === "Lab" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600")}>{classItem.type}</span>
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
