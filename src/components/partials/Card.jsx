import React from 'react'

const Card = () => {
  return (
    <div className="card bg-white p-6 shadow w-80 rounded-lg">
    <h4 className='border border-zinc-200 text-sm mb-3 px-2 py-1'><i class="fa-solid fa-arrow-trend-up text-sky-600 mr-1"></i> Actively hiring</h4>
    <h1 className='mb-2 font-semibold'>Account Manager (Field Sales)- Women</h1>
    <h3 className='text-sm opacity-75 mb-2'>Bharti Airtel Limited</h3>
    <hr className="w-full my-4" />
    <h3 className='text-sm opacity-75 mb-2'><i class="fa-solid fa-location-dot"></i> Kolkata</h3>
    <h3 className='text-sm opacity-75 mb-2'><i class="fa-solid fa-money-bill"></i> ₹ 4,50,000 - 5,00,000 /year</h3>
    <div className="flex items-center justify-between mt-12">
      <div className="bg-zinc-200 px-1.5 rounded-md py-.5 tracking-wide text-sm">Job</div>
      <h2 className='text-sky-600 font-medium flex items-center gap-2'>View details <i class="fa-solid fa-angle-right text-xs translate-y-[5%]"></i></h2>
    </div>
  </div>
  )
}

export default Card