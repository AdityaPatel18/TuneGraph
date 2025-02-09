"use client";

import { useState, useEffect} from 'react';
import Graphs from "./components/Graphs";
import FrontHeader from "./components/FrontHeader";
import Image from "next/image";


export default function Home() {

  const [isExpanded, setIsExpanded] = useState(false);
  const [songData, setSongData] = useState(null);
  console.log(isExpanded);

  function handleClick() {
      setIsExpanded(!isExpanded);
  }
  const triggerDownloadAndFetchData = async () => {
    try {
      await fetch('http://localhost:8000/api/download_dataset');
      
      const response = await fetch('http://localhost:8000/api/data');
      const data = await response.json();
      
      setSongData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    triggerDownloadAndFetchData();
  }, []);


  return ( 
    
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

          {isExpanded && (
        <div className="fixed bg-black top-20 left-0 right-0 z-[100] w-5/6 h-5/6 m-auto">
          <div className="flex-row bg-red-800">
            <div onClick={handleClick}>
              <Image
                src="/x.svg"
                width={50}
                height={50}
                alt="x"
                className="invert"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="h-full w-2/3">
              {/* <Graph chartType={"ScatterChart"} data={scatterData} options={options} /> */}
            </div>
            <div className="w-1/3"></div>
          </div>
        </div>)}
    </div>
  );
}