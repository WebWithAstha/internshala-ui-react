import React from 'react'

const Card = ({job}) => {
  return (
    <div className="card bg-white p-6 shadow w-72 rounded-lg">
    <h4 className='border border-zinc-200 text-xs mb-3 px-2 py-1 w-max'><i className="fa-solid fa-arrow-trend-up text-sky-600 mr-1"></i> Actively hiring</h4>
    <h1 className='mb-1 leading-tight font-semibold'>Account Manager (Field Sales)- Women</h1>
    <h3 className='text-xs opacity-75 mb-2'>Bharti Airtel Limited</h3>
    <hr className="w-full my-4" />
    <h3 className='text-xs opacity-75 mb-2'><i className="fa-solid fa-location-dot min-w-4 mr-1.5 text-center"></i>Kolkata</h3>
    <h3 className='text-xs opacity-75 mb-2'><i className="fa-solid fa-money-bill min-w-4 mr-1.5 text-center"></i>₹ 4,50,000 - 5,00,000 /year</h3>
    {!job &&
    <h3 className='text-xs opacity-75 mb-2'><i className="fa-regular fa-calendar min-w-4 mr-1.5 text-center"></i>6 months</h3>
    }
    <div className="flex items-center justify-between mt-12">
      <div className="bg-zinc-200 px-1.5 rounded-sm py-[3px] tracking-wide text-xs">{job ? "Job":"Internship"}</div>
      <h2 className='text-sky-600 font-medium flex items-center text-sm cursor-pointer gap-2'>View details <i className="fa-solid fa-angle-right text-xs translate-y-[5%]"></i></h2>
    </div>
  </div>
  )
}

export default Card