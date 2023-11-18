import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="bg-gray-100 py-10 my-10">
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;