import {React,useEffect} from 'react'
import Nav from '../partials/Nav'
import LogDetails from '../partials/LogDetails'
import axios from '../../utils/axios.jsx'

const SignUp = () => {

  const studentSignUp = async () => {
    try {
      const data = await axios.get('/student/signup')
      console.log(data)
      
    } catch (error) {
      console.log(error)
      
    }


  }
  useEffect(() => {
    studentSignUp()

  }, [])
  

  return (
    <div>
        <Nav/>
        <div className="w-full h-screen flex flex-col items-center">
            <div className="">

    <h1 className='font-bold text-5xl text-center mt-20'>Sign-up and apply for free</h1>
    <h2 className='text-center text-[1.6rem] font-normal mt-4'>1,50,000+ companies hiring on Internshala</h2>
            </div>

            <form action="" className='max-w-[32rem] w-[30rem] shadow-md rounded-lg bg-white px-8 py-8'>
     
            <button className='flex items-center gap-2 rounded text-center w-full justify-center border border-zinc-300 mt-6 py-2 font-semibold'><img className='w-4' src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" /> Sign Up with Google</button>
            <div className="flex w-full gap-2 mt-4 justify-center items-center">
                <hr className='h-[.08rem] w-full bg-zinc-200' />
                <span>OR</span>
                <hr className='h-[.08rem] w-full bg-zinc-200' />
            </div>
            <LogDetails btn={"Sign Up"}/>
            </form>



        </div>
    </div>
  )
}

export default SignUp