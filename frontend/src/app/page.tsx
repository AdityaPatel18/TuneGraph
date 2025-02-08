"use client";

import { Chart } from "react-google-charts";

export default function Home() {
  const data = [
    ["Liveliness", "Loudness"], // Column headers (X, Y)
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7],
  ];

  const options = {
    title: "Liveliness vs Loudness for 3 groupings of Tempo",
    hAxis: { title: "Liveliness", minValue: 0, maxValue: 10 },
    vAxis: { title: "Loudness", minValue: 0, maxValue: 10 },
    legend: "none",
    colors: ["#593c3c"], // Optional: Custom color
  };

  return (
    <div style={{ width: "900px", height: "500px" }}>
      <h2>Scatter Plot</h2>
      <Chart chartType="ScatterChart" width="100%" height="400px" data={data} options={options} />
    </div>
  );
}
