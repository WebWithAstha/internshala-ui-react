import React, { useEffect, useState } from 'react'
import Nav from '../../partials/navbar/Nav'
import Layout from './Layout'
import Recommended from './Recommended'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLoad } from '../../../store/actions/studentAction'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const { info } = useSelector(store => store.studentReducer)
const navOpts = [{'Internships':"/student/internships"}, {Jobs:'/student/jobs'}, {'Courses':'/student/cources'}]




  useEffect(() => {
    dispatch(asyncLoad(navigate))
  }, [])


  return (
    info &&
    <div className='w-full'>
      <Nav keepactions={true} optionsAtRight={true} opts={navOpts} name={info.firstname} email = {info.email} img={info.avatar.url} />
      <Layout name={info.firstname} />
      <Recommended />
    </div>
  )
}

export default Home