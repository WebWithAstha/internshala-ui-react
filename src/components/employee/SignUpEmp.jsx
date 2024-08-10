import React, { useState } from 'react'
import Nav from '../partials/navbar/Nav.jsx'
import LogDetails from '../partials/LogDetails'
import StatsSection from './StatsSection'
import axios from '../../utils/axios.jsx'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [contact, setcontact] = useState('')

  const signUpEmployee = async()=>{
    try {
      const {data} = await axios.post('/employee/signup',{
        email,firstname,lastname,contact,password,organizationname:'not specified',
      })
      navigate('/employee/details')
      console.log(data)
    } catch (error) {
      alert(error.response.data.message)
      console.log(error.response.data.message)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    signUpEmployee()
  }


  return (
    <div className='w-full min-h-screen  relative bg-white'>
      <Nav />
      <div className="flex bg-sky-50 justify-between h-screen relative z-[0] pt-10 px-20">
        <img className='w-[70vw] absolute object-cover h-full z-[-1] top-0' src="https://internshala.com/static/images/registration/employer/registration_new/images/banner/r767_banner_new.png" alt="" />

        <div className="top relative z-10">
          <h1 className='font-bold md:text-[3.2rem]'>Hire Interns & Freshers <img className='inline-block h-16 -ml-6 -mt-2' src="https://internshala.com/static/images/registration/employer/registration_new/images/banner/faster.svg" alt="" /> </h1>
          <p className='md:text-[1.6rem] opacity-85 font-medium'>Post Internships for Free & Hire Talent with up to 2 Years of Experience</p>
        </div>

        <div className="mr-10 shrink-0">
          <form action="" onSubmit={handleSubmit} className='max-w-[28rem] shadow-lg rounded w-[25rem] bg-white px-8 py-8'>
            <LogDetails 
            btn={"Post for Free"} 
            usertype={"employee"}
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

      {/* <div className="w-full px-40 flex items-center justify-center py-40"> */}
      <StatsSection />
      {/* </div> */}

    </div>
  )
}

export default Login