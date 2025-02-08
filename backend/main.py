from fastapi import FastAPI
import csv
from fastapi.middleware.cors import CORSMiddleware
import kagglehub
from fastapi.responses import JSONResponse
import os
import shutil

song_features = {}
app = FastAPI()

song_features = {}

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
        reduce_csv_file_inplace(input_file, 1000)
        parseData(input_file)
    except Exception as e:
      return JSONResponse(status_code=400, content={"message": str(e)})

@app.get("/api/message")
def get_message():
    return {"message": "Hello, World!"}

@app.get("/api/data")
def pass_value():
    return song_features

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

default_template = {
    "artist_name": None,
    "track_name": None,
    "track_id": None,
    "popularity": None,
    "year": None,
    "genre": None,
    "danceability": None,
    "energy": None,
    "key": None,
    "loudness": None,
    "mode": None,
    "speechiness": None,
    "acousticness": None,
    "instrumentalness": None,
    "liveness": None,
    "valence": None,
    "tempo": None,
    "duration_ms": None,
    "time_signature": None
}

def parseData(inputfile):
    with open(inputfile, newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        i = 1
        for row in reader:
            track_id = i
            song_features[track_id] = default_template.copy()

            song_features[track_id]["artist_name"] = row.get("artist_name")
            song_features[track_id]["track_name"] = row.get("track_name")
            song_features[track_id]["popularity"] = int(row.get("popularity", 0))/10
            song_features[track_id]["year"] = int(row.get("year", 0))
            song_features[track_id]["danceability"] = float(row.get("danceability", 0.0))*10
            song_features[track_id]["energy"] = float(row.get("energy", 0.0))*10
            song_features[track_id]["loudness"] = float(row.get("loudness", -60.0))/2
            song_features[track_id]["instrumentalness"] = float(row.get("instrumentalness", 0.0))*10
            song_features[track_id]["liveness"] = float(row.get("liveness", 0.0))*10
            song_features[track_id]["valence"] = float(row.get("valence", 0.0))*10
            song_features[track_id]["tempo"] = float(row.get("tempo", 0))/15
            song_features[track_id]["duration_ms"] = int(row.get("duration_ms", 0)) // 40000
            song_features[track_id]["time_signature"] = int(row.get("time_signature", 0))
            i+=1

    for track_id, attributes in list(song_features.items())[:3]:  # Show first 3 tracks
        print(f"Track ID: {track_id}")
        print(attributes)
        print("-" * 50)