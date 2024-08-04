import React from 'react'
import Nav from './partials/navbar/Nav.jsx'
import Layout from './partials/Layout'
import Show from './partials/Show'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full relative'>

      <Outlet/>

      <div className="w-full bg-[#f1f3ff] py-2 text-center flex items-center justify-center">
        <button className='px-3 bg-[#7a8bfa] hover:bg-sky-400 duration-300 font-medium text-sm mr-3 text-white py-[.3rem] rounded'>Ai resume guide</button>
        <h1 className='font-semibold text-md'>Sign up now to get a free guide on how to boost your resume with AI tools and tips.</h1>
      </div>
      <Nav optionsALeft={true} authBtns={true} />
      <Layout />
      <div className="mt-20"></div>
      <Show title={"internships"} />
      <Show title={"jobs"} />
    </div>

  )
}

export default Home