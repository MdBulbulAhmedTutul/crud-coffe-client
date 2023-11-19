import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const product = useLoaderData()
    // eslint-disable-next-line no-unused-vars
    const { _id, name, photo, chef, price } = product;

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const updatedProduct = { name, chef, price, photo }
        console.log(updatedProduct)
        // update coffee
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount){
                    Swal.fire("Updated Successfull");
                }
            })
    }

    return (
        <div className="bg-gray-100 p-10 max-w-5xl mx-auto my-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">Update Products</h2>
            <form onSubmit={handleUpdateProduct}>
                <div className="flex items-center flex-col md:flex-row lg:space-x-3">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name="chef" defaultValue={chef} placeholder="Chef" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex items-center flex-col md:flex-row lg:space-x-3">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo" className="input input-bordered" required />
                    </div>
                </div>
                <input className="bg-[#E3B577] px-6 py-2 rounded-lg font-bold mt-4 text-black w-full cursor-pointer" type="submit" value="Update Now" />
            </form>
        </div>
    );
};

export default UpdateCoffee;