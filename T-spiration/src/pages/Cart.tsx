import { useNavigate } from "react-router-dom";
import Container from "../conponents/Container"
import Button from "../conponents/buttons/Button";
import ButtonIcon from "../conponents/buttons/ButtonIcon";
import ProductCart3D from "../conponents/product/ProductCart3D";
import { BiArrowBack } from 'react-icons/bi';

export interface CartProps{}

const Cart: React.FunctionComponent<CartProps> = () =>  {
    const navigation = useNavigate()
    return (
        <Container>
            <div className="grid gap-5 mt-20 lg:flex w-full justify-between">
                <div className="w-full lg:w-1/2 xl:w-1/3">
                    <ProductCart3D></ProductCart3D>
                </div>
                <div className="w-full lg:w-1/2 xl:w-2/3 bg-gray-200 drop-shadow-lg rounded-2xl p-10">
                    <Button 
                        label={<>
                                <BiArrowBack size={24}/>
                                <p>Back</p>
                                </>
                            } 
                        onClick={()=>navigation('/')}
                        locationIcon="left"
                    />
                    <p className="mt-5 text-xl font-bold">Shopping Cart</p> 
                    <table className="w-full my-10 font-bold">
                        <thead>
                            <tr> 
                                <td>Count</td>
                                <td>Name Product</td>
                                <td>Size</td>
                                <td>Image</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        <tbody> 
                {/* <div className="bg-gray-400 w-full h-px rounded-full"></div> */}
                            <tr >
                                <td>x1</td>
                                <td>T-shirt</td>
                                <td>L</td>
                                <td >
                                    <img className="max-w-[100px] mt-5 ml-10" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&w=1000&q=80"/>
                                </td>
                                <td>10.00$</td>
                            </tr> 
                        </tbody> 
                    </table>
                </div>
            </div>
        </Container>
    )
}


export default Cart;
