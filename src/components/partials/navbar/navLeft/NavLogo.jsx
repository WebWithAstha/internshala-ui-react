import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../../assets/internshalaLogo.png";


const NavLogo = () => {
  return (
    <Link to="/">
                <div className="logo mr-4 my-2">
                    <img className='h-12' src={logo} alt="" />
                </div>
                </Link>
  )
}

export default NavLogo