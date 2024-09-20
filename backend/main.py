from fastapi import FastAPI

import sys
import os
import logging


# Add the parent directory of 'backend' to sys.path
sys.path.append(os.getcwd())
from app.routes.claim_routes import router as claims_router

logging.basicConfig(level=logging.INFO,format='%(name)s - %(levelname)s - %(message)s',
                    filename= 'app.log',
                    filemode='a')
logger = logging.getLogger(__name__)


app = FastAPI()

app.include_router(claims_router)

if __name__ == "__main__":
    import uvicorn
    logger.info("Starting the application")
    uvicorn.run(app, host ="0.0.0.0", port=8000)