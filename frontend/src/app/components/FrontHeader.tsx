import Image from 'next/image';

export default function FrontHeader() {

    return(
        <div className="relative h-[100vh] w-full bg-gradient-to-b from-[rgba(91,1,1,0.5)] via-black to-black to-90%">
            <div className="flex flex-row py-48 px-32">
                <div className="w-1/2">
                    <h1 className="text-3xl text-bold">TuneGraph</h1>
                </div>
                <div className="w-1/2 text-center">
                    <h3>Interpreting Data from 250+ Songs for Common Themes</h3>
                </div>
            </div>
            
            
            
            
        </div>
    );

}