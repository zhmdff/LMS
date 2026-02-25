"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check, X, Clock, HelpCircle, ChevronLeft } from 'lucide-react';
import { toast } from 'react-toastify';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type AttendanceStatus = 'ie' | 'qb' | 'qis' | null;

interface Student {
  id: string;
  name: string;
  group: string;
  status: AttendanceStatus;
}

const mockStudents: Student[] = [
  { id: '1', name: 'Aliyev Məmməd', group: '640A', status: null },
  { id: '2', name: 'Quliyeva Leyla', group: '640A', status: null },
  { id: '3', name: 'Hüseynov Raman', group: '640A', status: null },
];

export default function AttendancePage() {
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [timeLeft, setTimeLeft] = useState(900);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsLocked(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const setStatus = (id: string, status: AttendanceStatus) => {
    if (isLocked) {
      toast.error("Attendance window closed.");
      return;
    }
    setStudents(prev => prev.map(s => s.id === id ? { ...s, status } : s));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 text-left">
          <div className="flex items-center gap-2 text-slate-400 mb-1 text-sm font-medium">
            <Link href="/teacher/dashboard" className="hover:text-[var(--color-primary)] flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" /> Back to Dashboard
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Attendance Entry</h1>
          <p className="text-slate-500">Software Engineering (Lecture) • 09:00 - 10:30</p>
        </div>

        <div className={cn(
          "flex items-center gap-3 px-6 py-3 rounded-xl border shadow-sm bg-white",
          isLocked ? "border-red-200 text-red-600" : "border-slate-200 text-[var(--color-primary)]"
        )}>
          <Clock className="h-5 w-5" />
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Lock Window</span>
            <span className="text-xl font-bold tabular-nums leading-tight">{isLocked ? "EXPIRED" : formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      <Card className="border-[#E2E8F0] shadow-sm overflow-hidden bg-white">
        <div className="divide-y divide-slate-200">
          {students.map((student) => (
            <div key={student.id} className="p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4 text-left">
                <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                  {student.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{student.name}</h3>
                  <p className="text-sm text-slate-500 font-medium">Group {student.group}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setStatus(student.id, 'ie')}
                  className={cn(
                    "h-14 w-24 rounded-lg text-sm font-bold border transition-all",
                    student.status === 'ie' 
                      ? "bg-green-600 border-green-600 text-white shadow-md scale-105" 
                      : "bg-white border-slate-200 text-slate-400 hover:border-green-500 hover:text-green-600"
                  )}
                >
                  i.e
                </button>
                <button
                  onClick={() => setStatus(student.id, 'qb')}
                  className={cn(
                    "h-14 w-24 rounded-lg text-sm font-bold border transition-all",
                    student.status === 'qb' 
                      ? "bg-red-600 border-red-600 text-white shadow-md scale-105" 
                      : "bg-white border-slate-200 text-slate-400 hover:border-red-500 hover:text-red-600"
                  )}
                >
                  q.b
                </button>
                <button
                  onClick={() => setStatus(student.id, 'qis')}
                  className={cn(
                    "h-14 w-24 rounded-lg text-sm font-bold border transition-all",
                    student.status === 'qis' 
                      ? "bg-amber-500 border-amber-500 text-white shadow-md scale-105" 
                      : "bg-white border-slate-200 text-slate-400 hover:border-amber-500 hover:text-amber-600"
                  )}
                >
                  q.iş
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex justify-end gap-3 mt-4">
        {isLocked && (
          <Button variant="outline" size="lg" className="border-red-200 text-red-600 hover:bg-red-50">
            Submit Correction
          </Button>
        )}
        <Button size="lg" className="px-10 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white shadow-lg">
          Save Attendance
        </Button>
      </div>
    </div>
  );
}
