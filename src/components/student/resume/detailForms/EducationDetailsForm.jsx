import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../../../utils/axios'
import { asyncLoad } from '../../../../store/actions/studentAction';
import { useDispatch } from 'react-redux';
import { validateDates } from '../../../../utils/dateValidationHelper';

const EducationDetailsForm = ({edit}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {state} = useLocation()

  const [formData, setFormData] = useState({
    organization: '',
    startDate: '',
    endDate: '',
    degree:'',
    stream:'',
    percentage:'',
  });



  useEffect(()=>{
    if(edit){
      setFormData({...state.edu})
    }
  },[])

  const updateEducation = async () => {
    try {
      await axios.post(`/resume/edit-education/${state.edu.id}`, formData);
      dispatch(asyncLoad())
      navigate(-1);
    } catch (error) {
      console.error(error.response);
    }
  }


  const [errors, setErrors] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { startDate, endDate} = formData;
    const validationErrors = validateDates(startDate, endDate, 'education');
    if (Object.keys(validationErrors).length > 0) {
    console.log(validationErrors)

      setErrors(validationErrors);
      return;
    }

    if(edit){
      updateEducation()
      return
    }
    addEducation()
  };

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const addEducation = async ()=>{
    try {
      await axios.post('/resume/add-education',formData)
      dispatch(asyncLoad())
      navigate(-1)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }


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
        <h2 className="text-xl font-semibold mb-4">Education Details</h2>
        <form onSubmit={handleSubmit}>
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
              maxLength={40}
              min={2}
              className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
              placeholder="e.g. Internshala"
            />
          </div>

          {errors.dateRange && <p className='text-red-600 text-xs'>{errors.dateRange}</p>}
          <div className="flex items-center gap-2 justify-between">

            <div className="mb-6  w-1/2 relative">
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

            <div className="mb-6  w-1/2 relative">
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
          <div className="flex items-center gap-2 justify-between">
            <div className="mb-4  w-1/2">
              <label className="block text-sm font-medium text-black/[.6]" htmlFor="degree">
                Degree
              </label>
              <input
                required
                type="text"
                id="degree"
                name="degree"
                defaultValue={formData.degree}
                onChange={handleChange}
                maxLength={25}
                placeholder='e.g. B.Sc (Hons.)'
                className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4  w-1/2">
              <label className="block text-sm font-medium text-black/[.6]" htmlFor="stream">
                Stream <span className='text-xs'>(Optional)</span>
              </label>
              <input
                required
                type="text"
                id="stream"
                name="stream"
                defaultValue={formData.stream}
                onChange={handleChange}
                maxLength={25}
                placeholder='e.g. Economics'
                className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
      




          <div className="mb-6">
            <label className="block text-sm font-medium text-black/[.6]" htmlFor="percentage">
              Percentage Score <span className='text-xs'>(Recommended)</span>
            </label>
            <input
                required
                type="number"
                id="stream"
                name="stream"
                defaultValue={formData.stream}
                onChange={handleChange}
                placeholder='Out of 100'
                max={100}
                min={0}
                className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
              />
           
          </div>

          <button
            type="submit"
            className="bg-sky-500 ml-auto text-white px-4 py-1.5 font-bold rounded-md hover:bg-sky-600"
          >
             {edit ? 'Update':'Save'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EducationDetailsForm;
