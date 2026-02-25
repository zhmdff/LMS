"use client";

import { MainLayout } from "@/components/layout/MainLayout";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout role="teacher">{children}</MainLayout>;
}
