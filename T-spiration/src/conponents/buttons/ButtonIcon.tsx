import { IconType } from 'react-icons';


interface ButtonIconProps{
    onClick?: (e: React.MouseEvent<HTMLButtonElement>,) => void;
    icon?: IconType;
    label?: string;
    size?: 'large' | 'medium' | 'small';
    children?: React.ReactNode;
}
const ButtonIcon: React.FunctionComponent<ButtonIconProps> = ({
    onClick,
    icon: Icon,
    label,
    size = 'large',
    children,
}) => {
    return (
        <button 
            className={`
                p-1 rounded-full flex items-center relative
                ${label && 'px-4 py-2 gap-2'}
                ${size === 'large' ? 'text-base bg-gray-200' : size === 'medium' ? 'text-base bg-gray-300' : 'text-sm h-1/2 bg-gray-400'} 
            `} 
            onClick={onClick}
        >
            {children}
            {label}
            {Icon && <Icon size={size === 'large' ? 32 : size === "medium" ? 24 : 12}/> }
        </button>
    )
}

export default ButtonIcon;