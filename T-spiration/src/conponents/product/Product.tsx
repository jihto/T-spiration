import { BiSolidStar, BiSolidHeart } from 'react-icons/bi';
import { useState } from 'react';
import ButtonIcon from '../buttons/ButtonIcon';
interface ProductProps{
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; 
    label?: string; 
    setIsOpen: (isOpen: boolean) => void ; 
}
const Product: React.FunctionComponent<ProductProps> = ({
    setIsOpen, 
    // label, 
}) => { 
    const [like, setLike] = useState<boolean>(false);
    return (
        <div className={`relative rounded-2xl bg-white border-2 p-2`}>
            <div className={`absolute top-0 right-0 cursor-pointer ${like ? "text-red-600" : " text-white "} drop-shadow-2xl`}>
                <ButtonIcon onClick={()=>setLike(prev => !prev)} icon={BiSolidHeart} size='medium'/>
            </div>
            <img src="public/images/T-shirt.png" onClick={()=>setIsOpen(true)} className="cursor-pointer max-w-[200px] object-cover bg-gray-100 rounded-xl"/>
            <p className="font-bold text-lg">Nike Downshifter 12</p>
            <p className="text-gray-400 flex justify-center items-center"><BiSolidStar className="text-yellow-400"/> 4.9 - 652 item sold out</p>
            <p className="font-bold text-lg">1230.02$</p>
        </div>
    )
}

export default Product;