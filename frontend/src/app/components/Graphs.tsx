'use client';

import { useState, useEffect } from "react";
import Graph from "./Graph";
import Image from "next/image";

interface Props {
  handleClick?: () => void;
  isExpanded?: boolean;
  info?: string;
}

export default function Graphs({ handleClick, isExpanded }: Props) {
  const [formattedData, setFormattedData] = useState([
    ["Liveliness", "Loudness", { role: "style" }],
  ]);
  const [boxData, setBoxData] = useState([
    ["Energy", "Low", "Open", "Close", "High"],
  ]);
  const [correlationData, setCorrelationData] = useState([
    ["Tempo", "Energy", { role: "style" }],
  ]);
  const [danceabilityBarData, setDanceabilityBarData] = useState([
    ["Danceability Range", "Number of Tracks"],
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/api/data");
        const jsonData = await response.json();

        const timeSignatureColors: Record<number, string> = {
          3: "#FF5733",
          4: "#33FF57",
          5: "#3357FF",
          6: "#FFD700",
        };

        const data = [["Liveliness", "Loudness", { role: "style" }]];
        Object.values(jsonData)
          .slice(0, 400)
          .forEach((track: any) => {
            if (
              track.liveness !== null &&
              track.loudness !== null &&
              track.liveness < 6
            ) {
              const color =
                timeSignatureColors[track.time_signature] || "#808080";
              data.push([track.liveness, track.loudness, color]);
            }
          });
        setFormattedData(data);

        const data2 = [["Energy", "Low", "Open", "Close", "High"]];
        Object.values(jsonData)
          .slice(0, 100)
          .forEach((track: any) => {
            if (
              track.energy !== null &&
              track.valence !== null &&
              track.danceability !== null
            ) {
              const low = track.valence * 0.8;
              const open = track.valence * 0.9;
              const close = track.valence * 1.1;
              const high = track.valence * 1.2;
              data2.push([track.energy, low, open, close, high]);
            }
          });
        setBoxData(data2);

        const data3 = [
          ["Energy", "Tempo"],
          ...Object.values(jsonData)
            .slice(0, 200)
            .map((track: any) => [track.energy, track.tempo]),
          ["Danceability", "Tempo"],
          ...Object.values(jsonData)
            .slice(0, 200)
            .map((track: any) => [track.danceability, track.tempo]),
          ["Acousticness", "Loudness"],
          ...Object.values(jsonData)
            .slice(0, 200)
            .map((track: any) => [track.acousticness, track.loudness]),
          ["Speechiness", "Energy"],
          ...Object.values(jsonData)
            .slice(0, 200)
            .map((track: any) => [track.speechiness, track.energy]),
        ];

        setCorrelationData(data3);

        const danceabilityData: number[] = [];
        Object.values(jsonData)
          .slice(0, 100)
          .forEach((track: any) => {
            if (track.danceability !== null) {
              danceabilityData.push(track.danceability);
            }
          });

        const danceabilityBins: Record<number, number> = {};
        danceabilityData.forEach((value) => {
          const bin = (Math.floor(value / 0.1) * 0.1).toFixed(1);
          danceabilityBins[bin] = (danceabilityBins[bin] || 0) + 1;
        });

        const danceabilityBar = [["Danceability Range", "Number of Tracks"]];
        Object.keys(danceabilityBins)
          .sort((a, b) => parseFloat(a) - parseFloat(b))
          .forEach((bin) => {
            danceabilityBar.push([bin, danceabilityBins[bin]]);
          });

        setDanceabilityBarData(danceabilityBar);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const optionsScat = {
    title: "Track Liveliness vs Loudness (Colored by Time Signature)",
    hAxis: { title: "Track Liveliness" },
    vAxis: { title: "Track Loudness (dB)", minValue: -10, maxValue: 0 },
    legend: "none",
    pointSize: 3,
  };

  const optionsBox = {
    title: "Energy vs Mood (Valence)",
    hAxis: { title: "Track Energy" },
    vAxis: { title: "Track Mood (Valence)", minValue: 0, maxValue: 10 },
    legend: "none",
  };

  const optionsCorrelation = {
    title: "Correlation Between Energy and Tempo",
    hAxis: { title: "Energy" },
    vAxis: { title: "Tempo (BPM)" },
    legend: "none",
  };

  const optionsDanceabilityBarChart = {
    title: "Danceability Distribution",
    hAxis: { title: "Danceability Range" },
    vAxis: { title: "Number of Tracks" },
    legend: "none",
  };

  if (loading) {
    return <div className="text-white text-center p-4">Loading Graphs...</div>;
  }

  return (
    <div>
      <div className="p-12 flex flex-col sm:flex-row flex-wrap h-full w-full">
        <div
          className="w-full sm:w-1/2 hover:-translate-y-4 hover:brightness-75 duration-150"
          onClick={handleClick}
        >
          <Graph
            chartName="Scatter Plot"
            chartType={"ScatterChart"}
            data={formattedData}
            options={optionsScat}
            info={
              "The scatterplot above shows a low correlation of lower liveliness being louder. This is shown by the largest category (time signature of 4) having a high amount of data points at a liveliness of 1 and a loudness of -2.5. This is also slightly replicated by the time signatures of 3 and 5, which have a lower amount of data."
            }
          />
        </div>
        <div
          className="w-full sm:w-1/2 hover:-translate-y-4 hover:brightness-75 duration-150"
          onClick={handleClick}
        >
          <Graph
            chartName="Box Plot"
            chartType={"CandlestickChart"}
            data={boxData}
            options={optionsBox}
            info={"The box plot above shows a loose positive correlation between valence and energy. Although the box plots show a clear upwards pattern going upwards, where as the energy increases, the valence increases, the correlation is still loose because the ranges of the values become larger towards the end."}
          />
        </div>
        <div
          className="w-full sm:w-1/2 hover:-translate-y-4 hover:brightness-75 duration-150"
          onClick={handleClick}
        >
          <Graph
            chartName="Scatter Plot"
            chartType={"ScatterChart"}
            data={correlationData}
            options={optionsCorrelation}
            info={"This scatterplot does not show any particular correlation between energy and tempo (BPM). The graph shows more points toward the median of the energy and tempo values but it does not suggest that the data is centered at that area since there is a large area."}
          />
        </div>
        <div
          className="w-full sm:w-1/2 hover:-translate-y-4 hover:brightness-75 duration-150"
          onClick={handleClick}
        >
          <Graph
            chartName="Double Bar Chart"
            chartType={"BarChart"}
            data={danceabilityBarData}
            options={optionsDanceabilityBarChart}
            info={"The double bar chart shows the number of tracks and the danceability ratings for each. One can see in the graph that multiple tracks have a similar average danceability rating."}
          />
        </div>
        <div
          className="opacity-0 h-96 w-full sm:w-1/2"
          onClick={handleClick}
        ></div>
      </div>

      
    </div>
  );
}
