import { useState } from "react";
import axios from "axios";

export default function SkillMatch() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [missing, setMissing] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleMatch = async () => {
    setLoading(true);
    setError("");
    setMissing([]);
    setKeywords([]);

    try {
      const response = await axios.post(
        "http://localhost:9000/api/v1/skills/match",
        { resume, jobDescription }
      );
      setMissing(response.data.missing || []);
      setKeywords(response.data.keywords || []);
    } catch (err) {
      setError("Failed to fetch skill matches. Try again.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Real-Time Skill Matching</h1>

      <label className="block mb-2 font-semibold">Paste Your Resume Text</label>
      <textarea
        rows={8}
        className="w-full border rounded p-2 mb-4"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        placeholder="Paste your resume here..."
      />

      <label className="block mb-2 font-semibold">Paste Job Description</label>
      <textarea
        rows={8}
        className="w-full border rounded p-2 mb-4"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the job description here..."
      />

      <button
        onClick={handleMatch}
        disabled={loading || !resume || !jobDescription}
        className={`px-4 py-2 rounded text-white ${
          loading || !resume || !jobDescription
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Matching..." : "Match Skills"}
      </button>

      {error && (
        <p className="mt-4 text-red-600 font-semibold">
          {error}
        </p>
      )}

      {(missing.length > 0 || keywords.length > 0) && (
        <div className="mt-6 space-y-4">
          {missing.length > 0 && (
            <div className="bg-yellow-100 border border-yellow-400 p-4 rounded">
              <h2 className="font-semibold mb-2">🔍 Missing Skills</h2>
              <ul className="list-disc pl-5">
                {missing.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          )}

          {keywords.length > 0 && (
            <div className="bg-green-100 border border-green-400 p-4 rounded">
              <h2 className="font-semibold mb-2">✅ Matching Keywords</h2>
              <ul className="list-disc pl-5">
                {keywords.map((keyword, idx) => (
                  <li key={idx}>{keyword}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
