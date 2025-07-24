import { useState } from 'react';
import axios from 'axios';

export default function SkillMatch() {
  const [resume, setResume] = useState('');
  const [jd, setJd] = useState('');
  const [missing, setMissing] = useState([]);
  const [keywords, setKeywords] = useState([]);

  const handleCheck = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/v1/skills/match', {
        resume,
        jobDescription: jd,
      });

      setMissing(res.data.missing || []);
      setKeywords(res.data.keywords || []);
    } catch (err) {
      console.error('Error:', err.message);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Real-Time Skill Matching</h2>

      <textarea
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        placeholder="Paste Resume Here"
        className="w-full border p-2 h-32 mb-4"
      />

      <textarea
        value={jd}
        onChange={(e) => setJd(e.target.value)}
        placeholder="Paste Job Description Here"
        className="w-full border p-2 h-32 mb-4"
      />

      <button onClick={handleCheck} className="bg-blue-600 text-white px-4 py-2 rounded">
        Match Skills
      </button>

      <div className="mt-6">
        {missing.length > 0 && (
          <div className="bg-yellow-100 p-3 rounded mb-3">
            <h3 className="font-semibold">🔍 Missing Skills:</h3>
            <ul>{missing.map((skill, i) => <li key={i}>• {skill}</li>)}</ul>
          </div>
        )}

        {keywords.length > 0 && (
          <div className="bg-green-100 p-3 rounded">
            <h3 className="font-semibold">✅ Matching Keywords:</h3>
            <ul>{keywords.map((k, i) => <li key={i}>• {k}</li>)}</ul>
          </div>
        )}
      </div>
    </div>
  );
}
