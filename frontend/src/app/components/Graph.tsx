import { Chart } from "react-google-charts";


interface props {
    title?: string;
    color?: string;
    legend?: string;

  }

export default function Graph() {

    const data = [
        ["Liveliness", "Loudness"], // Column headers (X, Y)
        [8, 9],
        [4, 5.5],
        [2, 8],
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

    return(
        <div className="bg-gray-500 p-4">
            <div>
                <h2>Scatter Plot</h2>
                <Chart chartType="ScatterChart" width="100%" height="400px" data={data} options={options} />
            </div>
            
        </div>
    );
}