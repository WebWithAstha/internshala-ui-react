import React from 'react'

const Layout = () => {
  return (
    <div className='w-full '>
    <h1 className='font-bold text-5xl text-center mt-20'>Make your dream career a reality</h1>
    <h2 className='text-center text-3xl font-semibold mt-16'>Trending on Internshala🔥</h2>
    <div className="box w-full flex gap-6 mt-10 justify-center">
      <img className='w-[25vw]' src="https://internshala.com/static/images/pgc_course_specific_banners/pgc_homepage_banner_new.png" alt="" />
      <img className='w-[25vw]' src="https://internshala-uploads.internshala.com/banner-images/home_new/employers_choice_launch_july24-student.png.webp" alt="" />
      <img className='w-[25vw]' src="https://internshala-uploads.internshala.com/banner-images/home_new/mahindra_logistics-student.png.webp" alt="" />
    </div>
</div>  
  )
}

export default Layout