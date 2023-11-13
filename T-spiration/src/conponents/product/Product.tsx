import { BiSolidStar, BiSolidHeart } from 'react-icons/bi';
import {CiMaximize1, CiHeart} from 'react-icons/ci'
import { useState } from 'react';
import ButtonIcon from '../buttons/ButtonIcon';
interface ProductProps{
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; 
    label?: string; 
    setIsOpen?: ((isOpen: boolean) => void); 
    role?: Role;
}
const Product: React.FunctionComponent<ProductProps> = ({
    setIsOpen, 
    // label, 
    role = "user",
}) => { 
    const [like, setLike] = useState<boolean>(false);
    const handleClick=() => {
        if(role === "user")  {  
            setLike(!like);
        };
        if(role === "seller"){
            setIsOpen && setIsOpen(true);
        }
    }
    return (
        <div className={`relative rounded-2xl shadow-xl border-[1px] bg-white hover:bg-gray-100 p-2`}>
            <div className={`absolute top-0 right-0 cursor-pointer ${like ? "text-red-600" : " text-white "} drop-shadow-2xl`}>
                <ButtonIcon onClick={handleClick} icon={role === "user" ? CiHeart : CiMaximize1} size='medium'/>
            </div>
            <img src="/public/images/sneaker.jpg" onClick={()=>role === "user" && setIsOpen && setIsOpen(true)} className="border-[1px] cursor-pointer max-w-[280px] object-cover bg-gray-200 rounded-xl"/>
            <p className="pt-2 font-medium">Nike Downshifter 12</p>
            <p className="font-medium text-base">1230.02$</p>
            <p className="text-gray-400 py-4 flex justify-start items-center"><BiSolidStar className="text-yellow-400"/> 4.9 - 652 item sold out</p>
        </div>
    )
}

export default Product;