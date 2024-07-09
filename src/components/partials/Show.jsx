import React from 'react'
import Cards from './Cards'

const Show = ({title}) => {
  return (
    <div className='bg-zinc-50  h-max py-4'>
        <h1 className=' text-center text-3xl font-bold mt-16'>Latest {title} on Internshala</h1>
        <div className="flex w-full justify-center items-center gap-4 mt-6">
            <h1 className='uppercase text-lg'>Popular Categories:</h1>
            <div className="flex items-center gap-4">
                <h4 className='px-5 py-1.5 bg-[#008bdc] font-semibold text-white rounded-full'>Big brands</h4>
                <h4 className='px-4 cursor-pointer py-1 border border-zinc-300 rounded-full'>Work from home</h4>
                <h4 className='px-4 cursor-pointer py-1 border border-zinc-300 rounded-full'>Part time</h4>
                <h4 className='px-4 cursor-pointer py-1 border border-zinc-300 rounded-full'>MBA</h4>
                <h4 className='px-4 cursor-pointer py-1 border border-zinc-300 rounded-full'>Engineering</h4>
                <h4 className='px-4 cursor-pointer py-1 border border-zinc-300 rounded-full'>Media</h4>
                <h4 className='px-4 cursor-pointer py-1 border border-zinc-300 rounded-full'>Design</h4>
                <h4 className='px-4 cursor-pointer py-1 border border-zinc-300 rounded-full'>Data Science</h4>
            </div>
        </div>
        <Cards/>

    </div>
  )
}

export default Show