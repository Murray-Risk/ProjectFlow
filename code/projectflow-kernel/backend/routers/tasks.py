"""Tasks router (v0.x scaffold only)."""

from fastapi import APIRouter

router = APIRouter(prefix="/tasks", tags=["tasks"])
