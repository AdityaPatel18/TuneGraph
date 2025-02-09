interface props {
    info?: string;
}

export default function GraphInfo({info}:props) {
    return (
        <div className="bg-neutral-200">
            <h3 className="text-neutral-500 p-4">{info}</h3>
        </div>

    );
   
}