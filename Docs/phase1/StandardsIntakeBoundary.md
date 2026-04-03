# **2. Standards Intake Boundary (ICD‑S01)**  
### *Interface Control Document — Standards Intake Boundary*  
### *Version: 0.1.0*  

This ICD defines the **sanitization boundary** for future standards ingestion (PDF, Markdown, TXT).

Even though v0.x contains **no ingestion logic**, the boundary must be constitutionally defined now.

---

## **2.1 Boundary Definition**

```
External File → Intake Boundary → Sanitization → Storage (v1.0+) → Interpretation (v2.x+)
```

### **In v0.x**
- Only the **directory** exists.  
- No files may be stored.  
- No ingestion logic may exist.  
- No parsing libraries may be imported.

### **In v1.0**
- Only **manual upload** allowed.  
- Files stored **verbatim**, no parsing.  
- Sanitization = filename validation only.

### **In v1.2**
- MIME validation  
- size limits  
- extension whitelist  

### **In v2.x**
- symbolic interpretation layer  
- provenance metadata  
- cryptographic signing  

---

## **2.2 Directory Boundary (v0.x)**

```
backend/app/standards/
├── __init__.py
└── (empty)
```

This directory must remain **empty** until v1.0.

---

## **2.3 Forbidden in v0.x**
- file writes  
- file reads  
- PDF libraries  
- Markdown parsers  
- OCR  
- NLP  
- embeddings  
- symbolic extraction  

---
