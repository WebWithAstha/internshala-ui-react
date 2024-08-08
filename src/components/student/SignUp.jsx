import { React, useEffect, useState } from 'react'
import Nav from '../partials/navbar/Nav.jsx'
import LogDetails from '../partials/LogDetails'
import axios from '../../utils/axios.jsx'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [contact, setcontact] = useState('')
  const navigate = useNavigate()


  const studentSignUp = async () => {
    try {
      const {data} = await axios.post('/student/signup', {
        firstname,
        lastname,
        email,
        password,
        contact,
        gender: "Female",
        city: "bhopal",
      })
      // console.log(data)
      navigate('/student/dashboard',{state:{id:data.id}})
    } catch (error) {
      alert(error.response.data.message)
      console.log(error.response.data.message)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    studentSignUp()
  }


  return (
    <div>
      <Nav />
      <div className="w-full min-h-screen flex flex-col items-center py-10">
        <div className="">

          <h1 className='font-bold text-5xl text-center'>Sign-up and apply for free</h1>
          <h2 className='text-center text-[1.6rem] font-normal mt-4'>1,50,000+ companies hiring on Internshala</h2>
        </div >

        <form onSubmit={e=>handleSubmit(e)} action="" className='max-w-[32rem] w-[30rem] shadow-md rounded-lg bg-white px-8 py-8'>

          <button className='flex items-center gap-2 rounded text-center w-full justify-center border border-zinc-300 mt-6 py-2 font-semibold'><img className='w-4' src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" /> Sign Up with Google</button>
          <div className="flex w-full gap-2 mt-4 justify-center items-center">
            <hr className='h-[.08rem] w-full bg-zinc-200' />
            <span>OR</span>
            <hr className='h-[.08rem] w-full bg-zinc-200' />
          </div>
          <LogDetails 
          btn={"Sign Up"} 
          email={email}
          setemail={setemail} 
          password={password}
          setpassword={setpassword} 
          firstname={firstname}
          setfirstname={setfirstname} 
          lastname={lastname} 
          setlastname={setlastname} 
          contact={contact} 
          setcontact={setcontact} 
          />
        </form>



      </div>
    </div>
  )
}

export default SignUp