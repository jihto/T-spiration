
interface ButtonProps{
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; 
    children?: string | React.ReactNode; 
    color?: boolean;
    locationIcon?: "right" | "left";
    className?: string;
    size?: "large" | "small"; 
    outline?: boolean;
}
const Button: React.FunctionComponent<ButtonProps> = ({
    onClick, 
    children,
    color= true,
    className="",
    size = "small", 
    locationIcon = "right",
    outline = false,
}) => {
    return (
        <button 
            className={`
                ${size === 'large' ? "px-6 py-3 " : "px-4 py-2"} 
                
                hover:opacity-80 
                rounded-full 
                flex
                justify-center
                items-center gap-2
                ${className}  
                ${outline 
                    ? 'bg-white text-black border-gray-200 border-[1px] shadow-md hover:shadow-lg  hover:bg-gray-100' 
                    : color 
                        ? `bg-[#17171e] text-primary hover:bg-primary hover:text-secondary` 
                        : ""
                } 
                ${locationIcon === "right" ? "flex-row-reverse" : "flex-row-[unset]"}
            `} 
            onClick={onClick}
        >
            {children} 
        </button>
    )
}

export default Button;