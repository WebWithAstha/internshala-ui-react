import React from 'react'
import { Link } from 'react-router-dom';
import NavLogo from './navLeft/NavLogo';
import NavLeftOptions from './navLeft/NavLeftOptions';
import AuthBtns from './navRight/AuthBtns';

const Nav = ({keepLeft,authBtns}) => {
    return (
        <div className='flex px-36 sticky top-0 z-[99] bg-white items-center justify-between text-zinc-800 shadow-md'>
            <div className="lft-nav flex items-center gap-2">
                <NavLogo />
                {keepLeft && <NavLeftOptions />}
            </div>
            <div className="rgt-nav flex items-center gap-4">
                {authBtns && <AuthBtns />}
            </div>
        </div>
    )
}

export default Nav