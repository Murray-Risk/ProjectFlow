# **ProjectFlow Kernel: A Modular, Deterministic Project Management Core**

ProjectFlow Kernel is a modular project‑management system designed to deliver **sovereign, deterministic control over projects, standards, and operational documentation**. It implements a kernel‑and‑module architecture:

- **The Core Kernel** for Projects, Charter, WBS, Tasks, Milestones, Stakeholders, Sites, and Documentation
    
- **Domain Modules** for Risk, OHS, EMS, and Asset Management
    

This separation enables **clarity, extensibility, and long‑term architectural stability** without introducing AI, automation, or external dependencies.

## **Why ProjectFlow Kernel Exists**

Most project‑management tools force a trade‑off between **simplicity**, **control**, and **sovereignty**. ProjectFlow Kernel rejects that compromise. It is built to solve three foundational problems:

### **1. Tool Bloat**

Modern PM tools accumulate features until they become ungovernable. ProjectFlow Kernel restores minimalism through a clean, modular architecture.

### **2. Cloud Dependence**

Most systems require external services, accounts, or vendor lock‑in. ProjectFlow Kernel runs locally, offline, and under your full control.

### **3. Hidden Automation**

Contemporary PM platforms embed opaque logic and AI‑driven behaviour. ProjectFlow Kernel is deterministic, transparent, and free of automation.

## **The Philosophy: Determinism Over Convenience**

Early software systems were simple, inspectable, and user‑governed. ProjectFlow Kernel returns to that mindset.

It prioritises **clarity over cleverness**. It favours **explicit structure over hidden behaviour**. It treats **documentation as a first‑class architectural artifact**.

This approach enables long‑term reliability through **minimalism, modularity, and documentary governance**.

## **The Kernel Architecture**

ProjectFlow Kernel is governed by a three‑part architectural pattern:

### **• The Core Kernel (Project Governance)**

Provides Projects, Charter, WBS, Tasks, Milestones, Stakeholders, Team, Sites, and Documentation. It is the system’s structural foundation.

### **• The Module Layer (Domain Extensions)**

Risk, OHS, EMS, and Asset modules extend the kernel without modifying it. Each module is self‑contained and deterministic.

### **• The Standards Layer (Manual Attachments)**

Projects may include standards, legislation, and guidelines as uploaded documents. No parsing, automation, or inference is performed.

Together, these components transform **project data** into **structured, governed operational records**.

## **Technical Stack**

### **Backend**

- **FastAPI** — API framework
    
- **SQLite** — Local, file‑based storage
    
- **Pydantic v2** — Data validation
    
- **Uvicorn** — Development server
    

### **Frontend**

- **React** — UI framework
    
- **TypeScript** — Type‑safe development
    
- **Vite** — Build tooling
    

### **Modules**

- **Risk (ISO 31000)** — CRUD risk register
    
- **OHS (ISO 45001)** — Hazards & incidents
    
- **EMS (ISO 14001)** — Aspects & objectives
    
- **Asset (ISO 55000)** — Assets & maintenance
    

## **Getting Started**

bash

```
git clone https://github.com/<your-username>/projectflow-kernel
cd projectflow-kernel/backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Frontend:

bash

```
cd ../frontend
npm install
npm run dev
```

## **Project Status**

**Current Phase:** v1.0 — Minimal, local, deterministic project‑management kernel.

The repository currently includes:

- Core PM kernel (Projects, Charter, WBS, Tasks, etc.)
    
- Domain modules (Risk, OHS, EMS, Asset)
    
- Manual standards upload
    
- React frontend shell
    
- SQLite backend
    
- Documentation export (TXT)
    

**Next milestone:** v1.2 — Optional multi‑machine access via private backend.

## **Repository Structure**

Code

```
projectflow-kernel/
├── backend/        # FastAPI application
│   ├── app/
│   └── tests/
├── frontend/       # React UI
└── docs/           # Documentation & diagrams
```

## **License**

MIT License — see `LICENSE` for details.

**Author:** William Murray

---
