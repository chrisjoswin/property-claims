from app.utils import document_processor
from app.models.claim import Claim
from app.utils.database import claims_collection

async def process_claim(file):
    contents = await file.read()
    extracted_info = document_processor.process_document(contents)

    claim = Claim(id = str(claims_collection.insert_one(extracted_info).inserted_id),
                  policy_number= extracted_info.get("policy_number"),
                  description = extracted_info.get("description"),
                  damage_amount = extracted_info.get("damage_amount",0),
                  status = "Submitted")
    return claim

async def get_claim_status(claim_id:str):
    claim_data = claims_collection.find_one({"_id": claim_id})
    if(claim_data):
        return Claim(**claim_data)
    return None

