# **Data Architecture Specification (DAS)**  

### *ProjectFlow Kernel — v0.x (Scaffolding Phase)*  
### **Document Class:** Specification  
### **Standard:** ISO/IEC 11179 (Structural Alignment Only)  
### **Status:** DRAFT  
### **Version:** 0.5.0  
### **Date:** 2026‑04‑03  
### **Author:** William Murray  
### **Owner:** Systems Architect  

---

# **1. Purpose**

This Data Architecture Specification defines the **structural, pre‑functional data architecture** for **ProjectFlow Kernel v0.x**.

Because v0.x contains:

- no CRUD  
- no data models  
- no fields  
- no relationships  
- no persistence logic  

…the purpose of this document is to:

- define the **data governance membrane**  
- establish **future schema boundaries**  
- ensure **ISO structural alignment**  
- prevent data‑layer drift  
- prepare the substrate for v1.x CRUD and v2.x symbolic reasoning  

This document is the **constitutional foundation** of the data layer.

---

# **2. Scope**

This specification covers:

- data architecture principles  
- data governance rules  
- module‑level data boundaries  
- ISO‑aligned structural placeholders  
- future schema evolution path  
- SQLite constraints for v1.x  
- Postgres migration path for v1.2  

This specification does **not** include:

- actual tables  
- actual fields  
- actual relationships  
- migrations  
- queries  
- indexing strategies  

Those belong to **v1.0**.

---

# **3. Architectural Context**

ProjectFlow Kernel is a **local‑first, deterministic project‑management kernel**.  
The data architecture must:

- remain sovereign  
- remain inspectable  
- avoid automation  
- avoid inference  
- avoid hidden behaviour  
- support symbolic reasoning in v2.x  
- support enterprise compliance in v3.x  

The data layer must be:

- minimal  
- modular  
- deterministic  
- ISO‑aligned  
- future‑proof  

---

# **4. Data Architecture Principles**

## **4.1 Determinism**
No automated transformations, triggers, or background processes.

## **4.2 Sovereignty**
All data stored locally on the user’s machine.

## **4.3 Modularity**
Each module owns its own data structures.

## **4.4 Isolation**
No cross‑module foreign keys in v1.0.

## **4.5 Transparency**
All data structures must be human‑readable and inspectable.

## **4.6 ISO Structural Alignment**
Data structures must reflect ISO‑defined entities.

## **4.7 Future Compatibility**
Schemas must support symbolic reasoning without modification.

---

# **5. Data Layer Overview**

## **5.1 v0.x Data Layer**
- SQLite file exists  
- No tables  
- No schema  
- No migrations  
- No persistence logic  

The SQLite file exists **only** to validate the persistence membrane.

## **5.2 v1.0 Data Layer**
- SQLite with CRUD tables  
- One table per module  
- No joins  
- No triggers  
- No stored procedures  
- No automation  

## **5.3 v1.2 Data Layer**
Optional migration to Postgres for:

- multi‑device access  
- authentication  
- improved concurrency  

## **5.4 v2.x Data Layer**
Symbolic runtime requires:

- immutable logs  
- event store  
- cryptographic signing  
- provenance metadata  

## **5.5 v3.x Data Layer**
Enterprise envelope requires:

- multi‑tenant schemas  
- RBAC metadata  
- audit trails  
- compliance records  

---

# **6. Module‑Level Data Boundaries**

Each module is a **sovereign data domain**.

## **6.1 Core Kernel Domains**
- Project  
- Charter  
- WBS  
- Task  
- Milestone  
- Stakeholder  
- Team  
- Site  
- Documentation  

Each domain becomes a table in v1.0.

## **6.2 Domain Modules**
- Risk (ISO 31000)  
- OHS (ISO 45001)  
- EMS (ISO 14001)  
- Asset (ISO 55000)  

Each module becomes a table in v1.0.

## **6.3 ISO Governance Domains**
Structural placeholders for:

- Issues  
- Changes  
- Quality  
- Lessons Learned  
- Communications  

These are required for ISO 21500 / 10006 alignment.

---

# **7. Data Governance Rules**

## **7.1 Naming Conventions**
- snake_case for database fields  
- singular table names  
- module‑prefixed tables (optional)  

## **7.2 Versioning**
Schema changes require:

- ADR  
- CHANGELOG entry  
- version increment  

## **7.3 Data Integrity**
v1.0 uses:

- application‑level validation  
- no database constraints except primary keys  

## **7.4 Data Lifecycles**
Each record must support:

- created_at  
- updated_at  
- deleted_at (soft delete optional)  

## **7.5 Documentation**
Every table must have:

- description  
- field definitions  
- ISO mapping  
- constraints  
- rationale  

---

# **8. Future Schema (v1.0 Preview)**

This section defines the **shape**, not the implementation.

### **8.1 Core Kernel Tables**
- project  
- charter  
- wbs  
- task  
- milestone  
- stakeholder  
- team  
- site  
- documentation  

### **8.2 Domain Module Tables**
- risk  
- ohs  
- ems  
- asset  

### **8.3 ISO Governance Tables**
- issue  
- change  
- quality  
- lesson  
- communication  

### **8.4 Standards Layer Tables**
- standard_file  
- standard_note  

---

# **9. Data Flow Architecture**

## **9.1 v0.x Data Flow**
```
(no data flows)
(no persistence)
(no transformations)
```

## **9.2 v1.0 Data Flow**
```
User → Frontend → Backend → SQLite
```

## **9.3 v2.x Data Flow**
```
Backend → Event Store → Symbolic Runtime → Proposal API → Human Approval
```

## **9.4 v3.x Data Flow**
```
Multi‑tenant Postgres → Services → Compliance Engine → Audit Trails
```

---

# **10. Symbolic Runtime Requirements (v2.x)**

The data architecture must support:

- immutable event logs  
- provenance metadata  
- rule‑level traceability  
- reversible transformations  
- deterministic state reconstruction  

These requirements **must not** influence v1.0 schema design.

---

# **11. Security Considerations**

## **v0.x**
- no data  
- no attack surface  

## **v1.0**
- local‑only  
- no authentication  
- no encryption required  

## **v1.2**
- TLS  
- authentication  
- optional Postgres encryption  

## **v2.x**
- cryptographic signing  
- immutable logs  

---

# **12. Risks & Mitigations**

| Risk | Mitigation |
|------|------------|
| Schema drift | ADRs + versioning rules |
| Over‑normalisation | Flat tables only |
| Premature optimisation | SQLite first, Postgres later |
| ISO misalignment | ISO mapping tables |
| Symbolic incompatibility | Interface Contract |

---

# **13. Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Systems Architect | William Murray | — | — |

---

# **End of Document**

---

