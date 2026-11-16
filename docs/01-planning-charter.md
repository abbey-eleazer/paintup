# Phase 1: Project Charter & Feasibility Study — PaintUp

**Project Name:** PaintUp  
**Document Version:** 1.0 (Day 1 — Planning Phase)  
**SDLC Methodology:** Evolutionary Prototyping + Agile-Kanban Hybrid  
**Build Cadence:** Mondays, Wednesdays, and Fridays (with flexible coursework-permitting days)

---

## 1. System Request & Problem Statement

### Business Need
In Ghana's residential and small-commercial construction sector, painting work is largely executed by sole master painters and informal team leads managing 1–10 apprentices ("boys"). Most site operations are tracked manually or not at all, creating avoidable material loss, wage misunderstandings, and delays when quoting new clients.

### Problem Statement
Informal sole painters and small painting team leads in Ghana rely on paper notebooks, memory, and scattered WhatsApp chats to track daily apprentice attendance, casual wages, and paint drum inventory across active building sites. Because many developing construction zones have unreliable internet connectivity and local artisans prefer low-friction tools over formal office software, existing contractor apps go unused—leading to misplaced tools, wasted or forgotten paint mixes, end-of-week wage disputes, and slow on-site material estimates.

### Proposed Solution
**PaintUp** is an offline-first Progressive Web App (PWA) built for one-handed mobile use on construction sites. It enables painters to record daily worker attendance and casual wage tallies, log paint buckets and tools per site, generate fast room-based material estimates (via tap or voice-to-text), and share clean updates directly through WhatsApp.

---

## 2. Key Stakeholders

| Stakeholder | Role in Ecosystem | Primary Need from PaintUp |
| :--- | :--- | :--- |
| **Master Painter / Team Lead** | Primary user managing sites and workers | Fast attendance/wage tallying, bucket tracking, and instant client quotes |
| **Sole Painter** | Independent artisan working solo | Quick room-to-bucket estimates, leftover paint logs, and WhatsApp sharing |
| **Apprentices ("Boys")** | Casual site workers paid daily rates | Accurate, dispute-free tracking of days worked and clear daily tasks |
| **Property Owners ("Landlords")** | Clients hiring the painter | Clear, fast material estimates and visual progress updates on WhatsApp |

---

## 3. Project Scope Boundaries

### In-Scope (MVP)
- **Team Management:** One-tap site attendance, daily wage tally (GHS), and voice/text task assignment.
- **Site Inventory & Tracking:** 18L/20L paint bucket counters, leftover/tinted mix logs, and tool/ladder tracking across sites.
- **Instant Estimator:** Room-count material calculator with voice-to-text input.
- **Offline-First & Low-Friction:** Local browser storage (IndexedDB via Dexie.js) with background sync and one-tap WhatsApp sharing.

### Out-of-Scope (Intentionally Excluded)
- **In-App Payment Processing / MoMo Checkout:** Payments remain direct between client and painter to match local cash/MoMo habits and avoid redundant fees or friction.
- **Formal Corporate Paperwork:** Bills of Quantities (BOQs), tax invoicing, retention tracking, and multi-tier corporate approvals are excluded so the app stays practical for informal artisans.

---

## 4. SDLC Model Selection

| SDLC Model | Core Characteristics | Suitability for PaintUp |
| :--- | :--- | :--- |
| **Waterfall** | Rigid, linear phases (Requirements → Design → Build → Test) | **Poor:** Cannot adapt easily after testing UI prototypes with local painters on site. |
| **Pure Scrum** | Fixed sprints, formal ceremonies, story points | **Moderate:** Unnecessary administrative overhead for a solo student developer. |
| **Evolutionary Prototyping + Agile-Kanban** | Iterative prototypes tested early with continuous feature flow | **Optimal:** Enables rapid UI validation with artisans, steady MWF progress, and shareable milestones. |

---

## 5. Feasibility Analysis

| Feasibility Dimension | Rating | Justification |
| :--- | :--- | :--- |
| **Operational** | **High** | Mirrors how Ghanaian master painters and apprentices already operate on site—replacing paper notebooks without forcing formal accounting workflows. |
| **Technical** | **High** | Achievable using standard web technologies: React, Vite, Tailwind CSS, IndexedDB (`Dexie.js`), Web Audio/Speech APIs, and WhatsApp URL schemes. |
| **Economic** | **High** | Zero licensing cost to build and deploy (free-tier static hosting + local-first browser storage), keeping mobile data consumption minimal for users. |

---

## 6. High-Level Roadmap

1. **Phase 1 (Week 1 — Mon):** Planning, SDLC Selection & Feasibility Analysis *(Complete)*
2. **Phase 2 (Week 1 — Wed/Fri):** Functional & Non-Functional Requirements, User Stories & Use Case Modeling
3. **Phase 3 (Week 2):** System Architecture, IndexedDB Schema & Mobile Thumb-Zone Wireframes
4. **Phase 4 (Weeks 3–5):** Iterative Feature Development & On-Site Usability Testing
5. **Phase 5 (Week 6):** Production Deployment & Portfolio Case Study
