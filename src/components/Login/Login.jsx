import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/login/login.svg';
import { FaGooglePlusG } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);
    // auth redirect
    const location = useLocation();
    const navigate = useNavigate();
    // console.log('location in the login page', location);


    const handleLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire("Login Successfull");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                Swal.fire("Login Successfull");
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='flex items-center flex-col md:flex-row max-w-7xl mx-auto bg-gray-100 p-10 my-16'>
            <div className='w-full'>
                <img className='w-full h-[500px]' src={loginImage} alt="" />
            </div>
            <div className='w-full'>
                <h2 className='text-3xl font-semibold mb-4 text-center'>Please Login Now</h2>
                <form onSubmit={handleLoginForm}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                    </div>
                    <input className="bg-[#E3B577] px-6 py-2 rounded-lg font-bold mt-4 text-black w-full cursor-pointer" type="submit" value="Login Now" />
                </form>
                <button onClick={handleGoogleLogin} className="bg-[#E3B577] flex items-center justify-center px-6 py-2 rounded-lg font-bold mt-4 text-black w-full">Login with Google<FaGooglePlusG className='text-2xl ml-2'></FaGooglePlusG></button>
                <p className='text-center font-bold my-3'>Dont have an account <Link className='text-[#ff3438] text-xl' to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;