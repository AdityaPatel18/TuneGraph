from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import kagglehub
from fastapi.responses import JSONResponse
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/download_dataset")
async def download_dataset():
    try:
        path = kagglehub.dataset_download("amitanshjoshi/spotify-1million-tracks")
    except Exception as e:
      return JSONResponse(status_code=400, content={"message": str(e)})

@app.get("/api/message")
def get_message():
    return {"message": "Hello, World!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
