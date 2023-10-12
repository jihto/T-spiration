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
        <div className="w-full rounded-xl flex my-5 gap-5 bg-white p-2">
            {
                [1,2,3].map(item => (
                    <>
                        <Product setIsOpen={setIsOpen} key={item}/>
                        {isOpen
                            ? <ProductModal isOpen={isOpen} setIsOpen={setIsOpen}/>
                            : null
                        }
                    </>
                ))
            }

        </div>
    )
}

export default Products;