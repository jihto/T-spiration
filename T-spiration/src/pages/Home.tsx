import Container from "../conponents/Container";
import Outstanding from "../conponents/Outstanding";
import ButtonIcon from "../conponents/buttons/ButtonIcon"; 
import { MdNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';  
import Products from "../conponents/product/Products";
import Catecories from "../conponents/categories/Categories";
import React,{ useRef } from 'react'


interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => { 
    const scrollRef = useRef<HTMLDivElement>(null); 
    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 500;
        }
    };
    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 500;
        }
    };  
    return ( 
        <Container>  
            <div className="lg:grid-cols-2 grid gap-5 mt-20">
                <Outstanding header=" Air Jordan 6GX eastside" content="Feel unbeatable from the tee box to the final putt in a design that's pure early MJ.speed class"/>
                <div className="flex gap-5 flex-1">
                    <Outstanding header=" Air Jordan 6GX eastside" content={<><p>"Feel unbeatable from the tee box to "</p><p>"the final putt in a design"</p></>} size="small"/> 
                    <Outstanding header=" Air Jordan 6GX eastside" content="Feel unbeatable from the tee box to the final putt in a design" size="small"/> 
                </div>
            
            </div>

            <div className="bg-gray-100 w-full rounded-xl my-5 p-4 ">
                <div className="flex justify-between">
                    <p className="text-xl font-bold ">
                        Today Best Deals!
                    </p>
                    <p className="bg-orange-600 py-1 px-3 rounded-full text-white">
                        End in: 12: 00 : 00
                    </p>
                </div>
                <div className="relative"> 
                    <div className="overflow-x-hidden flex gap-4 scroll-smooth"  ref={scrollRef}>
                        <Products/>
                    </div>
                    <div className="absolute top-1/3 right-0 lg:-right-9 drop-shadow-x">
                        <ButtonIcon icon={MdNavigateNext} onClick={handleScrollRight}/>
                    </div>
                    <div className="absolute top-1/3 left-0 lg:-left-9 drop-shadow-xl">
                        <ButtonIcon icon={MdOutlineNavigateBefore} onClick={handleScrollLeft}/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center">
                <p className="text-5xl">Shop Now, Goodlook Later!!</p>
                <p className="text-xl text-gray-500">We have a bunch collection for you!, let's go expolore and find your dream shoes, make it happen.</p>
                {/* <div className="rounded-full border-2 w-1/2 py-2 px-4 border-spacing-1 relative flex justify-between">
                    <ButtonIcon size="medium" label="Price" icon={IoIosArrowDown}/> */}
                    <Catecories/>
                {/* </div> */}
            </div>

            <Products/>
        </Container> 
    )
}

export default Home;