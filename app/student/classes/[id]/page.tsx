"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, BookOpen, User, Layout, FileText, Award, Calendar, History, CheckCircle2, AlertTriangle, Monitor, Target, FileCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

export default function StudentClassDetail() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("overall");

  const subject = {
    name: "Software Engineering",
    code: "CS301",
    teacher: "Dr. James Miller",
    room: "B-204",
    credits: 6,
    attendance: "14/18",
    score: 82,
  };

  const tabs = [
    { id: "overall", label: "Overall Details", icon: Monitor },
    { id: "lessons", label: "Lesson List", icon: Layout },
    { id: "kollekvium", label: "Kollekviumlar", icon: FileText },
    { id: "serbest", label: "Sərbəst İş", icon: Award },
    { id: "exam", label: "Exam", icon: FileCheck },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex items-center gap-2 text-slate-400 mb-1 text-sm font-medium">
        <Link href="/student/classes" className="hover:text-[var(--color-primary)] flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" /> Back to My Classes
        </Link>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl border border-border shadow-sm">
        <div className="flex items-center gap-6">
          <div className="size-20 rounded-[2.5rem] bg-[var(--color-primary)] text-white flex items-center justify-center text-4xl font-semibold shadow-2xl">{subject.name[0]}</div>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">{subject.name}</h1>
            <div className="flex items-center gap-4 text-slate-400 font-medium text-sm">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-slate-300" /> {subject.teacher}
              </span>
              <span className="text-slate-200">•</span>
              <span>{subject.code}</span>
              <span className="text-slate-200">•</span>
              <span>{subject.credits} Credits</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 px-8 py-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-2">Attendance</span>
            <p className="text-2xl font-semibold text-slate-900 leading-none">{subject.attendance}</p>
          </div>
          <div className="h-8 w-[1px] bg-slate-200"></div>
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-2">Current Score</span>
            <p className="text-2xl font-semibold text-[var(--color-primary)] leading-none">{subject.score} / 100</p>
          </div>
        </div>
      </div>

      {/* Modern Tab Navigation */}
      <div className="flex items-center gap-2 p-1.5 bg-white border border-border rounded-2xl w-fit shadow-sm overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn("flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all", activeTab === tab.id ? "bg-[var(--color-primary)] text-white shadow-lg scale-105" : "text-slate-400 hover:bg-slate-50 hover:text-slate-600")}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="mt-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === "overall" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-8 border-border shadow-sm bg-white border-t-4 border-t-indigo-500 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-indigo-50 p-3 rounded-2xl">
                      <Target className="h-6 w-6 text-indigo-600" />
                    </div>
                    <Award className="h-5 w-5 text-slate-200" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Academic Standing</h3>
                  <p className="text-xs text-slate-400 font-medium mt-1 leading-relaxed">You are currently in the top 15% of the class. Maintain activity for final bonus.</p>
                  <div className="mt-8 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex justify-between items-center">
                    <span className="text-[10px] font-semibold text-indigo-700 uppercase tracking-widest">Predicted Grade</span>
                    <span className="text-xl font-semibold text-indigo-700">A</span>
                  </div>
                </Card>
                <Card className="p-8 border-border shadow-sm bg-[var(--color-primary)] text-white border-t-4 border-t-amber-500 hover:shadow-xl transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-white/10 p-3 rounded-2xl">
                      <AlertTriangle className="h-6 w-6 text-amber-400" />
                    </div>
                    <History className="h-5 w-5 text-white/10" />
                  </div>
                  <h3 className="text-lg font-semibold">Attendance Threshold</h3>
                  <p className="text-xs text-slate-400 font-medium mt-1 leading-relaxed">4 hours remaining until system lock. Please ensure all medical documents are synced.</p>
                  <div className="mt-8 flex items-end gap-3">
                    <span className="text-4xl font-semibold text-white">78%</span>
                    <span className="text-[10px] font-medium text-slate-400 uppercase mb-1.5">Present</span>
                  </div>
                </Card>
              </div>
              <Card className="p-6 border-border shadow-sm bg-white">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-2">
                    <History className="h-4 w-4 text-slate-400" />
                    <CardTitle className="text-base font-semibold">Subject Prerequisites</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-sm font-medium text-slate-500 leading-relaxed">
                      Successful completion of this subject is required to enroll in <span className="text-[var(--color-primary)] font-semibold">Advanced Software Architecture (AS401)</span> in the upcoming semester.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="border-border shadow-sm bg-white overflow-hidden">
                <CardHeader className="bg-slate-50/50 border-b border-border">
                  <CardTitle className="text-sm font-semibold">Session Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Lection Hours</span>
                    <span className="text-sm font-semibold text-slate-700">12 / 12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Lab Sessions</span>
                    <span className="text-sm font-semibold text-slate-700">2 / 6</span>
                  </div>
                  <div className="h-[1px] bg-slate-100 w-full"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[var(--color-primary)] uppercase tracking-widest">Total Progress</span>
                    <span className="text-sm font-semibold text-[var(--color-primary)]">77%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "lessons" && (
          <Card className="border-border shadow-sm bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-semibold text-slate-400 uppercase tracking-widest text-left">Date / Session</th>
                    <th className="px-6 py-4 text-[10px] font-semibold text-slate-400 uppercase tracking-widest text-right">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-white">
                  {[
                    { date: "Feb 25, 2026", session: "Session 08", status: "i.e", points: "1.0" },
                    { date: "Feb 22, 2026", session: "Session 07", status: "q.b", points: "0.0" },
                    { date: "Feb 18, 2026", session: "Session 06", status: "i.e", points: "0.0" },
                    { date: "Feb 15, 2026", session: "Session 05", status: "i.e", points: "0.8" },
                  ].map((log, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-slate-600">{log.date}</span>
                          <span className="text-[9px] font-medium text-slate-400 uppercase">{log.session}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className={cn("text-sm font-semibold transition-all", log.status === "q.b" ? "text-red-500" : "text-[var(--color-primary)]")}>{log.status === "q.b" ? "q.b" : parseFloat(log.points) > 0 ? log.points : "i.e"}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === "kollekvium" && (
          <Card className="border-border shadow-sm bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-semibold text-slate-400 uppercase tracking-widest text-left">Exam / Date</th>
                    <th className="px-6 py-4 text-[10px] font-semibold text-slate-400 uppercase tracking-widest text-center">Status</th>
                    <th className="px-6 py-4 text-[10px] font-semibold text-slate-400 uppercase tracking-widest text-right">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-white">
                  {[
                    { name: "Kollekvium I", date: "Feb 10, 2026", max: 25, score: 22, status: "Finalized" },
                    { name: "Kollekvium II", date: "Mar 15, 2026", max: 25, score: null, status: "Scheduled" },
                  ].map((k, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-slate-700">{k.name}</span>
                          <span className="text-[9px] font-medium text-slate-400 uppercase">{k.date}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest", k.status === "Finalized" ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700")}>{k.status}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-baseline justify-end gap-1">
                          <span className="text-sm font-semibold text-[var(--color-primary)]">{k.score !== null ? k.score : "--"}</span>
                          <span className="text-[10px] font-medium text-slate-300">/ {k.max}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === "serbest" && (
          <Card className="border-border shadow-sm bg-white overflow-hidden max-w-2xl">
            <div className="p-10 text-center flex flex-col items-center">
              <div className="size-20 rounded-[2rem] bg-amber-50 text-amber-500 flex items-center justify-center mb-6 shadow-inner border border-amber-100">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Sərbəst İş Management</h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-sm mb-12">
                This is a one-time assessment with a maximum weight of <span className="text-[var(--color-primary)] font-semibold">15.0 points</span>. Topic must be approved by the lecturer before submission.
              </p>

              <div className="w-full bg-slate-50 border border-slate-100 rounded-3xl p-8 flex justify-between items-center group hover:border-[var(--color-primary)] transition-all cursor-pointer">
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1.5">Current Submission</span>
                  <p className="text-lg font-semibold text-slate-900 leading-tight">Optimization of DB Queries</p>
                  <p className="text-[10px] font-medium text-emerald-600 uppercase tracking-widest mt-1">Status: Evaluated</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-[var(--color-primary)]">12.5</span>
                  <span className="text-lg font-medium text-slate-300">/ 15</span>
                </div>
              </div>
            </div>
          </Card>
        )}

        {activeTab === "exam" && (
          <Card className="border-border shadow-sm bg-white overflow-hidden max-w-2xl border-t-8 border-t-[var(--color-primary)]">
            <div className="p-10">
              <div className="flex justify-between items-start mb-10">
                <div className="flex flex-col gap-1">
                  <h3 className="text-3xl font-semibold text-slate-900">Final Assessment</h3>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-widest leading-none">Spring Session 2026</p>
                </div>
                <div className="size-14 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center shadow-lg">
                  <FileCheck className="h-7 w-7" />
                </div>
              </div>

              <div className="space-y-6 mb-12">
                <div className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Exam Date</span>
                  <span className="text-sm font-semibold text-slate-700">June 12, 2026 • 10:00</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Hall Assignment</span>
                  <span className="text-sm font-semibold text-slate-700">Auditorium A-501</span>
                </div>
              </div>

              <div className="flex flex-col items-center bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl skew-x-[-1deg]">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.3em] mb-4">Exam result Score</span>
                <p className="text-7xl font-semibold">Not Ready</p>
                <p className="text-xs text-slate-500 mt-6 font-medium">Evaluation triggered upon examiner synchronization.</p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
