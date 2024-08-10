import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from "../utils/axios";

const Login = () => {
  const navigate = useNavigate()
  const {state} = useLocation()

  // reference variables
  const stuRef = useRef(null)
  const empRef = useRef(null)

  // state vairables
  const [loginType, setloginType] = useState('student')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  // useEffect query
  useEffect(() => {
    state && state.type && setloginType(state.type)
  }, [])

  // fn to login user either as employee or student
  const sendLoginDetails = async () => {
    try {
      const { data } = await axios.post(`/${loginType}/signin`, {
        email,
        password,
      });
      navigate(`/${loginType}/dashboard`, { state: { id: data.id } })
    } catch (error) {
      console.error(error.response.data.message);
      alert(error.response.data.message);
    }
  }

  // fn handling login submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    sendLoginDetails()
  }






  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black/[.8] z-[999] flex justify-center items-center">

      <form onSubmit={e => handleSubmit(e)} action="" className='max-w-[28rem] bg-white px-8 py-8'>

        <i onClick={e => navigate(-1)} className="fa-solid fa-xmark relative top-0 left-[93%] text-xl mb-2"></i>
        <div className="flex w-full gap-2">
          <h1 ref={stuRef} onClick={e => setloginType("student")} className={`${loginType=== 'student'?' border-sky-500 text-sky-600':' border-transparent text-black'} w-1/2 text-center hover:bg-sky-50 duration-100 cursor-pointer border-b-2 py-3 font-semibold text-lg`}> Student</h1>
          <h1 ref={empRef} onClick={e => setloginType("employee")} className={`${loginType=== 'employee'?' border-sky-500 text-sky-600':' border-transparent text-black'} w-1/2 text-center hover:bg-sky-50 duration-100 cursor-pointer border-b-2 py-3 font-semibold text-lg`}> Employer / T&P</h1>
        </div>
        <button className='flex items-center gap-2 rounded text-center w-full justify-center border border-zinc-300 mt-6 py-2 font-semibold'><img className='w-4' src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" /> Login with Google</button>
        <div className="flex w-full gap-2 mt-4 justify-center items-center">
          <hr className='h-[.08rem] w-full bg-zinc-200' />
          <span>OR</span>
          <hr className='h-[.08rem] w-full bg-zinc-200' />
        </div>

        <label htmlFor="email" className='mt-4 inline-block text-lg'>Email</label>
        <input required onChange={e => setemail(e.target.value)} value={email} type="email" className='w-full outline-sky-500 rounded border border-zinc-300 px-2 py-2 mt-1' placeholder='john@example.com' />
        <label htmlFor="password" className='mt-4 inline-block text-lg'>Password</label>
        <input required onChange={e => setpassword(e.target.value)} value={password} minLength={6} maxLength={12} type="password" className='w-full outline-sky-500 rounded border border-zinc-300 px-2 py-2 mt-1' placeholder='john@example.com' />
        <h4 className="ml-auto text-sky-600 text-right mt-5 font-semibold">Forgot Password?</h4>
        <button className='px-6 w-full bg-sky-500 hover:bg-sky-400 duration-300 font-bold text-white py-[.5rem] rounded mt-6'>Login</button>
        <h4 className='mt-6 text-center font-medium text-zinc-500'>New to Internshala? Register ( <Link to="/register/student"><span className='text-sky-600'>Student</span></Link> / <Link to="/hire-talent"><span className='text-sky-600'>Company</span></Link>)</h4>

      </form>
    </div>
  )
}

export default Login