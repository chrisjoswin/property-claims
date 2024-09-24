from app.models.claim import Claim
from app.utils.database import claims_collection
from fastapi import UploadFile
import logging
import boto3
from botocore.exceptions import ClientError
import uuid

logger = logging.getLogger(__name__)
session = boto3.Session()
s3_client = session.client('s3')

async def process_claim(file: UploadFile):
    unique_filename = f"{uuid.uuid4()}_{file.filename}"
    bucket_name = "my-claims-files"
    s3_key = f"claims/{unique_filename}"

    try:
        file_content = await file.read()
        
        s3_client.put_object(
            Bucket=bucket_name,
            Key=s3_key,
            Body=file_content,
            ContentType='application/pdf'
        )
        
        document_id = s3_key.split('/')[-1].split('.')[0]
        claim = Claim(
            id=document_id,
            policy_number="",
            description="",
            damage_amount=0,
            status="Processing"
        )
        return claim
    except ClientError as e:
        logger.error(f"Error uploading file to S3: {str(e)}")
        
        # Return error response
        return {
            "error": "Failed to upload file",
            "details": str(e)
        }
    except Exception as e:
        # Handle any other exceptions
        logger.error(f"Unexpected error: {str(e)}")
        return {
            "error": "An unexpected error occurred",
            "details": str(e)
        }

async def get_claim_status(claim_id: str):
    logger.info("claim ID: %s", claim_id)
    claim_data = claims_collection.find_one({"document_id": claim_id})
    logger.info("claim data: %s", claim_data)
    if claim_data:
        claim = Claim(id=claim_data["document_id"],
                      policy_number=claim_data["Name"],
                      description=claim_data["Phone Number"],
                      damage_amount=0,
                      status="Processed")
        return claim
    return None
