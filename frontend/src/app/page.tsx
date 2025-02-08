"use client";

import { Chart } from "react-google-charts";
import { useState } from 'react';
import Graphs from "./components/Graphs";
import FrontHeader from "./components/FrontHeader";
import Image from "next/image";


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

  const [isExpanded, setIsExpanded] = useState(false);
  console.log(isExpanded);

  function handleClick() {
      setIsExpanded(!isExpanded);
  }

  return (
    
    // <div style={{ width: "900px", height: "500px" }}>
    //   <h2>Scatter Plot</h2>
    //   <Chart chartType="ScatterChart" width="100%" height="400px" data={data} options={options} />
    // </div>
    <div className="">
        <FrontHeader />
        <div className="mx-16 my-16 bg-black rounded-[32px]">
          <Graphs handleClick={handleClick} isExpanded={isExpanded} />
        </div>
        
        {isExpanded && (
          <div className="fixed bg-black top-20 left-0 right-0 z-[100] w-5/6 h-5/6 m-auto">
            <div onClick={handleClick}>
              <Image 
            src="/x.svg"
            width={100}
            height={100}
            alt="x"/>
            </div>
          </div>)}
    </div>
  );
}