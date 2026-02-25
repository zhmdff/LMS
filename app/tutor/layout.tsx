"use client";

import { MainLayout } from "@/components/layout/MainLayout";

export default function TutorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout role="tutor">{children}</MainLayout>;
}
