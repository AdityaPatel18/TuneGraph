'use client';

import Graph from "./Graph";

interface props {
    handleClick?: () => void;
    isExpanded?: boolean;
  }

export default function Graphs({ handleClick, isExpanded }: props ) {
    
    return (
        <div>
            <div className="p-12 flex flex-col sm:flex-row flex-wrap h-full w-full">
                <div className="w-full sm:w-1/2" onClick={handleClick}><Graph /></div>
                <div className="w-full sm:w-1/2" onClick={handleClick}><Graph /></div>
                <div className="w-full sm:w-1/2" onClick={handleClick}><Graph /></div>
                <div className="opacity-0 h-96 w-full sm:w-1/2" onClick={handleClick}></div>
            </div>

        </div>
        
    );
}