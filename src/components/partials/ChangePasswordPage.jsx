import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { asyncLoad as studentAsyncLoad } from '../../store/actions/studentAction';
import { asyncLoad as employeeAsyncLoad } from '../../store/actions/employeeAction';
import Nav from './navbar/Nav.jsx';
import axios from '../../utils/axios.jsx'

const ChangePasswordForm = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { state } = useLocation()
  const { info } = useSelector(store => 
    state && state.userType === 'student' 
      ? store.studentReducer 
      : store.employeeReducer
  );
  useEffect(() => {
    const asyncLoad = state.userType === 'student' ? studentAsyncLoad : employeeAsyncLoad;
    dispatch(asyncLoad(navigate))
  }, [])

  const [currentpassword, setCurrentpassword] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newpassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle form submission logic here
    try {
      await axios.post(`/${state && state.userType}/resetpassword`,
        {
          currentpassword,
          newpassword,
        }
      )
      alert('Password reset successfully')
      navigate(`/${state && state.userType}/dashboard`)
    } catch (error) {
      alert(error.response.data.message)
      console.log(error.response.data.message)
    }
  };

  return (
    info &&
    <div className="flex  flex-col items-center h-screen overflow-hidden bg-zinc-100">
      <Nav keepactions={true} optionsAtRight={true} name={info.firstname} email={info.email} img={info.avatar ? info.avatar.url :info.organizationname.url} />

      <div className="w-full max-w-md p-8 my-auto space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Change password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="old-password" className="block text-sm font-medium text-gray-700">
              Old password
            </label>
            <input
              id="old-password"
              type="password"
              value={currentpassword}
              onChange={(e) => setCurrentpassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
              New password
            </label>
            <input
              id="new-password"
              type="password"
              value={newpassword}
              onChange={(e) => setNewpassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm new password
            </label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
