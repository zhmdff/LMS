# Project Overview: University Academic Management System (UAMS)

## Core Philosophy
Strict, rule-based academic management. Regulation-enforcing rather than a flexible "free-edit" tool.

## Globals
- CSS: `app/globals.css`
- Config: `lib/config.ts`
- Translations: `translations/index.ts`

## Components
- UI: `components/ui/`
- Layout: `components/layout/`

## Decisions
| Date | Agent | Rationale |
|------|-------|-----------|
| 2026-02-25 | Antigravity | Initial project setup with basic architecture and role-based layouts. |
| 2026-02-25 | Antigravity | Implemented core Attendance Engine with 15-min locking logic and smart-board UI. |
| 2026-02-25 | Antigravity | Added role-based redirection to isolate student, teacher, and admin namespaces. |
| 2026-02-25 | Antigravity | Integrated Framer Motion for premium micro-animations and route transitions. |
| 2026-02-25 | Antigravity | Migrated Entire Design to UniManage style (matched index.html example exactly). |
| 2026-02-25 | Antigravity | Switched font to Public Sans and streamlined color palette to Brand Primary (#1e1e38). |
| 2026-02-25 | Antigravity | Completed 40+ structured pages across 6 roles (Student, Teacher, Dept Head, Admin, Super Admin, Tutor). |
| 2026-02-25 | Antigravity | Implemented full Student Hub including Timetable, Finance management, and Detailed subject tracking. |
| 2026-02-25 | Antigravity | Developed Teacher Analytics suite with performance matrix, report builder, and staff console. |
| 2026-02-25 | Antigravity | Finalized Admin and Super Admin suites with backup, security, audit logs, and infrastructure monitoring. |
| 2026-02-25 | Antigravity | Synchronized Sidebar navigation across all layouts with dynamic role-based access control. |
| 2026-02-25 | Antigravity | Refactored My Classes listing to a high-density List View for both Students and Teachers. |
| 2026-02-25 | Antigravity | Standardized Classroom Detail workspaces with a 5-tab protocol: Overall, Lessons, Kollekviumlar, Sərbəst İş, and Exam. |
| 2026-02-25 | Antigravity | Implemented functional Teacher grading console within Class details for Midterms and Sərbəst İş points. |
| 2026-02-25 | Antigravity | Generated comprehensive README.md and USAGE.md documenting the system's regulatory philosophy and 100% feature catalog. |
| 2026-02-25 | Antigravity | Standardized Kollekviumlar module to a high-density List View to match Lesson Registry patterns. |
| 2026-02-25 | Antigravity | Enforced Typography Protocol: Removed all italics and capped font-weights at semibold/medium for improved readability and institutional feel. |
| 2026-02-25 | Antigravity | Unified Teacher Workflow: Integrated Attendance and Activity Scoring into a single 'Qiymətləndirmə' tab within Class Details, removing redundant standalone pages. |
| 2026-02-25 | Antigravity | Refined Grading UI: Swapped numeric point inputs for standardized 0-15 dropdowns in Kollekvium and Sərbəst İş registries for consistent UX. |
| 2026-02-25 | Antigravity | Horizontal Lesson Matrix: Transformed 'Lesson List' into a 7-day student-date matrix with week-based navigation and integrated status indicators. |
| 2026-02-25 | Antigravity | Kollekvium Matrix: Redesigned Kollekviumlar tab as a student-row/session-column matrix matching Lesson List design, with active session selector, per-student grade dropdowns, locking logic, and color-coded score badges. |

