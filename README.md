# Insurance Claim Processing System

This project is a full-stack application for processing insurance claims, featuring an Angular frontend and a FastAPI Python backend. It allows users to upload claim PDFs, receive claim IDs, and retrieve claim details.

## Features

- Upload PDF claims
- Receive unique claim IDs
- Retrieve claim details using claim IDs
- Automated extraction of key-value pairs from PDFs using AWS Textract
- Storage of claim data in MongoDB
- Storage of original PDFs in AWS S3

## Architecture

- Frontend: Angular
- Backend: FastAPI (Python)
- Storage: 
  - PDFs: AWS S3
  - Extracted Data: MongoDB
- PDF Processing: AWS Lambda with Textract

## API Endpoints

1. `POST /api/submit-claim/`: Create a new claim
   - Accepts a PDF file
   - Returns a unique claim ID

2. `GET /api/claims-status/{claim_id}`: Retrieve claim details
   - Accepts a claim ID
   - Returns the extracted information from the claim

## Workflow

1. User uploads a claim PDF through the Angular frontend.
2. The PDF is sent to the FastAPI backend.
3. Backend stores the PDF in AWS S3.
4. A Lambda function is triggered, which:
   - Uses AWS Textract to extract key-value pairs from the PDF.
   - Stores the extracted data in MongoDB.
5. The backend returns a unique claim ID to the frontend.
6. Users can later use this claim ID to retrieve the processed claim details.

## Setup

### Prerequisites

- Node.js and npm
- Python 3.8+
- AWS Account with S3, Lambda, and Textract access
- MongoDB

### Frontend Setup

1. Navigate to the `frontend` directory
2. Run `npm install` to install dependencies
3. Run `ng serve` to start the development server

### Backend Setup

1. Navigate to the `backend` directory
2. Create a virtual environment: `python -m venv venv`
3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Unix or MacOS: `source venv/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Set up environment variables (see `.env.example`)
6. Run the FastAPI server: `uvicorn main:app --reload`

### AWS Setup

1. Create an S3 bucket for storing PDFs
2. Set up a Lambda function triggered by S3 uploads
3. Configure the Lambda function to use Textract and write to MongoDB

### MongoDB Setup

1. Set up a MongoDB instance (local or cloud-based)
2. Configure the connection string in the backend environment variables

## Usage

1. Start the frontend and backend servers
2. Navigate to `http://localhost:4200` in your browser
3. Use the interface to upload a claim PDF
4. Note the returned claim ID
5. Use the "Check Claim Status" feature with the claim ID to retrieve processed information

## Future Enhancements

- Implement user authentication
- Add support for multiple file types
- Implement real-time status updates
- Add AI model to return if a claim will be successfully reimbursed
## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
