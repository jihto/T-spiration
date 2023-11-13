import ButtonIcon from "../buttons/ButtonIcon"; 
import { BiFilterAlt } from 'react-icons/bi';
import { IoCloseOutline, IoAddOutline } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react';
import Button from "../buttons/Button";

const listCategoris = ["All products", "Most purchased", "Basketball", "Running", "Football", "Fun Sneakers"];


interface CatecoriesProps{}
const Catecories: React.FunctionComponent<CatecoriesProps> = ({

}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [catecories, setCategories] = useState<Array<string>>(['Price', 'Time']);
    const [lists, setLists] = useState<Array<string>>(['Type', 'Size', 'Famous', 'Mall']);
    const hanldeAdd: (item: string)=> void = (item: string) => {
        setCategories([...catecories, item])
        setLists(lists.filter(el => el !== item))
    }


    const hanldeRemove: (item: string)=> void = (item: string) => { 
        setCategories(catecories.filter(element => element !== item))
        setLists([...lists,item])
    }
    return ( 
        <div className="relative w-full py-2 px-4 border-spacing-1 grid justify-between grid-flow-col gap-3">
            {listCategoris.map((item:string) => (
                <Button 
                    key={item}  
                    outline={false}   
                    onClick={() => {}}
                    color={false}
                >{item}</Button>
            ))}
            <hr/>
            <ButtonIcon 
                icon={BiFilterAlt} 
                label="Sort by" 
                size="medium"
                outline={true}
                onClick={()=>setIsOpen(!isOpen)}
            />
            {
                isOpen
                    ? <>
                        <div className="absolute top-full right-0 bg-gray-200 shadow-xl w-1/2 lg:w-1/4 h-[200px] z-10 p-2 rounded-3xl">  
                            <div className="after:absolute after:-top-2 after:right-8 after:rotate-45 after:w-5 after:h-5 after:bg-gray-300"></div>
                                <div className="flex gap-2 w-full flex-wrap"> 
                                    {catecories.map((item:string) => (
                                        <ButtonIcon 
                                            key={item} 
                                            label={item} 
                                            size="medium"
                                            icon={IoCloseOutline} 
                                            onClick={()=>hanldeRemove(item)}
                                        />
                                    ))}
                                </div>
                            <div className="w-full h-px my-2 rounded-full bg-gray-400"></div>
                            <div className="flex gap-2 flex-wrap ">
                                {
                                    lists.map((item:string) => (
                                        <ButtonIcon 
                                            key={item} 
                                            label={item} 
                                            size="medium"
                                            icon={IoAddOutline} 
                                            onClick={() => hanldeAdd(item)}
                                        />
                                    ))
                                }
                            </div> 
                        </div>
                    </>
                    : null
            } 
        </div>
    )
}

export default Catecories;