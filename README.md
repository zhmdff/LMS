# 🎓 UniManage: Academic Management Infrastructure

**UniManage** is a next-generation, high-performance Academic Management System (AMS) designed for rigorous university environments. Built with a focus on **Rule-Based Integrity**, it moves away from flexible "free-edits" toward a strict, protocol-driven architecture that enforces academic regulations at every layer.

---

## 🏛️ Core Philosophy: "Academic Integrity by Design"

Unlike traditional LMS platforms that act as simple data repositories, UniManage is an **enforcement engine**. 
- **System Lock Philosophy**: Academic records (attendance, grades, schedules) follow strict temporal windows.
- **Protocol-Driven**: Every action (from a teacher marking attendance to an admin changing a curriculum) is logged, audited, and bound by university bylaws.
- **Smart-Board Optimized**: The UI is specifically designed for high-resolution interactive displays (smart boards) and mobile tablets used in modern lecture halls.
---

## 📜 Institutional Rules & Integrity Policies

To ensure 100% academic integrity, the system enforces the following hard rules:

1. **Participation Prerequisite**: Teachers are strictly prohibited from assigning activity points to students marked as **Absent (q.b)**. The system UI locks the input field for absent students.
2. **Attendance Visibility**: In the student's lesson list, activity points are only displayed for sessions where participation was confirmed. This distinguishes between simple "presence" and active "participation".
3. **Attendance-First Protocol**: All classroom activities (Grading, Kollekvium, Sərbəst İş) require an initial attendance check. Teachers must finalize presence (i.e/q.b) before grading capabilities are unlocked for the session.
4. **Assessment Creation Rules**: When creating a Kollekvium or Sərbəst İş, students must either receive a numeric grade or be marked as **q.b** (absent). The "i.e" (participated without score) status is restricted only to daily lesson journals.
5. **Smart Lock Window**: Attendance marking is restricted to the specific session time + a 15-minute grace period. Late entries require an administrative breach request.


---

## 🎭 Role-Based Ecosystem

The system implements 6 distinct portals, each a completely isolated workspace with its own security context:

### 1. 🧑‍🎓 Student Hub
Designed for academic focus and financial transparency.
- **Performance Matrix**: Real-time GPA tracking, attendance risk alerts (15% threshold), and curriculum progress.
- **Finance Console**: Complete ledger of tuition payments, scholarship status, and bank integration.
- **Exam Center**: Digital hall assignments, rules of conduct, and historical result archives.

### 2. 👩‍🏫 Teacher Analytics Suite
A command center for educators to manage academic flow.
- **Attendance Engine**: Features a 15-minute "Smart Lock" - attendance must be taken during the session or it requires an administrative correction request.
- **Live Journal**: Real-time grade entry, activity score management, and student performance leaderboards.
- **Staff Reports**: Automated generation of semester progress and faculty board presentations.

### 3. 👔 Department Head Console
Middle-management oversight for faculty and curriculum.
- **Faculty Load Monitoring**: Real-time tracking of professor teaching hours (Normal vs. Overload statuses).
- **Curriculum Stewardship**: Management of subject prerequisites and specialty-specific learning paths.
- **Teacher Assignment**: Strategic allocation of lecturers to groups based on specialty.

### 4. 🏢 University Admin (The Registry)
The global operations center for the entire institution.
- **Universal Directory**: Management of all students, faculties, departments, and specialties.
- **Academic Calendar**: Management of semesters, years, and university-wide holidays.
- **Correction Oversight**: Processing of formal requests from teachers to modify locked records.

### 5. 🛠️ IT Admin (SuperAdmin)
Infrastructure health and security management.
- **System Vital Signs**: Monitoring server uptime, CPU/RAM load, and active database sessions.
- **Security Audit**: Deep dive into system access logs and permission matrices.
- **Disaster Recovery**: Automated backup management and database maintenance tools.

### 6. 🤝 Tutor Workspace
The bridge between students and administration.
- **Group Mentorship**: Focused monitoring of specific cohorts.
- **Attendance Support**: Intervening when students approach the absence limit.

---

## 🎨 Design System & UX

UniManage utilizes a **"Premium Institutional"** aesthetic:
- **Typography**: `Public Sans` - chosen for its clarity on large digital screens.
- **Color Palette**: Dominant **Brand Primary (#1e1e38)** contrasted with soft slate backgrounds and semantic status colors.
- **Micro-Animations**: Powered by `Framer Motion` for smooth route transitions and interactive feedback.
- **Aesthetics**: Glassmorphism, subtle gradients, and interactive borders that provide depth without technical clutter.

---

## 💻 Technology Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router & Turbopack)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) (Using modern `@theme` and native CSS variables)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
- **State Management**: React Context for role-specific persistence.

---

## 📁 Project Structure

```text
app/
├── (auth)/             # Login and authentication flow
├── student/            # Student-only namespace
├── teacher/            # Educator-only namespace
├── department/         # Dept Head namespace
├── admin/              # University Registry namespace
├── superadmin/         # Infrastructure namespace
├── tutor/              # Tutor namespace
├── globals.css         # Tailwind 4.0 Design Tokens
└── layout.tsx          # Root Layout (Fonts, Context, Toasts)
components/
├── ui/                 # Atomic components (Card, Button, etc.)
└── layout/             # Complex components (Sidebar, TopBar)
translations/           # Multi-language support (AZ default)
```

---

## 🚀 Getting Started

1. **Clone & Install**:
   ```bash
   pnpm install
   ```

2. **Development**:
   ```bash
   npm run dev
   ```

3. **Build**:
   ```bash
   npm run build
   ```

---

*This project is a technical manifestation of modern university regulations, designed for reliability, transparency, and academic excellence.* 
**© 2026 UniManage Infrastructure.**
