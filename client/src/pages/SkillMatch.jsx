import { useState } from "react";
import axios from "axios";

export default function SkillMatch() {
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleMatch = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const formData = new FormData();

      // Prioritize file upload if resumeFile exists
      if (resumeFile) {
        formData.append("resume_file", resumeFile);
      } else {
        formData.append("resume_text", resumeText);
      }

      formData.append("keywords", jobDescription);

      const response = await axios.post("http://localhost:8000/score", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(response.data);
    } catch (err) {
      setError("Skill match failed. Try again.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-3">
            Resume Score & Skill Match
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Upload your resume and job description to get an instant compatibility score and skill analysis
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 space-y-8">
            {/* Resume Upload Section */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                📄 Upload Resume File
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => setResumeFile(e.target.files[0])}
                />
                <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                  resumeFile 
                    ? 'border-green-400 bg-green-50' 
                    : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50'
                }`}>
                  {resumeFile ? (
                    <div className="flex items-center justify-center space-x-3">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-green-700 font-medium">{resumeFile.name}</span>
                    </div>
                  ) : (
                    <div>
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-gray-600 font-medium">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX, or TXT files</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-sm text-gray-500 bg-white font-medium">OR</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Resume Text Section */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-800">
                ✏️ Paste Resume Text
              </label>
              <div className="relative">
                <textarea
                  rows={6}
                  className={`w-full border-2 rounded-xl p-4 text-gray-700 placeholder-gray-400 transition-all duration-300 resize-none ${
                    resumeFile !== null 
                      ? 'border-gray-200 bg-gray-50 cursor-not-allowed' 
                      : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 bg-white'
                  }`}
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  placeholder="Paste your resume text here..."
                  disabled={resumeFile !== null}
                />
                {resumeFile && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-90 rounded-xl">
                    <span className="text-gray-500 font-medium">File upload selected</span>
                  </div>
                )}
              </div>
            </div>

            {/* Job Description Section */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-800">
                🎯 Job Description / Keywords
              </label>
              <textarea
                rows={6}
                className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 resize-none"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description or key skills/requirements here..."
              />
            </div>

            {/* Action Button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={handleMatch}
                disabled={loading || (!resumeFile && !resumeText) || !jobDescription}
                className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform ${
                  loading || (!resumeFile && !resumeText) || !jobDescription
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                }`}
              >
                {loading ? (
                  <div className="flex items-center space-x-3">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Analyzing Match...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Get Match Score</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-6 bg-red-50 border-2 border-red-200 rounded-2xl p-6 animate-fade-in">
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-700 font-semibold text-lg">{error}</p>
            </div>
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8 animate-fade-in shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-800">Match Analysis Complete!</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 font-medium">Compatibility Score</span>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    (result.total_score || 0) >= 80 ? 'bg-green-100 text-green-800' :
                    (result.total_score || 0) >= 60 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {(result.total_score || 0) >= 80 ? 'Excellent' :
                     (result.total_score || 0) >= 60 ? 'Good' : 'Needs Work'}
                  </div>
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">
                  {result.total_score || 'N/A'}%
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      (result.total_score || 0) >= 80 ? 'bg-green-500' :
                      (result.total_score || 0) >= 60 ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${result.total_score || 0}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-green-100">
                  <div className="flex items-center space-x-2 mb-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span className="font-semibold text-gray-700">Keywords Matched</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{result.keywords_used}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
                    <div className="flex items-center space-x-2 mb-1">
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-600">Time</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{result.processing_time}s</p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
                    <div className="flex items-center space-x-2 mb-1">
                      <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-600">Method</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900 capitalize">{result.extraction_method}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}