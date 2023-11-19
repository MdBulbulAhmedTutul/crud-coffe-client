import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/cups/logo.png';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const handleLogOut = () => {
        logOutUser()
        .then()
        .catch()
    }
    const navItem = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li className="ml-2"><NavLink to="/addproduct">Add Product</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to="/">
                    <img className="w-[80px]" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                    <img className="w-[50px] rounded-full mr-2" src={user.photoURL} alt="" />
                    :
                    []
                }
                {
                    user ?
                        <button onClick={handleLogOut} className='bg-[#E3B577] px-6 py-2 rounded-lg
                         font-bold text-black'>Log Out</button>
                        :
                        <Link to="/login">
                            <button className='bg-[#E3B577] px-6 py-2 
                            rounded-lg font-bold text-black'>Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;