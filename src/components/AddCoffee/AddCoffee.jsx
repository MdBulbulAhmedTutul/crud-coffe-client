const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const newProduct = {
            name,
            chef,
            price,
            photo,
        }
        console.log(newProduct)
    }
    return (
        <div className="bg-gray-100 p-10 max-w-5xl mx-auto my-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">Add To New Products</h2>
            <form onSubmit={handleAddCoffee}>
                <div className="flex items-center flex-col md:flex-row lg:space-x-3">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name="chef" placeholder="Chef" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex items-center flex-col md:flex-row lg:space-x-3">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo" className="input input-bordered" required />
                    </div>
                </div>
                <input className="bg-[#E3B577] px-6 py-2 rounded-lg font-bold mt-4 text-black w-full cursor-pointer" type="submit" value="Add Now"/>
            </form>
        </div>
    );
};

export default AddCoffee;