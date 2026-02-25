"use client";

import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { Role } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
  role: Role;
}

export function MainLayout({ children, role }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-full overflow-hidden flex bg-[#f6f6f7] font-display antialiased">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block h-full">
        <Sidebar role={role} />
      </div>
      
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
        
        <div className="flex-1 overflow-y-auto min-w-0">
          <div className="flex flex-col gap-6 w-full p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={role}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <motion.div
            initial={{ x: -256 }}
            animate={{ x: 0 }}
            className="h-full w-64 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar role={role} />
          </motion.div>
        </div>
      )}
    </div>
  );
}
