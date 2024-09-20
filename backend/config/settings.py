from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str = "mongodb://localhost:27017/"
    database_name: str = "insurance_claims"
    
settings = Settings()