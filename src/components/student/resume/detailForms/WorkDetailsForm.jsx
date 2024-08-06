import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../../../utils/axios'
import { useDispatch } from 'react-redux';
import { asyncLoad } from '../../../../store/actions/studentAction';

const WorkDetailsForm = ({edit}) => {

  const navigate = useNavigate()
  const [title, settitle] = useState('');
  const [link, setlink] = useState('');
  const {state} = useLocation()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(edit){
      settitle(state.work.title)
      setlink(state.work.link)
    }
  },[])

  
  const updateWork = async () => {
    try {
      await axios.post(`/resume/edit-work/${state.work.id}`, {
        title,link
      });
      dispatch(asyncLoad(navigate))
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  }




  const addWork = async () => {
    try {
      await axios.post('/resume/add-work', {
        title,link
      });
      dispatch(asyncLoad(navigate))
      navigate(-1);
    } catch (error) {
      console.error(error.response);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit){
      updateWork()
      return
    }
    addWork()
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
        <h2 className="text-xl font-semibold mb-4">Work details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-medium text-black/[.6]" htmlFor="title">
              Add workspace
            </label>

            <input
            type='text'
              id="title"
              name="title"
              value={title}
              onChange={e => settitle(e.target.value)}
              required
              maxLength={20}
              minLength={1}
              className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
              placeholder="eg. Adobe Photoshop"
            />

          </div>
          <div className="mb-6">
    <label className="block text-sm font-medium text-black/[.6]" htmlFor="link">
      link
    </label>
    <input
              id="link"
              name="link"
              type="url"
              value={link}
              onChange={e => setlink(e.target.value)}
              required
              className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
              placeholder="eg. http://profile.com"
            />
  </div>

          <button
            type="submit"
            className="bg-sky-500 ml-auto text-white px-4 py-1.5 font-bold rounded-md hover:bg-sky-600"
          >
            {edit ? 'Update' : 'Add'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkDetailsForm;
