import React, { useEffect, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from '../../partials/navbar/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoad } from '../../../store/actions/studentAction'
import axios from '../../../utils/axios';
import { calculateDateRange, formatDate } from '../../../utils/dateValidationHelper';





const Resume = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { info } = useSelector(store => store.studentReducer)

  useEffect(() => {
    dispatch(asyncLoad(navigate))
  }, [])


  const handleDelete = async (url, navigate) => {
    try {
      await axios.post(`${url}`)
      dispatch(asyncLoad(navigate))
    } catch (error) {
      console.log(error)
    }
  }


  return (
    info &&
    <div className="min-h-screen overflow-x-hidden w-full relative">
      <Nav keepactions={true} optionsAtRight={true} name={info.firstname} email={info.email} />
      <div onClick={e => navigate(-1)} className="my-[2vw] ml-[10vw]">
        <button className="text-sky-500"><i className="fa-solid fa-arrow-left-long opacity-65 mr-2"></i> Back</button>
      </div>
      <div className="max-w-[61vw] min-w-[40rem] mx-auto">
        <h1 className="text-center text-3xl font-semibold mb-4">Resume</h1>
        <div className="text-center bg-blue-50 text-sky-600 py-3  border border-sky-600 w-max mx-auto px-[4vw] rounded-lg mb-4">
          <i className="fa-regular fa-lightbulb mr-2"></i>
          We found 4 <span className='font-bold'>suggestion(s)</span> that can improve your Internshala resume
          <a href="#" className="text-sky-500 ml-2"><span className='underline font-medium'>Review now </span> &rarr;</a>
        </div>
        <div className="border rounded ">

          <div className="bg-gray-50  text-zinc-600 text-center p-4 rounded mb-4">
            This is the resume companies will see when you apply
          </div>
          <div className=" px-[5vw]">

            <div className="flex justify-between items-center pt-[2vw] mb-4">
              <div>
                <h2 className="text-3xl font-semibold mb-2">Astha Lodhi</h2>
                <div className=" text-zinc-600 text-[14px]">

                  <p className='mb-.5'>lodhiastash85@gmail.com</p>
                  <p className='mb-.5'>+91 7489089294</p>
                  <p className='mb-.5'>Bhopal</p>
                </div>
              </div>
              <button className="text-sky-500"><i className="fa-solid fa-download"></i> <span className='text-sm font-semibold tracking-wider ml-1'>Download</span></button>
            </div>

            <Education education={info.resume.education} navigate={navigate} handleDelete={handleDelete} />
            <Experience experiences={info.resume.experience} navigate={navigate} handleDelete={handleDelete} />
            <Responsibility resp={info.resume.responsibility} navigate={navigate} handleDelete={handleDelete} />
            <Courses courses={info.resume.courses} navigate={navigate} handleDelete={handleDelete} />
            <Projects projects={info.resume.projects} navigate={navigate} handleDelete={handleDelete} />
            <Skills skills={info.resume.skills} navigate={navigate} handleDelete={handleDelete} />
            <Works works={info.resume.works} navigate={navigate} handleDelete={handleDelete} />
            <Accomplishments accomp={info.resume.accomplishment} navigate={navigate} handleDelete={handleDelete} />

          </div>
        </div>
      </div>
      <Outlet />

    </div>
  );
};






const Education = ({ education, navigate, handleDelete }) => {

  return (
    <>
      <div id='res_eduction' className="py-5 relative flex border-t">
        <h3 className="text-[12.7px] text-black/[.5] font-bold min-w-32 shrink-0 w-[16vw] pr-[13%]">EDUCATION</h3>
        <div className=" flex-1">
          {education.map((edu, i) => (
            <div key={i} id={'edu' + i} className="relative">
              <div className='mb-2'>
                <h3 className='font-bold leading-tight text-sm'>{edu.degree && edu.degree}</h3>
                <p className='text-black/[.6] leading-tight text-sm'>{edu.organization && edu.organization}</p>
              <p className='text-black/[.6] leading-tight text-sm my-1'> <span>{`${formatDate(edu.startDate)} - ${formatDate(edu.endDate)}`}</span></p>

              </div>
              <div className='absolute right-[0%] top-0 flex gap-2 items-center'>
                <i onClick={e => navigate('/student/resume/editeducation', { state: { edu } })} className="fa-solid fa-pen px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
                <i onClick={e => handleDelete(`/resume/delete-education/${edu.id}`)} className="fa-regular fa-trash-can px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
              </div>
            </div>
          ))}
          <button onClick={e => navigate('/student/resume/addeducation')} className="text-sky-500">+ Add education</button>
        </div>

      </div>
    </>
  )
}

const Experience = ({ experiences, navigate, handleDelete }) => {
  return (
    <div id='res_experience' className="py-5 flex border-t">
      <h3 className="text-[12.7px] text-black/[.5] font-bold min-w-32 shrink-0 w-[16vw] pr-[13%]">WORK EXPERIENCE</h3>
      <div className=" flex-1">
        {experiences.map((experience, i) => (
        <div key={i} className="relative">
          <div className='mb-2'>
            <h3 className='font-bold leading-tight text-sm'>{experience.designation}</h3>
            <p className='text-black/[.6] leading-tight text-sm'>{experience.organization}, {experience.location}</p>
            <div className="flex text-black/[.6] my-1 items-center gap-2">
              <p className='leading-tight'>{experience.type}</p>
              <i className="fa-solid fa-circle text-[5px] translate-y-[55%]"></i>
              <p className='leading-tight'> <span>{`${formatDate(experience.startDate)} - ${formatDate(experience.endDate)}`}</span>  <span>({`${calculateDateRange(experience.startDate, experience.endDate)}`})</span> </p>

            </div>
            <p className='text-black/[.6] leading-tight'>{experience.description}</p>
          </div>
          <div className='absolute right-[0%] top-0 flex gap-2 items-center'>
            <i onClick={e => navigate('/student/resume/editexperience', { state: { experience } })} className="fa-solid fa-pen px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
            <i onClick={e => handleDelete(`/resume/delete-experience/${experience.id}`)} className="fa-regular fa-trash-can px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
          </div>
        </div>
        ))}
        <button onClick={e => navigate('/student/resume/addexperience',{state:{type:"job"}})} className="text-sky-500 mt-2">+ Add job</button>
        <button onClick={e => navigate('/student/resume/addexperience',{state:{type:"internship"}})} className="text-sky-500 mt-2 ml-4">+ Add internship</button>
      </div>
    </div>
  )
}

const Responsibility = ({ resp, navigate, handleDelete }) => {
  return (

    <div id='res_eduction' className="py-5 relative flex border-t">
      <h3 className="text-[12.7px] text-black/[.5] font-bold min-w-32 shrink-0 w-[16vw] pr-[13%]">POSITIONS OF RESPONSIBILITY</h3>
      <div className=" flex-1">
        {resp.map((edu, i) => (
          <div key={i} id={'edu' + i} className="relative">
            <p className='mb-2 leading-tight text-sm'>{edu.position && edu.position}</p>
            <div className='absolute right-[0%] top-0 flex gap-2 items-center'>
              <i className="fa-solid fa-pen px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
              <i className="fa-regular fa-trash-can px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
            </div>
          </div>
        ))}
        <button onClick={e => navigate('/student/resume/addpositions')} className="text-sky-500 mt-2">+ Add position of responsibility</button>
      </div>

    </div>

  )
}

const Accomplishments = ({ accomp, navigate, handleDelete }) => {
  return (

    <div id='res_accomplish' className="py-5 relative flex border-t">
      <h3 className="text-[12.7px] text-black/[.5] font-bold min-w-32 shrink-0 w-[16vw] pr-[13%]"> <span className="break-all">ACCOMPLISHMENTS/</span> ADDITIONAL DETAILS</h3>
      <div className=" flex-1">
        {accomp.map((accomplish, i) => (
          <div key={i} id={'accomplish' + i} className="relative">
            <p className='mb-2 leading-tight text-sm w-[70%]'>{accomplish.accomplishment && accomplish.accomplishment}</p>
            <div className='absolute right-[0%] top-0 flex gap-2 items-center'>
              <i onClick={e => navigate('/student/resume/editaccomplishment', { state: { accomplish } })} className="fa-solid fa-pen px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
              <i onClick={e => handleDelete(`/resume/delete-accomplishment/${accomplish.id}`)} className="fa-regular fa-trash-can px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
            </div>
          </div>
        ))}
        <button onClick={e => navigate('/student/resume/addaccomplishment')} className="text-sky-500 mt-2">+ Add accomplishment/ additional detail</button>
      </div>

    </div>

  )
}

const Courses = ({ courses, navigate, handleDelete }) => {
  return (

    <div id='res_courses' className="py-5 relative flex border-t">
      <h3 className="text-[12.7px] text-black/[.5] font-bold min-w-32 shrink-0 w-[16vw] pr-[13%]">TRAININGS/ COURSES</h3>
      <div className=" flex-1">
        {courses.map((course, i) => (
          <div key={i} id={'course' + i} className="relative">
            <div className='mb-2'>
              <h3 className='font-bold leading-tight text-sm'>{course.program && course.program}</h3>
              <p className='text-black/[.6] leading-tight text-sm mt-1'>{course.organization && course.organization}</p>
              <p className='text-black/[.6] leading-tight text-sm my-1'> <span>{`${formatDate(course.startDate)} - ${formatDate(course.endDate)}`}</span></p>
              <p className='text-black/[.6] leading-tight text-sm'>{course.description && course.description}</p>

            </div>
            <div className='absolute right-[0%] top-0 flex gap-2 items-center'>
              <i onClick={e => navigate('/student/resume/editcourse', { state: { course } })} className="fa-solid fa-pen px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
              <i onClick={e => handleDelete(`/resume/delete-course/${course.id}`)} className="fa-regular fa-trash-can px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
            </div>
          </div>
        ))}
        <button onClick={e => navigate('/student/resume/addcourse')} className="text-sky-500">+ Add training/ course</button>
      </div>

    </div>

  )
}

const Projects = ({ projects, navigate, handleDelete }) => {
  return (

    <div id='res_project' className="py-5 relative flex border-t">
      <h3 className="text-[12.7px] text-black/[.5] font-bold min-w-32 shrink-0 w-[16vw] pr-[13%]">ACADEMICS/ PERSONAL PROJECTS</h3>
      <div className=" flex-1">
        {projects.map((project, i) => (
          <div key={i} id={'project' + i} className="relative">
            <div className='mb-2'>
              <h3 className='font-bold leading-tight text-sm'>{project.title && project.title}</h3>
              <p className='text-black/[.6] leading-tight text-sm my-1'>{project.organization && project.organization}</p>
              <p className='text-black/[.6] leading-tight text-sm my-1'> <span>{`${formatDate(project.startDate)} - ${formatDate(project.endDate)}`}</span></p>
              <a href={project.link && project.link} target='_blank' className='text-sky-500 leading-tight text-sm '>{project.link && project.link}</a>
              <p className='text-black/[.6] leading-tight text-md'>{project.description && project.description}</p>

            </div>
            <div className='absolute right-[0%] top-0 flex gap-2 items-center'>
              <i onClick={e => navigate('/student/resume/editproject', { state: { project } })} className="fa-solid fa-pen px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
              <i onClick={e => handleDelete(`/resume/delete-project/${project.id}`)} className="fa-regular fa-trash-can px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
            </div>
          </div>
        ))}
        <button onClick={e => navigate('/student/resume/addproject')} className="text-sky-500">+ Add academic/ personal project</button>
      </div>

    </div>

  )
}

const Skills = ({ skills, navigate, handleDelete }) => {


  return (
    <div id='res_skill' className="py-5 flex border-t">
      <h3 className="text-[12.7px] text-black/[.5] font-bold min-w-32 shrink-0 w-[16vw] pr-[13%]">SKILLS</h3>
      <div className="flex-1">

        <div className="grid grid-cols-2 w-full gap-2 justify-between">
          {
            skills.map((skill, index) => (
              <div key={index} className="flex justify-between w-full shrink-0 items-center">
                <div>
                  <p>{skill.skill}</p>
                  <p className='capitalize text-sm opacity-60'>{skill.level}</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <i onClick={e => navigate('/student/resume/editskill', { state: { skill } })} className="fa-solid fa-pen px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
                  <i onClick={e => handleDelete(`/resume/delete-skill/${skill.id}`)} className="fa-regular fa-trash-can px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
                </div>
              </div>
            ))
          }

        </div>
        <button onClick={e => navigate('/student/resume/addskill')} className="text-sky-500 mt-2">+ Add skill</button>
      </div>

    </div>
  )
}

const Works = ({ works, navigate, handleDelete }) => {

  return (

    <div id='res_work' className="py-5 relative flex border-t">
      <h3 className="text-[12.7px] text-black/[.5] font-bold min-w-32 shrink-0 w-[16vw] pr-[13%]">PORTFOLIO/ WORK SAMPLES</h3>
      <div className=" flex-1">
        {works.map((work, i) => (
          <div key={i} id={'work' + i} className="relative w-full flex items-center justify-between">
            <div className='mb-2 w-[75%]'>
              <h3 className='font-bold leading-tight text-sm'><span className='font-bold'>{work.title && work.title}</span> link</h3>
              <a href={work.link && work.link} target='_blank' className='text-sky-500 break-all leading-tight text-sm '>{work.link && work.link}</a>
            </div>
            <div className='flex gap-2 items-center'>
              <i onClick={e => navigate('/student/resume/editwork', { state: { work } })} className="fa-solid fa-pen px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
              <i onClick={e => handleDelete(`/resume/delete-work/${work.id}`)} className="fa-regular fa-trash-can px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
            </div>
          </div>
        ))}
        <button onClick={e => navigate('/student/resume/addwork')} className="text-sky-500">+ Add work/portfolios</button>
      </div>

    </div>

  )
}


export default Resume;
