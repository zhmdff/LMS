"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BookOpen, FileText, Download, Edit3, MoreVertical, Plus } from 'lucide-react';

export default function TeacherCourses() {
  const courses = [
    { id: 1, name: 'Software Engineering', code: 'CS301', credits: 6, modules: 12, syllabus: 'Approved' },
    { id: 2, name: 'Database Management', code: 'CS302', credits: 6, modules: 10, syllabus: 'Approved' },
    { id: 3, name: 'Web Development', code: 'CS405', credits: 4, modules: 8, syllabus: 'Under Review' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1 text-left">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Curriculum Management</h1>
          <p className="text-slate-500 font-medium">Manage syllabus, course modules, and materials for your subjects</p>
        </div>
        <Button className="h-11 bg-[var(--color-primary)] text-white font-bold tracking-tight gap-2 shadow-sm">
           <Plus className="h-4 w-4" /> Propose New Course
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {courses.map((course) => (
            <Card key={course.id} className="border-border shadow-sm bg-white overflow-hidden text-left hover:border-[var(--color-primary)] transition-all group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4">
                     <div className="bg-[var(--color-primary)]/5 text-[var(--color-primary)] p-4 rounded-2xl h-fit border border-[var(--color-primary)]/10 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                        <BookOpen className="h-8 w-8" />
                     </div>
                     <div>
                        <div className="flex items-center gap-2 mb-1">
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{course.code}</span>
                           <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${
                              course.syllabus === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                           }`}>
                              {course.syllabus}
                           </span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 leading-tight">{course.name}</h3>
                        <p className="text-sm font-bold text-slate-400 mt-0.5">{course.credits} Academic Credits • {course.modules} Learning Modules</p>
                     </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-slate-300 hover:text-slate-600">
                     <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                   <Button variant="outline" size="sm" className="h-10 px-4 font-bold tracking-tight gap-2 border-border text-slate-600 hover:bg-slate-50">
                      <FileText className="h-4 w-4" /> Syllabus
                   </Button>
                   <Button variant="outline" size="sm" className="h-10 px-4 font-bold tracking-tight gap-2 border-border text-slate-600 hover:bg-slate-50">
                      <Edit3 className="h-4 w-4" /> Edit Modules
                   </Button>
                   <Button variant="outline" size="sm" className="h-10 px-4 font-bold tracking-tight gap-2 border-border text-slate-600 hover:bg-slate-50">
                      <Download className="h-4 w-4" /> Resources
                   </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
           <Card className="border-border shadow-sm bg-slate-900 text-white">
              <CardHeader className="border-b border-white/10 text-left">
                 <CardTitle className="text-lg font-bold">Material Upload Stats</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                          <span>Lecture Notes</span>
                          <span>85% COMPLETED</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[85%]"></div>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                          <span>Practice Tasks</span>
                          <span>42% COMPLETED</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 w-[42%]"></div>
                       </div>
                    </div>
                 </div>
                 <Button className="w-full bg-white text-slate-900 font-bold tracking-tight hover:bg-slate-100 h-12">
                     Quick Upload Portal
                 </Button>
              </CardContent>
           </Card>

           <Card className="border-border shadow-sm">
              <CardHeader className="border-b border-border bg-slate-50/50 text-left">
                 <CardTitle className="text-lg font-bold">Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4 text-left">
                 <div className="flex gap-3 text-left">
                    <div className="bg-amber-50 text-amber-600 p-2 rounded-lg h-fit">
                       <FileText className="h-4 w-4" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-900">Syllabus Submission</p>
                       <p className="text-xs text-slate-500 font-medium leading-relaxed">Ensure all learning outcomes are aligned with department standards before submission.</p>
                    </div>
                 </div>
                 <div className="flex gap-3 text-left">
                    <div className="bg-blue-50 text-blue-600 p-2 rounded-lg h-fit">
                       <Download className="h-4 w-4" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-900">Copyright Rules</p>
                       <p className="text-xs text-slate-500 font-medium leading-relaxed">Uploading copyrighted textbooks is strictly prohibited on the portal.</p>
                    </div>
                 </div>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
