 
import Box from "../../conponents/Box";
import Button from "../../conponents/buttons/Button";
import BarChart from "../../conponents/charts/BarChart";
import LineChart from "../../conponents/charts/LineChart";
import PieChart from "../../conponents/charts/PieChart";
import SellerContainer from "../../conponents/containers/SellerContainer";

const listSaller = [
    { title: "Sold", value: 10 },
    { title: "Pending", value: 25 },
    { title: "Return", value: 12 },
    { title: "Picked", value: 90 },
]

interface SummariesProps{

}

const Summaries:React.FC<SummariesProps> = () =>{ 
    return( 
        <SellerContainer>
            <div className="grid grid-row-3 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full border-b-[1px]">
                    <div className=" border-r-[1px] py-4 px-8">
                        <p className="p-4 pt-0 text-lg font-medium">Recent Customers</p>
                        <div className="flex bg-gray-300 w-fit px-4 py-2 rounded-xl gap-4 justify-center items-center">
                            <img className="w-12 h-12" src="/public/images/Test.jpg" />
                            <p>Name - $100</p> 
                        </div> 
                    </div>
                    <div className="border-r-[1px] py-4 px-8">
                        <p className="p-4 pt-0 text-lg font-medium">Weekly Sales</p>
                        <div className="flex justify-between">
                            <div className="text-gray-500">
                                <p>Mon 06 - Sat 12</p>
                                <p className="text-black text-2xl font-bold">$12.0</p>
                                <p>Increase 14%</p>
                            </div> 
                            <div>
                                <BarChart/>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 px-8">
                        <p className="p-4 pt-0 text-lg font-medium">Store Overview</p>
                        <div className="text-gray-500 grid gap-2">
                            <p>Total products: 14</p>
                            <p>Restore: 1</p>
                            <p>Delete: 5</p>
                            <div className="flex gap-5">
                                <Button outline={true}>Create new product</Button>
                                <Button outline={true}>Watching</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex p-4 gap-8">
                    <Box className="bg-[#5046a5] grid justify-start">
                        <p className="text-xl">Today Order:</p>
                        <p className="text-yellow-500">Mon 28th Now 2023</p>
                        <p className="text-3xl">$140.00</p>
                        <div className="flex gap-10 border-t-[1px] pt-4 px-4">
                            { listSaller.map((item, index) => 
                                <div key={index}>
                                    <p className="text-gray-400">{item.title}</p>
                                    <p>{item.value}</p>
                                </div>
                            ) }
                        </div>
                    </Box>
                    <div>
                        <PieChart/>
                    </div>
                    <Box className="bg-[#29d7f0] flex gap-8 justify-start items-start">
                        <p className="text-black text-xl">New Return:</p>
                        <div className="flex gap-20 p-6 text-black border-t-[1px]">
                            <div>
                                <p  className="text-gray-500">Return: </p>
                                <p className="text-3xl font-bold">102</p>
                                <p>+1%</p>
                            </div>
                            <div>
                                <p className="text-gray-500">New: </p>
                                <p className="text-3xl font-bold">102</p>
                                <p>+2%</p>
                            </div>
                        </div>
                    </Box>
                </div>
                <div className="w-full flex flex-wrap p-4 gap-8 justify-between">
                    <div className="w-[48%]">
                        <LineChart/>
                    </div>
                    <div className="w-[48%]"> 
                        <BarChart/>
                    </div>
                </div>
            </div> 
        </SellerContainer>
    )

}

export default Summaries;