# **1. Repository Manifest (Physical Map)**  
### *Document Class: Manifest*  
### *Version: 0.1.0*  
### *Status: FINAL (Constitutional)*  

This document defines the **exact directory tree and scaffold files** required for **v0.1.0 (M0)**.  
It is the **physical constitution** of the repository.

No file may be added, removed, or renamed without:

- an ADR  
- a version increment  
- a CHANGELOG entry  

---

## **1.1 Repository Root Structure**

```
projectflow-kernel/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── routers/
│   │   │   ├── __init__.py
│   │   │   ├── projects.py
│   │   │   ├── charter.py
│   │   │   ├── wbs.py
│   │   │   ├── tasks.py
│   │   │   ├── milestones.py
│   │   │   ├── stakeholders.py
│   │   │   ├── team.py
│   │   │   ├── sites.py
│   │   │   ├── docs.py
│   │   │   ├── risk.py
│   │   │   ├── ohs.py
│   │   │   ├── ems.py
│   │   │   ├── asset.py
│   │   │   ├── issues.py
│   │   │   ├── changes.py
│   │   │   ├── quality.py
│   │   │   ├── lessons.py
│   │   │   ├── communications.py
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   ├── db.py
│   ├── requirements.txt
│   ├── pyproject.toml (optional placeholder)
│   ├── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── router/
│   │   │   ├── index.tsx
│   │   ├── pages/
│   │   │   ├── Projects/
│   │   │   │   └── ProjectsPage.tsx
│   │   │   ├── Charter/
│   │   │   │   └── CharterPage.tsx
│   │   │   ├── WBS/
│   │   │   │   └── WBSPage.tsx
│   │   │   ├── Tasks/
│   │   │   │   └── TasksPage.tsx
│   │   │   ├── Milestones/
│   │   │   │   └── MilestonesPage.tsx
│   │   │   ├── Stakeholders/
│   │   │   │   └── StakeholdersPage.tsx
│   │   │   ├── Team/
│   │   │   │   └── TeamPage.tsx
│   │   │   ├── Sites/
│   │   │   │   └── SitesPage.tsx
│   │   │   ├── Docs/
│   │   │   │   └── DocsPage.tsx
│   │   │   ├── Risk/
│   │   │   │   └── RiskPage.tsx
│   │   │   ├── OHS/
│   │   │   │   └── OHSPage.tsx
│   │   │   ├── EMS/
│   │   │   │   └── EMSPage.tsx
│   │   │   ├── Asset/
│   │   │   │   └── AssetPage.tsx
│   │   │   ├── Issues/
│   │   │   │   └── IssuesPage.tsx
│   │   │   ├── Changes/
│   │   │   │   └── ChangesPage.tsx
│   │   │   ├── Quality/
│   │   │   │   └── QualityPage.tsx
│   │   │   ├── Lessons/
│   │   │   │   └── LessonsPage.tsx
│   │   │   ├── Communications/
│   │   │   │   └── CommunicationsPage.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── .gitignore
│
├── docs/
│   ├── architecture/
│   ├── risk/
│   ├── testing/
│   ├── planning/
│   ├── governance/
│   ├── README.md
│
├── .gitignore
├── README.md
├── CHANGELOG.md
├── VERSIONING.md
└── LICENSE (optional)
```

---
