import { useEffect, useState } from "react";
import CategoryCard from "../categoryCard/CategoryCard";

const Category = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategorys(data))
    },[])
    return (
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                categorys.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
            }
        </div>
    );
};

export default Category;