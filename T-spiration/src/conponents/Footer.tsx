import Box from "./Box";
import Container from "./containers/Container";
import Button from "./buttons/Button";
import TextInput from "./inputs/TextInput";
import { useState } from 'react'

interface FooterProps {}

interface ListsProps{
    title: string;
    items: string[];
}

const lists: ListsProps[] = [
    {
        title: "Products",
        items: ["Shoes", "Apparel"]
    },{
        title: "Collections",
        items: ['Nike', 'Adidas', 'Vans',]
    },{
        title:"Legal",
        items:["Privacy Policy", 'Terms and Conditions']
    },{
        title:"Featured",
        items:["New Arrivals", 'Sale', "Start Selling"]
    },{
        title:"Support",
        items:["Contact us", 'Give feedback', "Help center"]
    }
]


const Footer: React.FC<FooterProps> = () =>{
    const [text, setText]= useState<string>('');
    return (
        <div className="w-full bg-black text-primary py-8">
            <Container p_page={false}>
                <div className=" flex justify-between"> 
                    <div className="w-1/2 lg:w-1/3 grid gap-5">
                        <div className="font-bold text-xl">
                            LOGO
                        </div>
                        <div className="text-gray-400 font-bold break-words">
                            Footwear was designed and founded in 2023 by person. The theme is about sneakers ecommerce that use for shoes selling around the word.
                        </div>
                        <Box >
                            <div className="flex justify-between">
                                <p className="text-2xl break-words">Don't Wanna Miss Our Offers</p>
                                <p className="text-gray-400 break-words">Drop your email below , and start receiving the best offer from FoorWear</p>
                            </div>
                            <div className="lg:flex w-full grid gap-5">
                                <TextInput outline={false} text={text} setText={setText} title="Youremail@mail.com" />
                                <Button color="secondary"> Subscribe</Button>
                            </div>
                        </Box>
                    </div>
                    <div className="grid grid-cols-3 text-gray-400 w-1/2 p-4 text-left items-start">
                        {
                            lists.map((item, index) => (
                                <div key={index} className="grid gap-4 mb-10">
                                    <p className="text-white font-bold text-lg">{item.title}</p>
                                    {
                                        item.items.map((subItem, subIndex)=>(
                                            <p key={subIndex}>{subItem}</p>  
                                        ))
                                    }
                                </div>
                            ))
                        } 
                    </div> 
                </div>
            </Container>
        </div>
    )
}


export default Footer;