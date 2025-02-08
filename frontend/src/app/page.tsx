"use client";

import { Chart } from "react-google-charts";

export default function Home() {
  const data = [
    ["Age", "Weight"], // Column headers (X, Y)
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7],
  ];

  const options = {
    title: "Age vs. Weight Comparison",
    hAxis: { title: "Age", minValue: 0, maxValue: 15 },
    vAxis: { title: "Weight", minValue: 0, maxValue: 15 },
    legend: "none",
    colors: ["#FF5733"], // Optional: Custom color
  };

  return (
    <div style={{ width: "900px", height: "500px" }}>
      <h2>Scatter Plot</h2>
      <Chart chartType="ScatterChart" width="100%" height="400px" data={data} options={options} />
    </div>
  );
}