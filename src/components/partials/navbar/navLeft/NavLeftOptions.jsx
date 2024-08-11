import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLeftOptions = ({opts}) => {
  return (
    <>
    {
      opts && opts.map((opt,i)=>(
        Object.entries(opt).map(([key,val])=>(
          <NavLink to={val}><h4 key={i} className='px-4 py-6 font-medium opacity-80 text-md group cursor-pointer hover:bg-sky-100 hover:text-sky-500 duration-150 '>{key} <i className="fa-solid fa-caret-down group-hover:rotate-180 duration-300 ml-2 text-sm"></i></h4></NavLink>
        ))
      ))
    }
    </>
  )
}

export default NavLeftOptions