import { Link } from 'react-router-dom';
import footerLogo from '../../assets/images/more/logo1.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";




const Footer = () => {
    return (
        <div className='bg-gray-100'>
            <div className='max-w-7xl mx-auto px-4 flex items-center justify-between lg:space-x-6 flex-col md:flex-row py-6'>
                <div className='w-full'>
                    <img className='w-[80px]' src={footerLogo} alt="" />
                    <h2 className='text-2xl font-semibold mb-2'>Espresso Emporium</h2>
                    <p>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                    <div className='flex items-center my-4'>
                        <Link><FaFacebookSquare className='text-2xl'></FaFacebookSquare></Link>
                        <Link><FaTwitter className='text-2xl ml-3'></FaTwitter></Link>
                        <Link><FaSquareInstagram className='text-2xl ml-3'></FaSquareInstagram></Link>
                        <Link><BsLinkedin className='text-2xl ml-3'></BsLinkedin></Link>
                    </div>
                    <h2 className='text-2xl font-semibold my-3'>Get in Touch</h2>
                    <p className='flex items-center mb-2'><FaPhone className='text-xl'></FaPhone><span className='font-semibold ml-2'>+88 01533 333 333</span></p>
                    <p className='flex items-center mb-2'><MdEmail className='text-xl'></MdEmail><span className='font-semibold ml-2'>info@gmail.com</span></p>
                    <p className='flex items-center mb-2'><FaMapMarkerAlt className='text-xl'></FaMapMarkerAlt><span className='font-semibold ml-2'>72, Wall street, King Road, Dhaka</span></p>
                </div>
                <div className=' w-full md:mt-6'>
                    <h2 className='text-2xl font-bold mb-2'>Contact Us</h2>
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Massage</span>
                            </label>
                            <input type="text" placeholder="Massage" className=" h-[100px] input input-bordered" required />
                        </div>
                        <input type="submit" value="Send massage" className='border-2 border-black px-4 py-2 rounded-3xl text-black font-semibold hover:bg-black hover:text-white my-4' />
                    </form>
                </div>
            </div>
            <div className='bg-black px-4 py-6 text-white text-center'>
                <p>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;