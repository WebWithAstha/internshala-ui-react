import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../partials/navbar/Nav';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoad } from '../../store/actions/employeeAction';

const ExtraDetailsForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {info} = useSelector(store=> store.employeeReducer)
    useEffect(()=>{
        dispatch(asyncLoad(navigate))

    },[])


    // state variables
    const [imgUrl, setimgUrl] = useState('')
    const [organizationLogo, setorganizationLogo] = useState(null)
    const [organizationname, setorganizationname] = useState('')

    const handleOrgLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setimgUrl(URL.createObjectURL(file));
            setorganizationLogo(file)
        }
    };

    const triggerFileInput = () => {
        document.getElementById('profilePictureInput').click();
    };


    const handleSubmit = async (e) => {
        console.log("hello")
        e.preventDefault()

        try {
            info && await axios.post(`/employee/logo/${info._id}`,
                { organizationLogo },
                { headers: { "Content-Type": "multipart/form-data" } }
            )
            info && organizationLogo && await axios.post(`/employee/update/${info._id}`, { organizationname })
            dispatch(asyncLoad(navigate))
            navigate('/employee/dashboard')
        } catch (error) {
            alert(error.response.data.message)
            console.log(error.response.data.message)
        }
    }




    return ( info &&
        <div className="w-full h-screen bg-white shadow-md rounded-md">
            <Nav />
            <div className="md:px-[28vw] mt-10 ">
                <div className="flex justify-between px-20 items-center mb-6">
                    <div className="flex items-center flex-col md:gap-2">
                        <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex justify-center items-center">
                            <i className="fa-solid fa-users"></i>
                        </div>
                        <div className="ml-2 text-sky-500">Personal Details</div>
                    </div>
                    <div className="flex items-center flex-col md:gap-2">
                        <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex justify-center items-center">
                            <i className="fa-solid fa-suitcase"></i>
                        </div>
                        <div className="ml-2 text-sky-500">Organization Details</div>
                    </div>
                    <div className="flex items-center flex-col md:gap-2">
                        <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-400 flex justify-center items-center">
                            <i className="fa-regular fa-file-lines"></i>
                        </div>
                        <div className="ml-2 text-gray-400">Post Internship/Job</div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-center">Organization details</h2>

                <form onSubmit={handleSubmit} className='border md:p-8'>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Organization name<span className='text-red-600'>*</span></label>
                        <input
                        onChange={e=>setorganizationname(e.target.value)}
                            type="text"
                            maxLength={15}
                            minLength={3}
                            defaultValue={info.organizationname}
                            className="w-full px-3 py-2 border rounded-md outline-zinc-700/[.2]"
                            placeholder="Organization Name"
                        />
                    </div>


                    <div className="mb-4 hidden">
                        <label className="block text-gray-700">Organization description</label>
                        <textarea
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-sky-500"
                            rows="4"
                            placeholder="Describe your organization"
                        ></textarea>
                    </div>

                    <div className="mb-4 hidden">
                        <label className="block text-gray-700">Organization city</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-sky-500"
                            placeholder="e.g. Mumbai"
                        />
                    </div>

                    <div className="mb-4 hidden">
                        <label className="block text-gray-700">Industry</label>
                        <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-sky-500">
                            <option>Select industry</option>
                            <option>Technology</option>
                            <option>Healthcare</option>
                            <option>Education</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                    <div className="mb-4 hidden">
                        <label className="block text-gray-700">No. of employees</label>
                        <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-sky-500">
                            <option>Select an option</option>
                            <option>1-10</option>
                            <option>11-50</option>
                            <option>51-200</option>
                            <option>201-500</option>
                            <option>500+</option>
                        </select>
                    </div>


                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 text-black/[.6]">Organization logo <span className='text-red-600'>*</span></label>
                        {imgUrl && (
                            <div className="mt-4 mb-2 bg-gray-500 w-max rounded-lg overflow-hidden">
                                <img
                                    src={imgUrl}
                                    alt="Profile Preview"
                                    className="w-32 h-32 object-cover rounded-lg"
                                />
                            </div>
                        )}
                        <div className="flex items-center">
                            <button
                                type="button"
                                onClick={triggerFileInput}
                                className="block bg-blue-100 border-2 border-dashed border-blue-400 text-blue-500 rounded-lg px-4 py-2 cursor-pointer"
                            >
                                Upload picture
                            </button>
                            <input
                                type="file"
                                id="profilePictureInput"
                                name="profilePicture"
                                accept="image/*"
                                onChange={handleOrgLogoChange}
                                className="hidden"
                            />
                        </div>
                        <p className="mt-2 text-xs text-gray-500">Max file size: 1Mb and max resolution: 500px x 500px. File type: jpeg, jpg, png, gif, bmp</p>

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-500"
                    >
                        Save and Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ExtraDetailsForm;
