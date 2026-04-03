"""ProjectFlow Kernel backend entrypoint (v0.x scaffold only)."""

from fastapi import FastAPI

from app.routers import (
    asset,
    changes,
    charter,
    communications,
    docs,
    ems,
    issues,
    lessons,
    milestones,
    ohs,
    projects,
    quality,
    risk,
    sites,
    stakeholders,
    tasks,
    team,
    wbs,
)

app = FastAPI(title="ProjectFlow Kernel API", version="0.1.0")

app.include_router(projects.router)
app.include_router(charter.router)
app.include_router(wbs.router)
app.include_router(tasks.router)
app.include_router(milestones.router)
app.include_router(stakeholders.router)
app.include_router(team.router)
app.include_router(sites.router)
app.include_router(docs.router)
app.include_router(risk.router)
app.include_router(ohs.router)
app.include_router(ems.router)
app.include_router(asset.router)
app.include_router(issues.router)
app.include_router(changes.router)
app.include_router(quality.router)
app.include_router(lessons.router)
app.include_router(communications.router)
