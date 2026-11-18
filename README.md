# PaintUp — Offline-First PWA for Ghanaian Painters

> **Status:** Phase 2 In Progress (Requirements & Use Case Modeling)  
> **SDLC Model:** Hybrid Agile-Prototyping  
> **Build Cadence:** Core sessions on Mondays, Wednesdays, and Fridays

PaintUp is an offline-first Progressive Web App (PWA) built for Ghanaian **Solo Painters** and **Master Painters** managing apprentices ("boys"). It replaces scattered paper notebooks and mental tallies with fast, one-handed mobile tools engineered for active construction sites with unreliable internet.

---

## Problem Statement

Solo painters and small painting team leads in Ghana rely on paper notebooks, memory, and scattered WhatsApp chats to track daily apprentice attendance, casual wages, and paint bucket inventory across active building sites. Because developing construction zones often have poor network reception and artisans need zero-friction tools over complex office software, traditional contractor apps go unused—leading to misplaced tools, wasted paint, end-of-week wage disputes, and slow on-site material estimates.

---

## Project Scope (MoSCoW Prioritization)

### Must-Have (MVP v1.0)
- **Instant Estimator:** Room-count and wall-dimension material calculator with automated Ghana Cedi (`GHS`) totals.
- **Team Management:** One-tap site attendance, automated daily wage tally (`GHS`), and apprentice task assignment.
- **Site Inventory & Tracking:** `18L`/`20L` paint bucket counters, leftover/tinted mix logs, and tool/ladder tracking across sites.
- **Offline-First & WhatsApp Sharing:** Local browser storage (`IndexedDB`) with automatic sync and one-tap itemized WhatsApp sharing.

### Should-Have (v1.0 Polish)
- **Optional Cloud Authentication:** Frictionless local-first startup on Day 1, with optional account sign-in later for multi-device backup.

### Could-Have (v1.1 Post-MVP)
- **Voice-to-Text Estimator:** Hands-free audio input for material calculations once core offline workflows are validated on site.

### Won't-Have (Out of Scope)
- **In-app payment processing / MoMo checkout:** Payments remain direct between client and painter.
- **Formal corporate paperwork:** Bills of Quantities (BOQs), tax invoicing, retention tracking, and multi-tier approvals are excluded to match how local artisans operate.

---

## Feasibility Analysis

| Dimension | Rating | Engineering Justification |
| :--- | :--- | :--- |
| **Operational** | High | Mirrors existing on-site workflows for Ghanaian master painters and apprentices without forcing formal accounting habits. |
| **Technical** | High | Built with proven web technologies (React, Tailwind CSS, Dexie.js/IndexedDB, Service Workers, and universal WhatsApp web links). |
| **Economic** | High | Zero licensing cost to build and host (free-tier static hosting + local-first storage), keeping mobile data usage minimal on site. |

---

## Planned Tech Stack

- **Frontend:** React + Vite + Tailwind CSS (mobile-first, `48px+` bottom thumb-zone ergonomics)
- **Offline Storage:** `IndexedDB` via `Dexie.js`
- **Sharing & Integrations:** Universal WhatsApp URL Scheme (`https://wa.me...`)
- **PWA Support:** Service Worker + Web App Manifest for home-screen installation

---

## Repository Structure

```text
paintUp-pwa/
├── docs/                          # System Analysis & Design (SAD) artifacts
│   ├── 01-planning/               # Problem statement, MoSCoW scope, feasibility
│   ├── 02-requirements/           # Functional/non-functional reqs, use case diagrams
│   ├── 03-design/                 # System architecture, ERD / IndexedDB schema, wireframes
│   └── snapshots/                 # Progress screenshots for LinkedIn & X
├── public/                        # Static assets, PWA icons, manifest.json
├── src/
│   ├── assets/                    # Paint brand icons, UI SVGs
│   ├── components/                # Shared UI (bottom nav, large touch buttons, cards)
│   ├── db/                        # Dexie.js database setup & offline sync logic
│   ├── features/
│   │   ├── team/                  # Site attendance, daily rate tally, tasks
│   │   ├── inventory/             # Paint bucket counters, leftovers, tools
│   │   └── estimator/             # Room calculator & WhatsApp quote builder
│   ├── hooks/                     # Custom React hooks (useOfflineStatus, etc.)
│   ├── utils/                     # GHS currency formatting, WhatsApp message builders
│   ├── App.jsx                    # Main app shell & routing
│   └── main.jsx                   # Entry point & service worker registration
├── .gitignore
├── package.json
└── README.md
```

---

## Development Roadmap

- [x] **Phase 1 (Week 1 - Mon):** Planning, Hybrid SDLC Selection & Feasibility Analysis
- [ ] **Phase 2 (Week 1 - Wed):** Requirements Specification & UML Use Case Diagram *(In Progress)*
- [ ] **Phase 3 (Week 1 - Fri):** Database Design (ERD / `IndexedDB` Schema) & Mobile Wireframes
- [ ] **Phase 4 (Weeks 2–4):** Iterative Feature Sprints (Estimator → Inventory → Team Management)
- [ ] **Phase 5 (Week 5):** On-Site Testing, PWA Deployment & Engineering Case Study
