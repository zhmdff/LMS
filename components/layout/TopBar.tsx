"use client";

import React from 'react';
import { Bell, HelpCircle, Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface TopBarProps {
  onMenuClick?: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="h-16 border-b border-border bg-white flex items-center justify-between px-8 shrink-0 z-10 shadow-sm">
      <div className="flex items-center gap-6">
        <Button variant="ghost" size="sm" className="lg:hidden p-0 h-10 w-10 hover:bg-slate-50" onClick={onMenuClick}>
           <Menu className="h-6 w-6 text-slate-600" />
        </Button>
        
        {/* Academic Context */}
        <div className="hidden md:flex flex-col text-left">
           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Spring Semester 2026</span>
           <span className="text-sm font-black text-[var(--color-primary)] tracking-tight">Active Academic Period</span>
        </div>
      </div>

      <div className="flex items-center gap-5">

        <div className="h-4 w-[1px] bg-slate-200 mx-2 hidden sm:block"></div>

        <div className="flex items-center gap-2">
           <button className="relative size-10 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-50 hover:text-[var(--color-primary)] transition-all group">
             <Bell className="h-5 w-5" />
             <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white ring-2 ring-red-500/20"></span>
           </button>
           
           <button className="size-10 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-50 hover:text-[var(--color-primary)] transition-all group">
             <HelpCircle className="h-5 w-5" />
           </button>
        </div>

        <div className="h-8 w-[1px] bg-slate-100 mx-1"></div>

        <button className="flex items-center gap-3 p-1 pl-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
           <div className="flex flex-col text-right">
              <span className="text-xs font-black text-[var(--color-primary)] tracking-tight">Alex Morgan</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Student ID: 452</span>
           </div>
           <div className="size-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-xs shadow-lg group-hover:scale-105 transition-transform">
              AM
           </div>
        </button>
      </div>
    </header>
  );
}

