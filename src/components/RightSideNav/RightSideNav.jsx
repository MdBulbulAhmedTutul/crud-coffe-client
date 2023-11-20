import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RightSideNav = () => {
    const [product, setProduct] = useState([]);
    const singleData = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/product/${singleData.id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [singleData])
    return (
        <div className="bg-gray-100 rounded-lg py-3">
            <div className="flex items-center justify-between">
                <img className="h-[190px]" src={product.photo} alt="" />
                <img className="h-[190px]" src={product.photo} alt="" />
            </div>
            <button className="w-full bg-[#ff3438] px-4 py-2 rounded-lg text-white font-bold">Order Now</button>
        </div>
    );
};

export default RightSideNav;