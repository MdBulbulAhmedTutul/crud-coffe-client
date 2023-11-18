// eslint-disable-next-line react/prop-types
const CategoryCard = ({ category }) => {
    // eslint-disable-next-line react/prop-types
    const { image, title, description } = category;
    return (
        <div className="border-2 border-white rounded-lg px-3 py-4">
            <img src={image} alt="icon_show" />
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default CategoryCard;