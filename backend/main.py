from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import kagglehub
from fastapi.responses import JSONResponse
import os
import shutil

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def copy_file(source, destination):
    try:
        shutil.copy(source, destination)
        print(f"File copied from {source} to {destination}")
    except Exception as e:
        print(f"Error: {e}")

def reduce_csv_file_inplace(input_file, num_lines):
    try:
        with open(input_file, 'r+', newline='', encoding='utf-8') as file:
            lines = file.readlines()
            if len(lines) > num_lines:
                file.seek(0)
                file.writelines(lines[:num_lines])
                file.truncate() 
            else:
                print("The CSV file has fewer than 500 lines, no truncation needed.")
    except Exception as e:
        print(f"Error: {e}")

@app.get("/api/download_dataset")
async def download_dataset():
    try:
        folder_path = 'data'
        if os.path.exists(folder_path):
            shutil.rmtree(folder_path)
        os.makedirs(folder_path, exist_ok=True)
        temp_path = kagglehub.dataset_download("amitanshjoshi/spotify-1million-tracks")
        filename = os.path.basename(temp_path)  # Extract the filename from the path
        final_path = os.path.join(folder_path, filename)  # Destination path in the folder
        shutil.move(temp_path, final_path)
        input_file = 'data/1/spotify_data.csv'
        copy_file(input_file,'data/1/graph_data.csv')
        reduce_csv_file_inplace('data/1/graph_data.csv',250)
        reduce_csv_file_inplace(input_file, 1000)
    except Exception as e:
      return JSONResponse(status_code=400, content={"message": str(e)})

@app.get("/api/message")
def get_message():
    return {"message": "Hello, World!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
