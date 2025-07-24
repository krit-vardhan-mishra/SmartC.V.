import React from "react";
import { motion } from "framer-motion";

const templates = [
  {
    name: "Modern",
    key: "modern",
    description: "Sleek layout with bold headings and clean sections.",
    preview: (
      <div className="bg-white text-black p-4 rounded-lg shadow">
        <h1 className="text-xl font-bold">John Doe</h1>
        <p className="text-sm">Software Engineer</p>
        <div className="mt-2 border-t pt-2 text-xs">
          <p>📍 San Francisco | 📧 john@example.com</p>
          <p className="mt-1 font-semibold">Experience</p>
          <ul className="list-disc ml-4">
            <li>Frontend Developer @ Google</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    name: "Classic",
    key: "classic",
    description: "Traditional serif font with boxed layout.",
    preview: (
      <div className="bg-gray-100 text-black p-4 rounded border border-gray-300">
        <h1 className="text-2xl font-serif font-semibold">John Doe</h1>
        <p className="italic text-sm">Software Engineer</p>
        <hr className="my-2" />
        <p className="font-bold text-sm">Experience:</p>
        <p className="text-xs">- Frontend Developer at Google</p>
      </div>
    ),
  },
  {
    name: "ATS-Safe",
    key: "ats-safe",
    description: "Minimal layout optimized for ATS parsing.",
    preview: (
      <div className="bg-white border border-gray-400 p-4 text-xs font-mono">
        <h1 className="text-base font-bold">John Doe</h1>
        <p>Software Engineer</p>
        <p>Email: john@example.com | Location: SF</p>
        <p className="mt-2 font-semibold">Experience:</p>
        <p>- Google, Frontend Developer</p>
      </div>
    ),
  },
];

const ResumeTemplates = ({ onSelectTemplate, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl shadow-2xl w-full max-w-5xl p-6 overflow-y-auto max-h-[90vh]"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Choose a Resume Template</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.key}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold mb-1">{template.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{template.description}</p>
              <div className="border h-48 overflow-hidden rounded bg-gray-50 p-2 mb-3">
                {template.preview}
              </div>
              <button
                onClick={() => {
                  onSelectTemplate(template.key);
                  onClose();
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
              >
                Use this Template
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeTemplates;
