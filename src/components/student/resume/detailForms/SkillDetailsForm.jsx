import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../../../utils/axios'
import { useDispatch } from 'react-redux';
import { asyncLoad } from '../../../../store/actions/studentAction';

const SkillDetailsForm = ({edit}) => {

  const navigate = useNavigate()
  const [skill, setskill] = useState('');
  const [level, setlevel] = useState('');
  const {state} = useLocation()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(edit){
      setskill(state.skill.skill)
      setlevel(state.skill.level)
    }
  },[])

  const addSkill = async () => {
    try {
      await axios.post('/resume/add-skill', {
        skill,level
      });
      dispatch(asyncLoad())
      navigate(-1);
    } catch (error) {
      console.error(error.response);
    }
  }

  const updateSkill = async () => {
    try {
      await axios.post(`/resume/edit-skill/${state.skill.id}`, {
        skill,level
      });
      dispatch(asyncLoad())
      navigate(-1);
    } catch (error) {
      console.error(error.response);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit){
      updateSkill()
      return
    }
    addSkill()
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
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-medium text-black/[.6]" htmlFor="skill">
              Add skill
            </label>

            <input
            type='text'
              id="skill"
              name="skill"
              value={skill}
              onChange={e => setskill(e.target.value)}
              required
              maxLength={20}
              minLength={1}
              className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
              placeholder="eg. Adobe Photoshop"
            />

          </div>
          <div className="mb-6">
    <label className="block text-sm font-medium text-black/[.6]" htmlFor="level">
      Level
    </label>
    <select
      id="level"
      name="level"
      value={level}
      onChange={e => setlevel(e.target.value)}
      required
      className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
    >
      <option value="" disabled>Select level</option>
      <option value="basic">Basic</option>
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
    </select>
  </div>

          <button
            type="submit"
            className="bg-sky-500 ml-auto text-white px-4 py-1.5 font-bold rounded-md hover:bg-sky-600"
          >
            {edit ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkillDetailsForm;
