import { useEffect, useState } from "react";
import CoffeeProductCard from "../CoffeeProductCard/CoffeeProductCard";

const CoffeeProduct = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                products.map(product => 
                <CoffeeProductCard key={product._id} 
                product={product}></CoffeeProductCard>)
            }
        </div>
    );
};

export default CoffeeProduct;