
interface BrandProps{}

const Brand:React.FC<BrandProps> = () => {

    return (
        <div className="border-[1px] shadow-md rounded-xl p-4 grid gap-2">
            <div className="flex font-bold justify-start items-center gap-2">
                <img className="w-12 h-12 border-2 rounded-full" src="public/images/logo.png" />
                <p>Nike</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <img className="bg-gray-200 object-contain w-full max-h-[200px] border-[1px] rounded-lg" src="public/images/sneaker.png"/>
                <img className="bg-gray-200 object-contain w-full max-h-[200px] border-[1px] rounded-lg" src="public/images/sneaker.png"/>
                <img className="bg-gray-200 object-contain w-full max-h-[200px] border-[1px] rounded-lg" src="public/images/sneaker.png"/>
                <img className="bg-gray-200 object-contain w-full max-h-[200px] border-[1px] rounded-lg" src="public/images/sneaker.png"/> 
            </div>
        </div>
    )
}

export default Brand;