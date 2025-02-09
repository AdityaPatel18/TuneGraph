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
      // Trigger the download dataset API (this will initiate the download process on the backend)
      await fetch('http://localhost:8000/api/download_dataset');
      
      // Once the download is triggered, fetch the data
      const response = await fetch('http://localhost:8000/api/data');
      const data = await response.json();
      
      // Store the data in state
      setSongData(data);
      console.log(ata);
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
    </div>
  );
}