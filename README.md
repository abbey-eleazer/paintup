# PaintUp — Offline-First PWA for Ghanaian Painters

> **Status:** Phase 1 Complete (Planning & Feasibility)  
> **SDLC Model:** Evolutionary Prototyping + Agile-Kanban Hybrid  
> **Schedule:** Core build days on Mondays, Wednesdays, and Fridays

PaintUp is an offline-first Progressive Web App (PWA) designed for Ghanaian sole painters ("master painters") and informal team leads managing apprentices ("boys"). It replaces scattered paper notebooks and mental tallies with fast, one-handed mobile tools built for active construction sites with unreliable internet.

---

## Problem Statement

Informal sole painters and small painting team leads in Ghana rely on paper notebooks, memory, and scattered WhatsApp chats to track daily apprentice attendance, casual wages, and paint drum inventory across active building sites. Because many developing construction zones have poor connectivity and local artisans prefer low-friction tools over formal office software, existing contractor apps go unused—leading to misplaced tools, wasted paint, end-of-week wage disputes, and slow on-site material estimates.

---

## Project Scope (MVP)

### In-Scope
- **Team Management:** One-tap site attendance, daily wage tally (GHS), and voice/text task assignment.
- **Site Inventory & Tracking:** 18L/20L paint bucket counters, leftover/tinted mix logs, and tool/ladder tracking across sites.
- **Instant Estimator:** Room-count material calculator with voice-to-text input.
- **Offline-First & Low-Friction:** Local browser storage (IndexedDB) with automatic sync and one-tap WhatsApp sharing.

### Out-of-Scope (Intentionally Excluded)
- **In-app payment processing / MoMo checkout:** Payments remain direct between client and painter.
- **Formal corporate paperwork:** Bills of Quantities (BOQs), tax invoicing, retention tracking, and multi-tier approvals are excluded to match how local artisans operate.

---

## Feasibility Analysis

| Dimension | Rating | Engineering Justification |
| :--- | :--- | :--- |
| **Operational** | High | Mirrors existing on-site workflows for Ghanaian master painters and apprentices without forcing formal accounting habits. |
| **Technical** | High | Built with standard, proven web technologies (React, Tailwind CSS, Dexie.js/IndexedDB, Web Audio/Speech APIs, WhatsApp URL schemes). |
| **Economic** | High | Zero licensing cost to build and host (free-tier static hosting + local-first storage), keeping mobile data usage minimal on site. |

---

## Planned Tech Stack

- **Frontend:** React + Vite + Tailwind CSS (mobile-first, bottom thumb-zone ergonomics)
- **Offline Storage:** IndexedDB via `Dexie.js`
- **Voice & Sharing:** Web Audio / MediaRecorder API + WhatsApp URL Scheme (`whatsapp://send`)
- **PWA Support:** Service Worker + Web App Manifest for home-screen installation

---

## Repository Structure

```text
paintUp-pwa/
├── docs/                          # System Analysis & Design (SAD) artifacts
│   ├── 01-planning/               # Problem statement, scope, feasibility study
│   ├── 02-requirements/           # Functional/non-functional reqs, use cases
│   ├── 03-design/                 # Architecture, IndexedDB schema, wireframes
│   └── snapshots/                 # Progress screenshots for LinkedIn & X
├── public/                        # Static assets, PWA icons, manifest.json
├── src/
│   ├── assets/                    # Paint brand icons, UI SVGs
│   ├── components/                # Shared UI (bottom nav, buttons, cards)
│   ├── db/                        # Dexie.js database setup & offline sync
│   ├── features/
│   │   ├── team/                  # Site attendance, daily rate tally, tasks
│   │   ├── inventory/             # Paint bucket counters, leftovers, tools
│   │   └── estimator/             # Room calculator, voice-to-text, WhatsApp share
│   ├── hooks/                     # Custom React hooks (useOfflineStatus, etc.)
│   ├── utils/                     # GHS formatting, WhatsApp message builders
│   ├── App.jsx                    # Main app shell & routing
│   └── main.jsx                   # Entry point & service worker registration
├── .gitignore
├── package.json
└── README.md
```

---

## Development Roadmap

- [x] **Phase 1 (Week 1 - Mon):** Planning, SDLC Selection & Feasibility Analysis
- [ ] **Phase 2 (Week 1 - Wed/Fri):** Functional Requirements, User Stories & Use Case Modeling
- [ ] **Phase 3 (Week 2):** System Architecture, IndexedDB Schema & Mobile UI Wireframes
- [ ] **Phase 4 (Weeks 3–5):** Iterative Feature Development & On-Site Testing
- [ ] **Phase 5 (Week 6):** Deployment & Engineering Case Study
