import React, { useEffect, useState } from 'react'
import Nav from '../partials/navbar/Nav'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLoad } from '../../store/actions/employeeAction'

const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { info } = useSelector(store => store.employeeReducer)
    useEffect(() => {
        dispatch(asyncLoad(navigate))
    }, [])

    const navOpts = [{'Plans and Pricing':"/employee/plans"}, {Dashboard:'/employee/dashboard'}, {'Post Internship/Job':'/employee/post'}]

    // state variables
    const [jobType, setjobType] = useState('internship')



    return (info &&
        <div className="min-h-screen">
            <Nav keepactions={true} optionsAtRight={true} opts={navOpts} name={info.firstname} email={info.email} img={info.organizationLogo.url} />

            <div className="p-4">
                {/* Notification Banner */}
                <div className="bg-sky-100 text-sky-800 p-4 text-center">
                    <p>
                        New! Post unlimited fresher jobs and premium internships for just ₹
                        2,999 ₹ 4,999 (save 40%){" "}
                        <a href="#" className="underline">
                            View Premium Plans
                        </a>
                        . Offer expires soon!
                    </p>
                </div>

                {/* Tabs Navigation */}
                <nav className="-mb-px flex items-center justify-center my-6 space-x-8">
                    <h1 onClick={e => setjobType("internship")} className={`${jobType === 'internship' ? ' border-sky-500 text-sky-600' : ' border-transparent text-black'} md:w-40 text-center hover:bg-sky-50 duration-100 cursor-pointer border-b-2 py-3 font-semibold md:text-[1.3vw]`}> Internships</h1>
                    <h1 onClick={e => setjobType("freshJob")} className={`${jobType === 'freshJob' ? ' border-sky-500 text-sky-600' : ' border-transparent text-black'} md:w-40 text-center hover:bg-sky-50 duration-100 cursor-pointer border-b-2 py-3 font-semibold md:text-[1.3vw]`}> Fresher Jobs</h1>
                </nav>

                {/* Table Section */}
                <div className="max-w-7xl mx-auto py-4 px-6 sm:px-8">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Profile
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Total Views
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Action
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Upgrade to Premium
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    info && info.internships.map((intern,i)=>(

                                <tr key={i}>
                                    <td className="px-6 py-4 whitespace-nowrap">{intern.profile}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">Closed</td>
                                    <td className="px-6 py-4 whitespace-nowrap">314</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {
                                            intern.appliers.length>0?
                                        <button className="text-sky-600 hover:text-sky-800">
                                            View applications
                                        </button>
                                            :
                                            <h2 className='opacity-70'>N/A</h2>
                                        }
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="text-gray-400 hover:text-gray-600">...</button>
                                    </td>
                                </tr>
                                    ))
                                }
                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Dashboard



