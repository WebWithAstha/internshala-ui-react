import axios from '../../../../utils/axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncLoad } from '../../../../store/actions/studentAction';

const PersonalDetailsForm = () => {

    const navigate = useNavigate()
    const {info} = useSelector(store=>store.studentReducer)
    const dispatch= useDispatch()



  const [formData, setFormData] = useState({
    firstname: info && info.firstname,
    lastname: info && info.lastname,
    email: info && info.email,
    contact: info && info.contact,
    city: info && info.city,
    gender: info && info.gender,
    languages: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevState) => {
      if (checked) {
        return { ...prevState, [name]: [...prevState[name], value] };
      } else {
        return { ...prevState, [name]: prevState[name].filter((lang) => lang !== value) };
      }
    });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profilePicture: file, profilePictureUrl: imageUrl });
    }
  };

  const triggerFileInput = () => {
    document.getElementById('profilePictureInput').click();
  };

  const updateDetails = async () => {
    try {
        await axios.post(`/student/update/${info && info._id}`,formData); 
        navigate(-1);
        dispatch(asyncLoad(navigate))

    } catch (error) {
        console.log(error.response.data.message);        
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    updateDetails();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="w-full h-screen z-[99] fixed flex items-center overflow-y-auto py-10  justify-center bg-black/[.2] top-0 left-0 ">

    <div className="bg-white p-8 relative rounded-lg shadow-lg max-w-md mx-auto mt-32">
    <i onClick={e => navigate(-1)} className="fa-solid fa-xmark cursor-pointer absolute right-[6%]"></i>
          <h2 className="text-xl font-semibold mb-6">Personal details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black/[.6]" htmlFor="firstname">
            First name
          </label>
          <input
            // required
            type="text"
            id="firstname"
            name="firstname"

            defaultValue={formData.firstname}
            onChange={handleChange}
            maxLength={25}
            className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
            placeholder="e.g. John"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-black/[.6]" htmlFor="lastname">
            Last name (Optional)
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            defaultValue={formData.lastname}
            onChange={handleChange}
            className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
          />
        </div>


       <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-black/[.6]">Profile picture (Recommended)</label>
          {formData.profilePictureUrl && (
            <div className="mt-4">
              <img
                src={formData.profilePictureUrl}
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
              onChange={handleProfilePictureChange}
              className="hidden"
            />
          </div>
          <p className="mt-2 text-xs text-gray-500">Upload a professional picture of yourself (Max file size: 1Mb and max resolution: 500px x 500px. File type - jpeg, jpg, png, gif)</p>
         
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-black/[.6]" htmlFor="email">
            Email
          </label>
          <input
            // required
            type="email"
            id="email"
            name="email"
            defaultValue={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
            placeholder="e.g. john@example.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-black/[.6]" htmlFor="contact">
            Contact number
          </label>
          <input
            // required
            type="text"
            id="contact"
            name="contact"
            defaultValue={formData.contact}
            onChange={handleChange}
            className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
            placeholder="e.g. +91 1234567890"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-black/[.6]" htmlFor="city">
            Current city
          </label>
          <input
            // required
            type="text"
            id="city"
            name="city"
            defaultValue={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full px-2 py-1.5 border text-sm border-gray-300 rounded-md"
            placeholder="e.g. Bhopal"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-black/[.6]">Gender</label>
          <div className="flex items-center mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                className="h-4 w-4 text-sky-600 border-gray-300 rounded"
              />
              <span className="ml-2 block text-sm text-black">Female</span>
            </label>
            <label className="flex items-center ml-4">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                className="h-4 w-4 text-sky-600 border-gray-300 rounded"
              />
              <span className="ml-2 block text-sm text-black">Male</span>
            </label>
            <label className="flex items-center ml-4">
              <input
                type="radio"
                name="gender"
                value="Others"
                checked={formData.gender === 'Others'}
                onChange={handleChange}
                className="h-4 w-4 text-sky-600 border-gray-300 rounded"
              />
              <span className="ml-2 block text-sm text-black">Others</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-black/[.6]">Languages you know</label>
          <div className="flex flex-wrap mt-2">
            {['English', 'Hindi', 'Telugu', 'Tamil', 'Marathi', 'French', 'Japanese'].map((lang) => (
              <label key={lang} className="flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  name="languages"
                  value={lang}
                  checked={formData.languages.includes(lang)}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-sky-600 border-gray-300 rounded"
                />
                <span className="ml-2 block text-sm text-black">{lang}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-sky-500 ml-auto text-white px-4 py-1.5 font-bold rounded-md hover:bg-sky-600"
        >
          Update
        </button>
      </form>
    </div>
    </div>
  );
};

export default PersonalDetailsForm;
