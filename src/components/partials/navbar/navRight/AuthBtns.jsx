import React from 'react'
import { Link } from 'react-router-dom'

const AuthBtns = () => {
  return (
   <>
   <h4 className='mr-4 cursor-pointer'><i className="fa-solid fa-magnifying-glass text-md mr-2"></i> <span className='font-medium text-md'>Search</span></h4>
            <Link to="/login">
            <button className='border-2 border-sky-400 hover:bg-sky-100 hover:border-transparent text-[15px] duration-300 px-6 py-[.3rem] rounded text-sky-400 font-bold'>Login</button>
            </Link>
            <Link to="/register/student">
            <button className='px-6 bg-sky-500 hover:bg-sky-400 duration-300 text-[15px] font-bold text-white py-[.35rem] rounded'>Candidate Sign-Up</button>
            </Link>
            <Link to="/hire-talent">
            <button className='px-6 bg-sky-500 hover:bg-sky-400 duration-300 text-[15px] font-bold text-white py-[.35rem] rounded'>Employer Sign-Up</button>
            </Link>
   </>
  )
}

export default AuthBtns