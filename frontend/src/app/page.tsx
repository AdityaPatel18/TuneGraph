"use client";

import { useState } from 'react';
import Graphs from "./components/Graphs";
import FrontHeader from "./components/FrontHeader";
import Image from "next/image";


export default function Home() {

  const [isExpanded, setIsExpanded] = useState(false);
  console.log(isExpanded);

  function handleClick() {
      setIsExpanded(!isExpanded);
  }

  return (
    
    
    <div className="mainHome">
        <FrontHeader />
        
        <div className="bg-gradient-to-b from-black from-20%">
        <div className="mx-16 bg-black rounded-[32px]">
          <Graphs handleClick={handleClick} isExpanded={isExpanded} />
        </div>

        </div>
        
        
        {isExpanded && (
          <div className="fixed bg-black top-20 left-0 right-0 z-[100] w-5/6 h-5/6 m-auto">
            <div className="flex-row bg-red-800">
              <div onClick={handleClick}>
                <Image 
              src="/x.svg"
              width={100}
              height={100}
              alt="x"
              className="invert"/>
              </div>
            </div>
            
          </div>)}


          
    </div>
  );
}