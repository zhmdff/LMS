"use client";

import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  School, 
  BookOpen, 
  Calendar, 
  Settings,
  History,
  GraduationCap,
  ClipboardCheck,
  CheckSquare,
  FileText,
  BarChart3,
  ShieldAlert,
  Database,
  Terminal,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn, Role } from '@/lib/utils';

interface SidebarProps {
  role: Role;
}

const sidebarLinks: Record<Role, any[]> = {
  student: [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/student/dashboard' },
    { name: 'My Classes', icon: GraduationCap, href: '/student/classes' },
    { name: 'Grades', icon: School, href: '/student/grades' },
    { name: 'Attendance', icon: Calendar, href: '/student/attendance' },
    { name: 'My Curriculum', icon: BookOpen, href: '/student/curriculum' },
    { name: 'Formal Requests', icon: MessageSquare, href: '/student/requests' },
    { name: 'History', icon: History, href: '/student/history' },
  ],
  teacher: [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/teacher/dashboard' },
    { name: 'My Classes', icon: GraduationCap, href: '/teacher/classes' },
    { name: 'Kollekvium', icon: FileText, href: '/teacher/kollekvium' },
    { name: 'Grade Approval', icon: CheckSquare, href: '/teacher/approval' },
    { name: 'Formal Requests', icon: MessageSquare, href: '/teacher/requests' },
    { name: 'Reports', icon: BarChart3, href: '/teacher/reports' },
  ],
  deptHead: [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/department/dashboard' },
    { name: 'Subjects', icon: BookOpen, href: '/department/subjects' },
    { name: 'Assign Teachers', icon: Users, href: '/department/assign' },
    { name: 'Groups', icon: School, href: '/department/groups' },
    { name: 'Curriculum', icon: BookOpen, href: '/department/curriculum' },
    { name: 'Monitoring', icon: BarChart3, href: '/department/monitoring' },
    { name: 'Reports', icon: BarChart3, href: '/department/reports' },
  ],
  admin: [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard' },
    { name: 'Faculties', icon: School, href: '/admin/faculties' },
    { name: 'Departments', icon: Users, href: '/admin/departments' },
    { name: 'Specialties', icon: BookOpen, href: '/admin/specialties' },
    { name: 'Groups', icon: Users, href: '/admin/groups' },
    { name: 'Subjects', icon: BookOpen, href: '/admin/subjects' },
    { name: 'Academic Years', icon: Calendar, href: '/admin/years' },
    { name: 'User Management', icon: Users, href: '/admin/users' },
    { name: 'Attendance Rules', icon: Settings, href: '/admin/rules' },
    { name: 'Reports', icon: BarChart3, href: '/admin/reports' },
    { name: 'Correction Requests', icon: MessageSquare, href: '/admin/requests' },
    { name: 'System Logs', icon: History, href: '/admin/logs' },
  ],
  superAdmin: [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/superadmin/dashboard' },
    { name: 'System Config', icon: Settings, href: '/superadmin/config' },
    { name: 'Backup Mgmt', icon: Database, href: '/superadmin/backups' },
    { name: 'Security Logs', icon: ShieldAlert, href: '/superadmin/security' },
    { name: 'Permissions', icon: CheckSquare, href: '/superadmin/permissions' },
    { name: 'DB Tools', icon: Terminal, href: '/superadmin/db-tools' },
  ],
  tutor: [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/tutor/dashboard' },
    { name: 'Groups', icon: Users, href: '/tutor/groups' },
    { name: 'Attendance', icon: Calendar, href: '/tutor/attendance' },
    { name: 'Grades', icon: School, href: '/tutor/grades' },
  ]
};

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const links = sidebarLinks[role] || [];

  return (
    <aside className="w-64 h-full bg-white border-r border-border flex flex-col shrink-0 transition-colors duration-200">
      <div className="p-6 pb-2">
        <Link href="/">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-[var(--color-primary)]/10 aspect-square rounded-full size-10 flex items-center justify-center text-[var(--color-primary)]">
            <School className="h-5 w-5" />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-slate-900 text-base font-bold leading-none">UniManage</h1>
            <p className="text-slate-500 text-xs font-medium mt-1 uppercase tracking-tight">{role} Panel</p>
          </div>
        </div>
        </Link>
        
        <nav className="flex flex-col gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group",
                  isActive ? "sidebar-link-active" : "sidebar-link"
                )}
              >

                <Icon className={cn("h-5 w-5", isActive ? "text-[var(--color-primary)]" : "text-slate-400 group-hover:text-[var(--color-primary)]")} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-border">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="bg-slate-200 rounded-full size-9 flex items-center justify-center font-bold text-slate-500 text-xs">
            JD
          </div>
          <div className="flex flex-col text-left">
            <p className="text-slate-900 text-sm font-medium leading-tight">John Doe</p>
            <p className="text-slate-500 text-xs font-normal capitalize">{role}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
