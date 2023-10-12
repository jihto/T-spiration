import Button from "./buttons/Button";


interface OutstandingProps {
    size?: 'large' | "small";
    header: string;
    content: string | React.ReactNode;
}

const Outstanding:React.FunctionComponent<OutstandingProps> = ({
    size="large",
    header,
    content
}) => {
    return (
        <div className={`grid grid-cols-2 overflow-hidden shadow-md rounded-3xl p-6 relative ${size === "small" ? "w-1/2 h-full text-white bg-[#dab497]" : "bg-gray-100"}`}>
            <img className={`flex-1 object-contain z-0 ${size === "small" ? "absolute -bottom-10 -right-10 opacity-60" : "lg:relative w-1/2 lg:w-full lg:h-full"}`} src="public/images/sport.png" />
            <div className="z-10">
                {size === "large"
                    ?<p className="uppercase text-2xl">
                        New Arrival!
                    </p>
                    : null
                }
                <p className={`lg:text-6xl md:text-4xl sm:text-2xl uppercase my-5`}>
                    {header} 
                </p>
                <div className="my-8 z-10">
                    {content}
                </div> 
                <Button label="View Product" color={size === "small" ? false : true}/>
            </div>
        </div>
    )
}

export default Outstanding;