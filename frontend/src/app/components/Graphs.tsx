'use client';

import Graph from "./Graph";
import Image from "next/image";
import { useState } from 'react';





interface props {
    handleClick?: () => void;
    isExpanded?: boolean;
    info?: string;
  }

export default function Graphs({ handleClick, isExpanded, info}: props ) {



    const [type, setType] = useState("");

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
                <div className="w-full sm:w-1/2 hover:-translate-y-4 hover:brightness-75 duration-150" onClick={handleClick}><Graph chartType={"ScatterChart"} data={scatterData} options={options}
                info={"The scatterplot above shows a low correlation of lower liveliness being louder. This is shown by the largest category (time signature of 4) having a high amount of data points at a liveliness of 1 and a loudness of -2.5. This is also slightly replicated by the time signatures of 3 and 5, which have a lower amount of data."}/></div>
                <div className="w-full sm:w-1/2 hover:-translate-y-4 hover:brightness-75 duration-150" onClick={handleClick}><Graph chartType={"ScatterChart"} data={boxData} options={options}
                info={""}/></div>
                <div className="w-full sm:w-1/2 hover:-translate-y-4 hover:brightness-75 duration-150" onClick={handleClick}><Graph chartType={"ScatterChart"} data={boxData} options={options}
                info={""}/></div>
                <div className="opacity-0 h-96 w-full sm:w-1/2" onClick={handleClick}></div>
            </div>

            {isExpanded && (
          <div className="fixed bg-black top-20 left-0 right-0 z-[100] w-5/6 h-5/6 m-auto">
            <div className="flex-row bg-red-800">
              <div onClick={handleClick}>
                <Image 
              src="/x.svg"
              width={50}
              height={50}
              alt="x"
              className="invert"/>
              </div>
            </div>
            <div className="flex flex-row">
                <div className="h-full w-2/3">
                    {/* <Graph chartType={"ScatterChart"} data={scatterData} options={options} /> */}
                </div>
                <div className="w-1/3">

                </div>
            </div>
            
          </div>)}

        </div>
        
    );
}