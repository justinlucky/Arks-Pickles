import { Link } from "react-router-dom"


const EmptyCart = () => {
    return (
        <div className="bg-gray-100 p-[10px] py-20 flex justify-center items-center flex-col">
            <h1 className="text-5xl text-bold">Ooh No!!</h1>
            <h1 className="text-4xl text-bold mt-5">Your Cart is Empty</h1>
            <div className="bg-secondary rounded-full h-[250px] w-[250px] mt-5">
                <div className="bg-emptyCart h-[500px] w-[300px] bg-content bg-no-repeat bg-center">

                </div>
                <div className="flex justify-center items-center">
                    <Link to="/products" className="bg-secondary text-white px-5 py-3 rounded-lg">Shop Now</Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart