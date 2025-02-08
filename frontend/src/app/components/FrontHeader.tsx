import Image from 'next/image';

export default function FrontHeader() {

    return(
        <div className="relative h-[100vh] w-full bg-gradient-to-b from-[rgba(91,1,1,0.5)] via-black to-black to-90% flex flex-row justify-center gap-x-36">
            <h1 className="text-3xl text-bold">TuneGraph</h1>
            <h3>Interpreting Data from 250+ Songs for Common Themes</h3>
            <div className="relative top-60">
                {/* <Image
                src="/thumbnail_stockimage2.jpg"
                width={1920}
                height={1080}
                alt="background"/> */}
            </div>
            
        </div>
    );
}