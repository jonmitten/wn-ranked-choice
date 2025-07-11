from sqlalchemy.orm import Session
from . import models, schemas

def create_candidate(db: Session, candidate: schemas.CandidateCreate):
    db_candidate = models.Candidate(name=candidate.name)
    db.add(db_candidate)
    db.commit()
    db.refresh(db_candidate)
    return db_candidate

def get_candidates(db: Session):
    return db.query(models.Candidate).all()

def save_ballot(db: Session, ballot: schemas.BallotCreate):
    db_ballot = models.Ballot(rankings=",".join(map(str, ballot.rankings)))
    db.add(db_ballot)
    db.commit()
    db.refresh(db_ballot)
    return db_ballot
