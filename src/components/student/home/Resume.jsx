import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from '../../partials/navbar/Nav';

const Resume = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen w-full relative">
      <Nav keepactions={true} optionsAtRight={true} />

      <div onClick={e => navigate(-1)} className="my-[2vw] ml-[10vw]">
        <button className="text-sky-500"><i className="fa-solid fa-arrow-left-long opacity-65 mr-2"></i> Back</button>
      </div>
      <div className="max-w-[61vw] mx-auto">
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
            <button className="text-sky-500"><i class="fa-solid fa-download"></i> <span className='text-sm font-semibold tracking-wider ml-1'>Download</span></button>
          </div>
          <div id='res_eduction' className="py-5 relative flex border-t">
            <h3 className="text-[12.7px] text-black/[.5] font-bold w-[16vw] pr-[13%]">EDUCATION</h3>
            <div className="flex justify-between items-center mt-2">
              <div className="">

                <div className=''>
                  <h3 className='font-bold leading-tight text-sm'>B.Tech, Computer Science & Engineering</h3>
                  <p className='text-black/[.6] leading-tight'>Laxminarayan Institute Of Technology</p>
                  <p className='text-black/[.6] leading-tight'>2022 - 2026</p>
                </div>
                <button className="text-sky-500 mt-2">+ Add education</button>
              </div>
            </div>
              <div className='absolute right-[0%] flex gap-2 items-center'>
                <i className="fa-solid fa-pen px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
                <i className="fa-regular fa-trash-can px-2 rounded py-1 text-black/[.6] cursor-pointer"></i>
              </div>
          </div>
          <div className="py-5 flex border-t">
            <h3 className="text-[12.7px] text-black/[.5] font-bold w-[16vw] pr-[13%]">WORK EXPERIENCE</h3>
            <button className="text-sky-500 mt-2">+ Add job</button>
            <button className="text-sky-500 mt-2 ml-4">+ Add internship</button>
          </div>
          <div className="py-5 flex border-t">
            <h3 className="text-[12.7px] text-black/[.5] font-bold w-[16vw] pr-[13%]">POSITIONS OF RESPONSIBILITY</h3>
            <button className="text-sky-500 mt-2">+ Add position of responsibility</button>
          </div>
          <div className="py-5 flex border-t">
            <h3 className="text-[12.7px] text-black/[.5] font-bold w-[16vw] pr-[13%]">TRAININGS/ COURSES</h3>
            <button className="text-sky-500 mt-2">+ Add training/ course</button>
          </div>
          <div className="py-5 flex border-t">
            <h3 className="text-[12.7px] text-black/[.5] font-bold w-[16vw] pr-[13%]">ACADEMICS/ PERSONAL PROJECTS</h3>
            <button className="text-sky-500 mt-2">+ Add academic/ personal project</button>
          </div>
          <div className="py-5 flex border-t">
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
          <div className="py-5 flex border-t">
            <h3 className="text-[12.7px] text-black/[.5] font-bold w-[16vw] pr-[13%]">PORTFOLIO/ WORK SAMPLES</h3>
            <button className="text-sky-500 mt-2">+ Add portfolio/ work sample</button>
          </div>
          <div className="py-5 flex border-t">
            <h3 className="text-[12.7px] text-black/[.5] font-bold w-[16vw] pr-[13%]">ACCOMPLISHMENTS/ ADDITIONAL DETAILS</h3>
            <button className="text-sky-500 mt-2">+ Add accomplishment/ additional detail</button>
          </div>
        </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Resume;
