# **Development Plan & Sprint Structure (v0.x)**  

### *ProjectFlow Kernel — Scaffolding Phase*  
### **Document Class:** Plan  
### **Standard Alignment:** IEEE 1058‑1998; Scrum Guide (Structural Only)  
### **Status:** DRAFT  
### **Version:** 0.12.0  
### **Date:** 2026‑04‑03  
### **Author:** William Murray  
### **Owner:** Engineering Manager / Scrum Master  

---

# **1. Purpose**

This Development Plan defines the **development methodology, sprint structure, cadence, and delivery milestones** for **ProjectFlow Kernel v0.x**, the scaffolding phase of the system.

Because v0.x contains:

- no functional behaviour  
- no CRUD  
- no persistence  
- no workflows  
- no logic  
- no UI behaviour  

…the purpose of this plan is to:

- define the **structural development workflow**  
- ensure **architectural purity**  
- prevent **scope creep**  
- prepare the team (future or present) for **v1.0 implementation**  
- maintain alignment with the **Document‑Driven Design (DDD)** paradigm  

This is a **constitutional development plan**, not an operational sprint backlog.

---

# **2. Development Methodology**

ProjectFlow Kernel uses a **hybrid methodology**:

## **2.1 Document‑Driven Development (DDD)**
Documents govern code, not the reverse.

## **2.2 Architecture‑First**
Architecture is completed before any implementation.

## **2.3 Minimalist Agile**
- short sprints  
- small increments  
- strict scope boundaries  

## **2.4 Deterministic Delivery**
No emergent behaviour, no “we’ll figure it out later”.

---

# **3. Development Phases (v0.x)**

v0.x consists of **three structural phases**:

## **Phase 1 — Architectural Scaffolding**
- backend folder structure  
- frontend folder structure  
- empty routers  
- empty pages  
- module boundaries  
- ISO structural placeholders  

## **Phase 2 — Documentation Corpus**
- TAR  
- AFR  
- PRD  
- RMP  
- Initial Risk Register  
- SAD  
- DAS  
- API Specification  
- Domain Logic Specification  
- Security & Governance Specification  
- Testing Strategy & Test Plan  

## **Phase 3 — Validation & Hardening**
- structural tests  
- architecture tests  
- documentation tests  
- naming consistency  
- folder structure validation  
- DDD invariant checks  

---

# **4. Sprint Structure (v0.x)**

v0.x uses **three sprints**, each 1–2 weeks long.

---

## **Sprint 0 — Project Initialisation (1 week)**

### **Objectives**
- Establish repository  
- Establish canonical folder structure  
- Establish DDD document skeleton  
- Establish versioning constitution  
- Establish v0.x boundaries  

### **Deliverables**
- repo initialised  
- README (v0.x status)  
- VERSIONING.md  
- CHANGELOG.md  
- v0.x Constitution (optional but recommended)  

---

## **Sprint 1 — Backend & Frontend Scaffolding (1–2 weeks)**

### **Objectives**
- Create backend membrane  
- Create frontend membrane  
- Create module boundaries  
- Create ISO structural placeholders  
- Ensure no logic exists  

### **Backend Deliverables**
- FastAPI app initialised  
- routers/ created  
- empty router files for all modules  
- db.py with empty SQLite init  

### **Frontend Deliverables**
- React app initialised  
- pages/ created  
- empty pages for all modules  
- navigation skeleton  

### **Architecture Deliverables**
- SAD v0.x  
- Module Boundary Specification (optional)  

---

## **Sprint 2 — Documentation Corpus & Structural Tests (1–2 weeks)**

### **Objectives**
- Complete all Phase 0 documents  
- Implement structural test suite  
- Validate architecture  
- Validate DDD invariants  
- Validate ISO placeholders  

### **Documentation Deliverables**
- TAR  
- AFR  
- PRD  
- RMP  
- Initial Risk Register  
- DAS  
- API Specification  
- Domain Logic Specification  
- Security & Governance Specification  
- Testing Strategy & Test Plan  

### **Testing Deliverables**
- structural tests  
- architecture tests  
- documentation tests  

### **Governance Deliverables**
- ADR templates  
- Document lifecycle enforcement  

---

# **5. Roles & Responsibilities (v0.x)**

In v0.x, all roles may be held by a **single person**, but the roles are defined for future scalability.

| Role | Responsibilities |
|------|------------------|
| **Engineering Manager / Scrum Master** | Sprint planning, cadence, delivery |
| **Systems Architect** | Architecture, module boundaries, invariants |
| **Technical Lead** | Backend/frontend scaffolding |
| **Documentation Owner** | DDD corpus, versioning, lifecycle |
| **QA Lead** | Structural tests, architecture tests |

---

# **6. Definition of Done (v0.x)**

A v0.x sprint is complete when:

- all scaffolding exists  
- no functional behaviour exists  
- all documents are updated  
- all structural tests pass  
- no architectural drift is detected  
- all ISO placeholders exist  
- DDD invariants are satisfied  

---

# **7. Risks & Mitigations**

| Risk | Mitigation |
|------|------------|
| Scope creep | v0.x constitution |
| Premature implementation | placeholder‑only scaffolding |
| Architectural drift | SAD + ADRs |
| Documentation drift | Document Roadmap |
| Module coupling | namespace isolation |
| Placeholder drift | structural tests |

---

# **8. Milestones**

| Milestone | Description | Target |
|-----------|-------------|--------|
| **M0** | Repo initialised | Week 1 |
| **M1** | Backend scaffolding complete | Week 2 |
| **M2** | Frontend scaffolding complete | Week 2 |
| **M3** | Documentation corpus complete | Week 3–4 |
| **M4** | Structural tests complete | Week 4 |
| **M5** | v0.x baseline approved | Week 4 |

---

# **9. Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Engineering Manager | William Murray | — | — |
| Systems Architect | William Murray | — | — |

---

# **End of Document**

---


