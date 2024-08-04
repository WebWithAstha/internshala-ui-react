import React from 'react'
import Card from '../../partials/Card'

const Recommended = () => {
  return (
    <div className='w-full px-[10vw] py-10 bg-sky-50'>
        <h1 className='text-center font-bold text-2xl'>Recommended for you</h1>
        <p className='text-lg text-center'>as per your <span className='text-sky-500'>preferences</span> </p>
        <div className="flex gap-6">
            <Card/>
        </div>
    </div>
  )
}

export default Recommended