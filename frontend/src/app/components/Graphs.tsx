'use client';

import Graph from "./Graph";

interface props {
    handleClick?: () => void;
    isExpanded?: boolean;
  }

export default function Graphs({ handleClick, isExpanded }: props ) {    


    const scatterData = [
    ["Liveliness", "Loudness"], // Column headers (X, Y)
    [8, 9],
    [4, 5.5],
    [2, 8],
    [4, 5],
    [3, 3.5],
    [6.5, 7],
    ];

    const boxData = [
        ["Liveliness", "Loudness"], // Column headers (X, Y)
        [8, 8],
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
    
    return (
        <div>
            <div className="p-12 flex flex-col sm:flex-row flex-wrap h-full w-full">
                <div className="w-full sm:w-1/2" onClick={handleClick}><Graph chartType={"ScatterChart"} data={scatterData} options={options}/></div>
                <div className="w-full sm:w-1/2" onClick={handleClick}><Graph chartType={"ScatterChart"} data={boxData} options={options}/></div>
                <div className="w-full sm:w-1/2" onClick={handleClick}><Graph chartType={"ScatterChart"} data={boxData} options={options}/></div>
                <div className="opacity-0 h-96 w-full sm:w-1/2" onClick={handleClick}></div>
            </div>

        </div>
        
    );
}