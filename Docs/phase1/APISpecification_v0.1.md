# **API Specification (v0.x)**  

### *ProjectFlow Kernel — Scaffolding Phase*  
### **Document Class:** Specification  
### **Standard:** OpenAPI 3.0 (Structural Alignment Only)  
### **Status:** DRAFT  
### **Version:** 0.6.0  
### **Date:** 2026‑04‑03  
### **Author:** William Murray  
### **Owner:** Systems Architect  

---

# **1. Purpose**

This API Specification defines the **structural, pre‑functional API surface** for **ProjectFlow Kernel v0.x**.

Because v0.x contains:

- no CRUD  
- no logic  
- no persistence  
- no authentication  
- no networking  
- no request/response schemas  

…the purpose of this document is to:

- define the **API namespace architecture**  
- establish **module boundaries**  
- ensure **future compatibility** with v1.x CRUD and v2.x symbolic runtime  
- prevent API drift  
- provide a **canonical contract** for future implementation  

This is a **constitutional API document**, not an operational one.

---

# **2. Scope**

This specification covers:

- API namespaces  
- endpoint placeholders  
- versioning rules  
- module isolation  
- symbolic runtime interface contract  
- future evolution path  

It does **not** include:

- actual request/response bodies  
- actual CRUD endpoints  
- authentication  
- validation rules  
- error codes  
- pagination  
- filtering  
- sorting  

Those belong to **v1.0**.

---

# **3. API Architecture Overview**

ProjectFlow Kernel uses a **modular API namespace** aligned with the kernel‑and‑module architecture.

## **3.1 Namespace Structure**

```
/api/core/v1
/api/risk/v1
/api/ohs/v1
/api/ems/v1
/api/asset/v1
/api/standards/v1
/api/governance/v1
/api/symbolic/v1   (v2.x only)
```

### **v0.x Implementation**
All endpoints are **empty placeholders**.

---

# **4. API Versioning Rules**

### **4.1 Semantic Versioning**
API versions follow:

```
MAJOR.MINOR.PATCH
```

### **4.2 API Versioning Principles**
- **MAJOR** increments for breaking changes  
- **MINOR** increments for new modules or endpoints  
- **PATCH** increments for documentation or non‑breaking updates  

### **4.3 API Stability**
- v0.x API is **non‑functional**  
- v1.x API is **CRUD‑stable**  
- v2.x API introduces **symbolic runtime**  
- v3.x API introduces **enterprise envelope**  

---

# **5. Core Kernel API (v0.x Placeholders)**

All endpoints below are **non‑functional** and exist only to define the architectural membrane.

## **5.1 Projects**
```
GET    /api/core/v1/projects
POST   /api/core/v1/projects
GET    /api/core/v1/projects/{id}
PUT    /api/core/v1/projects/{id}
DELETE /api/core/v1/projects/{id}
```

## **5.2 Charter**
```
GET    /api/core/v1/charter
POST   /api/core/v1/charter
PUT    /api/core/v1/charter
```

## **5.3 WBS**
```
GET    /api/core/v1/wbs
POST   /api/core/v1/wbs
PUT    /api/core/v1/wbs/{id}
DELETE /api/core/v1/wbs/{id}
```

## **5.4 Tasks**
```
GET    /api/core/v1/tasks
POST   /api/core/v1/tasks
GET    /api/core/v1/tasks/{id}
PUT    /api/core/v1/tasks/{id}
DELETE /api/core/v1/tasks/{id}
```

## **5.5 Milestones**
```
GET    /api/core/v1/milestones
POST   /api/core/v1/milestones
```

## **5.6 Stakeholders**
```
GET    /api/core/v1/stakeholders
POST   /api/core/v1/stakeholders
```

## **5.7 Team**
```
GET    /api/core/v1/team
POST   /api/core/v1/team
```

## **5.8 Sites**
```
GET    /api/core/v1/sites
POST   /api/core/v1/sites
```

## **5.9 Documentation**
```
GET    /api/core/v1/docs/export
```

---

# **6. Domain Module APIs (v0.x Placeholders)**

## **6.1 Risk (ISO 31000)**
```
GET    /api/risk/v1/risks
POST   /api/risk/v1/risks
```

## **6.2 OHS (ISO 45001)**
```
GET    /api/ohs/v1/hazards
POST   /api/ohs/v1/hazards
```

## **6.3 EMS (ISO 14001)**
```
GET    /api/ems/v1/aspects
POST   /api/ems/v1/aspects
```

## **6.4 Asset (ISO 55000)**
```
GET    /api/asset/v1/assets
POST   /api/asset/v1/assets
```

---

# **7. Standards & Legislation API (v0.x Placeholders)**

## **7.1 Standards Upload**
```
POST   /api/standards/v1/upload
```

## **7.2 Standards Notes**
```
POST   /api/standards/v1/{id}/notes
```

---

# **8. Governance API (ISO 21500 Structural Placeholders)**

These endpoints exist to satisfy ISO structural requirements.

## **8.1 Issues**
```
GET    /api/governance/v1/issues
POST   /api/governance/v1/issues
```

## **8.2 Changes**
```
GET    /api/governance/v1/changes
POST   /api/governance/v1/changes
```

## **8.3 Quality**
```
GET    /api/governance/v1/quality
POST   /api/governance/v1/quality
```

## **8.4 Lessons Learned**
```
GET    /api/governance/v1/lessons
POST   /api/governance/v1/lessons
```

## **8.5 Communications**
```
GET    /api/governance/v1/communications
POST   /api/governance/v1/communications
```

---

# **9. Symbolic Runtime API (v2.x Preview)**

This is the **constitutional interface** for the Cockroach Kernel.

## **9.1 Proposal Submission**
```
POST /api/symbolic/v1/proposals
```

### **Payload (v2.x only)**
```json
{
  "proposed_change": {},
  "rationale": "",
  "proof": "",
  "rules_fired": [],
  "confidence": "",
  "references": []
}
```

## **9.2 Event Stream (v2.x only)**
```
GET /api/symbolic/v1/events
```

---

# **10. API Governance Rules**

## **10.1 No Hidden Behaviour**
All endpoints must be deterministic.

## **10.2 No Cross‑Module Coupling**
Modules cannot call each other.

## **10.3 No Automation**
No background tasks, triggers, or inference.

## **10.4 No Symbolic Logic in v1.x**
Symbolic runtime is isolated to `/api/symbolic/v1`.

## **10.5 Documentation‑First**
All endpoints must be defined in documents before implementation.

---

# **11. Risks & Mitigations**

| Risk | Mitigation |
|------|------------|
| API drift | Versioning rules + ADRs |
| Over‑scoping | v0.x constitution |
| Premature implementation | Placeholder‑only endpoints |
| Module coupling | Namespace isolation |
| Symbolic contamination | Interface Contract |

---

# **12. Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Systems Architect | William Murray | — | — |

---

# **End of Document**

---


