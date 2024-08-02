import React, { useState } from 'react';

const Details = () => {
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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg max-w-3xl mx-auto p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Content Strategist - Social/Digital Media Marketer Job</h1>
          <span className="text-blue-600 text-sm">Actively hiring</span>
        </div>
        <div className="text-gray-700 mb-2">
          <span className="font-semibold">Content Strategist - Social/Digital Media Marketer</span>
          <br />
          The Crimson Cape
        </div>
        <div className="text-gray-500 mb-4 flex items-center">
          <svg className="w-5 h-5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14A6 6 0 1110 4a6 6 0 010 12z" />
            <path d="M10 5a5 5 0 00-4.546 3H5a7 7 0 0113.955-.447A5 5 0 0010 5z" />
          </svg>
          Mumbai
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-gray-500 flex items-center">
            <svg className="w-5 h-5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 8h4a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H5a1 1 0 010-2h4V6a1 1 0 012 0v4z" />
            </svg>
            ₹ 2,40,000 - 4,00,000
          </div>
          <div className="text-gray-500 flex items-center">
            <svg className="w-5 h-5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 1116 0A8 8 0 012 10zm8 6a6 6 0 100-12 6 6 0 000 12zM9 8a1 1 0 012 0v4a1 1 0 01-2 0V8z" />
            </svg>
            1+ years
          </div>
          <div className="text-gray-500 flex items-center">
            <svg className="w-5 h-5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 4h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zm1 2v8h8V6H6z" />
            </svg>
            Start Date: Immediately
          </div>
          <div className="text-gray-500 flex items-center">
            <svg className="w-5 h-5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18a8 8 0 110-16 8 8 0 010 16z" />
              <path d="M9 9h2v4H9V9zm0-4h2v2H9V5z" />
            </svg>
            Apply By: 17 Aug 24
          </div>
        </div>
        <div className="text-gray-500 mb-4 flex items-center">
          <svg className="w-5 h-5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14A6 6 0 1110 4a6 6 0 010 12z" />
            <path d="M10 5a5 5 0 00-4.546 3H5a7 7 0 0113.955-.447A5 5 0 0010 5z" />
          </svg>
          32 applicants
        </div>
        <div className="text-gray-500 mb-4 flex items-center">
          <svg className="w-5 h-5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18a8 8 0 110-16 8 8 0 010 16z" />
            <path d="M9 9h2v4H9V9zm0-4h2v2H9V5z" />
          </svg>
          3 weeks ago
        </div>
        <h3 className="text-lg font-semibold mb-2">About the job</h3>
        <p className="text-gray-700 mb-4">
          Develop a tailored and creative Content Strategist and Developer role in your team. This role is critical in driving our social media agenda and takes initiative by developing compelling content that aligns with our brand and business objectives. The ideal candidate should have a passion for storytelling, a keen eye for design, and the ability to identify emerging digital marketing trends and best practices.
        </p>
        <h3 className="text-lg font-semibold mb-2">Key Responsibilities:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Develop and implement a comprehensive content strategy for social media and digital media platforms.</li>
          <li>Collaborate with the marketing team to create engaging content (text, images, video, etc.) for all our social media channels, website, and blogs.</li>
          <li>Monitor and analyze content performance metrics, using insights to optimize future content and strategies.</li>
          <li>Engage with our audience through social media channels, build and maintain relationships with influencers, and respond to customer feedback and queries.</li>
          <li>Stay up-to-date with the latest digital marketing trends, tools, and best practices to ensure continuous improvement and innovation.</li>
          <li>Work closely with designers, videographers, and other content creators to produce visually appealing and impactful content.</li>
          <li>Develop content calendars and schedule posts to ensure timely delivery of content.</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Skills required:</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Adobe Creative Suite</span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Content Marketing</span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Content Writing</span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Copywriting</span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Social Media Marketing</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">Who can apply:</h3>
        <p className="text-gray-700 mb-4">
          Candidates with minimum 1 year of experience.
        </p>
        <p className="text-red-500 mb-4">
          Your resume shows 0.6 years of experience which is less than minimum required experience. Add more experience to make your application stronger. Add experience
        </p>
        <p className="text-gray-700 mb-4">
          This role is not open to relocate to Mumbai and neighboring cities.
        </p>
        <h3 className="text-lg font-semibold mb-2">Other requirements:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Bachelor’s degree in marketing, communications, journalism, or a related field.</li>
          <li>2-5 years experience as a content strategist, content developer, or similar role in a digital marketing or advertising agency.</li>
          <li>Strong writing and editing skills with a portfolio of past work and successful campaigns.</li>
          <li>Excellent storytelling and marketing skills.</li>
          <li>Proficiency in using content management tools, analytics platforms, and digital content management systems (e.g., WordPress).</li>
          <li>Strong analytical skills to interpret metrics and derive actionable insights.</li>
          <li>Ability to work independently and as part of a team in a fast-paced environment.</li>
          <li>Strong project management and organizational skills with the ability to manage multiple tasks.</li>
          <li>Creative thinking and problem-solving abilities.</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Salary:</h3>
        <p className="text-gray-700 mb-4">
          Annual CTC: ₹ 2,40,000 - 4,00,000/year
        </p>
        <h3 className="text-lg font-semibold mb-2">Number of openings:</h3>
        <p className="text-gray-700 mb-4">
          1
        </p>
        <h3 className="text-lg font-semibold mb-2">About The Crimson Cape:</h3>
        <p className="text-gray-700 mb-4">
          The Crimson Cape was founded by Wasim Lakhande and provides services in design, social media, and technology applications.
        </p>
        <div className="text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Apply now
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Add Experience</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="designation" className="block text-gray-700 font-bold mb-2">Designation</label>
            <input 
              type="text" 
              id="designation" 
              name="designation" 
              value={formData.designation} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profile" className="block text-gray-700 font-bold mb-2">Profile</label>
            <input 
              type="text" 
              id="profile" 
              name="profile" 
              value={formData.profile} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="organization" className="block text-gray-700 font-bold mb-2">Organization</label>
            <input 
              type="text" 
              id="organization" 
              name="organization" 
              value={formData.organization} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
            <input 
              type="text" 
              id="location" 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">Start Date</label>
            <input 
              type="date" 
              id="startDate" 
              name="startDate" 
              value={formData.startDate} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endDate" className="block text-gray-700 font-bold mb-2">End Date</label>
            <input 
              type="date" 
              id="endDate" 
              name="endDate" 
              value={formData.endDate} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg" 
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
              className="mr-2"
            />
            <label htmlFor="currentlyWorking" className="text-gray-700 font-bold">Currently Working</label>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea 
              id="description" 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg" 
              rows="4" 
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Experience</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
