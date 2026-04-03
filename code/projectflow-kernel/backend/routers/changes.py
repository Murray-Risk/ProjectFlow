"""Changes router (v0.x scaffold only)."""

from fastapi import APIRouter

router = APIRouter(prefix="/changes", tags=["changes"])
