from fastapi import FastAPI
import sys
import os
import logging
from app.routes.claim_routes import router as claims_router
from fastapi.middleware.cors import CORSMiddleware

sys.path.append(os.getcwd())


logging.basicConfig(
    level=logging.INFO,
    format="%(name)s - %(levelname)s - %(message)s",
    filename="app.log",
    filemode="a",
)
logger = logging.getLogger(__name__)


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # Your Angular app's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(claims_router)

if __name__ == "__main__":
    import uvicorn

    logger.info("Starting the application")
    uvicorn.run(app, host="0.0.0.0", port=8000)
