import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../../utils/axios'

const RespDetailsForm = () => {

  const navigate = useNavigate()
  const [position, setposition] = useState('');



  const addResposibility = async () => {
    try {
      await axios.post('/resume/add-responsibility', {
        position,
      });
      navigate(-1);
    } catch (error) {
      console.error(error.response);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addResposibility()
  };

  const ref = useRef(null)

  const handleBack = (e) => {
    if (ref.current === e.target) {
      navigate(-1);
    }
  }

  return (
    <div ref={ref} onClick={e => handleBack(e)} className="fixed w-full h-screen overflow-y-auto py-[1vw] bg-black/[.3] z-[99] top-0 right-0">
      <div className="max-w-[45vw] min-w-[30rem] mx-auto bg-white p-8 relative rounded-lg shadow-lg">
        <div onClick={e => navigate(-1)} className="cursor-pointer absolute right-[6%]">x</div>
        <h2 className="text-xl font-semibold mb-4">Job Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-black/[.6]" htmlFor="description">
              Description (Optional)
            </label>
            <p className=' text-black/[.6] leading-tight my-1 mb-2'>If you have been/are an active part of societies, conducted any events or led a team, add details here</p>

            <textarea
              id="description"
              name="description"
              defaultValue={position}
              onChange={e => setposition(e.target.value)}
              rows="6"
              required
              maxLength={250}
              minLength={1}
              className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
              placeholder="Short description of work done (max 250 char)"
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

export default RespDetailsForm;
