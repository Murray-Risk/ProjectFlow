# **ProjectFlow Kernel**  
### *A Minimal, Deterministic Project‑Management Core (v0.x)*  
---

ProjectFlow Kernel is a lightweight, local‑first project‑management system designed for clarity, stability, and long‑term maintainability. It provides a clean foundation for managing projects, tasks, documentation, and domain‑specific modules without cloud dependencies, automation, or hidden behaviour.

This version (**v0.x**) is intentionally simple: a deterministic structural kernel that defines the architecture and module boundaries for future development.

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

# **ISO Alignment (v0.x Structural Compliance)**

ProjectFlow Kernel is designed to align with internationally recognised project‑management and governance standards. In **v0.x**, this alignment is **structural only**: the repository includes placeholders, module boundaries, and documentation structures that correspond to ISO‑required concepts, without implementing workflows or CRUD functionality.

The system is architected to support the following standards:

### **ISO 21500 / ISO 21502 — Project Management Guidelines**
Structural placeholders exist for all major ISO project‑management domains, including:

- Project governance  
- Stakeholder management  
- Work Breakdown Structure (WBS)  
- Schedule and task structure  
- Resource representation  
- Risk and issue registers  
- Change control  
- Documentation and records  
- Lessons learned (placeholder)  
- Communications (placeholder)  

These concepts are represented as **modules and routers** in the backend scaffolding and **empty pages** in the frontend membrane.

### **ISO 10006 — Quality Management in Projects**
v0.x includes structural placeholders for:

- Quality criteria  
- Acceptance criteria  
- Quality records  
- Project documentation governance  

These will be implemented as simple record types in v1.x.

### **ISO 31000 — Risk Management**
A dedicated **Risk module** exists in the architecture, aligned with ISO 31000 terminology and structure.

### **ISO 45001 / ISO 14001 / ISO 55000 — Domain‑Specific Compliance**
The OHS, EMS, and Asset modules correspond directly to these standards.  
In v0.x they exist as **empty modules**; v1.x will introduce CRUD‑only record management.

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
- Risk (ISO 31000)  
- OHS (ISO 45001)  
- EMS (ISO 14001)  
- Asset (ISO 55000)  

---

## **Project Status**

**Current Version:** v0.x — a pre‑functional phase focused on establishing the constitutional foundation of the system.

### What v0.x Includes
- FastAPI backend skeleton  
- Empty routers for all future modules  
- Placeholder models  
- SQLite initialisation (empty)  
- React frontend shell (navigation + empty pages)  
- No CRUD, no forms, no persistence, no logic  

### What v0.x Does Not Include
- No business logic  
- No CRUD operations  
- No standards handling  
- No documentation export  
- No domain logic  
- No symbolic reasoning  
- No automation  
- No authentication  
- No networking  

v0.x is the foundation upon which v1.x will be built.

---

## **Roadmap**

**v0.x — Scaffolding Phase (Current)**  
- Backend membrane  
- Frontend membrane  
- Module boundaries  
- Document‑driven design validation  
- No functionality  

**v1.0 — Local Sovereign Kernel**  
- CRUD for all core modules  
- Standards & legislation attachments  
- TXT documentation export  
- SQLite persistence  
- Localhost‑only operation  

**v1.2 — Private Backend (Optional)**  
- Hosted FastAPI backend  
- Authentication  
- Multi‑device access  
- Hardened security envelope  

**v2.x — Symbolic Runtime Integration**  
- Lisp kernel  
- Prolog modules  
- SMT solver  
- Event‑driven architecture  
- Immutable logs  
- Cryptographic signing  

**v3.x — Enterprise Envelope (Optional)**  
- Multi‑tenancy  
- RBAC  
- WorkSafe integrations  
- Environmental monitoring  
- Microservices  

---

## **Repository Structure**

```
projectflow-kernel/
├── backend/        # FastAPI application
│   ├── app/
│   └── tests/
├── frontend/       # React scaffolding
└── docs/           # Documentation & diagrams
```

---

## **License**

MIT License — see `LICENSE`.

**Author:** William Murray

---
