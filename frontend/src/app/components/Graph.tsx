import { Chart } from "react-google-charts";


interface props {
    chartType?: string;
    data?: object;
    options?: object;
  }

export default function Graph({chartType, data, options}: props) {
    return(
        <div className="bg-gray-500 p-4">
            <div>
                <h2>Scatter Plot</h2>
                <Chart chartType={chartType} width="100%" height="400px" data={data} options={options} />
            </div>
            
        </div>
    );
}