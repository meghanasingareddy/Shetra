"""
AntiGravity – FastAPI Backend
-----------------------------
Entry point for the API server.

Run:
    uvicorn backend.main:app --reload --port 8000
"""

import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="AntiGravity API",
    version="0.1.0",
)

# ── CORS ──────────────────────────────────────
origins = [
    os.getenv("FRONTEND_URL", "http://localhost:3000"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── Routes ────────────────────────────────────
@app.get("/")
async def root():
    return {"message": "AntiGravity API is running 🚀"}


@app.get("/health")
async def health():
    return {"status": "ok"}
