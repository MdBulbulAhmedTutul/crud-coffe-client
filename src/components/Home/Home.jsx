import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CoffeeProduct from "../CoffeeProduct/CoffeeProduct";
import OrderProduct from "../OrderProduct/OrderProduct";

const Home = () => {
    return (
        <div>
            <div className="">
                <Banner></Banner>
            </div>
            <div className="bg-gray-100 py-10 my-10">
                <Category></Category>
            </div>
            <div className="max-w-7xl mx-auto px-4 my-16">
                <h2 className="text-3xl font-bold text-center mb-10">Crud Oparetion</h2>
                <CoffeeProduct></CoffeeProduct>
            </div>
            <div className="max-w-7xl mx-auto px-4 my-16">
                <h2 className="text-3xl font-bold mb-6 text-center">Order Now</h2>
                <OrderProduct></OrderProduct>
            </div>
        </div>
    );
};

export default Home;