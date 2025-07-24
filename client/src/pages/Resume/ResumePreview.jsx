import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ResumePreview = () => {
  const { resumeId } = useParams();
  const resumes = useSelector((state) => state.resume.resumes);
  const resume = resumes.find((r) => r.id === resumeId);

  if (!resume) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        Resume not found 😕
      </div>
    );
  }

  const { personalInfo, education, experience, skills, theme } = resume;

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div
        className={`max-w-3xl mx-auto p-8 rounded-xl shadow-lg ${
          theme === "classic"
            ? "bg-white text-black"
            : theme === "modern"
            ? "bg-gray-900 text-white"
            : "bg-white"
        }`}
      >
        <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
        <p className="text-md">{personalInfo.email}</p>
        <p className="mb-6">{personalInfo.phone}</p>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          {education.map((edu, idx) => (
            <div key={idx}>
              <p className="font-medium">{edu.degree}</p>
              <p className="text-sm text-gray-500">{edu.institution}</p>
            </div>
          ))}
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          {experience.map((exp, idx) => (
            <div key={idx}>
              <p className="font-medium">{exp.title}</p>
              <p className="text-sm text-gray-500">{exp.company}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumePreview;
