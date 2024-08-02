import React, { useState } from 'react';

const JobDetailsForm = () => {
  const [formData, setFormData] = useState({
    designation: '',
    profile: '',
    organization: '',
    location: '',
    startDate: '',
    endDate: '',
    currentlyWorking: false,
    description: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Job Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="designation">
            Designation
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            defaultValue={formData.designation}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="e.g. Software Engineer"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="profile">
            Profile
          </label>
          <input
            type="text"
            id="profile"
            name="profile"
            defaultValue={formData.profile}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="e.g. Operations"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="organization">
            Organization
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            defaultValue={formData.organization}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="e.g. Internshala"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            defaultValue={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="e.g. Mumbai"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="startDate">
            Start date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            defaultValue={formData.startDate}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="endDate">
            End date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            defaultValue={formData.endDate}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            disabled={formData.currentlyWorking}
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="currentlyWorking"
            name="currentlyWorking"
            checked={formData.currentlyWorking}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm font-medium text-gray-700" htmlFor="currentlyWorking">
            Currently working here
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description (Optional)
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={formData.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Short description of work done (max 250 char)"
          />
          <p className="mt-1 text-xs text-gray-500">
            Pro tip:
            <ul className="list-disc ml-4">
              <li>Mention key job responsibilities, measurable impact or results you helped deliver, any awards/recognition you won during this time</li>
              <li>Use action verbs: Built, Led, Drove, Conceptualized, Learnt, etc.</li>
              <li>Use numbers and percentages wherever possible</li>
              <li>Keep it to 3-4 points</li>
            </ul>
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default JobDetailsForm;
