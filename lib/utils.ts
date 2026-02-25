import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Role = 'student' | 'teacher' | 'deptHead' | 'admin' | 'superAdmin' | 'tutor';
export type Lang = 'az' | 'en';
