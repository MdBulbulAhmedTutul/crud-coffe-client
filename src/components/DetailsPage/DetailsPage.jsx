import DetailsInfo from "../DetailsInfo/DetailsInfo";
import RightSideNav from "../RightSideNav/RightSideNav";

const DetailsPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-7 my-16">
            <div className="col-span-2 border px-4 py-2">
                <DetailsInfo></DetailsInfo>
            </div>
            <div className="border px-4 py-2">
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default DetailsPage;