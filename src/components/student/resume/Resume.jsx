import React, { useEffect, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from '../../partials/navbar/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoad } from '../../../store/actions/studentAction'
import { nanoid } from '@reduxjs/toolkit';





const Resume = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { info } = useSelector(store => store.studentReducer)

  useEffect(() => {
    dispatch(asyncLoad(navigate))
  }, [])


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

            <Education education={info.resume.education} navigate={navigate} />
            <Work navigate={navigate} />
            <AddField id={"res_respon"} title={"POSITIONS OF RESPONSIBILITY"} add={"+ Add position of responsibility"} />
            <AddField id={"res_course"} title={"TRAININGS/ COURSES"} add={"+ Add training/ course"} />
            <AddField id={"res_project"} title={"ACADEMICS/ PERSONAL PROJECTS"} add={"+ Add academic/ personal project"} />
            <div id='res_skill' className="py-5 flex border-t">
              <h3 className="text-[12.7px] text-black/[.5] font-bold w-[16vw] pr-[13%]">SKILLS</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { skill: 'CSS', level: 'Advanced' },
                  { skill: 'JavaScript', level: 'Advanced' },
                  { skill: 'HTML', level: 'Advanced' },
                  { skill: 'Node.js', level: 'Advanced' },
                  { skill: 'React', level: 'Intermediate' },
                  { skill: 'UI & UX Design', level: 'Intermediate' },
                  { skill: 'Figma', level: 'Intermediate' },
                  { skill: 'MongoDB', level: 'Intermediate' },
                ].map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p>{skill.skill}</p>
                      <p>{skill.level}</p>
                    </div>
                    <div>
                      <button className="text-sky-500">Edit</button>
                      <button className="text-red-500 ml-2">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="text-sky-500 mt-2">+ Add skill</button>
            </div>
            <AddField id={"res_portfolio"} title={"PORTFOLIO/ WORK SAMPLES"} add={"+ Add portfolio/ work sample"} />
            <AddField id={"res_accomp"} title={"ACCOMPLISHMENTS/ ADDITIONAL DETAILS"} add={"+ Add accomplishment/ additional detail"} />
          </div>
        </div>
      </div>

    </div>
  );
};






const Education = ({ education ,navigate }) => {

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
              <p className='text-black/[.6] leading-tight'>{edu.startDate && edu.startDate.slice(0,4)} - {edu.endDate && edu.endDate.slice(0,4)}</p>
            </div>
            <div className='absolute right-[0%] top-0 flex gap-2 items-center'>
              <i className="fa-solid fa-pen px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
              <i className="fa-regular fa-trash-can px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
            </div>
          </div>
        ))}
        <button onClick={e => navigate('/student/resume/addeducation')} className="text-sky-500">+ Add education</button>
      </div>

    </div>
            </>
  )
}

const Work = ({navigate}) => {
  return (
    <div id='res_work' className="py-5 flex border-t">
      <h3 className="text-[12.7px] text-black/[.5] font-bold w-[16vw] pr-[13%]">WORK EXPERIENCE</h3>
      <button onClick={e=>navigate('/student/resume/addjob')} className="text-sky-500 mt-2">+ Add job</button>
      <button className="text-sky-500 mt-2 ml-4">+ Add internship</button>
      <Outlet context="addjob" />
    </div>
  )
}

const AddField = ({ title, add }) => {
  return (
    <div className="py-5 flex border-t">
      <h3 className="text-[12.7px] text-black/[.5] font-bold min-w-32 shrink-0 w-[16vw] pr-[13%]">{title}</h3>
      <button className="text-sky-500 mt-2">{add}</button>
    </div>
  )
}



export default Resume;
