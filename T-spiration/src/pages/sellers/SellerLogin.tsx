import Box from "../../conponents/Box";
import Button from "../../conponents/buttons/Button";
import TextInput from "../../conponents/inputs/TextInput";
import { useState } from 'react';
import './login.css';
import { useNavigate } from "react-router-dom";
interface SellerLoginProps{

}

const SellerLogin:React.FC<SellerLoginProps> = () =>{
    const [ text, setText] = useState<string>("");
    const navigate = useNavigate();
    return( 
        <Box className="absolute py-[3%] top-1/4 w-[98%] left-[1%] shadow-inner border-[2px] md:left-1/4 lg:left-1/3 md:w-1/2 lg:w-1/3 bg-[#5046a5] text-black">
            <div className="grid gap-8 w-2/3">
                <p className="text-2xl font-medium">Login Seller:</p>
                <TextInput title="Username" text={text} setText={setText}/>
                <TextInput title="Password" text={text} setText={setText}/>
                <Button onClick={()=>navigate('/admin/home')}>Login</Button>
            </div>
        </Box>  
    )

}

export default SellerLogin;