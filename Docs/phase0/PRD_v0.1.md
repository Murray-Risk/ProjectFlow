# **Product Requirements Document (PRD)**  

### *ProjectFlow Kernel — Version 1.0.0 (Local Sovereign Edition)*  
### **Document Class:** Specification  
### **Standard:** IEEE 830‑1998  
### **Status:** DRAFT  
### **Version:** 0.2.0  
### **Date:** 2026‑04‑03  
### **Author:** William Murray  
### **Owner:** Technical Lead  

---

# **1. Introduction**

## **1.1 Purpose**

This Product Requirements Document defines the functional and non‑functional requirements for **ProjectFlow Kernel v1.0**, a **local‑first, deterministic project‑management system** designed for personal use, offline operation, and long‑term architectural stability.

This PRD is a **constitutional document**:  
- It defines what v1.0 *is allowed* to be.  
- It defines what v1.0 *must not* become.  
- It establishes the baseline for future symbolic and enterprise extensions.

It is derived from the **Technical Analysis Report**, **Architecture Feasibility Report**, and the **Document‑Driven Design (DDD)** paradigm.

---

## **1.2 Scope**

### **In Scope (v1.0)**  
A minimal, sovereign project‑management kernel with:

- CRUD for core project‑management entities  
- CRUD for domain modules (Risk, OHS, EMS, Asset)  
- Manual standards & legislation attachments  
- TXT documentation export  
- SQLite persistence  
- Localhost‑only backend  
- No automation, no inference, no AI  

### **Out of Scope (v1.0)**  
- No symbolic reasoning (v2.x)  
- No automation or scoring  
- No cloud backend  
- No multi‑user or multi‑tenant features  
- No dashboards or analytics  
- No scheduling logic  
- No compliance engine  
- No background workers  
- No real‑time updates  

---

## **1.3 Definitions**

| Term | Definition |
|------|------------|
| **Kernel** | The core project‑management entities and CRUD operations |
| **Module** | A self‑contained domain extension (Risk, OHS, EMS, Asset) |
| **Standards Layer** | Manual file attachments for standards, legislation, guidelines |
| **Sovereign** | Fully local, offline, user‑controlled |
| **Deterministic** | No automation, no inference, no hidden behaviour |
| **DDD** | Document‑Driven Design: documents are the system’s constitution |

---

## **1.4 References**

- Document Roadmap v2.1.0  
- Technical Analysis Report v0.1  
- Architecture Feasibility Report v0.1  
- ISO 21500 / 21502 (Project Management)  
- ISO 10006 (Quality in Projects)  
- ISO 31000 (Risk)  
- ISO 45001 (OHS)  
- ISO 14001 (EMS)  
- ISO 55000 (Asset Management)  
- IEEE 830‑1998 (SRS Standard)  
- ISO/IEC/IEEE 42010:2022 (Architecture Description)  

---

# **2. Overall Description**

## **2.1 Product Perspective**

ProjectFlow Kernel is a **standalone local application** consisting of:

- A FastAPI backend  
- A React frontend  
- A SQLite database  
- A modular architecture  

It is the **Tier 1 Operational Kernel** in the Unified Architecture Diagram.

---

## **2.2 Product Functions**

v1.0 provides:

### **Core Kernel Functions**
- Create/read/update/delete Projects  
- Define Project Charter  
- Create WBS hierarchy  
- Manage Tasks & Subtasks  
- Track Milestones  
- Maintain Stakeholder & Team registers  
- Record Sites  
- Export project documentation (TXT)  

### **Domain Module Functions**
- Risk register (ISO 31000)  
- OHS hazards & incidents (ISO 45001)  
- EMS aspects & objectives (ISO 14001)  
- Asset register (ISO 55000)  

### **Standards Layer**
- Upload standards, legislation, guidelines  
- Add notes  
- No parsing or inference  

---

## **2.3 User Characteristics**

The system is designed for:

- A single user  
- Operating on a single machine  
- With technical literacy  
- Who values sovereignty, determinism, and clarity  

No multi‑user features are required.

---

## **2.4 Constraints**

- Localhost‑only  
- SQLite database  
- No authentication (optional dev token only)  
- No networking  
- No automation  
- No AI  
- No symbolic reasoning  
- No cloud dependencies  

---

## **2.5 Assumptions and Dependencies**

- User runs the backend and frontend locally  
- User maintains their own backups  
- No external integrations  
- No external APIs  

---

# **3. Functional Requirements**

## **3.1 Core Kernel Requirements**

### **FR‑1: Project CRUD**
The system shall allow the user to create, view, update, and delete projects.

### **FR‑2: Project Charter**
The system shall allow each project to have a structured charter including:
- purpose  
- scope  
- objectives  
- constraints  
- assumptions  

### **FR‑3: Work Breakdown Structure (WBS)**
The system shall allow hierarchical WBS creation.

### **FR‑4: Tasks & Subtasks**
The system shall allow:
- task creation  
- task assignment  
- task status  
- task hierarchy  

### **FR‑5: Milestones**
The system shall allow milestone creation and tracking.

### **FR‑6: Stakeholders & Team**
The system shall maintain:
- stakeholder register  
- team register  

### **FR‑7: Sites**
The system shall store site information for each project.

### **FR‑8: Documentation Export**
The system shall export project documentation as TXT.

---

## **3.2 Domain Module Requirements**

### **FR‑9: Risk Module (ISO 31000)**
The system shall allow CRUD operations for:
- risk ID  
- description  
- category  
- probability  
- impact  
- mitigation  
- owner  
- status  

### **FR‑10: OHS Module (ISO 45001)**
CRUD for:
- hazards  
- incidents  
- controls  

### **FR‑11: EMS Module (ISO 14001)**
CRUD for:
- environmental aspects  
- impacts  
- objectives  

### **FR‑12: Asset Module (ISO 55000)**
CRUD for:
- assets  
- condition  
- maintenance records  

---

## **3.3 Standards Layer Requirements**

### **FR‑13: Standards Upload**
The system shall allow file uploads for:
- standards  
- legislation  
- guidelines  

### **FR‑14: Standards Notes**
The system shall allow notes to be attached to each uploaded file.

---

# **4. Non‑Functional Requirements**

## **4.1 Determinism**
The system shall contain **no automation**, **no inference**, and **no hidden behaviour**.

## **4.2 Sovereignty**
The system shall run entirely on the user’s machine.

## **4.3 Security**
- Localhost‑only  
- No external exposure  
- No authentication required  

## **4.4 Performance**
- Must load instantly on modern hardware  
- CRUD operations must complete within 50ms  

## **4.5 Reliability**
- SQLite must not corrupt data under normal operation  
- No background tasks  

## **4.6 Maintainability**
- Modular code structure  
- Clear separation between kernel and modules  

## **4.7 Extensibility**
The architecture must support v2.x symbolic runtime integration without modification to v1.x.

---

# **5. System Models**

## **5.1 High-Level Architecture Diagram**
(References Unified Architecture Diagram)

## **5.2 Module Interaction Model**
- Kernel modules do not depend on domain modules  
- Domain modules do not depend on each other  
- Standards layer is isolated  

## **5.3 Data Flow Model**
- User → Frontend → Backend → SQLite  
- No external flows  

---

# **6. Acceptance Criteria**

v1.0 is accepted when:

- All CRUD operations function deterministically  
- All modules operate independently  
- Standards upload works  
- Documentation export works  
- No automation exists  
- No networking exists  
- No symbolic reasoning exists  
- All ISO structural placeholders are present  
- All DDD invariants are satisfied  

---

# **7. Appendices**

## **7.1 DDD Invariants**
- Single source of truth  
- Traceable derivation  
- Bidirectional consistency  
- Governed evolution  
- AI as constrained executor (v2.x)  
- Pipeline determinism  

## **7.2 ISO Mapping Table**
(If you want, I can generate this next.)

---

# **End of Document**

---

