from fastapi import APIRouter, File, UploadFile
from app.services import claims_service

router = APIRouter()

@router.post("/submit-claim")
async def submit_claim(file: UploadFile = File(...)):
    return await claims_service.process_claim(file)

@router.get("/claim-status/{claim_id}")
async def get_claim_status(claim_id:str):
    return await claims_service.get_claim_status(claim_id)