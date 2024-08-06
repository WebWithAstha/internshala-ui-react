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

  useEffect(() => {
    dispatch(asyncLoad(navigate))
  }, [])



  return (
    info &&
    <div className='w-full'>
      <Nav keepactions={true} optionsAtRight={true} name={info.firstname} email = {info.email} />
      <Layout name={info.firstname} />
      <Recommended />
    </div>
  )
}

export default Home