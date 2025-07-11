from fastapi import FastAPI
from app import models, database, api

# Create DB tables if they don't exist
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(
    title="Ranked Choice Voting API",
    description="Backend API for RCV app",
    version="1.0.0",
)

# Include API routes
app.include_router(api.router)


@app.get("/")
def read_root():
    return {"message": "Welcome to the Ranked Choice Voting API!"}