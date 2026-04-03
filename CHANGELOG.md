# **CHANGELOG**

All notable changes to **ProjectFlow Kernel** are documented here.  
This project follows **semantic versioning**: `MAJOR.MINOR.PATCH`.

---

# **CHANGELOG Entry — v0.1.0**

## **v0.1.0 — Documentation Corpus Baseline (Phases 0–2)**  
**Date:** 2026‑04‑03  
**Status:** Baseline  

This release establishes the **complete Document‑Driven Design (DDD) corpus** for the ProjectFlow Kernel and marks the transition from conceptual design to repository initialization.

### **Added**
- **Phase 0 — Conceptual Layer**
  - Technical Analysis Report  
  - Architecture Feasibility Report  
  - Product Requirements Document (PRD)  
  - Risk Management Plan  
  - Initial Risk Register  

- **Phase 1 — Constitutional Layer**
  - System Architecture Document (SAD)  
  - Data Architecture Specification (DAS)  
  - API Specification  
  - Security & Governance Specification  
  - Testing Strategy & Test Plan  
  - Domain Logic Specification  
  - Technical Risk Assessment  
  - Security Risk Assessment  
  - Repository Manifest (Physical Map)  
  - Standards Intake Boundary (ICD‑S01)  
  - v0.x Constitution  

- **Phase 2 — Execution Layer**
  - Development Plan  
  - Component Design Specification  
  - Configuration & Environment Guide  
  - Risk Monitoring Log  
  - Automated Invariant Definitions (documentation)  

### **Summary**
This version establishes the **full constitutional, architectural, and operational scaffolding** required for the v0.1 repository.  
All invariants, boundaries, and governance structures are now defined.  
The system is ready for **M0 repository initialization** and the creation of backend/frontend scaffolds.

---

## **v0.1.0 — Structural Scaffolding Release**  
**Date:** 2026‑04‑03  
**Status:** Initial Release (Pre‑Functional)

### **Overview**  
This release establishes the **constitutional foundation** of the ProjectFlow Kernel.  
It defines the system’s architecture, module boundaries, ISO‑aligned structures, and document‑driven design membrane — **without implementing any functional behaviour**.

This version is intentionally minimal and deterministic, forming the base upon which v1.x will be built.

---

### **Added — Backend (FastAPI Skeleton)**  
- Project directory structure (`backend/app/`)  
- Empty routers for all core kernel modules:  
  - `projects.py`  
  - `charter.py`  
  - `wbs.py`  
  - `tasks.py`  
  - `milestones.py`  
  - `stakeholders.py`  
  - `team.py`  
  - `sites.py`  
  - `docs.py`  

- Empty routers for ISO‑required governance modules:  
  - `issues.py`  
  - `changes.py`  
  - `quality.py`  
  - `lessons.py`  
  - `communications.py`  

- SQLite initialisation (empty schema)  
- Application entrypoint (`main.py`)  
- Pydantic v2 placeholder models (no fields)  

---

### **Added — Frontend (React Shell)**  
- Left‑navigation layout matching UI screenshots  
- Empty pages for all modules  
- Routing structure only (no forms, no CRUD)  
- Placeholder components for future list/detail views  

---

### **Added — Documentation**  
- Updated `README.md` to reflect v0.x scope  
- Added **ISO Alignment (v0.x Structural Compliance)** section  
- Added module descriptions and roadmap  
- Added repository structure overview  
- Added v0.x constraints and non‑scope definition  

---

### **Added — ISO Structural Compliance**  
The architecture now includes placeholders for all ISO‑required project‑management concepts:

- ISO 21500 / 21502 (Project Management)  
- ISO 10006 (Quality in Projects)  
- ISO 31000 (Risk)  
- ISO 45001 (OHS)  
- ISO 14001 (Environmental)  
- ISO 55000 (Asset Management)  

No ISO workflows or logic are implemented — **structural alignment only**.

---

### **Not Included in v0.1.0**  
(Explicitly deferred to v1.x)

- CRUD operations  
- Forms and validation  
- Standards & legislation attachments  
- Documentation export  
- Business logic  
- Authentication  
- Networking  
- Symbolic reasoning  
- Automation  
- Event‑driven architecture  

---

### **Purpose of v0.1.0**  
To establish:

- the **membrane** of the system  
- the **module boundaries**  
- the **document‑driven design corpus**  
- the **ISO‑aligned structural primitives**  
- a stable foundation for deterministic v1.x development  

This version is the **constitutional scaffold** of the ProjectFlow Kernel.

---


