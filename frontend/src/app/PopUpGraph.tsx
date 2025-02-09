import Chart from "react-google-charts";

interface props {
    chartType?: string;
    data?: object;
    options?: object;
  }

export default function PopUpGraph({chartType, data, options}: props) {

    return (
        <div>
            <Chart chartType={chartType} width="100%" height="400px" data={data} options={options} />
        </div>
    );


}