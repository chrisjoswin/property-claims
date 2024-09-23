from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str ="insert database url"
    database_name: str = "insurance_claims"

settings = Settings()
