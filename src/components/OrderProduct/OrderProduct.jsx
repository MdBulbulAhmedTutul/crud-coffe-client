import { useEffect, useState } from "react";
import OrderProductCard from "../OrderProductCard/OrderProductCard";

const OrderProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orderProducts')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                products.map(product => <OrderProductCard key={product._id} product={product}></OrderProductCard>)
            }
        </div>
    );
};

export default OrderProduct;