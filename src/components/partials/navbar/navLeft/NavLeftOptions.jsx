import React from 'react'

const NavLeftOptions = ({opts}) => {
  return (
    <>
    {
      opts && opts.map((opt,i)=>(
        <h4 key={i} className='px-4 py-6 font-medium opacity-80 text-md group cursor-pointer hover:bg-sky-100 hover:text-sky-500 duration-150 '>{opt} <i className="fa-solid fa-caret-down group-hover:rotate-180 duration-300 ml-2 text-sm"></i></h4>

      ))
    }
    </>
  )
}

export default NavLeftOptions