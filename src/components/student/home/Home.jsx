import React, { useEffect, useState } from 'react'
import Nav from '../../partials/navbar/Nav'
import Layout from './Layout'
import Recommended from './Recommended'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from '../../../utils/axios'

const Home = () => {

  const navigate = useNavigate()
  const [student, setstudent] = useState(null)
  
  const currentUser = async () => {
    try {
      const {data} = await axios.get('/student')
      setstudent(data)
      console.log(data)
    } catch (error) {
      alert(error.response.data.message)
      navigate("/")
      console.log(error)
    }
  }
  useEffect(()=>{
    currentUser()
  },[])



  return (
    student &&
    <div className='w-full'>
      <Nav keepactions={true} optionsAtRight={true}/>
      <Layout name = {student.firstname}/>
      <Recommended/>
    </div>
  )
}

export default Home