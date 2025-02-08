from fastapi import FastAPI # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)


@app.get("/api/hello")
async def read_hello():
    return {"message": "Hello from FastAPI!"}


if __name__ == "__main__":
    import uvicorn # type: ignore
    uvicorn.run(app, host="localhost", port=8000)
