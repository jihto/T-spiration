import Container from "../conponents/containers/Container"
import Catecories from "../conponents/categories/Categories";
import Products from "../conponents/product/Products";
import SearchInput from "../conponents/inputs/SearchInput";
import {useState } from 'react';
import { GoSearch } from "react-icons/go";

interface ShoppingProps{

}

const Shopping: React.FC<ShoppingProps> = ({

}) => {
    const [text, setText] = useState<string>();
    return (
        <Container>
            <div className="grid gap-2"> 
                <div className="grid my-3 grid-cols-3 justify-start">
                    <p className="text-3xl font-medium">Products</p>
                    <div></div>
                    <SearchInput searchText="" setSearchText={setText} icon={<GoSearch size={24}/>}/>
                </div>
                <Catecories /> 
                <Products/>
            </div>
        </Container>
    )
}

export default Shopping;