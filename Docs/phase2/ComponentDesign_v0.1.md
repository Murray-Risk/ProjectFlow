# **Component Design Specifications (v0.x)**  

### *ProjectFlow Kernel — Scaffolding Phase*  
### **Document Class:** Specification  
### **Standard Alignment:** IEEE 1016‑2009; UML 2.5 (Structural Only)  
### **Status:** DRAFT  
### **Version:** 0.13.0  
### **Date:** 2026‑04‑03  
### **Author:** William Murray  
### **Owner:** Systems Architect  

---

# **1. Purpose**

This Component Design Specification (CDS) defines the **structural, pre‑functional component architecture** for **ProjectFlow Kernel v0.x**.

Because v0.x contains:

- no logic  
- no CRUD  
- no persistence  
- no workflows  
- no state machines  
- no UI behaviour  

…the purpose of this document is to:

- define **component boundaries**  
- define **component responsibilities**  
- define **component interfaces (placeholders)**  
- ensure **architectural purity**  
- prevent **cross‑module coupling**  
- prepare for **v1.0 CRUD implementation**  
- preserve compatibility with **v2.x symbolic runtime**  

This is a **constitutional component‑architecture document**, not an implementation guide.

---

# **2. Scope**

This specification covers:

- backend components  
- frontend components  
- module boundaries  
- interface placeholders  
- dependency rules  
- future evolution path  

It does **not** include:

- actual logic  
- actual data models  
- actual workflows  
- actual UI interactions  
- actual API behaviour  

Those belong to **v1.0** and **v2.x**.

---

# **3. Component Architecture Overview**

ProjectFlow Kernel uses a **three‑layer component architecture**:

```
┌──────────────────────────────────────────────┐
│                Presentation Layer            │
│ (React pages, components — empty in v0.x)    │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│                Application Layer             │
│ (FastAPI routers — empty in v0.x)            │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│                Data Layer                    │
│ (SQLite placeholder — empty in v0.x)         │
└──────────────────────────────────────────────┘
```

v0.x implements **only the structure**, not the behaviour.

---

# **4. Backend Component Specifications**

Backend components live under:

```
backend/app/
```

Each component is a **sovereign module** with:

- its own router  
- its own placeholder model file  
- no cross‑module imports  
- no logic  

---

## **4.1 Component: Project Router**

**Path:** `backend/app/routers/projects.py`  
**Type:** Application Layer Component  
**Responsibilities:**  
- Define namespace for project‑related endpoints  
- Provide placeholder endpoints for v1.0 CRUD  
- Maintain module isolation  

**Interfaces (v0.x):**
```
GET    /api/core/v1/projects
POST   /api/core/v1/projects
GET    /api/core/v1/projects/{id}
PUT    /api/core/v1/projects/{id}
DELETE /api/core/v1/projects/{id}
```

**Dependencies:** None  
**Future Logic:** CRUD, validation, documentation export  

---

## **4.2 Component: Charter Router**

**Path:** `backend/app/routers/charter.py`  
**Responsibilities:**  
- Namespace for project charter  
- Placeholder for v1.0 charter logic  

**Interfaces (v0.x):**
```
GET    /api/core/v1/charter
POST   /api/core/v1/charter
PUT    /api/core/v1/charter
```

---

## **4.3 Component: WBS Router**

**Path:** `backend/app/routers/wbs.py`  
**Responsibilities:**  
- Namespace for Work Breakdown Structure  
- Placeholder for hierarchical CRUD  

**Interfaces (v0.x):**
```
GET    /api/core/v1/wbs
POST   /api/core/v1/wbs
PUT    /api/core/v1/wbs/{id}
DELETE /api/core/v1/wbs/{id}
```

---

## **4.4 Component: Task Router**

**Path:** `backend/app/routers/tasks.py`  
**Responsibilities:**  
- Namespace for tasks and subtasks  

**Interfaces (v0.x):**
```
GET    /api/core/v1/tasks
POST   /api/core/v1/tasks
GET    /api/core/v1/tasks/{id}
PUT    /api/core/v1/tasks/{id}
DELETE /api/core/v1/tasks/{id}
```

---

## **4.5 Component: Milestone Router**

**Path:** `backend/app/routers/milestones.py`  
**Responsibilities:**  
- Namespace for milestones  

**Interfaces (v0.x):**
```
GET    /api/core/v1/milestones
POST   /api/core/v1/milestones
```

---

## **4.6 Component: Stakeholder Router**

**Path:** `backend/app/routers/stakeholders.py`  
**Responsibilities:**  
- Namespace for stakeholder register  

**Interfaces (v0.x):**
```
GET    /api/core/v1/stakeholders
POST   /api/core/v1/stakeholders
```

---

## **4.7 Component: Team Router**

**Path:** `backend/app/routers/team.py`  
**Responsibilities:**  
- Namespace for team register  

**Interfaces (v0.x):**
```
GET    /api/core/v1/team
POST   /api/core/v1/team
```

---

## **4.8 Component: Site Router**

**Path:** `backend/app/routers/sites.py`  
**Responsibilities:**  
- Namespace for project sites  

**Interfaces (v0.x):**
```
GET    /api/core/v1/sites
POST   /api/core/v1/sites
```

---

## **4.9 Component: Documentation Router**

**Path:** `backend/app/routers/docs.py`  
**Responsibilities:**  
- Namespace for documentation export  

**Interfaces (v0.x):**
```
GET    /api/core/v1/docs/export
```

---

# **5. Domain Module Components**

Each domain module is a **sovereign component**.

---

## **5.1 Risk Module (ISO 31000)**

**Path:** `backend/app/routers/risk.py`  
**Interfaces (v0.x):**
```
GET    /api/risk/v1/risks
POST   /api/risk/v1/risks
```

---

## **5.2 OHS Module (ISO 45001)**

**Path:** `backend/app/routers/ohs.py`  
**Interfaces (v0.x):**
```
GET    /api/ohs/v1/hazards
POST   /api/ohs/v1/hazards
```

---

## **5.3 EMS Module (ISO 14001)**

**Path:** `backend/app/routers/ems.py`  
**Interfaces (v0.x):**
```
GET    /api/ems/v1/aspects
POST   /api/ems/v1/aspects
```

---

## **5.4 Asset Module (ISO 55000)**

**Path:** `backend/app/routers/asset.py`  
**Interfaces (v0.x):**
```
GET    /api/asset/v1/assets
POST   /api/asset/v1/assets
```

---

# **6. Governance Components (ISO 21500 Structural)**

These components exist to satisfy ISO structural requirements.

---

## **6.1 Issues Router**

**Path:** `backend/app/routers/issues.py`  
**Interfaces (v0.x):**
```
GET    /api/governance/v1/issues
POST   /api/governance/v1/issues
```

---

## **6.2 Changes Router**

**Path:** `backend/app/routers/changes.py`  
**Interfaces (v0.x):**
```
GET    /api/governance/v1/changes
POST   /api/governance/v1/changes
```

---

## **6.3 Quality Router**

**Path:** `backend/app/routers/quality.py`  
**Interfaces (v0.x):**
```
GET    /api/governance/v1/quality
POST   /api/governance/v1/quality
```

---

## **6.4 Lessons Learned Router**

**Path:** `backend/app/routers/lessons.py`  
**Interfaces (v0.x):**
```
GET    /api/governance/v1/lessons
POST   /api/governance/v1/lessons
```

---

## **6.5 Communications Router**

**Path:** `backend/app/routers/communications.py`  
**Interfaces (v0.x):**
```
GET    /api/governance/v1/communications
POST   /api/governance/v1/communications
```

---

# **7. Frontend Component Specifications**

Frontend components live under:

```
frontend/src/pages/
```

Each page:

- is an empty shell  
- contains no logic  
- contains no state  
- contains no forms  
- contains no CRUD behaviour  

This is intentional.

---

## **7.1 Page Components (Core Kernel)**

- `Projects/ProjectsPage.tsx`  
- `Charter/CharterPage.tsx`  
- `WBS/WBSPage.tsx`  
- `Tasks/TasksPage.tsx`  
- `Milestones/MilestonesPage.tsx`  
- `Stakeholders/StakeholdersPage.tsx`  
- `Team/TeamPage.tsx`  
- `Sites/SitesPage.tsx`  
- `Docs/DocsPage.tsx`  

Each page renders:

```
<h1>[Module Name]</h1>
<p>Placeholder — v0.x</p>
```

---

## **7.2 Page Components (Domain Modules)**

- `Risk/RiskPage.tsx`  
- `OHS/OHSPage.tsx`  
- `EMS/EMSPage.tsx`  
- `Asset/AssetPage.tsx`  

---

## **7.3 Page Components (Governance)**

- `Issues/IssuesPage.tsx`  
- `Changes/ChangesPage.tsx`  
- `Quality/QualityPage.tsx`  
- `Lessons/LessonsPage.tsx`  
- `Communications/CommunicationsPage.tsx`  

---

# **8. Component Dependency Rules**

## **8.1 No Cross‑Module Imports**
Modules must remain sovereign.

## **8.2 No Shared Logic**
No shared services, helpers, or utilities in v0.x.

## **8.3 No State Management**
No Redux, Zustand, or context providers.

## **8.4 No Data Layer**
No models, no schemas, no migrations.

## **8.5 No Symbolic Logic**
Symbolic runtime is isolated to v2.x.

---

# **9. Future Evolution (v1.x → v2.x)**

## **v1.0**
- CRUD logic  
- validation  
- SQLite persistence  
- documentation export  

## **v1.2**
- authentication  
- TLS  
- optional Postgres  

## **v2.x**
- symbolic runtime  
- rule engine  
- SMT solver  
- event‑driven architecture  
- immutable logs  

---

# **10. Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Systems Architect | William Murray | — | — |

---

# **End of Document**

---


