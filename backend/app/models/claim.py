from pydantic import BaseModel

class Claim(BaseModel):
    id:str
    policy_number: str
    description: str
    damage_amount: float
    status: str