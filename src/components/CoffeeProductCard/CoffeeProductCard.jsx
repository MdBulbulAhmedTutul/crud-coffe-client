import { MdDelete } from "react-icons/md";
import { MdOutlineSecurityUpdate } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const CoffeeProductCard = ({ product }) => {

    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { _id, name, photo, chef, price } = product;
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/product/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="flex items-center justify-between bg-[#F5F4F1] rounded-lg">
            <div>
                <img src={photo} alt="show_img" />
            </div>
            <div>
                <h2><span className="font-semibold">Name:</span> {name}</h2>
                <p><span className="font-semibold">Chef:</span> {chef}</p>
                <p><span className="font-semibold">Price:</span> {price}</p>
            </div>
            <div className="mr-7">
                <button data-tip="Delete" onClick={() => handleDelete(_id)} className="w-10 h-10 tooltip text-white bg-[#E3B577] rounded-md mb-2">
                    <MdDelete className=" text-2xl ml-2"></MdDelete>
                </button>
                <br />
                <Link to={`/updatecoffee/${_id}`}>
                    <button data-tip="Update" className="w-10 h-10 tooltip text-white bg-black rounded-md mb-2">
                        <MdOutlineSecurityUpdate className="text-center text-2xl ml-2"></MdOutlineSecurityUpdate>
                    </button>
                </Link>
                <br />
                <button data-tip="Details" className="w-10 h-10 tooltip text-white bg-red-600 rounded-md">
                    <FiEye className="text-center text-2xl ml-2"></FiEye>
                </button>
            </div>
        </div>
    );
};

export default CoffeeProductCard;