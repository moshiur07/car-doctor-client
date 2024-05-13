import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { AuthContext } from "../../Auth/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const {user,logout} = useContext(AuthContext)


    const handleLogout = ()=>{
        logout()
        .then(res=>console.log(res.user))
        .catch(error => console.log(error))
    }

 const navlinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/service'>Service</NavLink></li>
    <li><NavLink to='/blog'>Blog</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
    {
        user && <li><NavLink to='/bookings'>MyBookings</NavLink></li>
    }
 </>
    return (
        <div className="navbar bg-base-100 my-2 shadow-lg rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl"> <img src={logo} className="h-[50px] w-[50px]"/> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogout} className="btn btn-outline btn-warning">Logout</button>
                    : <Link to='/login'><p className='btn btn-outline btn-neutral'>Login</p></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;