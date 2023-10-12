
interface ButtonProps{
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; 
    label?: string | React.ReactNode; 
    color?: boolean;
    locationIcon?: "right" | "left" 
}
const Button: React.FunctionComponent<ButtonProps> = ({
    onClick, 
    label,
    color=true, 
    locationIcon = "right"
}) => {
    return (
        <button 
            className={`
                px-6 
                py-3 
                shadow-md 
                hover:shadow-lg 
                hover:opacity-90 
                rounded-full 
                flex
                justify-center
                items-center gap-2
                ${locationIcon === "right" ? "flex-row-reverse" : "flex-row-[unset]"}
                ${color ? "bg-black text-white hover:bg-white hover:text-black" : "bg-white text-black hover:text-white hover:bg-black"} `} 
            onClick={onClick}
        >
            {label} 
        </button>
    )
}

export default Button;