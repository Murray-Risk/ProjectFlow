# **Domain Logic Specification (v0.x)**  

### *ProjectFlow Kernel — Scaffolding Phase*  
### **Document Class:** Specification  
### **Standard Alignment:** OMG DMN 1.4 (Structural), BPMN 2.0 (Structural)  
### **Status:** DRAFT  
### **Version:** 0.9.0  
### **Date:** 2026‑04‑03  
### **Author:** William Murray  
### **Owner:** Systems Architect  

---

# **1. Purpose**

This Domain Logic Specification defines the **structural, pre‑functional domain logic architecture** for **ProjectFlow Kernel v0.x**.

Because v0.x contains:

- no workflows  
- no business rules  
- no state machines  
- no decision logic  
- no automation  
- no inference  
- no symbolic reasoning  

…the purpose of this document is to:

- define the **domain logic membrane**  
- establish **future rule boundaries**  
- ensure **DMN/BPMN structural alignment**  
- prevent premature logic implementation  
- prepare for **v1.0 CRUD logic**  
- prepare for **v2.x symbolic reasoning**  

This is a **constitutional domain‑logic document**, not an operational rulebook.

---

# **2. Scope**

This specification covers:

- domain logic boundaries  
- rule categories  
- workflow placeholders  
- decision table placeholders  
- symbolic reasoning compatibility  
- future logic evolution  

It does **not** include:

- actual rules  
- actual workflows  
- actual decision tables  
- state transitions  
- automation  
- inference  
- symbolic logic  

Those belong to **v1.0** and **v2.x**.

---

# **3. Domain Logic Philosophy**

ProjectFlow Kernel is built on three principles:

## **3.1 Determinism**
All future logic must be explicit, inspectable, and non‑emergent.

## **3.2 Document‑Driven**
Domain logic must be derived from:

- PRD  
- SAD  
- Data Architecture Specification  
- API Specification  
- ISO alignment documents  
- ADRs  

## **3.3 Separation of Concerns**
- v1.0: CRUD‑only logic  
- v2.x: symbolic reasoning  
- v3.x: enterprise workflows  

---

# **4. Domain Logic Architecture (v0.x Structural)**

Domain logic is divided into three layers:

```
┌──────────────────────────────────────────────┐
│            Symbolic Reasoning Layer          │
│ (v2.x — rules, constraints, SMT, Prolog)     │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│              CRUD Logic Layer                │
│ (v1.0 — validation, constraints, statuses)   │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│            Structural Logic Layer            │
│ (v0.x — placeholders only)                   │
└──────────────────────────────────────────────┘
```

v0.x implements **only the bottom layer**.

---

# **5. Domain Logic Boundaries**

Each module is a **sovereign logic domain**.

## **5.1 Core Kernel Domains**
- Project  
- Charter  
- WBS  
- Task  
- Milestone  
- Stakeholder  
- Team  
- Site  
- Documentation  

Each domain will have its own:

- validation rules  
- state transitions  
- decision tables  
- workflows  

…but **none of these exist in v0.x**.

## **5.2 Domain Modules**
- Risk (ISO 31000)  
- OHS (ISO 45001)  
- EMS (ISO 14001)  
- Asset (ISO 55000)  

Each module will have:

- risk scoring  
- hazard workflows  
- environmental impact logic  
- asset lifecycle logic  

…but **none of these exist in v0.x**.

## **5.3 ISO Governance Domains**
- Issues  
- Changes  
- Quality  
- Lessons Learned  
- Communications  

These require:

- governance workflows  
- approval logic  
- escalation logic  

…but **none of these exist in v0.x**.

---

# **6. Decision Logic (DMN Structural Placeholders)**

The following **decision tables** will exist in v1.x and v2.x, but are **empty in v0.x**.

## **6.1 Project Status Decision Table**
Placeholder for:

- project health  
- completeness  
- readiness  

## **6.2 Task Status Decision Table**
Placeholder for:

- blocked  
- in progress  
- complete  

## **6.3 Risk Scoring Decision Table**
Placeholder for:

- probability  
- impact  
- risk rating  

## **6.4 OHS Hazard Classification Table**
Placeholder for:

- severity  
- likelihood  
- control effectiveness  

## **6.5 EMS Impact Assessment Table**
Placeholder for:

- aspect  
- impact  
- significance  

## **6.6 Asset Condition Decision Table**
Placeholder for:

- condition  
- maintenance priority  

---

# **7. Workflow Logic (BPMN Structural Placeholders)**

The following workflows will exist in v1.x+ but are **not implemented**.

## **7.1 Project Lifecycle Workflow**
- draft  
- active  
- closed  

## **7.2 Risk Lifecycle Workflow**
- identified  
- assessed  
- mitigated  
- closed  

## **7.3 Issue Management Workflow**
- logged  
- triaged  
- resolved  

## **7.4 Change Control Workflow**
- proposed  
- reviewed  
- approved  
- implemented  

## **7.5 OHS Incident Workflow**
- reported  
- investigated  
- closed  

## **7.6 Asset Lifecycle Workflow**
- acquired  
- in service  
- retired  

All workflows are **empty placeholders** in v0.x.

---

# **8. State Machines (Structural Only)**

Each domain will eventually have a state machine.

In v0.x:

- no states  
- no transitions  
- no guards  
- no events  

Only **state machine placeholders** exist.

---

# **9. Symbolic Reasoning Compatibility (v2.x)**

The domain logic architecture must support:

- rule‑based reasoning  
- SMT constraints  
- Prolog predicates  
- event‑driven transitions  
- reversible transformations  
- provenance tracking  

v0.x must not implement any of these.

---

# **10. Domain Logic Governance**

## **10.1 No Logic in v0.x**
This is a constitutional rule.

## **10.2 All Logic Must Be Documented First**
No rule may be implemented without:

- ADR  
- PRD reference  
- SAD reference  
- DMN table  
- BPMN workflow  

## **10.3 No Cross‑Module Logic**
Modules must remain sovereign.

## **10.4 No Automation**
All logic must be explicit and user‑driven.

## **10.5 No Symbolic Logic in v1.x**
Symbolic runtime is isolated to v2.x.

---

# **11. Risks & Mitigations**

| Risk | Mitigation |
|------|------------|
| Premature logic implementation | v0.x constitution |
| Module coupling | logic isolation |
| Workflow creep | BPMN placeholders only |
| ISO misalignment | structural placeholders |
| Symbolic contamination | v2.x isolation contract |

---

# **12. Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Systems Architect | William Murray | — | — |

---

# **End of Document**

---


