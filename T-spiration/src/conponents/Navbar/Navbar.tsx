import SearchInput from "../inputs/SearchInput";
import { useState } from 'react';
import { GoSearch } from 'react-icons/go'
import { BiUser } from 'react-icons/bi';
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { SiNextbilliondotai } from 'react-icons/si'
import ButtonIcon from "../buttons/ButtonIcon"; 
import LoginModal from "../modals/LoginModal";
import { useNavigate } from "react-router-dom";
interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
    const [searchText, setSearchtext] = useState<string>(""); 
    const [openLogin, setOpenLogin] = useState<boolean>(false); 
    const navigate = useNavigate();
    return (
        <> 
            <LoginModal isOpen={openLogin} setIsOpen={setOpenLogin}/>
            <div className="fixed w-full z-20 bg-gray-100 p-4 flex items-center justify-between border-b-2">
            {/* <img src="public/images/logo.png" className="w-12 h-auto"/> */}
                <div className="flex-1"> 
                    <ButtonIcon icon={SiNextbilliondotai} onClick={()=> navigate("/")}/>
                </div>
                <div className="flex-1">
                    <SearchInput 
                        searchText={searchText} 
                        setSearchText={setSearchtext}
                        icon={<GoSearch size={24}/>}
                    />
                </div> 
                <div className="flex-1 flex lg:gap-4 gap-1 justify-end items-center">
                    <ButtonIcon icon={IoNotificationsOutline}>
                        <div className="absolute -top-2 -right-2 bg-red-600 w-5 h-5 rounded-full text-white flex justify-center items-center"> 1</div>
                    </ButtonIcon>
                    <ButtonIcon icon={BiUser} label="Log In" onClick={() => setOpenLogin(!openLogin)}/>
                    <ButtonIcon icon={PiShoppingCartSimpleBold} onClick={()=> navigate("/cart")}> 
                        <div className="absolute -top-2 -right-2 bg-red-600 w-5 h-5 rounded-full text-white flex justify-center items-center"> 1</div>
                    </ButtonIcon> 
                </div>
            </div>
        </>
    )
}


export default Navbar;