import { Chart } from "react-google-charts";


interface props {
    chartType?: string;
    data?: object;
    options?: object;
  }

export default function Graph({chartType, data, options}: props) {
    return(
        <div className="p-4">
            <div>
                <div className="bg-red-800">
                  <h2 className="pl-4 py-4 text-white font-extrabold text-3xl">Scatter Plot</h2>
                </div>
                <Chart chartType={chartType} width="100%" height="400px" data={data} options={options} />
                <h3> </h3>
            </div>
            
        </div>
    );
}