import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../../../utils/axios'
import { useDispatch } from 'react-redux';
import { asyncLoad } from '../../../../store/actions/studentAction';

const AccompDetailsForm = ({edit}) => {

  const navigate = useNavigate()
  const [accomplishment, setaccomplishment] = useState('');
  const {state} = useLocation()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(edit){
      setaccomplishment(state.accomplish.accomplishment)
    }
  },[])

  const updateAccomplish = async () => {
    try {
      await axios.post(`/resume/edit-accomplishment/${state.accomplish.id}`, {accomplishment});
      dispatch(asyncLoad(navigate))
      navigate(-1);
    } catch (error) {
      console.error(error.response);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit){
      updateAccomplish()
      return
    }
    addAccomplish()
  };

  const addAccomplish = async () => {
    try {
      await axios.post('/resume/add-accomplishment', {
        accomplishment,
      });
      dispatch(asyncLoad(navigate))
      navigate(-1);
    } catch (error) {
      console.error(error.response);
    }
  }



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
        <h2 className="text-xl font-semibold mb-4">Additional Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-black/[.6]" htmlFor="description">
              Description (Optional)
            </label>
            <p className=' leading-tight my-1 mb-2'>Add your accomplishments such as rewards, recognitions, test scores, certifications, etc. here. You may also add information such as seminars/workshops you have attended or any interests/hobbies you have pursued.</p>

            <textarea
              id="description"
              name="description"
              defaultValue={accomplishment}
              onChange={e => setaccomplishment(e.target.value)}
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
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccompDetailsForm;
