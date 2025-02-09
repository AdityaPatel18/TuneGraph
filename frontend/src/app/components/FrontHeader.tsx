import Image from 'next/image';

export default function FrontHeader() {

    return(
        <div className="relative h-[100vh] w-full">
            <div className="flex flex-row py-80 px-32">
                <div className="w-1/2">
                    <h1 className="text-8xl font-black inline">Tune</h1><h1 className="text-8xl font-black text-red-700 inline">Graph</h1>
                </div>
                <div className="px-16 pt-4 w-1/2 text-center">
                    <h3 className="text-2xl">Interpreting Data from 250+ Songs for Common Themes</h3>
                </div>
            </div>
            
            
            <Image 
            src="/TuneGraph.png"
            alt="background"
            fill={true}
            className="bgImage"
            />
            
            
        </div>
    );
}