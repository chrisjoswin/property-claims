from fastapi import APIRouter, File, UploadFile
from app.services.claim_service import process_claim, get_claim_status

router = APIRouter()


@router.post("/submit-claim")
async def submit_claim(file: UploadFile = File(...)):
    return await process_claim(file)


@router.get("/claim-status/{claim_id}")
async def retrieve_claim_status(claim_id: str):
    return await get_claim_status(claim_id)
