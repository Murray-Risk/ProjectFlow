# **3. Automated Invariant Definitions (Testing Strategy Addendum)**  
### *Invariant Configuration Specification*  
### *Version: 0.1.0*  

This section defines the **machine‑verifiable invariants** required to enforce:

- module isolation  
- no cross‑imports  
- no logic in v0.x  
- no symbolic contamination  
- no backend/frontend drift  

---

## **3.1 Import Linter Configuration**

Add the following file:

```
.importlinter
```

### **Rules:**

```
[importlinter]
root_package = backend.app

[contract:module_isolation]
name = Modules must not import each other
type = layers
layers =
    routers
    models
    db
```

This enforces:

- routers cannot import routers  
- models cannot import routers  
- db cannot import routers  

---

## **3.2 Frontend Dependency Cruiser Configuration**

Add:

```
dependency-cruiser.json
```

### **Rules:**

```json
{
  "forbidden": [
    {
      "name": "no-cross-page-imports",
      "severity": "error",
      "from": { "path": "^src/pages/([^/]+)/" },
      "to":   { "path": "^src/pages/(?!\\1)/" }
    }
  ]
}
```

This enforces:

- each page is sovereign  
- no cross‑page imports  
- no shared logic in v0.x  

---
