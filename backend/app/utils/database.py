from pymongo import MongoClient
import certifi
from config.settings import settings
client = MongoClient(settings.database_url,tlsCAFile=certifi.where())
db = client[settings.database_name]
claims_collection = db["claims"]
