import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full h-screen flex justify-center flex-col items-center bg-sky-50'>
      <img className='md:w-[50vw] w-[80vw] object-contain' draggable={false} src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-512x249-ju1c9yxg.png" alt="" />
      <h1 className='md:text-[2vw] text-cyan-700 mt-4 font-bold'>Oops.. Page Not Found</h1>
    </div>
  )
}

export default NotFound