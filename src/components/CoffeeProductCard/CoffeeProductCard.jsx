import { MdDelete } from "react-icons/md";
import { MdOutlineSecurityUpdate } from "react-icons/md";
import { FiEye } from "react-icons/fi";



// eslint-disable-next-line react/prop-types
const CoffeeProductCard = ({ product }) => {
    console.log(product)
    // eslint-disable-next-line react/prop-types
    const { name, photo, chef, price } = product;
    return (
        <div className="flex items-center justify-between bg-[#F5F4F1] rounded-lg">
            <div>
                <img src={photo} alt="show_img" />
            </div>
            <div>
                <h2><span className="font-semibold">Name:</span> {name}</h2>
                <p><span className="font-semibold">Chef:</span> {chef}</p>
                <p><span className="font-semibold">Price:</span> {price}</p>
            </div>
            <div className="mr-7">
                <div className="w-10 h-10 text-white bg-[#E3B577] rounded-md mb-2">
                    <MdDelete className=" text-2xl ml-2"></MdDelete>
                </div>
                <div className="w-10 h-10 text-white bg-black rounded-md mb-2">
                    <MdOutlineSecurityUpdate className="text-center text-2xl ml-2"></MdOutlineSecurityUpdate>
                </div>
                <div className="w-10 h-10 text-white bg-red-600 rounded-md">
                    <FiEye className="text-center text-2xl ml-2"></FiEye>
                </div>
            </div>
        </div>
    );
};

export default CoffeeProductCard;