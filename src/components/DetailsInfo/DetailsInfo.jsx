import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsInfo = () => {
    const [product, setProduct] = useState([]);
    const singleData = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/product/${singleData.id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[singleData])
    return (
        <div className="flex items-center justify-evenly bg-gray-100 px-4 rounded-lg">
            <div>
                <img className="w-full" src={product.photo} alt="" />
            </div>
            <div className="">
                <h2 className="text-xl font-semibold mb-1"><span className="font-bold mr-2">Name:</span>{product.name}</h2>
                <p><span className="font-bold text-xl mr-2">Chef:</span>{product.chef}</p>
                <p><span className="font-bold text-xl mr-2">Price:</span>{product.price}</p>
            </div>
        </div>
    );
};

export default DetailsInfo;