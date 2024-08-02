import React from 'react';
import { Outlet } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <button className="text-blue-500">&lt; Back</button>
        </div>
        <h1 className="text-center text-2xl font-bold mb-4">Resume</h1>
        <div className="text-center bg-blue-50 text-blue-700 p-2 rounded mb-4">
          We found 4 suggestion(s) that can improve your Internshala resume
          <a href="#" className="text-blue-500 ml-2">Review now &rarr;</a>
        </div>
        <div className="bg-gray-50 text-center p-4 rounded mb-4">
          This is the resume companies will see when you apply
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold">Astha Lodhi</h2>
            <p>lodhiastash85@gmail.com</p>
            <p>+91 7489089294</p>
            <p>Bhopal</p>
          </div>
          <button className="text-blue-500">Download</button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">EDUCATION</h3>
          <div className="flex justify-between items-center mt-2">
            <div>
              <p>B.Tech, Computer Science & Engineering</p>
              <p>Laxminarayan Institute Of Technology</p>
              <p>2022 - 2026</p>
            </div>
            <div>
              <button className="text-blue-500">Edit</button>
              <button className="text-red-500 ml-2">Delete</button>
            </div>
          </div>
          <button className="text-blue-500 mt-2">+ Add education</button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">WORK EXPERIENCE</h3>
          <button className="text-blue-500 mt-2">+ Add job</button>
          <button className="text-blue-500 mt-2 ml-4">+ Add internship</button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">POSITIONS OF RESPONSIBILITY</h3>
          <button className="text-blue-500 mt-2">+ Add position of responsibility</button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">TRAININGS/ COURSES</h3>
          <button className="text-blue-500 mt-2">+ Add training/ course</button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">ACADEMICS/ PERSONAL PROJECTS</h3>
          <button className="text-blue-500 mt-2">+ Add academic/ personal project</button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">SKILLS</h3>
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
                  <button className="text-blue-500">Edit</button>
                  <button className="text-red-500 ml-2">Delete</button>
                </div>
              </div>
            ))}
          </div>
          <button className="text-blue-500 mt-2">+ Add skill</button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">PORTFOLIO/ WORK SAMPLES</h3>
          <button className="text-blue-500 mt-2">+ Add portfolio/ work sample</button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">ACCOMPLISHMENTS/ ADDITIONAL DETAILS</h3>
          <button className="text-blue-500 mt-2">+ Add accomplishment/ additional detail</button>
        </div>
      </div>
      
      <Outlet/>
    </div>
  );
};

export default Resume;
