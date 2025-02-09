"use client";

import { useState } from 'react';
import Graphs from "./components/Graphs";
import Graph from './components/Graph';
import FrontHeader from "./components/FrontHeader";
import Image from "next/image";


export default function Home() {

  const [isExpanded, setIsExpanded] = useState(false);
  const [graphType, setGraphType] = useState("");

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
        
        


          
    </div>
  );
}