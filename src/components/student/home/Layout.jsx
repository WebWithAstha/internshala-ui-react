import React from 'react'

const Layout = ({name}) => {
  return (
    <div className='w-full mb-28'>
      <h1 className='font-bold text-3xl text-center mt-16'>Hi, {name}!✋</h1>
      <h2 className='text-center text-xl  mt-2'>Let’s help you land your dream career</h2>
      <h2 className='text-center text-2xl font-semibold  mt-10'>Trending on Internshala🔥</h2>
      <div className="box w-full px-[10vw] flex md:flex-row flex-col items-center gap-6 mt-8 justify-center">
        <img className='md:w-[25vw]' src="https://internshala.com/static/images/pgc_course_specific_banners/pgc_homepage_banner_new.png" alt="" />
        <img className='md:w-[25vw]' src="https://internshala-uploads.internshala.com/banner-images/home_new/employers_choice_launch_july24-student.png.webp" alt="" />
        <img className='md:w-[25vw]' src="https://internshala-uploads.internshala.com/banner-images/home_new/mahindra_logistics-student.png.webp" alt="" />
      </div>
    </div>
  )
}

export default Layout