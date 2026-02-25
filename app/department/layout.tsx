"use client";

import { MainLayout } from "@/components/layout/MainLayout";

export default function DepartmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout role="deptHead">{children}</MainLayout>;
}
