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
    <div style={{ width: "900px", height: "900px" }}>
      <h2>Scatter Plot</h2>
      <Chart chartType="ScatterChart" width="100%" height="400px" data={data} options={options} />
    </div>
  );
}

<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year 1', 20, 28, 38, 45],
      ['Year 2', 31, 38, 55, 66],
      ['Year  3', 50, 55, 77, 80],
      ['Year 4', 77, 77, 66, 50],
      ['Year 5', 68, 66, 22, 15]
      // Treat first row as data as well.
    ], true);

    var options = {
      legend:'none'
    };

    var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));

    chart.draw(data, options);
  }
    </script>
  </head>
  <body>
    <div id="chart_div" style="width: 900px; height: 500px;"></div>
  </body>
</html>




