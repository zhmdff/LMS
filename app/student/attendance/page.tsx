"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, AlertCircle, CheckCircle2, XCircle, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StudentAttendance() {
  const attendanceLogs = [
    { id: 1, subject: "Software Engineering", date: "25 Feb 2026", time: "10:00 - 11:30", status: "Present", type: "Lecture" },
    { id: 2, subject: "Database Systems", date: "24 Feb 2026", time: "14:00 - 15:30", status: "Absent", type: "Lab" },
    { id: 3, subject: "Linear Algebra", date: "24 Feb 2026", time: "09:00 - 10:30", status: "Excused", type: "Seminar" },
    { id: 4, subject: "Software Engineering", date: "23 Feb 2026", time: "10:00 - 11:30", status: "Present", type: "Lecture" },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Attendance Record</h1>
        <p className="text-slate-500 font-medium">Track your daily presence and monitor absence thresholds for all current subjects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Overall Attendance</p>
          <p className="text-3xl font-black text-slate-900">92.4%</p>
          <p className="text-[10px] font-bold text-green-600">Within safety zone</p>
        </Card>
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left border-l-4 border-l-red-500">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Absences</p>
          <p className="text-3xl font-black text-slate-900">8 Hours</p>
          <p className="text-[10px] font-bold text-slate-400">Limit: 18 Hours</p>
        </Card>
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Excused Hours</p>
          <p className="text-3xl font-black text-slate-900">4 Hours</p>
          <p className="text-[10px] font-bold text-blue-500">Medical Certs verified</p>
        </Card>
        <Card className="border-border shadow-sm bg-[var(--color-primary)] p-6 flex flex-col gap-1 text-left text-white">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Compliance Status</p>
          <p className="text-2xl font-black uppercase">Academic Clear</p>
          <p className="text-[10px] font-bold text-emerald-400">No QB risk detected</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border shadow-sm bg-white overflow-hidden flex flex-col">
          <CardHeader className="bg-slate-50/50 border-b border-border p-4 px-6 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-slate-400" />
              <CardTitle className="text-lg font-bold">Session History</CardTitle>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="h-8 px-4 text-[10px] font-black uppercase tracking-widest bg-white">
                <Filter className="h-3 w-3 mr-2" /> Recent
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto text-left">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-slate-50/30">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject / Activity</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date & Time</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-white">
                  {attendanceLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900 not-italic">{log.subject}</span>
                          <span className="text-[10px] font-black text-[var(--color-primary)] uppercase tracking-widest bg-[var(--color-primary)]/5 px-1.5 py-0.5 rounded-md w-fit mt-1">{log.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-600">{log.date}</span>
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-0.5">
                            <Clock className="h-3 w-3" /> {log.time}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={cn("px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1.5", log.status === "Present" ? "bg-green-100 text-green-700" : log.status === "Absent" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700")}>
                          {log.status === "Present" ? <CheckCircle2 className="h-3 w-3" /> : log.status === "Absent" ? <XCircle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                          {log.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-border shadow-sm bg-white overflow-hidden text-left">
            <CardHeader className="bg-slate-50/50 border-b border-border">
              <CardTitle className="text-base font-bold">Subject Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-6">
              {[
                { name: "Software Engineering", rate: "98%", limit: 18, current: 2 },
                { name: "Database Systems", rate: "85%", limit: 18, current: 6 },
                { name: "Linear Algebra", rate: "90%", limit: 18, current: 4 },
              ].map((sub, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-tight">{sub.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 mt-0.5">
                        {sub.current} / {sub.limit} Hours Absent
                      </p>
                    </div>
                    <span className={cn("text-xs font-black", parseInt(sub.rate) > 90 ? "text-green-600" : "text-amber-500")}>{sub.rate}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full transition-all duration-500", parseInt(sub.rate) > 90 ? "bg-green-500" : "bg-amber-500")} style={{ width: sub.rate }}></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm bg-red-50 border-red-100 p-6 flex gap-4 text-left">
            <AlertCircle className="h-6 w-6 text-red-600 shrink-0" />
            <div className="space-y-1">
              <h4 className="text-sm font-black text-red-900 leading-tight">Absence Policy (QB)</h4>
              <p className="text-[11px] text-red-700 font-medium leading-relaxed">Students exceeding 25% (18 hours) absence in any subject will be automatically banned from final exams.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
