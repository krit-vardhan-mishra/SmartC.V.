import React, { useState } from 'react';
import ResumeTemplate from './ResumePreview';

const ResumeEditor = () => {
  const [resumeData, setResumeData] = useState({
    name: 'Sarang OP',
    role: 'AI/ML Enthusiast',
    about: 'Highly motivated and curious developer exploring AI-driven applications. Passionate about real-world impact through clean code.',
    skills: ['Python', 'Machine Learning', 'React', 'Git', 'APIs']
  });

  const [theme, setTheme] = useState('modern');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (e) => {
    const skillList = e.target.value.split(',').map(s => s.trim());
    setResumeData((prev) => ({ ...prev, skills: skillList }));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col md:flex-row gap-6">
      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Your Resume</h2>
        
        <div className="mb-4">
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={resumeData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Role / Title</label>
          <input
            type="text"
            name="role"
            value={resumeData.role}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">About</label>
          <textarea
            name="about"
            value={resumeData.about}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            rows={4}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Skills (comma separated)</label>
          <input
            type="text"
            value={resumeData.skills.join(', ')}
            onChange={handleSkillChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Select Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="modern">Modern</option>
            <option value="classic">Classic</option>
            <option value="ats">ATS Safe</option>
          </select>
        </div>

        <button
          onClick={() => alert('Save functionality coming soon...')}
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Save Resume
        </button>
      </div>

      {/* Live Preview */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Live Preview</h2>
        <ResumeTemplate theme={theme} data={resumeData} />
      </div>
    </div>
  );
};

export default ResumeEditor;
