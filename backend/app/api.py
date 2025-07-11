from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from . import database, schemas, crud

router = APIRouter()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/candidates/", response_model=schemas.CandidateRead)
def add_candidate(candidate: schemas.CandidateCreate, db: Session = Depends(get_db)):
    return crud.create_candidate(db, candidate)

@router.get("/candidates/", response_model=list[schemas.CandidateRead])
def list_candidates(db: Session = Depends(get_db)):
    return crud.get_candidates(db)

@router.post("/ballots/")
def submit_ballot(ballot: schemas.BallotCreate, db: Session = Depends(get_db)):
    return crud.save_ballot(db, ballot)