 
import Button from '../../conponents/buttons/Button';
import Catecories from '../../conponents/categories/Categories';
import AdminContainer from '../../conponents/containers/SellerContainer'; 
import SearchInput from '../../conponents/inputs/SearchInput';
import TextInput from '../../conponents/inputs/TextInput';
import SellerProducts from '../../conponents/product/SellerProducts';
import {useState} from 'react';
interface SellerHomeProps{
}
const listInformation = [
    {name: "Product", number: 10000},
    {name: "Product", number: 10000},
    {name: "Product", number: 10000},
    {name: "Product", number: 10000},
]

const SellerHome:React.FC<SellerHomeProps> = () =>{
    const [text, setText] = useState<string>("Hello");
    const [showCreate, setShowCreate] = useState<boolean>(false);
    return( 
        <AdminContainer>
            <div className={`fixed grid ${showCreate ? 'grid-cols-[65%,34%]' : ""} gap-2`}>
                <div className='m-1'>
                    <div className='bg-[#5046a5] flex gap-5 text-white pt-5 rounded-t-xl px-4'>
                        {
                            listInformation.map((item, index) => (
                                <div key={index} className='relative px-5 my-10 after:absolute after:-right-3 after:top-0 after:w-px after:h-full after:bg-white after:rounded-lg'>
                                    <p className='text-sm'>{item.name}</p>
                                    <p className='text-2xl font-medium'>{item.number}</p>
                                </div> 
                            ))
                        } 
                    </div> 
                    <div className='grid grid-cols-2 m-5 justify-items-end'>
                        <SearchInput searchText='' setSearchText={setText}/>
                        <Button onClick={()=>setShowCreate(!showCreate)} outline={true}>Create product</Button>
                    </div>
                    <Catecories/>
                    <div className=' rounded-b-xl pb-5 px-4 overflow-y-scroll h-3/5'>
                        <SellerProducts/>
                    </div>
                </div>
                {
                    showCreate
                        ?<div className='px-4 py-8 rounded-md bg-white shadow-inner border-l-[1px]'>
                            <p className='text-2xl font-medium'> Create Product</p>
                            <form className='grid gap-10 py-10'>
                                <img className='rounded-lg bg-gray-100' src="/public/images/grey_eyeglasses.png"/>
                                <TextInput text={text} setText={setText} title='Name'/>
                                <TextInput text={text} setText={setText} title='Price'/>
                                <TextInput text={text} setText={setText} title='Description'/>
                                <Button>Submit</Button>
                            </form>
                        </div>
                        : null
                }
                
            </div>
        </AdminContainer> 
    )

}

export default SellerHome;