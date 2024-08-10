import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../../../utils/axios'

    
const ManageAccount = ({userType}) => {

    const manageAcc = useRef(null)

    const handleShowMore = (e) => {
        manageAcc.current.classList.toggle('hidden')
        manageAcc.current.classList.toggle('block')
    }

    return (
        <div className='w-full relative z-[0] font-medium text-[15px] group/mAcc duration-150  px-5 pt-1'>
            <div onClick={e => handleShowMore(e)} className="w-full flex justify-between items-center">
                <span className=' group-hover/mAcc:text-sky-500'>Manage Account</span>
                <i className="fa-solid fa-caret-down group-hover/mAcc:rotate-180 group-hover/mAcc:text-sky-500 duration-150 ml-2 text-sm"></i>
            </div>
            <div ref={manageAcc} className="relative hidden z-[9] pt-[.5vw] w-full bg-white right-0 top-full">
                {userType==='employee' &&
                <h4 className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-3 py-2'>Edit Profile</h4>
                }
                <Link to="/login/update-password" state={{userType}}>
                <h4 className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-3 py-2'>Change Password</h4>
                </Link>
                {userType==='student' &&
                <h4 className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-3 py-2'>Change Email Address</h4>
                }
                <h4 className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-3 py-2'>Delete My Account</h4>
            </div>
        </div>
    )
}
const ShowMore = () => {

    const moreBar = useRef(null)
    const navigate = useNavigate()

    const handleShowMore = (e) => {
        moreBar.current.classList.toggle('hidden')
        moreBar.current.classList.toggle('block')
    }

    const handleLogOut = async()=>{
        try {
            await axios.post('/student/signout')
            navigate('/')
        } catch (error) {
             console.log(error)           
        }
    }

    return (
        <div className='w-full relative z-[0] font-medium text-[15px] group/more duration-150  px-5 py-2'>
            <div onClick={e => handleShowMore(e)} className="w-full flex justify-between items-center">
                <span className=' group-hover/more:text-sky-500'>More</span>
                <i className="fa-solid fa-caret-down group-hover/more:rotate-180 group-hover/more:text-sky-500 duration-150 ml-2 text-sm"></i>
            </div>
            <div ref={moreBar} className="relative hidden z-[9] py-[.5vw] w-full bg-white right-0 top-full">
                <ManageAccount userType={"student"}/>
                <h4 onClick={handleLogOut} className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-3 pt-2'>Logout</h4>
            </div>
        </div>
    )
}

const ProfileOptsTop =({name,email})=>{
    return(
        <>
        <div className="px-5 py-4">
                <h1 className='leading-none'>{name}</h1>
                <p className='text-sm font-normal'>{email}</p>
            </div>
            <div className="flex justify-between border border-l-0 border-r-0 px-[1.6vw] py-4 text-sm">
                <span><i className="fa-solid fa-star text-yellow-300"></i> 4</span>
                <p>Know more</p>


            </div>
        </>
    )
}
const ProfileOptsBtmStudent =()=>{
    return(
        <>
        <div className="pb-1">
                <h4 className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-5 py-2'>Home</h4>
                <h4 className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-5 py-2'>My Applications</h4>
                <h4 className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-5 py-2'>My Bookmarks</h4>
                <Link to='/student/resume' ><h4 className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-5 py-2'>Edit Resume</h4></Link>
                <h4 className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-5 py-2'>Edit Preferences</h4>
                <h4 className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-5 py-2'>Safety Tips</h4>
                <h4 className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-5 py-2'>Help Center</h4>
                <ShowMore />

            </div>
        </>
    )
}
const ProfileOptsBtmEmp =()=>{
    const navigate = useNavigate()
    const handleLogOut = async()=>{
        try {
            await axios.post('/employee/signout')
            navigate('/')
        } catch (error) {
             console.log(error)           
        }
    }
    return(
        <>
        <div className="pb-1">
                <h4 className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-5 py-2'>Help Center</h4>
                <h4 className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-5 py-2'>Biling</h4>
                <ManageAccount userType={"employee"} />
                <h4 onClick={handleLogOut} className='w-full hover:text-sky-500 font-medium text-[15px] duration-150 opacity-95 px-5 py-2'>Logout</h4>
            </div>
        </>
    )
}

const ProfileOpts = ({name,email}) => {


    return (
        <div className="absolute w-64 shadow-xl hidden group-hover/profile:opacity-100 group-hover/profile:block min-h-40 bg-white top-full right-0 ">
            <ProfileOptsTop name={name} email={email}/>
            <ProfileOptsBtmEmp/>
            {/* <ProfileOptsBtmStudent/> */}
            
        </div>
    )
}

const ActionIcons = ({name,email,img }) => {
    return (
        <>
            <div className="flex items-center gap-[2vw]">
                <i className="text-xl opacity-80 fa-regular fa-bell"></i>
                <i className="text-lg opacity-80 fa-regular fa-message"></i>
                <div className='px-4 relative py-6 flex items-center font-medium text-md group/profile cursor-pointer hover:bg-sky-100'>
                    <div className="w-10 h-10 border rounded-full flex items-center justify-center uppercase  cursor-pointer group-hover/profile:border-sky-500 group-hover/profile:text-sky-500 border-zinc-500/[.6] text-sm">
                    {
                        img ? 
                        <img className='w-full h-full object-cover rounded-full' src={img} alt="Profile Pic" />
                        : name.slice(0,1)
                    }
                    
                    </div>
                    <i className="fa-solid fa-caret-down group-hover/profile:rotate-180 group-hover/profile:text-sky-500 duration-150 ml-2 text-sm"></i>
                    <ProfileOpts email={email} name={name} />
                </div>
            </div>

        </>
    )
}

export default ActionIcons