import Container from "../containers/Container"; 
import Modal from "./Modal" 
import { useState } from 'react'; 
import Button from "../buttons/Button"; 
import Heading from "../Heading";

export interface ProductModalProps{
    isOpen?: boolean;
    setIsOpen: (isOpen: boolean) => void ; 
}

const ProductModal: React.FC<ProductModalProps> = ({
    isOpen = false,
    setIsOpen,
}) =>  {   
    const [number, setNumber] = useState<number>(1);
    return (
        <Modal 
            className="w-2/3 h-[96%] overflow-y-scroll"
            isOpen={isOpen}  
            setIsOpen={setIsOpen} 
            content={ 
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="w-full h-fit gap-6 grid "> 
                        <img className="shadow-sm bg-gray-200" src="/public/images/sneaker-female.png"/> 
                        <div className="grid grid-cols-3 gap-x-5">
                            <img className="bg-gray-200" src="/public/images/sneaker-female.png"/> 
                            <img className="bg-gray-200" src="/public/images/sneaker-female.png"/> 
                            <img className="bg-gray-200" src="/public/images/sneaker-female.png"/> 
                        </div>
                    </div>
                    <div className="w-full h-full text-left flex flex-col gap-6">
                        <p className="lg:text-4xl md:text-2xl font-sans  font-bold">Nike Air Force 1'07</p>
                        <div>2.5 Reviews</div>
                        <div className="flex gap-5">
                            <Button outline={true}>Running Shoes</Button>
                            <Button outline={true}>Casual Sneakers</Button>
                            <Button outline={true}>Limited Edition</Button>
                        </div>
                        <Heading header="Product Description:">
                            Classic anf comfortable, you'll want to wear theese AF-1s 
                            time after time, Smooth suede and a plush collar give these
                            kicks a premium feel, while the gum sole adds a retro look. 
                            Of course, some things never change Nike Air still cushion your every step.
                        </Heading> 
                        <div className="grid gap-5">
                            <p className="text-2xl font-bold">Size:</p>
                            <div className="flex gap-5 flex-wrap">
                                {
                                    [6.5,6.6,6.7,6.8,6.9,7,7.5,8.5,9.5,9].map(item => (
                                        <Button outline={true} key={item}>{item}</Button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="grid gap-5">
                            <p className="text-2xl font-bold">Items Quantity:</p>
                            <div className="w-fit h-fit flex justify-center items-center gap-5 bg-gray-200 p-1 rounded-full">
                                <Button outline={true} onClick={()=>setNumber(prev => prev > 0 ? prev - 1 : 0)}>-</Button>
                                    {number}
                                <Button outline={true} onClick={()=>setNumber(prev => prev + 1)}>+</Button>
                            </div>
                        </div>
                        <p className="text-xl lg:text-3xl font-bold">IDR.1,400$</p>
                        <div className="bg-gray-200 p-4 rounded-xl shadow-sm">
                            <Heading header="15% Discount For Membership">
                                Every SEPOKAT membership customers can get 15% discount with minimum $100 shopping
                            </Heading>  
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <Button>Add to cart </Button>
                            <Button> Buy now </Button>
                        </div>  
                        <div>
                            Another
                        </div>
                    </div>
                </div> 
            } 
        />
    )
}


export default ProductModal;
