import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import NotFound from '../components/partials/NotFound'
import Login from '../components/Login'
import LoginEmp from '../components/employee/SignUpEmp'
import SignUp from '../components/student/SignUp'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/hire-talent" element={<LoginEmp />} />
        <Route path="/register/student" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default AppRoutes