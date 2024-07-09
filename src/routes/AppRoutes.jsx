import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import NotFound from '../components/partials/NotFound'
import Login from '../components/Login'
import LoginEmp from '../components/employee/Login'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/emp" element={<LoginEmp />} />
    </Routes>
    </>
  )
}

export default AppRoutes