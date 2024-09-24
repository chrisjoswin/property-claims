from unittest.mock import patch
from app.models.claim import Claim
from app.services.claim_service import get_claim_status
import pytest

@pytest.mark.asyncio
async def test_process_claim():
    pass


@pytest.mark.asyncio
async def test_get_claim_status():
    pass

@pytest.mark.asyncio
async def test_get_claim_status_existing_claim():
    # Mock data
    mock_claim_data = {
        "document_id": "123",
        "Name": "POL123",
        "Phone Number":"1234",
        "Damage":0,
        "Description":"this is the description"
    }
    
    # Mock the database call
    with patch('app.services.claim_service.claims_collection.find_one', return_value=mock_claim_data):
        # Call the function
        result = await get_claim_status("123")
        
        # Assertions
        assert isinstance(result, Claim)
        assert result.id == "123"
        assert result.policy_number == "POL123"
        assert result.description == "1234"
        assert result.damage_amount == 0
