from pydantic_settings import BaseSettings
import os
from dotenv import load_dotenv
load_dotenv()
class Settings(BaseSettings):
    database_url: str  = os.environ.get("MONGO_DB_URI")  
    database_name: str = "insurance_claims"

settings = Settings()
