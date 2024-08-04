import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import NotFound from '../components/partials/NotFound'
import Login from '../components/Login'
import LoginEmp from '../components/employee/SignUpEmp'
import SignUp from '../components/student/SignUp'
// import ListingCard from '../components/partials/ListingCard'
import Details from '../components/partials/Details'
import Resume from '../components/student/home/Resume'
import JobDetailsForm from '../components/student/resume/JobDetailsForm'
import StudentHome from '../components/student/home/Home'

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
        <Route path="/student/dashboard" element={<StudentHome/>}/>
        {/* <Route path="/listing" element={<ListingCard />} /> */}
        <Route path="/detail" element={<Details />} />
        <Route path="/student/resume" element={<Resume />} >
          <Route path="addjob" element={<JobDetailsForm />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes