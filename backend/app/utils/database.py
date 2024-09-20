from pymongo import MongoClient

client =  MongoClient("mongodb://localhost:27017/")
db = client["insurance_claims"]
claims_collection = db["claims"]

