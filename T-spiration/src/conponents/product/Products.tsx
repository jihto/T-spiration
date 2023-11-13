import ProductModal from "../modals/ProductModal";
import Product from "./Product";
import { useState } from 'react';



interface ProductsProps{
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; 
    label?: string; 
}
const Products: React.FunctionComponent<ProductsProps> = ({
    // onClick, 
    // label, 
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="w-full rounded-xl flex flex-wrap my-5 gap-5">
            {isOpen
                ? <ProductModal isOpen={isOpen} setIsOpen={setIsOpen}/>
                : null
            }
            
            {
                [1,2,3,4,5,6,7,8,9,10,11,21,12,13,45].map(item => (
                    <div key={item}>
                        <Product setIsOpen={setIsOpen} key={item}/>
                        
                    </div>
                ))
            }

        </div>
    )
}

export default Products;