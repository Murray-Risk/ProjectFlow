# **System Architecture Document (SAD)**  

### *ProjectFlow Kernel — v0.x (Scaffolding Phase)*  
### **Document Class:** Specification  
### **Standard:** ISO/IEC/IEEE 42010:2022  
### **Status:** DRAFT  
### **Version:** 0.4.0  
### **Date:** 2026‑04‑03  
### **Author:** William Murray  
### **Owner:** Systems Architect  

---

# **1. Introduction**

## **1.1 Purpose**

This System Architecture Document (SAD) defines the **structural architecture** of **ProjectFlow Kernel v0.x**, the scaffolding phase of a sovereign, deterministic project‑management system.

Because v0.x contains:

- no functional behaviour  
- no CRUD  
- no persistence logic  
- no workflows  
- no automation  
- no symbolic reasoning  

…the purpose of this document is to:

- define the **architectural membrane**  
- establish **module boundaries**  
- ensure **ISO structural alignment**  
- preserve **future compatibility** with v1.x and v2.x  
- prevent architectural drift  
- serve as the **constitution** for all future implementation  

This SAD is the **single source of architectural truth** for ProjectFlow Kernel.

---

## **1.2 Scope**

This document describes:

- architectural context  
- stakeholders and concerns  
- architectural viewpoints  
- module boundaries  
- structural components  
- constraints  
- future evolution path  

It does **not** describe:

- functional behaviour  
- CRUD operations  
- runtime logic  
- symbolic reasoning  
- security architecture (v1.2+)  
- deployment architecture (v1.2+)  

Those belong to later phases.

---

## **1.3 References**

- Technical Analysis Report (TAR)  
- Architecture Feasibility Report (AFR)  
- Product Requirements Document (PRD)  
- Risk Management Plan (RMP)  
- Initial Risk Register  
- ISO 21500 / 21502  
- ISO 10006  
- ISO 31000 / 45001 / 14001 / 55000  
- ISO/IEC/IEEE 42010:2022  
- Document Roadmap v2.1.0  

---

# **2. Architectural Context**

## **2.1 System Overview**

ProjectFlow Kernel is a **local‑first, deterministic project‑management kernel** designed to:

- run offline  
- avoid automation  
- maintain strict modular boundaries  
- support future symbolic reasoning (v2.x)  
- remain sovereign and inspectable  

v0.x implements **no functionality**.  
It defines the **shape** of the system.

---

## **2.2 Stakeholders**

| Stakeholder | Concerns |
|-------------|----------|
| Systems Architect | Architectural integrity, DDD compliance |
| Technical Lead | Feasibility, maintainability |
| Future Developer(s) | Clarity, modularity, extensibility |
| Future Symbolic Runtime | Stable interface contract |
| End User (v1.x) | Determinism, sovereignty, simplicity |

---

## **2.3 Architectural Drivers**

### **Primary Drivers**
- Determinism  
- Sovereignty  
- Modularity  
- ISO structural alignment  
- Future symbolic integration  
- Document‑driven governance  

### **Constraints**
- No logic in v0.x  
- No persistence beyond empty SQLite file  
- No networking  
- No authentication  
- No automation  
- No symbolic reasoning  

---

# **3. Architectural Viewpoints**

ISO 42010 requires multiple viewpoints.  
For v0.x, only **structural viewpoints** are relevant.

---

## **3.1 Logical View (Structural Only)**

### **Three‑Layer Architecture**

```
┌──────────────────────────────────────────────┐
│                Standards Layer               │
│  - Standards                                  │
│  - Legislation                                │
│  - Guidelines                                 │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│                Domain Modules                │
│  - Risk (ISO 31000)                           │
│  - OHS (ISO 45001)                            │
│  - EMS (ISO 14001)                            │
│  - Asset (ISO 55000)                          │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│                 Core Kernel                  │
│  - Projects                                   │
│  - Charter                                    │
│  - WBS                                        │
│  - Tasks                                      │
│  - Milestones                                 │
│  - Stakeholders                               │
│  - Team                                       │
│  - Sites                                      │
│  - Documentation                              │
└──────────────────────────────────────────────┘
```

### **v0.x Implementation**
All components exist as **empty routers**, **empty pages**, and **placeholder models**.

---

## **3.2 Development View**

### **Backend Structure**

```
backend/
  app/
    main.py
    routers/
      projects.py
      charter.py
      wbs.py
      tasks.py
      milestones.py
      stakeholders.py
      team.py
      sites.py
      docs.py
      risk.py
      ohs.py
      ems.py
      asset.py
      issues.py
      changes.py
      quality.py
      lessons.py
      communications.py
    models/
      (empty placeholder files)
    db.py (empty SQLite init)
```

### **Frontend Structure**

```
frontend/
  src/
    pages/
      Projects/
      Charter/
      WBS/
      Tasks/
      Milestones/
      Stakeholders/
      Team/
      Sites/
      Docs/
      Risk/
      OHS/
      EMS/
      Asset/
      Issues/
      Changes/
      Quality/
      Lessons/
      Communications/
    components/
    router/
```

---

## **3.3 Process View**

v0.x has **no processes**.

- No workflows  
- No background tasks  
- No event handling  
- No state transitions  

This is intentional.

---

## **3.4 Physical View**

### **Deployment (v0.x)**

```
Single Machine
  ├── FastAPI backend (localhost)
  ├── SQLite file (empty)
  └── React frontend (localhost)
```

No networking.  
No cloud.  
No external dependencies.

---

## **3.5 Data View**

### **v0.x Data Model**
- No tables  
- No fields  
- No relationships  

Only an **empty SQLite file** exists to validate the persistence membrane.

---

# **4. Architectural Decisions**

### **AD‑1: Local‑First Architecture**
Chosen for sovereignty, simplicity, and security.

### **AD‑2: FastAPI + SQLite**
Lightweight, deterministic, modular.

### **AD‑3: React + Vite**
Minimal UI membrane.

### **AD‑4: Kernel‑and‑Module Pattern**
Ensures long‑term extensibility and ISO alignment.

### **AD‑5: No Logic in v0.x**
Prevents drift and preserves architectural purity.

### **AD‑6: Document‑Driven Design**
Documents govern code, not the reverse.

---

# **5. Architectural Constraints**

- No CRUD  
- No logic  
- No persistence  
- No authentication  
- No networking  
- No automation  
- No symbolic reasoning  
- No cross‑module coupling  
- No deviation from DDD invariants  

These constraints are **constitutional**.

---

# **6. Future Evolution**

### **v1.0 — Local Sovereign Kernel**
- CRUD  
- Standards upload  
- TXT export  
- SQLite persistence  

### **v1.2 — Private Backend**
- Authentication  
- TLS  
- Optional Postgres  

### **v2.x — Symbolic Runtime**
- Lisp kernel  
- Prolog modules  
- SMT solver  
- Event‑driven architecture  
- Immutable logs  

### **v3.x — Enterprise Envelope**
- Multi‑tenancy  
- RBAC  
- ISO 27001  
- WorkSafe integrations  

---

# **7. Risks & Mitigations (Architectural Only)**

| Risk | Mitigation |
|------|------------|
| Architectural drift | DDD invariants, ADRs |
| Scope creep | v0.x constitution |
| Module coupling | Router isolation |
| ISO misalignment | Structural placeholders |
| Placeholder drift | Synchronised scaffolding |

---

# **8. Compliance with ISO/IEC/IEEE 42010**

This SAD satisfies:

- **Stakeholders**  
- **Concerns**  
- **Viewpoints**  
- **Architectural decisions**  
- **Rationale**  
- **Constraints**  
- **Future evolution**  

---

# **9. Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Systems Architect | William Murray | — | — |

---

# **End of Document**

---


