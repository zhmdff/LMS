"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { toast } from 'react-toastify';
import { 
  ChevronLeft, 
  Users, 
  Monitor, 
  Layout, 
  FileText, 
  Award, 
  FileCheck, 
  UserPlus, 
  Printer, 
  Search,
  MoreVertical,
  CheckCircle2,
  AlertTriangle,
  History,
  ShieldCheck,
  Edit3,
  XCircle,
  CheckCircle,
  Save,
  Plus,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';

export default function TeacherClassDetail() {
  const params = useParams();
  const [activeTab, setActiveTab ] = useState('overall');
  
  // Attendance & Lesson State
  const [isMarkingAttendance, setIsMarkingAttendance] = useState(false);
  const [isAttendanceDone, setIsAttendanceDone] = useState(false);
  const [isAttendanceSaved, setIsAttendanceSaved] = useState(false);

  // Creation States
  const [isCreatingKollekvium, setIsCreatingKollekvium] = useState(false);
  const [isCreatingSerbest, setIsCreatingSerbest] = useState(false);
  const [weekOffset, setWeekOffset] = useState(0);

  // Kollekvium State
  type KolSession = { id: string; label: string; date: string; locked: boolean; grades: Record<string, number | null> };
  const initialSessions: KolSession[] = [
    { id: 'kol1', label: 'Koll. I', date: 'Feb 10, 2026', locked: true,  grades: { ST001: 12, ST002: 10, ST003: 15, ST004: 9 } },
    { id: 'kol2', label: 'Koll. II', date: 'Feb 25, 2026', locked: false, grades: { ST001: null, ST002: null, ST003: null, ST004: null } },
  ];
  const [kolSessions, setKolSessions] = useState<KolSession[]>(initialSessions);
  const [activeKolId, setActiveKolId] = useState<string>('kol2');
  const activeSession = kolSessions.find(s => s.id === activeKolId);

  const handleKolGradeChange = (stuId: string, val: number) => {
    setKolSessions(prev => prev.map(s => s.id === activeKolId ? { ...s, grades: { ...s.grades, [stuId]: val } } : s));
  };

  const handleCreateKollekvium = () => {
    const newId = `kol${kolSessions.length + 1}`;
    const newSession: KolSession = {
      id: newId,
      label: `Koll. ${toRoman(kolSessions.length + 1)}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      locked: false,
      grades: Object.fromEntries(initialStudents.map(s => [s.id, null])),
    };
    setKolSessions(prev => [...prev, newSession]);
    setActiveKolId(newId);
  };

  const handleSaveKol = () => {
    setKolSessions(prev => prev.map(s => s.id === activeKolId ? { ...s, locked: true } : s));
    toast.success(`${activeSession?.label} uğurla yadda saxlanıldı`);
  };

  function toRoman(n: number): string {
    const vals = [10,9,5,4,1]; const syms = ['X','IX','V','IV','I'];
    let r = ''; vals.forEach((v,i) => { while(n>=v){ r+=syms[i]; n-=v; } }); return r;
  }

  const getDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i + (weekOffset * 7));
      days.push(date);
    }
    return days;
  };

  const days = getDays();

  const classData = {
    subject: "Software Engineering",
    group: "CS-640A",
    students: 24,
    type: "Lecture",
    attendanceAvg: "92%",
    performanceAvg: 84.2,
  };

  const initialStudents = [
    { id: 'ST001', name: 'Alex Morgan', kol1: 22, kol2: null, serbest: 14.5, exam: null, attendance: '18/18', currentStatus: 'i.e', currentPoint: '' },
    { id: 'ST002', name: 'Sarah Johnson', kol1: 18, kol2: null, serbest: 12.0, exam: null, attendance: '16/18', currentStatus: 'i.e', currentPoint: '' },
    { id: 'ST003', name: 'Michael Chen', kol1: 15, kol2: null, serbest: 15.0, exam: null, attendance: '18/18', currentStatus: 'i.e', currentPoint: '' },
    { id: 'ST004', name: 'Jessica Parker', kol1: 12, kol2: null, serbest: 8.5, exam: null, attendance: '10/18', currentStatus: 'i.e', currentPoint: '' },
  ];

  const [students, setStudents] = useState(initialStudents);

  const tabs = [
    { id: 'overall', label: 'Overall Details', icon: Monitor },
    { id: 'lessons', label: 'Lesson List', icon: Layout },
    { id: 'grading', label: 'Qiymətləndirmə', icon: Edit3 },
    { id: 'kollekvium', label: 'Kollekviumlar', icon: FileText },
    { id: 'serbest', label: 'Sərbəst İş', icon: Award },
    { id: 'exam', label: 'Exam', icon: FileCheck },
  ];

  const toggleAttendance = (id: string, status: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, currentStatus: status } : s));
  };

  const handlePointChange = (id: string, point: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, currentPoint: point } : s));
  };

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex items-center gap-2 text-slate-400 mb-1 text-sm font-medium">
        <Link href="/teacher/classes" className="hover:text-[var(--color-primary)] flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" /> Back to My Classes
        </Link>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl border border-border shadow-sm">
        <div className="flex items-center gap-6">
           <div className="size-16 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center text-3xl font-semibold shadow-lg">
              {classData.subject[0]}
           </div>
           <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                 <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">{classData.subject}</h1>
              </div>
              <div className="flex items-center gap-4 text-slate-400 font-medium text-xs">
                 <span className="flex items-center gap-2 text-slate-900 font-semibold uppercase tracking-widest leading-none bg-slate-100 px-2 py-1 rounded border border-slate-200">Group {classData.group}</span>
                 <span className="text-slate-200">•</span>
                 <span>{classData.students} Students Enrolled</span>
              </div>
           </div>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="h-10 px-4 rounded-xl border-border bg-white text-slate-600 font-medium text-xs gap-2">
              <Printer className="h-4 w-4" /> Export Journal
           </Button>
           <Button className="h-10 px-6 bg-[var(--color-primary)] text-white font-semibold uppercase text-[10px] tracking-widest shadow-lg hover:opacity-90 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> Lock Results
           </Button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-2xl w-fit shadow-inner overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                // Reset creation states when switching tabs
                setIsCreatingKollekvium(false);
                setIsCreatingSerbest(false);
              }}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-semibold uppercase tracking-widest transition-all",
                activeTab === tab.id 
                  ? "bg-white text-[var(--color-primary)] shadow-sm scale-100" 
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
        {activeTab === 'overall' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <Card className="p-6 border-border shadow-sm bg-white border-b-2 border-b-emerald-500 hover:shadow-md transition-all">
              <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Attendance Rate</p>
              <h3 className="text-3xl font-semibold text-slate-900 tracking-tighter">{classData.attendanceAvg}</h3>
              <div className="mt-4 h-1 w-full bg-slate-50 rounded-full">
                 <div className="h-full bg-emerald-500 rounded-full" style={{ width: classData.attendanceAvg }}></div>
              </div>
            </Card>
            <Card className="p-6 border-border shadow-sm bg-white border-b-2 border-b-indigo-500 hover:shadow-md transition-all">
              <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Class Performance</p>
              <h3 className="text-3xl font-semibold text-slate-900 tracking-tighter">{classData.performanceAvg}</h3>
              <p className="text-[9px] font-medium text-slate-400 mt-2 uppercase">AVG POINTS / 100</p>
            </Card>
            <Card className="p-6 border-border shadow-sm bg-white border-b-2 border-b-red-500 hover:shadow-md transition-all">
              <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1">At Absence Risk</p>
              <h3 className="text-3xl font-semibold text-red-600 tracking-tighter">03</h3>
              <p className="text-[9px] font-semibold text-red-400 mt-2 uppercase tracking-widest underline cursor-pointer">View Students</p>
            </Card>
            <Card className="p-6 border-border shadow-sm bg-[var(--color-primary)] text-white">
              <p className="text-[9px] font-semibold text-white uppercase tracking-widest mb-1">Journal Status</p>
              <h3 className="text-2xl font-semibold">Active Entry</h3>
              <p className="text-[9px] font-medium text-white mt-4 uppercase tracking-widest">System log: sync 4m ago</p>
            </Card>
          </div>
        )}

         {activeTab === 'lessons' && (
           <Card className="border-border shadow-sm bg-white overflow-hidden text-left">
             <div className="p-4 border-b border-border bg-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                    Lesson Registry Matrix
                  </span>
                  <div className="flex items-center gap-1 bg-white border border-border rounded-lg p-0.5">
                    <button 
                      onClick={() => setWeekOffset(prev => prev - 1)}
                      className="p-1 hover:bg-slate-50 rounded text-slate-400 hover:text-[var(--color-primary)] transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <span className="text-[9px] font-bold text-slate-600 px-2 min-w-[120px] text-center uppercase">
                      {days[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {days[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <button 
                      onClick={() => setWeekOffset(prev => prev + 1)}
                      className="p-1 hover:bg-slate-50 rounded text-slate-400 hover:text-[var(--color-primary)] transition-colors"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-emerald-500"></div>
                      <span className="text-[9px] font-medium text-slate-400 uppercase">i.e</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-red-500"></div>
                      <span className="text-[9px] font-medium text-slate-400 uppercase">q.b</span>
                   </div>
                </div>
             </div>

             <div className="overflow-x-auto">
               <table className="min-w-full divide-y divide-border border-collapse">
                 <thead className="bg-slate-50/50">
                   <tr>
                     <th className="sticky left-0 z-10 bg-slate-50/90 backdrop-blur px-6 py-4 text-[9px] font-semibold text-slate-400 uppercase tracking-widest text-left border-r border-border min-w-[200px]">
                       Student Name
                     </th>
                     {days.map((date, idx) => (
                       <th key={idx} className={cn(
                         "px-4 py-4 text-[9px] font-semibold uppercase tracking-widest text-center border-r border-border last:border-r-0",
                         idx === 6 && weekOffset === 0 ? "text-[var(--color-primary)] bg-[var(--color-primary)]/5" : "text-slate-400"
                       )}>
                         <div className="flex flex-col gap-0.5">
                           <span>{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                           <span className="text-[11px] font-bold text-slate-900">{date.getDate()}</span>
                         </div>
                       </th>
                     ))}
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-border bg-white">
                   {students.map((stu, sIdx) => (
                     <tr key={sIdx} className="hover:bg-slate-50/50 transition-colors">
                       <td className="sticky left-0 z-10 bg-white/90 backdrop-blur px-6 py-4 border-r border-border">
                          <div className="flex flex-col">
                             <span className="text-sm font-semibold text-slate-800">{stu.name}</span>
                             <span className="text-[9px] font-medium text-slate-400 uppercase">{stu.id}</span>
                          </div>
                       </td>
                       {days.map((date, dIdx) => {
                         // Mock logic: some have i.e, some q.b, some numeric grades (0-10)
                         const seed = (sIdx + dIdx + date.getDate()) % 15;
                         let content;
                         let dotColor = "";
                         
                         if (seed === 0) {
                           content = <span className="text-[10px] font-bold text-red-500">q.b</span>;
                           dotColor = "bg-red-500";
                         } else if (seed < 4) {
                           content = <span className="text-[10px] font-bold text-emerald-500">i.e</span>;
                           dotColor = "bg-emerald-500";
                         } else if (seed < 12) {
                           content = <span className="text-xs font-bold text-slate-600">{seed - 2}</span>;
                         } else {
                           content = <span className="text-slate-200">-</span>;
                         }

                         return (
                           <td key={dIdx} className={cn(
                             "px-4 py-4 text-center border-r border-border last:border-r-0",
                             dIdx === 6 && weekOffset === 0 && "bg-[var(--color-primary)]/[0.02]"
                           )}>
                             <div className="flex items-center justify-center h-8">
                               {content}
                             </div>
                           </td>
                         );
                       })}
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
             <div className="p-4 bg-slate-50 border-t border-border flex justify-end">
                <Button size="sm" className="bg-slate-900 text-white text-[9px] font-semibold uppercase tracking-widest px-6 h-8">
                   Download Period Report
                </Button>
             </div>
           </Card>
         )}

        {activeTab === 'grading' && (
           <Card className="border-border shadow-sm bg-white overflow-hidden text-left">
             <div className="p-4 border-b border-border bg-slate-50 flex justify-between items-center">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                  {isAttendanceSaved ? "Fəaliyyət Qiymətləndirilməsi" : "Dərs Davamiyyəti (15 dəqiqə ərzində)"}
                </span>
                {isAttendanceSaved && (
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => setIsAttendanceSaved(false)}
                    className="h-8 text-slate-400 hover:text-[var(--color-primary)] text-[9px] font-semibold uppercase tracking-widest"
                  >
                    <History className="h-3 w-3 mr-1" /> Davamiyyəti Redaktə Et
                  </Button>
                )}
             </div>

             <div className="overflow-x-auto">
               <table className="min-w-full divide-y divide-border">
                 <thead className="bg-slate-50">
                   <tr>
                      <th className="px-6 py-4 text-[9px] font-semibold text-slate-400 uppercase tracking-widest text-left">Student Profile</th>
                      <th className="px-6 py-4 text-[9px] font-semibold text-slate-400 uppercase tracking-widest text-center">
                        {isAttendanceSaved ? "Qiymətləndirmə (0-10)" : "Davamiyyət"}
                      </th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-border bg-white">
                   {students.map((stu) => (
                     <tr key={stu.id}>
                       <td className="px-6 py-6">
                          <div className="flex flex-col">
                             <span className="text-sm font-semibold text-slate-800">{stu.name}</span>
                             <span className="text-[9px] font-semibold text-slate-400">{stu.id}</span>
                          </div>
                       </td>
                       <td className="px-6 py-6 text-center">
                          {!isAttendanceSaved ? (
                            <div className="flex items-center justify-center gap-2">
                               <button 
                                 onClick={() => toggleAttendance(stu.id, 'i.e')}
                                 className={cn(
                                   "px-4 py-2 rounded-xl text-[10px] font-semibold uppercase tracking-widest border transition-all",
                                   stu.currentStatus === 'i.e' 
                                      ? "bg-emerald-500 text-white border-emerald-600 shadow-md" 
                                      : "bg-slate-50 text-slate-400 border-slate-200"
                                 )}
                               >
                                 i.e
                               </button>
                               <button 
                                 onClick={() => toggleAttendance(stu.id, 'q.b')}
                                 className={cn(
                                   "px-4 py-2 rounded-xl text-[10px] font-semibold uppercase tracking-widest border transition-all",
                                   stu.currentStatus === 'q.b' 
                                      ? "bg-red-500 text-white border-red-600 shadow-md" 
                                      : "bg-slate-50 text-slate-400 border-slate-200"
                                 )}
                               >
                                 q.b
                               </button>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-4">
                               {stu.currentStatus === 'q.b' ? (
                                 <span className="text-[10px] font-semibold text-red-300 uppercase tracking-widest">Qayıb (Qiymət yazıla bilməz)</span>
                               ) : (
                                 <div className="flex items-center justify-center gap-3">
                                  <button 
                                         onClick={() => handlePointChange(stu.id, "i.e")}
                                         className={cn(
                                           "size-8 rounded-lg text-xs font-semibold transition-all border",
                                           stu.currentPoint === "i.e"
                                              ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md scale-110" 
                                              : "bg-white text-slate-400 border-border hover:border-slate-300"
                                         )}
                                      >
                                         i.e
                                      </button>
                                   {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
                                      <button 
                                         key={val}
                                         onClick={() => handlePointChange(stu.id, val.toString())}
                                         className={cn(
                                           "size-8 rounded-lg text-xs font-semibold transition-all border",
                                           stu.currentPoint === val.toString()
                                              ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md scale-110" 
                                              : "bg-white text-slate-400 border-border hover:border-slate-300"
                                         )}
                                      >
                                         {val}
                                      </button>
                                   ))}
                                   <div className="w-[1px] h-6 bg-slate-100 mx-1"></div>
                                   <input 
                                      type="number" 
                                      min="0" 
                                      max="10" 
                                      value={stu.currentPoint}
                                      onChange={(e) => handlePointChange(stu.id, e.target.value)}
                                      className="w-12 h-8 rounded-lg border border-border text-center text-xs font-semibold focus:ring-1 focus:ring-[var(--color-primary)] outline-none" 
                                   />
                                 </div>
                               )}
                            </div>
                          )}
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
               <div className="p-8 border-t border-border bg-slate-50 flex justify-end">
                  {!isAttendanceSaved ? (
                    <Button 
                      onClick={() => setIsAttendanceSaved(true)}
                      className="bg-emerald-600 text-white font-semibold uppercase text-[10px] tracking-widest px-8 shadow-lg"
                    >
                       Davamiyyəti Yadda Saxla & Balları Yaz
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => {
                        toast.success("Jurnal uğurla yadda saxlanıldı");
                      }}
                      className="bg-[var(--color-primary)] text-white font-semibold uppercase text-[10px] tracking-widest px-12 shadow-lg flex items-center gap-2"
                    >
                       <Save className="h-4 w-4" /> Save All
                    </Button>
                  )}
               </div>
             </div>
           </Card>
        )}

        {activeTab === 'kollekvium' && (
           <Card className="border-border shadow-sm bg-white overflow-hidden text-left">
             {/* Header */}
             <div className="p-4 border-b border-border bg-slate-50 flex justify-between items-center gap-4 flex-wrap">
               <div className="flex items-center gap-4">
                 <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                   Kollekvium Registry Matrix
                 </span>
                 {/* Active session selector */}
                 <div className="flex items-center gap-2 bg-white border border-border rounded-lg px-3 py-1.5">
                   <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">Active:</span>
                   <select
                     value={activeKolId}
                     onChange={e => setActiveKolId(e.target.value)}
                     className="text-[11px] font-bold text-[var(--color-primary)] bg-transparent outline-none cursor-pointer"
                   >
                     {kolSessions.filter(s => !s.locked).map(s => (
                       <option key={s.id} value={s.id}>{s.label} ({s.date})</option>
                     ))}
                   </select>
                 </div>
               </div>
               <div className="flex items-center gap-2">
                 {activeSession && !activeSession.locked && (
                   <Button
                     size="sm"
                     onClick={handleSaveKol}
                     className="h-8 bg-emerald-600 text-white font-semibold text-[10px] uppercase tracking-widest gap-2 shadow-md"
                   >
                     <Save className="h-3 w-3" /> Save {activeSession.label}
                   </Button>
                 )}
                 <Button
                   size="sm"
                   onClick={handleCreateKollekvium}
                   className="h-8 bg-[var(--color-primary)] text-white font-medium text-[10px] uppercase tracking-widest gap-2"
                 >
                   <Plus className="h-3 w-3" /> Create Kollekvium
                 </Button>
               </div>
             </div>

             {/* Matrix Table */}
             <div className="overflow-x-auto">
               <table className="min-w-full divide-y divide-border border-collapse">
                 <thead className="bg-slate-50/50">
                   <tr>
                     <th className="sticky left-0 z-10 bg-slate-50/90 backdrop-blur px-6 py-4 text-[9px] font-semibold text-slate-400 uppercase tracking-widest text-left border-r border-border min-w-[200px]">
                       Student Name
                     </th>
                     {kolSessions.map(session => (
                       <th key={session.id} className={cn(
                         "px-6 py-4 text-[9px] font-semibold uppercase tracking-widest text-center border-r border-border last:border-r-0 min-w-[140px] transition-colors",
                         session.id === activeKolId
                           ? "text-[var(--color-primary)] bg-[var(--color-primary)]/5"
                           : "text-slate-400"
                       )}>
                         <div className="flex flex-col gap-0.5 items-center">
                           <span className="text-[11px] font-bold text-slate-900">{session.label}</span>
                           <span className="text-[8px]">{session.date}</span>
                           {session.locked ? (
                             <span className="text-[7px] font-bold bg-slate-100 text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded uppercase tracking-widest mt-0.5">Locked</span>
                           ) : (
                             <span className="text-[7px] font-bold bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 px-1.5 py-0.5 rounded uppercase tracking-widest mt-0.5">Active</span>
                           )}
                         </div>
                       </th>
                     ))}
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-border bg-white">
                   {students.map((stu) => (
                     <tr key={stu.id} className="hover:bg-slate-50/50 transition-colors">
                       <td className="sticky left-0 z-10 bg-white/90 backdrop-blur px-6 py-4 border-r border-border">
                         <div className="flex flex-col">
                           <span className="text-sm font-semibold text-slate-800">{stu.name}</span>
                           <span className="text-[9px] font-medium text-slate-400 uppercase">{stu.id}</span>
                         </div>
                       </td>
                       {kolSessions.map(session => {
                         const grade = session.grades[stu.id];
                         const isActive = session.id === activeKolId && !session.locked;
                         return (
                           <td key={session.id} className={cn(
                             "px-4 py-4 text-center border-r border-border last:border-r-0",
                             session.id === activeKolId && "bg-[var(--color-primary)]/[0.02]"
                           )}>
                             <div className="flex items-center justify-center">
                               {isActive ? (
                                 <select
                                   value={grade ?? ''}
                                   onChange={e => handleKolGradeChange(stu.id, Number(e.target.value))}
                                   className="w-20 bg-white border-2 border-[var(--color-primary)]/30 rounded-lg p-1.5 text-center font-bold text-[var(--color-primary)] outline-none cursor-pointer hover:border-[var(--color-primary)] transition-all shadow-sm"
                                 >
                                   <option value="">-</option>
                                   {[...Array(16)].map((_, i) => (
                                     <option key={i} value={i}>{i}</option>
                                   ))}
                                 </select>
                               ) : grade !== null && grade !== undefined ? (
                                 <span className={cn(
                                   "text-sm font-bold px-3 py-1 rounded-lg",
                                   grade >= 12 ? "text-emerald-600 bg-emerald-50" :
                                   grade >= 8  ? "text-amber-600 bg-amber-50" :
                                                 "text-red-500 bg-red-50"
                                 )}>{grade}</span>
                               ) : (
                                 <span className="text-slate-200 text-sm">-</span>
                               )}
                             </div>
                           </td>
                         );
                       })}
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
             <div className="p-4 bg-slate-50 border-t border-border flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5"><div className="size-2 rounded-full bg-emerald-500"></div><span className="text-[9px] text-slate-400 uppercase font-medium">12-15 pts</span></div>
                  <div className="flex items-center gap-1.5"><div className="size-2 rounded-full bg-amber-500"></div><span className="text-[9px] text-slate-400 uppercase font-medium">8-11 pts</span></div>
                  <div className="flex items-center gap-1.5"><div className="size-2 rounded-full bg-red-500"></div><span className="text-[9px] text-slate-400 uppercase font-medium">0-7 pts</span></div>
               </div>
               <Button size="sm" className="bg-slate-900 text-white text-[9px] font-semibold uppercase tracking-widest px-6 h-8">
                  Export Kollekvium Report
               </Button>
             </div>
           </Card>
        )}

        {activeTab === 'serbest' && (
           <Card className="border-border shadow-sm bg-white overflow-hidden text-left text-left">
             <div className="p-4 border-b border-border bg-slate-50 flex justify-between items-center text-left">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                  {isCreatingSerbest ? "New Sərbəst İş Assignment Grading" : "Sərbəst İş Registry (Max 15.0 pts)"}
                </span>
                {!isCreatingSerbest ? (
                  <Button 
                    size="sm" 
                    onClick={() => setIsCreatingSerbest(true)}
                    className="h-8 bg-[var(--color-primary)] text-white font-medium text-[10px] uppercase tracking-widest gap-2"
                  >
                    <Plus className="h-3 w-3" /> Create Sərbəst İş
                  </Button>
                ) : (
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setIsCreatingSerbest(false)}
                    className="h-8 text-slate-400"
                  >
                    Cancel
                  </Button>
                )}
             </div>

             {isCreatingSerbest ? (
               <div className="overflow-x-auto text-left">
                 <table className="min-w-full divide-y divide-border">
                   <thead className="bg-slate-50 text-left">
                     <tr>
                       <th className="px-6 py-4 text-[9px] font-semibold text-slate-400 uppercase tracking-widest text-left">Student Profile</th>
                       <th className="px-6 py-4 text-[9px] font-semibold text-slate-400 uppercase tracking-widest text-center">Grade / Status</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-border bg-white text-left">
                     {students.map((stu) => (
                       <tr key={stu.id} className="text-left">
                         <td className="px-6 py-4 text-left">
                            <span className="text-sm font-medium text-slate-800">{stu.name}</span>
                         </td>
                         <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center gap-4">
                               <select 
                                 defaultValue={0}
                                 className={cn(
                                   "w-24 bg-amber-50/50 border border-amber-100 rounded-lg p-2 text-center font-semibold text-[var(--color-primary)] outline-none cursor-pointer",
                                   stu.currentStatus === 'q.b' && "opacity-20 pointer-events-none"
                                 )}
                               >
                                 {[...Array(16)].map((_, i) => (
                                   <option key={i} value={i}>{i}</option>
                                 ))}
                               </select>
                               <span className="text-slate-300 font-bold">OR</span>
                               <button 
                                 onClick={() => toggleAttendance(stu.id, stu.currentStatus === 'q.b' ? 'i.e' : 'q.b')}
                                 className={cn(
                                   "px-4 py-2 rounded-xl text-[10px] font-semibold uppercase tracking-widest border transition-all",
                                   stu.currentStatus === 'q.b' 
                                      ? "bg-red-500 text-white border-red-600 shadow-md" 
                                      : "bg-slate-50 text-slate-400 border-slate-200"
                                 )}
                               >
                                 q.b
                               </button>
                            </div>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
                 <div className="p-8 border-t border-border bg-slate-50 flex justify-end text-left">
                    <Button 
                      className="bg-[var(--color-primary)] text-white font-semibold uppercase text-[10px] tracking-widest px-12 shadow-xl"
                      onClick={() => setIsCreatingSerbest(false)}
                    >
                       Finalize & Post Grades
                    </Button>
                 </div>
               </div>
             ) : (
               <div className="overflow-x-auto text-left">
                 <table className="min-w-full divide-y divide-border">
                   <thead className="bg-slate-50/50">
                     <tr>
                       <th className="px-6 py-4 text-[9px] font-semibold text-slate-400 uppercase tracking-widest text-left">Student Name</th>
                       <th className="px-6 py-4 text-[9px] font-semibold text-slate-400 uppercase tracking-widest text-left">Submission Topic</th>
                       <th className="px-6 py-4 text-[9px] font-semibold text-slate-400 uppercase tracking-widest text-center">Points</th>
                       <th className="px-6 py-4 text-[9px] font-semibold text-slate-400 uppercase tracking-widest text-right px-10">Actions</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-border bg-white text-left">
                     {students.map((stu, i) => (
                       <tr key={i} className="hover:bg-slate-50 transition-colors">
                         <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-medium text-slate-800">{stu.name}</span>
                         </td>
                         <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-[11px] font-medium text-slate-400">Optimization Research...</span>
                         </td>
                         <td className="px-6 py-4 whitespace-nowrap text-center">
                             <select 
                               defaultValue={stu.serbest || 0} 
                               className="w-20 bg-amber-50/30 border border-amber-100 rounded-lg p-1.5 text-center font-semibold text-[var(--color-primary)] appearance-none cursor-pointer hover:border-amber-200 transition-all outline-none"
                             >
                               {[...Array(16)].map((_, i) => (
                                 <option key={i} value={i}>{i}</option>
                               ))}
                             </select>
                         </td>
                         <td className="px-6 py-4 whitespace-nowrap text-right px-10">
                            <Button size="sm" className="h-8 bg-slate-900 text-white font-semibold uppercase text-[9px] tracking-widest px-4">Save</Button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             )}
           </Card>
        )}

        {activeTab === 'exam' && (
           <Card className="border-border shadow-sm bg-white overflow-hidden text-left border-t-8 border-t-[var(--color-primary)]">
             <div className="p-6 border-b border-border bg-[var(--color-primary)]/5">
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">Final Examination Journal</h3>
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Entry permitted only during regulated session window</p>
             </div>
             <div className="overflow-x-auto">
               <table className="min-w-full divide-y divide-border">
                 <thead className="bg-[var(--color-primary)]/10">
                   <tr>
                     <th className="px-6 py-4 text-[9px] font-semibold text-[var(--color-primary)] uppercase tracking-widest">Student Profile</th>
                     <th className="px-6 py-4 text-[9px] font-semibold text-[var(--color-primary)] uppercase tracking-widest text-center">Exam Result</th>
                     <th className="px-6 py-4 text-[9px] font-semibold text-[var(--color-primary)] uppercase tracking-widest text-center">Total Score (100)</th>
                     <th className="px-6 py-4 text-[9px] font-semibold text-[var(--color-primary)] uppercase tracking-widest text-right px-10">System Status</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-border bg-white">
                   {students.map((stu, i) => (
                     <tr key={i} className="hover:bg-slate-50 transition-colors">
                       <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col text-left">
                             <span className="text-sm font-medium text-slate-900">{stu.name}</span>
                             <span className="text-[9px] font-semibold text-slate-400">ATTENDANCE: {stu.attendance}</span>
                          </div>
                       </td>
                       <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="size-10 bg-slate-100 rounded-xl mx-auto flex items-center justify-center font-semibold text-slate-300 border border-slate-200">--</div>
                       </td>
                       <td className="px-6 py-4 whitespace-nowrap text-center font-semibold text-slate-400">
                          PENDING
                       </td>
                       <td className="px-6 py-4 whitespace-nowrap text-right px-10">
                          <span className="text-[9px] font-semibold text-slate-300 uppercase">Awaiting Examiner</span>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </Card>
        )}
      </div>
    </div>
  );
}
