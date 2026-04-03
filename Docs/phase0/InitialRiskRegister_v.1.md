# **Initial Risk Register — v0.x (Scaffolding Phase)**  

### *ProjectFlow Kernel*  
### **Document Class:** Record  
### **Standard:** ISO 31000:2018 (Structural Alignment Only)  
### **Status:** DRAFT  
### **Version:** 0.1.0  
### **Date:** 2026‑04‑03  
### **Owner:** Systems Architect  

---

# **1. Purpose**

This Initial Risk Register documents **architectural, scope, documentation, and structural risks** relevant to **v0.x**, the scaffolding phase of ProjectFlow Kernel.

Because v0.x contains:

- no functionality  
- no CRUD  
- no persistence  
- no workflows  
- no runtime behaviour  

…the risks listed here are **pre‑functional** and relate only to:

- architecture  
- design  
- documentation  
- scope boundaries  
- future compatibility  

This register forms the upstream input to the **v1.0 Risk Register**, which will include operational, security, and data risks.

---

# **2. Risk Rating Method**

### **Likelihood (L)**
1 = Rare  
2 = Unlikely  
3 = Possible  
4 = Likely  
5 = Almost Certain  

### **Impact (I)**
1 = Negligible  
2 = Minor  
3 = Moderate  
4 = Major  
5 = Critical  

### **Risk Rating**
Risk = L × I  
- 1–4 = Low  
- 5–9 = Medium  
- 10–16 = High  
- 17–25 = Extreme  

---

# **3. Initial Risk Register (v0.x)**

| ID | Risk | Category | L | I | Rating | Mitigation |
|----|------|----------|---|---|--------|------------|
| **R1** | Architectural drift during scaffolding | Architectural | 2 | 5 | **10 (High)** | Enforce DDD invariants; maintain ADRs; strict module boundaries |
| **R2** | Scope creep into v1.x functionality | Scope | 3 | 4 | **12 (High)** | v0.x constitution; explicit non‑scope list; no CRUD allowed |
| **R3** | Premature implementation of logic or persistence | Scope/Technical | 3 | 5 | **15 (High)** | v0.x guardrails; placeholder‑only routers; empty DB |
| **R4** | Misalignment with ISO structural requirements | Strategic | 2 | 4 | **8 (Medium)** | ISO structural placeholders; ISO alignment document |
| **R5** | Module boundary erosion (coupling) | Architectural | 2 | 4 | **8 (Medium)** | Router isolation; no cross‑module imports; clean folder structure |
| **R6** | Documentation inconsistency across DDD corpus | Documentation | 3 | 3 | **9 (Medium)** | Document Roadmap; versioning rules; review cycle |
| **R7** | Placeholder drift (frontend/backend mismatch) | Technical | 3 | 2 | **6 (Medium)** | Synchronised scaffolding; naming conventions |
| **R8** | Misalignment with future symbolic runtime (v2.x) | Strategic | 2 | 5 | **10 (High)** | Maintain Interface Contract; avoid embedding logic in v1.x |
| **R9** | Over‑engineering v0.x | Project | 3 | 3 | **9 (Medium)** | Minimalism doctrine; strict v0.x boundaries |
| **R10** | Under‑documenting architectural decisions | Documentation | 2 | 4 | **8 (Medium)** | ADRs; Architecture Feasibility Report; DDD pipeline |
| **R11** | Dependency instability (FastAPI/React updates) | Technical | 3 | 2 | **6 (Medium)** | Pin versions; update only per milestone |
| **R12** | Folder structure drift | Architectural | 2 | 3 | **6 (Medium)** | Enforce canonical repo structure; review at each version |
| **R13** | Misinterpretation of v0.x as functional | Strategic | 2 | 4 | **8 (Medium)** | README clarity; explicit non‑scope; versioning rules |
| **R14** | UI membrane complexity creep | Scope | 3 | 3 | **9 (Medium)** | Empty pages only; no forms; no state management |
| **R15** | Backend membrane complexity creep | Scope | 2 | 4 | **8 (Medium)** | Placeholder endpoints only; no models; no logic |

---

# **4. Summary of High‑Risk Items**

### **High Risks (≥10)**  
- **R1:** Architectural drift  
- **R2:** Scope creep into v1.x  
- **R3:** Premature logic/persistence  
- **R8:** Misalignment with symbolic runtime  

These are **constitutional risks** — meaning they threaten the integrity of the entire system if mishandled.

---

# **5. Monitoring & Review (v0.x)**

- Review at each v0.x milestone (v0.1 → v0.2 → v0.3)  
- Review before v1.0 implementation begins  
- Review after any architectural document update  
- Update register when new risks are identified  

---

# **6. Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Systems Architect | William Murray | — | — |

---

# **End of Document**

---


