from pydantic import BaseModel
from typing import List

class CandidateCreate(BaseModel):
    name: str

class CandidateRead(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True

class BallotCreate(BaseModel):
    rankings: List[int]  # ordered list of candidate IDs