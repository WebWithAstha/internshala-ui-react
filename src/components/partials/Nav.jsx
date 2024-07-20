import React from 'react'
import logo from "../../assets/internshalaLogo.png";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='flex px-40 sticky top-0 z-[99] bg-white items-center justify-between text-zinc-800 shadow-md'>
            <div className="lft-nav flex items-center gap-2">
                <Link to="/">
                <div className="logo mr-4 -mt-2">
                    <img className='h-12' src={logo} alt="" />
                </div>
                </Link>
                <h4 className='px-4 py-6 font-medium text-lg group cursor-pointer hover:bg-sky-100'>Internships <i class="fa-solid fa-caret-down group-hover:rotate-180 duration-300 ml-2 text-sm"></i></h4>
                <h4 className='px-4 py-6 font-medium text-lg group cursor-pointer hover:bg-sky-100'>Jobs <i class="fa-solid fa-caret-down group-hover:rotate-180 duration-300 ml-2 text-sm"></i></h4>
                <h4 className='px-4 py-6 font-medium text-lg group cursor-pointer hover:bg-sky-100'>Courses <i class="fa-solid fa-caret-down group-hover:rotate-180 duration-300 ml-2 text-sm"></i></h4>
            </div>
            <div className="rgt-nav flex items-center gap-4">
            <h4 className='mr-4 cursor-pointer'><i class="fa-solid fa-magnifying-glass text-xl mr-2"></i> <span className='font-medium'>Search</span></h4>
            <Link to="/login">
            <button className='border-2 border-sky-400 hover:bg-sky-100 hover:border-transparent duration-300 px-6 py-1.5 rounded text-sky-400 font-bold'>Login</button>
            </Link>
            <Link to="/register/student">
            <button className='px-6 bg-sky-500 hover:bg-sky-400 duration-300 font-bold text-white py-[.5rem] rounded'>Candidate Sign-Up</button>
            </Link>
            <Link to="/hire-talent">
            <button className='px-6 bg-sky-500 hover:bg-sky-400 duration-300 font-bold text-white py-[.5rem] rounded'>Employer Sign-Up</button>
            </Link>
            </div>
        </div>
    )
}

export default Nav