import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  return (
      <div className="w-full h-full fixed top-0 left-0 bg-black/[.8] z-[999] flex justify-center items-center">

        <form action="" className='max-w-[28rem] bg-white px-8 py-8'>
        
        <i onClick={e=>navigate(-1)} class="fa-solid fa-xmark relative top-0 left-[93%] text-xl mb-2"></i>
        <div className="flex w-full gap-2">
            <h1 className='w-1/2 text-center cursor-pointer border-b-2 border-sky-500 py-3 text-sky-600 font-semibold text-lg'> Student</h1>
            <h1 className='w-1/2 text-center cursor-pointer py-3 font-semibold text-lg'> Employer / T&P</h1>
        </div>
            <button className='flex items-center gap-2 rounded text-center w-full justify-center border border-zinc-300 mt-6 py-2 font-semibold'><img className='w-4' src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" /> Login with Google</button>
            <div className="flex w-full gap-2 mt-4 justify-center items-center">
                <hr className='h-[.08rem] w-full bg-zinc-200' />
                <span>OR</span>
                <hr className='h-[.08rem] w-full bg-zinc-200' />
            </div>
            <label htmlFor="email" className='mt-4 inline-block text-lg'>Email</label>
            <input type="email" className='w-full outline-sky-500 rounded border border-zinc-300 px-2 py-2 mt-1' placeholder='john@example.com' />
            <label htmlFor="password" className='mt-4 inline-block text-lg'>Password</label>
            <input type="password" className='w-full outline-sky-500 rounded border border-zinc-300 px-2 py-2 mt-1' placeholder='john@example.com' />
            <h4 className="ml-auto text-sky-600 text-right mt-5 font-semibold">Forgot Password?</h4>
            <button className='px-6 w-full bg-sky-500 hover:bg-sky-400 duration-300 font-bold text-white py-[.5rem] rounded mt-6'>Login</button>
            <h4 className='mt-6 text-center font-medium text-zinc-500'>New to Internshala? Register (<span className='text-sky-600'>Student</span> / <span className='text-sky-600'>Company</span>)</h4>

        </form>
    </div>
  )
}

export default Login