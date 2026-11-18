# Phase 1: Project Charter & Feasibility Study — PaintUp

**Project Name:** PaintUp  
**Document Version:** 1.1 (Synced with MVP Scope & MoSCoW Baseline)  
**SDLC Methodology:** Hybrid Agile-Prototyping (Evolutionary Prototyping + Agile-Kanban)  
**Build Cadence:** Mondays, Wednesdays, and Fridays (with flexible coursework-permitting days)

---

## 1. System Request & Problem Statement

### Business Need
In Ghana's residential and small-commercial construction sector, painting work is largely executed by independent **Solo Painters** and **Master Painters** leading 1–10 apprentices ("boys"). Most site operations are tracked manually or not at all, creating avoidable material loss, wage misunderstandings, and delays when quoting new clients.

### Problem Statement
Solo painters and small painting team leads in Ghana rely on paper notebooks, memory, and scattered WhatsApp chats to track daily apprentice attendance, casual wages, and paint bucket inventory across active building sites. Because many developing construction zones have unreliable internet connectivity and local artisans prefer low-friction tools over formal office software, existing contractor apps go unused—leading to misplaced tools, wasted or forgotten paint mixes, end-of-week wage disputes, and slow on-site material estimates.

### Proposed Solution
**PaintUp** is an offline-first Progressive Web App (PWA) built for one-handed mobile use on construction sites. It enables painters to record daily worker attendance and casual wage tallies, log paint buckets and tools per site, generate fast room-based material estimates, and share clean itemized quotes directly through WhatsApp.

---

## 2. Key Stakeholders

| Stakeholder | Role in Ecosystem | Primary Need from PaintUp |
| :--- | :--- | :--- |
| **Master Painter / Team Lead** | Primary user managing sites and workers | Fast attendance/wage tallying, bucket tracking, and instant client quotes |
| **Sole Painter** | Independent artisan working solo | Quick room-to-bucket estimates, leftover paint logs, and WhatsApp sharing |
| **Apprentices ("Boys")** | Casual site workers paid daily rates | Accurate, dispute-free tracking of days worked and clear daily tasks |
| **Property Owners ("Landlords")** | Clients hiring the painter | Clear, fast material estimates and visual progress updates on WhatsApp |

---

## 3. Project Scope Boundaries (MoSCoW Baseline)

### In-Scope — Must-Have (MVP v1.0)
- **Instant Estimator:** Room-count and wall-dimension material calculator with automated Ghana Cedi (`GHS`) totals.
- **Team Management:** One-tap site attendance, automated daily wage tally (`GHS`), and apprentice task assignment.
- **Site Inventory & Tracking:** `18L`/`20L` paint bucket counters, leftover/tinted mix logs, and tool/ladder tracking across sites.
- **Offline-First & WhatsApp Sharing:** Local browser storage (`IndexedDB` via `Dexie.js`) with automatic background sync and one-tap WhatsApp sharing (`https://wa.me...`).

### Should-Have (v1.0 Polish)
- **Optional Cloud Authentication:** Frictionless local-first startup on Day 1, with optional account sign-in later for multi-device backup.

### Could-Have (Post-MVP v1.1)
- **Voice-to-Text Estimator:** Hands-free audio input for material calculations once core offline workflows are validated on site.

### Out-of-Scope — Won't-Have (Intentionally Excluded)
- **In-App Payment Processing / MoMo Checkout:** Payments remain direct between client and painter to match local cash/MoMo habits and avoid redundant fees or friction.
- **Formal Corporate Paperwork:** Bills of Quantities (BOQs), tax invoicing, retention tracking, and multi-tier corporate approvals are excluded so the app stays practical for informal artisans.

---

## 4. SDLC Model Selection

| SDLC Model | Core Characteristics | Suitability for PaintUp |
| :--- | :--- | :--- |
| **Waterfall** | Rigid, linear phases (Requirements → Design → Build → Test) | **Poor:** Cannot adapt easily after testing UI prototypes with local painters on site. |
| **Pure Scrum** | Fixed sprints, formal ceremonies, story points | **Moderate:** Unnecessary administrative overhead for a solo student developer. |
| **Hybrid Agile-Prototyping** *(Evolutionary Prototyping + Agile-Kanban)* | Iterative prototypes tested early with continuous feature flow | **Optimal:** Enables rapid UI validation with artisans, steady MWF progress, and shareable milestones. |

---

## 5. Feasibility Analysis

| Feasibility Dimension | Rating | Justification |
| :--- | :--- | :--- |
| **Operational** | **High** | Mirrors how Ghanaian master painters and apprentices already operate on site—replacing paper notebooks without forcing formal accounting workflows. |
| **Technical** | **High** | Achievable using proven web technologies: React, Vite, Tailwind CSS, `IndexedDB` (`Dexie.js`), Service Workers, and universal WhatsApp web links. |
| **Economic** | **High** | Zero licensing cost to build and deploy (free-tier static hosting + local-first browser storage), keeping mobile data consumption minimal for users. |

---

## 6. High-Level Roadmap

1. **Phase 1 (Week 1 — Mon):** Planning, Hybrid SDLC Selection & Feasibility Analysis *(Complete)*
2. **Phase 2 (Week 1 — Wed):** Requirements Specification & UML Use Case Diagram *(In Progress)*
3. **Phase 3 (Week 1 — Fri):** Database Design (ERD / `IndexedDB` Schema) & Mobile Thumb-Zone Wireframes
4. **Phase 4 (Weeks 2–4):** Iterative Feature Sprints (Estimator → Inventory → Team Management)
5. **Phase 5 (Week 5):** On-Site Testing, PWA Deployment & Portfolio Case Study
