import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { asyncLoad } from '../../../../store/actions/studentAction';
import axios from '../../../../utils/axios'
import { validateDates } from '../../../../utils/dateValidationHelper';

const JobDetailsForm = ({ edit }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { state } = useLocation()

  const [formData, setFormData] = useState({
    designation: '',
    type: '',
    profile: '',
    organization: '',
    location: '',
    startDate: '',
    endDate: '',
    currentlyWorking: false,
    description: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    formData.type = state && state.type === 'job' ? 'job' : 'internship'
    if (edit) {
      setFormData({ ...state.experience })
    }
  }, [])


  const updateExperience = async () => {
    try {
      await axios.post(`/resume/edit-experience/${state.experience.id}`, formData)
      dispatch(asyncLoad(navigate))
      navigate(-1)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
  const addExperience = async () => {
    try {
      await axios.post('/resume/add-experience', formData)
      dispatch(asyncLoad(navigate))
      navigate(-1)
    } catch (error) {
      console.log(error)
    }
  }


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { startDate, endDate, type } = formData;
    const validationErrors = validateDates(startDate, endDate, type);
    // console.log(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (edit) {
      updateExperience()
      return
    }
    addExperience()
  };

  const ref = useRef(null)

  const handleBack = (e) => {
    if (ref.current === e.target) {
      navigate(-1);
    }
  }

  return (
    <div ref={ref} onClick={e => handleBack(e)} className="fixed w-full h-screen overflow-y-auto py-[1vw] bg-black/[.6] z-[99] top-0 right-0">
      <div className="max-w-[45vw] min-w-[30rem] mx-auto bg-white p-8 relative rounded-lg shadow-lg">
        <div onClick={e => navigate(-1)} className="cursor-pointer absolute right-[6%]">x</div>
        <h2 className="text-xl font-semibold mb-4 "><span className="capitalize">{state && state.type}</span> Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black/[.6]" htmlFor="designation">
              Designation
            </label>
            <input
              required
              type="text"
              id="designation"
              name="designation"
              defaultValue={formData.designation}
              onChange={handleChange}
              className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
              placeholder="e.g. Software Engineer"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black/[.6]" htmlFor="profile">
              Profile
            </label>
            <input
              required
              type="text"
              id="profile"
              name="profile"
              defaultValue={formData.profile}
              onChange={handleChange}
              className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
              placeholder="e.g. Operations"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black/[.6]" htmlFor="organization">
              Organization
            </label>
            <input
              required
              type="text"
              id="organization"
              name="organization"
              defaultValue={formData.organization}
              onChange={handleChange}
              className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
              placeholder="e.g. Internshala"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black/[.6]" htmlFor="location">
              Location
            </label>
            <input
              required
              type="text"
              id="location"
              name="location"
              defaultValue={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
              placeholder="e.g. Mumbai"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="currentlyWorking"
              name="currentlyWorking"
              checked={formData.currentlyWorking}
              onChange={handleChange}
              className="h-4 w-4 text-sky-600 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-black" htmlFor="currentlyWorking">
              Is work from home
            </label>
          </div>


          {errors.dateRange && <p className='text-red-600 text-xs'>{errors.dateRange}</p>}

          <div className="flex items-center gap-2 justify-between">
            <div className="mb-6 w-1/2 relative">
              <label className="block text-sm font-medium text-black/[.6]" htmlFor="startDate">
                Start date
              </label>
              <input
                required
                type="date"
                id="startDate"
                name="startDate"
                defaultValue={formData.startDate}
                onChange={handleChange}
                className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
              />
              {errors.startDate && <p className='text-red-600 text-xs absolute top-full left-0'>{errors.startDate}</p>}
            </div>

            <div className="mb-6 w-1/2 relative">
              <label className="block text-sm font-medium text-black/[.6]" htmlFor="endDate">
                End date
              </label>
              <input
                required
                type="date"
                id="endDate"
                name="endDate"
                defaultValue={formData.endDate}
                onChange={handleChange}
                className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
                disabled={formData.currentlyWorking}
              />
              {errors.endDate && <p className='text-red-600 text-xs absolute top-full left-0'>{errors.endDate}</p>}
            </div>
          </div>



          <div className="mb-6">
            <label className="block text-sm font-medium text-black/[.6]" htmlFor="description">
              Description (Optional)
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={formData.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
              placeholder="Short description of work done (max 250 char)"
            />
            <div className="mt-1 hidden text-xs text-gray-500">
              Pro tip:
              <ul className="list-disc ml-4">
                <li>Mention key job responsibilities, measurable impact or results you helped deliver, any awards/recognition you won during this time</li>
                <li>Use action verbs: Built, Led, Drove, Conceptualized, Learnt, etc.</li>
                <li>Use numbers and percentages wherever possible</li>
                <li>Keep it to 3-4 points</li>
              </ul>
            </div>
          </div>

          <button
            type="submit"
            className="bg-sky-500 ml-auto text-white px-4 py-1.5 font-bold rounded-md hover:bg-sky-600"
          >
            {edit ? 'Update' : 'Save'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobDetailsForm;
