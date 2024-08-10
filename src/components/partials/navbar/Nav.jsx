import React from 'react'
import { Link } from 'react-router-dom';
import NavLogo from './navLeft/NavLogo';
import NavLeftOptions from './navLeft/NavLeftOptions';
import AuthBtns from './navRight/AuthBtns';
import ActionIcons from './navRight/ActionIcons';

const Nav = ({optionsALeft,authBtns,keepactions,optionsAtRight,opts,employeeNav, name,email,img}) => {
    return (
        <div className='flex w-full shrink-0 px-[10vw] sticky top-0 z-[99] bg-white items-center justify-between text-zinc-800 shadow-md'>
            <div className="lft-nav flex shrink-0 items-center gap-2">
                <NavLogo />
                {optionsALeft && <NavLeftOptions />}
            </div>
            <div className="rgt-nav flex items-center gap-4">
                {optionsAtRight && <NavLeftOptions opts={opts} />}
                {keepactions && <ActionIcons name={name} email={email} img={img} />}
                {employeeNav && <ActionIcons name={name} email={email} img={img} />}

                {authBtns && <AuthBtns />}
            </div>
        </div>
    )
}

export default Nav