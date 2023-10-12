import Container from "../Container";
import ButtonIcon from "../buttons/ButtonIcon" 
import Modal from "./Modal"
import { MdClose } from 'react-icons/md'; 
import { useState } from 'react'; 
import Button from "../buttons/Button";
import Image3D from "../Image3D";

export interface ProductModalProps{
    isOpen?: boolean;
    setIsOpen: (isOpen: boolean) => void ; 
}

const ProductModal: React.FC<ProductModalProps> = ({
    isOpen = false,
    setIsOpen,
}) =>  { 
    console.log('pass')
    const [size, setSize] = useState<number>(0);
    const [color, setColor] = useState<number>(0);
    const [number, setNumber] = useState<number>(0);
    return (
        <Modal 
            isOpen={isOpen} 
            size="large" 
            setIsOpen={setIsOpen}
            header={ <ButtonIcon icon={MdClose} onClick={()=>setIsOpen(false)}/>}
            content={
                <Container>
                    <div className="flex gap-5">
                        <div className="w-1/2 border-2 bg-gray-200  p-2 rounded-xl">
                            {/* <Image3D image="public/images/Test.jpg"/> */}
                            {/* <img className="rounded-xl" src=""/> */}
                        </div>
                        <div className="">
                            <p className="text-3xl font-bold">Name Product</p>
                            <div className="grid grid-cols-2 my-10">
                                <div className="grid gap-10">
                                    <p>Size: </p>
                                    <p>Color:</p>
                                    <p>Number:</p>
                                </div>
                                <div className="grid gap-4"> 
                                    <div>
                                        {
                                            ["L","M","S"].map((item, index) => (
                                                <button key={item} onClick={()=>setSize(index)} className={`${size === index && 'border-black'} px-4 py-2 border-2`}>{item}</button>
                                            ))
                                        }
                                    </div>
                                    <div>
                                        {
                                            ["Red","Blue","Yellow"].map((item, index) => (
                                                <button key={index} onClick={()=>setColor(index)} className={`${index === color && 'border-black'} px-4 py-2 border-2`}>{item}</button>
                                            ))
                                        }
                                    </div>
                                    <div>
                                        <button onClick={()=>number && setNumber(prev => prev - 1)} className='px-4 py-2 border-2'>-</button>
                                        <button onClick={()=>{}} className='px-4 py-2 border-2'>{number}</button>
                                        <button onClick={()=>setNumber(prev => prev + 1)} className='px-4 py-2 border-2'>+</button>
                                    </div>
                                </div>
                            </div>  
                            <div className="flex justify-center">
                                <Button label="Add to cart" color={false}/> 
                                <Button label="Buy now"/> 
                            </div>  
                        </div>
                    </div>
                </Container>
            } 
        />
    )
}


export default ProductModal;
