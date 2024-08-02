import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import NotFound from '../components/partials/NotFound'
import Login from '../components/Login'
import LoginEmp from '../components/employee/SignUpEmp'
import SignUp from '../components/student/SignUp'
// import ListingCard from '../components/partials/ListingCard'
import Details from '../components/partials/Details'
import Resume from '../components/student/resume/Resume'
import JobDetailsForm from '../components/student/resume/JobDetailsForm'

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
        {/* <Route path="/listing" element={<ListingCard />} /> */}
        <Route path="/detail" element={<Details />} />
        <Route path="/resume" element={<Resume />} >
          <Route path="addjob" element={<JobDetailsForm />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes