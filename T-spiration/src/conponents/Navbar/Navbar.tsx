import SearchInput from "../inputs/SearchInput";
import { useState } from 'react';
import { GoSearch } from 'react-icons/go'
import { BiUser } from 'react-icons/bi';
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { SiNextbilliondotai } from 'react-icons/si'
import ButtonIcon from "../buttons/ButtonIcon"; 
import LoginModal from "../modals/LoginModal";
import { useLocation, useNavigate } from "react-router-dom"; 
import Notification from "../notifications/Notification";
import Button from "../buttons/Button";
interface NavbarProps {}

const listMenu = [
    {name: 'New In', path:"/user"}, 
    {name: 'Eyewear', path:"/user/shopping"}, 
    {name: "SunGlasses", path: "/user/contact"}, 
    {name: "", path: "/user/history"}
]

const Navbar: React.FunctionComponent<NavbarProps> = () => {
    const [searchText, setSearchtext] = useState<string>(""); 
    const [openLogin, setOpenLogin] = useState<boolean>(false); 
    const [openNoti , setOpenNoti] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<string>(listMenu[0].path);
    const navigate = useNavigate(); 
    return (
        <> 
            <LoginModal isOpen={openLogin} setIsOpen={setOpenLogin}/>
            <div className="fixed w-full z-20 bg-white p-3 flex justify-center border-b-2">
                <div className="flex-1 flex justify-start gap-5 items-center"> 
                    <ButtonIcon icon={SiNextbilliondotai} onClick={()=> navigate("/user")}/>
                    {
                        listMenu.map((item, index) => 
                            <Button 
                                onClick={()=> {
                                    navigate(item.path)
                                    setCurrentPage(item.path);
                                }} 
                                key={index} 
                                outline={currentPage === item.path ? true : false}
                                color={false}
                            >
                                {item.name}
                            </Button>    
                        )
                    }
                </div> 
                <div className="flex-1 w-full justify-end items-end">  
                    <div className="flex gap-5 justify-end"> 
                        <ButtonIcon onClick={()=>setOpenNoti(prev => !prev)} icon={IoNotificationsOutline}> 
                        {
                            openNoti 
                                ? <Notification/>
                                : null
                        }
                            <div className="absolute -top-1 -right-1 bg-blue-500 w-4 h-4 rounded-full text-white flex justify-center items-center"></div>
                        </ButtonIcon>
                        <ButtonIcon icon={BiUser} label="Log In" onClick={() => setOpenLogin(!openLogin)}/>
                        <ButtonIcon icon={PiShoppingCartSimpleBold} onClick={() => navigate('/user/cart')} label="2 items"/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar;