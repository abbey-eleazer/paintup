# Phase 2: Software Requirements Specification (SRS) & Use Case Model — PaintUp

**Project Name:** PaintUp  
**Document Version:** 1.0 (Phase 2 — Requirements & System Modeling)  
**Status:** Complete  
**SDLC Methodology:** Hybrid Agile-Prototyping (Evolutionary Prototyping + Agile-Kanban)  
**Traceability:** Derived from `docs/01-planning/project-charter.md` (v1.1)

---

## 1. Functional Requirements

Functional requirements define the core behaviors and features **PaintUp** must execute to support Ghanaian painting workflows on active sites.

| ID | Feature Module | Functional Requirement | Primary Actor | Priority |
| :--- | :--- | :--- | :--- | :--- |
| **FR-01** | Instant Estimator | The system shall calculate required paint quantities (in `18L`/`20L` buckets or liters) and ancillary materials based on room count or wall dimensions. | Solo Painter, Master Painter | Must-Have |
| **FR-02** | Instant Estimator | The system shall compute itemized material and labor cost totals in Ghana Cedis (`GHS`). | Solo Painter, Master Painter | Must-Have |
| **FR-03** | WhatsApp Sharing | The system shall format generated estimates into a clean text summary and export them via a universal WhatsApp URL (`https://wa.me...`). | Solo Painter, Master Painter, WhatsApp | Must-Have |
| **FR-04** | Site Inventory | The system shall track incoming, used, and remaining `18L`/`20L` paint buckets, leftover tinted mixes, and site tools per project. | Solo Painter, Master Painter | Must-Have |
| **FR-05** | Team Management | The system shall allow team leads to log daily apprentice attendance (Present, Half-Day, Absent) per site. | Master Painter | Must-Have |
| **FR-06** | Team Management | The system shall automatically calculate cumulative daily and weekly wages in `GHS` based on each worker's daily rate and attendance logs. | Master Painter | Must-Have |
| **FR-07** | Team Management | The system shall allow team leads to create and assign daily site tasks to apprentices. | Master Painter | Must-Have |
| **FR-08** | Authentication | The system shall allow optional account registration and login to back up local records to the cloud. | Solo Painter, Master Painter | Should-Have |

---

## 2. Non-Functional Requirements

Non-functional requirements define the technical constraints, usability standards, and offline reliability required for real-world construction environments in Ghana.

| ID | Quality Attribute | Specification & Target Metric |
| :--- | :--- | :--- |
| **NFR-01** | **Offline Availability** | 100% of core MVP features (estimating, attendance, inventory) must operate without an active internet connection using browser `IndexedDB` (`Dexie.js`). |
| **NFR-02** | **Data Synchronization** | Offline records must queue safely on the device and synchronize automatically without data loss once network connectivity returns. |
| **NFR-03** | **Field Usability** | Interactive buttons and attendance toggles must have a minimum touch target of `48px × 48px` with high-contrast colors for one-handed outdoor sunlight use. |
| **NFR-04** | **Low-Friction Speed** | Logging a worker's attendance or incrementing a paint bucket counter must require no more than **2 taps** from the active site view. |
| **NFR-05** | **Performance & Footprint** | Initial PWA bundle size must remain lightweight so the app loads in under **2.5 seconds** on standard 3G mobile networks and installs cleanly to the home screen. |

---

## 3. MoSCoW Scope Prioritization

| Priority Tier | Included Capabilities | Engineering Rationale |
| :--- | :--- | :--- |
| **Must-Have (v1.0 MVP)** | Instant Estimator (`GHS`), WhatsApp Quote Export, Site Inventory & Bucket Counters, One-Tap Attendance, Automated Wage Tally, Task Assignment, Full Offline `IndexedDB` Storage. | Solves immediate on-site pain points (wage disputes, material loss, slow quotes) with zero network dependency. |
| **Should-Have (v1.0 Polish)** | Optional Cloud Sign-Up / Log-In. | Removes Day-1 onboarding friction so painters can use the app immediately, while supporting multi-device backup later. |
| **Could-Have (v1.1 Post-MVP)** | Voice-to-Text Estimator Input. | Deferred from v1.0 because standard Web Speech APIs require reliable internet and struggle with local accents/construction terms. |
| **Won't-Have (Excluded)** | In-app MoMo/card checkout, formal BOQs, tax invoicing. | Matches informal artisan payment habits and prevents corporate software bloat. |

---

## 4. System Actors & Inheritance Model

| Actor | Type | Role & Permissions |
| :--- | :--- | :--- |
| **Solo Painter** | Primary Human Actor | Independent painter working alone. Can generate paint estimates, share quotes via WhatsApp, and track site material inventory. |
| **Master Painter** | Primary Human Actor *(Inherits from Solo Painter)* | Team lead managing apprentices ("boys"). Inherits all Solo Painter capabilities via UML generalization, plus logging attendance, tallying wages, and assigning tasks. |
| **WhatsApp** | External System Actor | Third-party messaging platform receiving formatted quote summaries from PaintUp for client delivery. |

---

## 5. UML Use Case Diagram & Specifications

### Diagram Reference
![PaintUp UML Use Case Diagram](./use-case-diagram.png)

> *Note: Source diagram maintained in `draw.io`. Solid lines denote actor associations; the hollow-triangle arrow from Master Painter to Solo Painter denotes UML generalization.*

### Use Case Descriptions

| Use Case ID | Use Case Name | Primary Actor(s) | Brief Description & Post-Condition |
| :--- | :--- | :--- | :--- |
| **UC-01** | **Generate Paint Estimate** | Solo Painter, Master Painter | User inputs room count or dimensions and selects paint types. System calculates required buckets, accessories, and total `GHS` cost, saving the quote locally. |
| **UC-02** | **Share Quote on WhatsApp** | Solo Painter, Master Painter, WhatsApp | User selects a saved estimate and taps share. System formats an itemized text receipt and launches WhatsApp with pre-filled text ready to send to the client. |
| **UC-03** | **Track Material Inventory** | Solo Painter, Master Painter | User logs incoming paint buckets (`18L`/`20L`), increments/decrements daily usage, and records leftover tinted mixes or tools per site. |
| **UC-04** | **Log Worker Attendance** | Master Painter | Team lead selects an active site and marks each apprentice's daily status (`Present`, `Half-Day`, `Absent`) via one-tap toggles. |
| **UC-05** | **Tally Worker Wages** | Master Painter | System aggregates attendance logs per worker against their configured daily rate (`GHS`) to display accurate payable balances. |
| **UC-06** | **Assign Worker Tasks** | Master Painter | Team lead records daily painting assignments (e.g., scraping, priming, second coat) for specific apprentices on site. |

---

## 6. Phase 2 Sign-Off & Next Step

- **Verification:** Requirements and UML diagram reviewed for completeness, atomicity, and alignment with the Phase 1 Project Charter.
- **Next Deliverable:** **Phase 3 — Database Design (`Entity-Relationship Diagram` & `IndexedDB / Dexie.js` Schema)** stored in `docs/03-design/`.
