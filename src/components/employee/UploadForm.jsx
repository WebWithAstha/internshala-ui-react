import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import Nav from '../partials/navbar/Nav';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoad } from '../../store/actions/employeeAction';

const UploadForm = () => {

    // extra used hooks
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // reducer data call
    const { info } = useSelector(store => store.employeeReducer)
    useEffect(() => {
        dispatch(asyncLoad(navigate))
    }, [])

    // state variables
    const [postType, setpostType] = useState('internship')

    const [orgName, setOrgName] = useState('');
    const [profile, setProfile] = useState('');
    const [skill, setSkill] = useState('');
    const [internshipType, setInternshipType] = useState('Remote');
    const [openings, setOpenings] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [amount, setamount] = useState('');
    const [duration, setDuration] = useState('');
    const [responsibility, setResponsibility] = useState('');
    const [stipend, setStipend] = useState('Negotiable');
    const [perks, setPerks] = useState('');
    const [assessments, setAssessments] = useState('');

    const submitHandle = async (e) => {
        e.preventDefault();

        if(postType === 'internship'){
        try {
            const { data } = await axios.post('/employee/create/internship', {
                profile, skills: skill.split(',').map(e => e),
                internshipType, openings, from, to, duration, responsibility,
                "stipend.status": stipend,
                "stipend.amount": amount,
                perks, assessments
            });
            console.log(data)
            navigate('/employee/dashboard');

        } catch (error) {
            alert(error.response.data.message)
            console.log(error.response.data.message);

        }
    }

    }

    // nav options
    const navOpts = [{'Plans and Pricing':"/employee/plans"}, {Dashboard:'/employee/dashboard'}, {'Post Internship/Job':'/employee/post'}]



    return ( info &&
        <>
            <Nav keepactions={true} optionsAtRight={true} opts={navOpts} name={info.firstname} email={info.email} img={info.organizationLogo.url} />

        <div className="w-full flex justify-center flex-col items-center py-10">
            <nav className="flex items-center mb-4 justify-center my-6 space-x-8">
                <h1 onClick={e => setpostType("internship")} className={`${postType === 'internship' ? ' border-sky-500 text-sky-600' : ' border-transparent text-black'} md:w-40 text-center hover:bg-sky-50 duration-100 cursor-pointer border-b-2 py-3 font-semibold md:text-lg`}>Post Internship</h1>
                <h1 onClick={e => setpostType("freshJob")} className={`${postType === 'freshJob' ? ' border-sky-500 text-sky-600' : ' border-transparent text-black'} md:w-40 text-center hover:bg-sky-50 duration-100 cursor-pointer border-b-2 py-3 font-semibold md:text-lg`}>Post Fresher Job</h1>
            </nav>
            <form className='md:w-[60vw] border p-6 rounded' onSubmit={submitHandle} >
            <h1 className='capitalize mb-2 font-semibold md:text-xl text-center'>{postType} Details</h1>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="profile">
                        Profile
                    </label>
                    <input
                        required
                        type="text"
                        id="profile"
                        maxLength={20}
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}
                        placeholder="Profile"
                        className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="skill">
                        Skill's
                    </label>
                    <input
                        required
                        type="text"
                        id="skill"
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                        maxLength={130}
                        placeholder="Skill please seprate it by ,"
                        className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="internshipType">
                        Internship Type
                    </label>
                    <select
                        id="internshipType"
                        value={internshipType}
                        onChange={(e) => setStipend(e.target.value)}
                        className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                    >
                        <option value="Negotiable">Remote</option>
                        <option value="Fixed">Office Work</option>
                        <option value="Performance Based">Hybrid</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="openings">
                        Openings
                    </label>
                    <input
                        required
                        type="number"
                        min={1}
                        max={200}
                        id="openings"
                        value={openings}
                        onChange={(e) => setOpenings(e.target.value)}
                        placeholder="Openings"
                        className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="from">
                        From
                    </label>
                    <input
                        required
                        type="date"
                        id="from"
                        max={to}
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="to">
                        To
                    </label>
                    <input
                        required
                        type="date"
                        id="to"
                        min={from}
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="duration">
                        Duration
                    </label>
                    <input
                        required
                        type="text"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        placeholder="Duration"
                        className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="responsibility">
                        Responsibility
                    </label>
                    <textarea
                        id="responsibility"
                        value={responsibility}
                        onChange={(e) => setResponsibility(e.target.value)}
                        placeholder="Responsibility"
                        className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="stipend">
                        Stipend
                    </label>
                    <select
                        id="stipend"
                        value={stipend}
                        onChange={(e) => setStipend(e.target.value)}
                        className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                    >
                        <option value="Negotiable">Negotiable</option>
                        <option value="Fixed">Fixed</option>
                        <option value="Performance Based">Performance Based</option>
                        <option value="Unpaid">Unpaid</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="amount">
                        amount
                    </label>
                    <input
                        required
                        type="number"
                        id="amount"
                        min={1000}
                        max={200000}
                        disabled={stipend === 'Unpaid'}
                        value={amount}
                        onChange={(e) => setamount(e.target.value)}
                        placeholder="amount"
                        className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="perks">
                        Perks
                    </label>
                    <input
                        required
                        type="text"
                        id="perks"
                        value={perks}
                        onChange={(e) => setPerks(e.target.value)}
                        placeholder="Perks"
                        className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="assessments">
                        Assessments
                    </label>
                    <textarea
                        id="assessments"
                        value={assessments}
                        onChange={(e) => setAssessments(e.target.value)}
                        placeholder="Assessments"
                        className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                    />
                </div>
                <button className='w-full py-3 text-center bg-blue-500 rounded-lg text-white font-medium'>Post a Internship</button>
            </form>
        </div>
        </>

    );
};

export default UploadForm;