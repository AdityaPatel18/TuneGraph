"use client";

import { Chart } from "react-google-charts";

// Your music data
const musicData = {
  "1": {
    "artist_name": "Jason Mraz",
    "track_name": "I Won't Give Up",
    "loudness": -5.029,
    "liveness": 1.15,
  },
  "2": {
    "artist_name": "Jason Mraz",
    "track_name": "93 Million Miles",
    "loudness": -5.143,
    "liveness": 0.974,
  },
  "3": {
    "artist_name": "Joshua Hyslop",
    "track_name": "Do Not Let Me Go",
    "loudness": -6.8555,
    "liveness": 0.895,
  },
  "4": {
    "artist_name": "Boyce Avenue",
    "track_name": "Fast Car",
    "loudness": -4.9225,
    "liveness": 0.797,
  },
  "5": {
    "artist_name": "Andrew Belle",
    "track_name": "Sky's Still Blue",
    "loudness": -2.7095,
    "liveness": 1.1,
  },
  "6": {
    "artist_name": "Chris Smither",
    "track_name": "What They Say",
    "loudness": -3.21,
    "liveness": 0.943,
  },
  "7": {
    "artist_name": "Matt Wertz",
    "track_name": "Walking in a Winter Wonderland",
    "loudness": -4.0985,
    "liveness": 0.675,
  },
  "8": {
    "artist_name": "Green River Ordinance",
    "track_name": "Dancing Shoes",
    "loudness": -3.7295,
    "liveness": 0.976,
  },
};

export default function Home() {
  // Prepare data for the chart
  const data = [
    ["Liveliness", "Loudness"], // Column headers (X, Y)
    ...Object.values(musicData).map((track) => [
      track.liveness,
      Math.abs(track.loudness), // Make loudness positive for better visualization
    ]),
  ];

  const options = {
    title: "Liveliness vs Loudness for Tracks",
    hAxis: { title: "Liveliness", minValue: 0, maxValue: 10 },
    vAxis: { title: "Loudness", minValue: 0, maxValue: 10 },
    legend: "none",
    colors: ["#593c3c"], // Optional: Custom color
  };

  return (
    <div style={{ width: "900px", height: "500px" }}>
      <Chart chartType="ScatterChart" width="100%" height="400px" data={data} options={options} />
    </div>
  );
}


