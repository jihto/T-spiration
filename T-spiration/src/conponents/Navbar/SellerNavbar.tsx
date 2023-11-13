import { CiShoppingCart, CiWavePulse1,CiMenuKebab, CiUser, CiRepeat, CiSettings, CiLogout } from 'react-icons/ci';
import ButtonMenu from '../buttons/ButtonMenu';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';

interface SellerNavbarProps{
     
}

export interface menuListsProps{
    name: string;
    icon:IconType;
    path: ListNavbar;
}

const menuLists:menuListsProps[] = [
    {name: 'Products', icon: CiShoppingCart, path:'/admin/home'},
    {name: 'Summaries', icon: CiWavePulse1 , path:'/admin/summaries'},
    {name: 'Account', icon: CiUser, path:'/admin/account'},
    {name: 'Convert', icon: CiRepeat, path:'/admin/convert'},
    {name: 'Settings', icon: CiSettings, path:'/admin/settings'},

]

type ListNavbar = "/admin/home" | "/admin/summaries" | "/admin/account" | "/admin/settings" | '/admin/convert';

const SellerNavbar:React.FC<SellerNavbarProps> = ({
}) => { 
    const navigate:NavigateFunction = useNavigate();
    const [currentPage, setCurrentPage] = useState<ListNavbar>("/admin/home");
    useEffect(()=>{
        const currentURL: any = window.location.href;
        setCurrentPage(currentURL.slice(14))
    },[]); 

    const handleChangeNavbar = (item: menuListsProps) =>{
        setCurrentPage(item.path);
         navigate(`${item.path}`);
    }
    return (
        <div className="flex flex-col w-[12%] justify-between gap-4 rounded-r-xl bg-gray-100 h-full p-4 fixed">
            <div className='grid gap-5'>
                <p className='text-xl font-medium mb-10'>T-Spiration</p>
                <div className=' flex text-white justify-between py-10 px-4 items-center bg-[#5046a5] w-full h-10 rounded-xl'>
                    <p>$12.557</p>
                    <CiMenuKebab size={24}/>
                </div>
                {
                    menuLists.map((item:menuListsProps,index: number) => 
                        <ButtonMenu 
                            active={ currentPage.includes(item.path)} key={index} label={item.name} 
                            icon={item.icon} 
                            onClick={()=> {
                                setCurrentPage(item.path);
                                navigate(`${item.path}`);
                            }}/>
                        )
                }
                </div>
            <div className='mt-[10%]'>
                <ButtonMenu icon={CiLogout} onClick={()=> navigate('/login')} label='Logout'></ButtonMenu>
            </div> 
        </div>
    )
}


export default SellerNavbar;