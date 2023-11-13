import { IconType } from 'react-icons'; 
interface ButtonMenuProps{
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    icon?: IconType;
    label?: string; 
    className?: string;
    active?: boolean;
}
const ButtonMenu: React.FunctionComponent<ButtonMenuProps> = ({
    onClick,
    icon: Icon,
    label, 
    className,
    active,
}) => {
    return (
        <button  
            className={`grid lg:grid-cols-2 justify-items-start lg:px-4 hover:bg-white hover:text-[#465BA6] rounded-xl py-2 items-center w-full ${className} ${active ? "bg-[#465BA6] text-white" :""}`}
            onClick={onClick}
        >
            {Icon && <Icon size={32}/> }
            <p className='font-medium'>{label}</p>
        </button>
    )
}

export default ButtonMenu;