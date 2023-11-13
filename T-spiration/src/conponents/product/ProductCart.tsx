
interface ProductCartProps{

}

const ProductCart:React.FC<ProductCartProps>  = ({

}) => {
    return (
        <div className="grid gap-2">
            <hr/>
            <div className="grid grid-cols-5 justify-center items-center gap-5">
                <img className="py-5 bg-gray-200 rounded-xl" src="/public/images/grey_eyeglasses.png"/>
                <p>Name Product</p>
                <p>$200</p>
                <button>Add to cart</button>
                <p>$750</p>
            </div>
        </div>
    )
}

export default ProductCart;