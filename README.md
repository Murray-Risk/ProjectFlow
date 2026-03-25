# **ProjectFlow Kernel**  
---
### *A Minimal, Deterministic Project‑Management Core (v1.x)*
---
ProjectFlow Kernel is a lightweight, local‑first project‑management system designed for clarity, stability, and long‑term maintainability. It provides a clean foundation for managing projects, tasks, documentation, and domain‑specific modules without cloud dependencies, automation, or hidden behaviour.

This version (v1.x) is intentionally simple: a deterministic CRUD kernel for personal project management and structured operational records.

---

## **Why ProjectFlow Kernel Exists**

Most project‑management tools are:

- overloaded with features  
- tied to cloud accounts  
- opinionated or automated in ways you can’t control  

ProjectFlow Kernel takes the opposite approach:

- **Local‑first** — runs entirely on your machine  
- **Deterministic** — no automation, no inference, no surprises  
- **Modular** — core kernel + optional domain modules  
- **Document‑centric** — structured records, not opaque workflows  

It is built for users who want **sovereign control** over their project data without the complexity of enterprise platforms.

---

## **Core Architecture**

ProjectFlow Kernel follows a simple three‑layer structure:

### **1. Core Kernel**
Foundational project‑management entities:

- Projects  
- Charter  
- Work Breakdown Structure (WBS)  
- Tasks & Subtasks  
- Milestones  
- Stakeholders & Team  
- Sites  
- Documentation records  

This layer defines the structural backbone of the system.

---

### **2. Domain Modules**
Optional, self‑contained modules extending the kernel:

- **Risk** (ISO 31000)  
- **OHS** (ISO 45001)  
- **Environmental Management** (ISO 14001)  
- **Asset Management** (ISO 55000)  

Modules add domain‑specific CRUD features without modifying the core.

---

### **3. Standards Layer**
Projects can attach external documents such as:

- standards  
- guidelines  
- legislation  
- manuals  

These are stored as files only — **no parsing, automation, or inference**.

---

## **Technical Stack**

### **Backend**
- FastAPI  
- SQLite (local file‑based storage)  
- Pydantic v2  
- Uvicorn (development server)

### **Frontend**
- React  
- TypeScript  
- Vite  

### **Modules**
- Risk Register  
- OHS (Hazards & Incidents)  
- EMS (Aspects & Objectives)  
- Asset Register  

---

## **Project Status**

**Current Version:** v1.0 — Minimal deterministic kernel for personal project management.

Included:

- Core project‑management entities  
- Domain modules (Risk, OHS, EMS, Asset)  
- Local‑only storage  
- React frontend shell  
- TXT export for documentation  

**Next milestone (v1.2):**  
Optional multi‑machine access via a private backend.

---

## **Repository Structure**

```
projectflow-kernel/
├── backend/        # FastAPI application
│   ├── app/
│   └── tests/
├── frontend/       # React UI
└── docs/           # Documentation & diagrams
```

---

## **License**

MIT License — see `LICENSE` for details.

**Author:** William Murray

---


