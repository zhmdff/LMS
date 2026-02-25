"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Role, Lang } from '@/lib/utils';

interface RoleContextType {
  role: Role;
  setRole: (role: Role) => void;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>('student');
  const [lang, setLang] = useState<Lang>('az');

  return (
    <RoleContext.Provider value={{ role, setRole, lang, setLang }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useApp() {
  const context = useContext(RoleContext);
  if (!context) throw new Error("useApp must be used within RoleProvider");
  return context;
}
