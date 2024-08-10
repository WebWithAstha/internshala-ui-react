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
import JobDetailsForm from '../components/student/resume/detailForms/JobDetailsForm'
import StudentHome from '../components/student/home/Home'
import EducationDetailsForm from '../components/student/resume/detailForms/EducationDetailsForm'
import RespDetailsForm from '../components/student/resume/detailForms/RespDetailsForm'
import CourseDetailsForm from '../components/student/resume/detailForms/CourseDetailsForm'
import ProjectDetailsForm from '../components/student/resume/detailForms/ProjectDetailsForm'
import AccompDetailsForm from '../components/student/resume/detailForms/AccompDetailsForm'
import SkillDetailsForm from '../components/student/resume/detailForms/SkillDetailsForm'
import WorkDetailsForm from '../components/student/resume/detailForms/WorkDetailsForm'
import PersonalDetailsForm from '../components/student/resume/detailForms/ProfileDetailsForm'
import ChangePasswordForm from '../components/partials/ChangePasswordPage'
import ExtraDetailsForm from '../components/employee/ExtraDetailsForm'
import Dashboard from '../components/employee/Dashboard'


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
        <Route path="/student/dashboard" element={<StudentHome />} />
        {/* <Route path="/listing" element={<ListingCard />} /> */}
        <Route path="/detail" element={<Details />} />
        <Route path="/student/resume" element={<Resume />} >
          <Route path="addexperience" element={<JobDetailsForm />} />
          <Route path="editexperience" element={<JobDetailsForm edit={true} />} />
          <Route path="addeducation" element={<EducationDetailsForm />} />
          <Route path="editeducation" element={<EducationDetailsForm edit={true} />} />
          <Route path="addpositions" element={<RespDetailsForm />} />
          <Route path="addcourse" element={<CourseDetailsForm />} />
          <Route path="editcourse" element={<CourseDetailsForm edit={true} />} />
          <Route path="addproject" element={<ProjectDetailsForm />} />
          <Route path="editproject" element={<ProjectDetailsForm edit={true} />} />
          <Route path="addaccomplishment" element={<AccompDetailsForm />} />
          <Route path="editaccomplishment" element={<AccompDetailsForm edit={true} />} />
          <Route path="addskill" element={<SkillDetailsForm />} />
          <Route path="editskill" element={<SkillDetailsForm edit={true} />} />
          <Route path="addwork" element={<WorkDetailsForm />} />
          <Route path="editwork" element={<WorkDetailsForm edit={true} />} />
          <Route path='profile' element={< PersonalDetailsForm />} />
        </Route>
        <Route path='/login/update-password' element={<ChangePasswordForm/>} />
        <Route path='/employee/details' element={<ExtraDetailsForm/>}/>
        <Route path='/employee/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default AppRoutes