// eslint-disable-next-line react/prop-types
const OrderProductCard = ({ product }) => {
    // eslint-disable-next-line react/prop-types
    const { imge, title, price, description } = product;
    return (
        <div className="bg-white shadow-xl p-6 rounded-lg border-t-8 border-gray-200">
            <img src={imge} alt="show_image" />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <div className="rating mt-2">
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
            </div>
            <br />
            <button className='bg-[#E3B577] px-6 py-2 mt-2 rounded-lg font-bold text-black'>Order Now</button>
        </div>
    );
};

export default OrderProductCard;