import { IconType } from 'react-icons';


interface ButtonIconProps{
    onClick?: (e: React.MouseEvent<HTMLButtonElement>,) => void;
    icon?: IconType;
    label?: string;
    size?: 'large' | 'medium' | 'small';
    children?: React.ReactNode;
    outline?: boolean;
}
const ButtonIcon: React.FunctionComponent<ButtonIconProps> = ({
    onClick,
    icon: Icon,
    label,
    size = 'large',
    children,
    outline = false,
}) => {
    return (
        <button 
            className={`
                ${outline ? "bg-white border-[1px]" : ""}
                p-1 rounded-full flex items-center relative shadow-sm font-normal
                ${label && 'px-4 py-1 gap-2'}
                ${size === 'large' ? 'text-base text-black bg-gray-200' : size === 'medium' ? 'text-base bg-gray-300' : 'text-sm h-1/2 bg-gray-400'} 
            `} 
            onClick={onClick}
        >
            {children}
            {Icon && <Icon size={size === 'large' ? 32 : size === "medium" ? 24 : 12}/> }
            <p className='font-medium'>{label}</p>
        </button>
    )
}

export default ButtonIcon;