import React from 'react'
import Nav from '../partials/Nav'

const Login = () => {
  return (
    <div className='w-full min-h-screen relative'>
        <Nav/>
        <div className="img relative w-full h-screen bg-[#f9fdff] pt-20">
          <div className="top relative z-10  px-40">

            <h1 className='font-bold text-6xl'>Hire Interns & Freshers <img className='inline-block h-16 -ml-6 -mt-2' src="https://internshala.com/static/images/registration/employer/registration_new/images/banner/faster.svg" alt="" /> </h1>
            <p className='text-3xl mt-3 font-medium'>Post Internships for Free & Hire Talent with up to 2 Years of Experience</p>
          </div>
            <img className='w-[70vw] absolute top-0' src="https://internshala.com/static/images/registration/employer/registration_new/images/banner/r767_banner_new.png" alt="" />
        </div>
    </div>
  )
}

export default Login