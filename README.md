# SmartC.V.

# 📄 SmartResume – ATS Score Checker & Resume Builder

🚀 An open-source, modern Resume Builder with a powerful ATS Score Checker that helps users build professional resumes and get instant feedback based on job descriptions.

🧑‍💻 Built with the MERN Stack + Python NLP.  
🎯 Ideal for job seekers, developers, and students preparing for placements.

---

## 🌟 Features

- ✨ **Drag-and-Drop Resume Builder**
- 🎨 **Multiple Templates & Themes**
- 🧠 **ATS Score Checker** using NLP (Python)
- 📥 Upload PDF/DOCX resumes & get real-time analysis
- 📝 Export resumes as PDF
- 🔐 JWT-based authentication
- 📊 Dashboard for saved resumes and reports
- 📂 Resume versioning and history

---

## 🧱 Tech Stack

| Layer         | Technology                     |
|--------------|----------------------------------|
| Frontend      | React.js, Tailwind CSS, Formik |
| Backend       | Node.js, Express.js            |
| Database      | MongoDB + Mongoose             |
| ATS Engine    | Python (Flask / FastAPI), spaCy, scikit-learn |
| File Uploads  | Multer, React Dropzone         |
| PDF Export    | html2pdf.js / Puppeteer        |
| Hosting       | Vercel (FE), Render/Railway (BE), MongoDB Atlas |

---

## 🧠 ATS Score Checker – How It Works

1. 📤 Upload your resume (PDF or DOCX)
2. 📄 Paste the job description
3. 🔍 The system parses both, extracts keywords, skills, experience
4. 🧮 Matches content using **cosine similarity** and keyword analysis
5. 📊 Returns:
   - ATS Score (0–100)
   - Keyword match percentage
   - Skills gap
   - Suggestions for improvement

> The scoring engine is built with Python and uses NLP libraries like `spaCy`, `scikit-learn`, and `sentence-transformers`.

---

## 🧑‍💻 Getting Started

### 🔧 Prerequisites

- Node.js (v16+)
- Python (3.9+)
- MongoDB (local or Atlas)
- Git

---

### 📦 Clone & Install

```bash
git clone https://github.com/your-username/smartresume.git
cd smartresume

# Install frontend
cd client
npm install

# Install backend
cd ../server
npm install

# Install Python ATS service
cd ../ats-engine
pip install -r requirements.txt

smartresume/
├── client/           # React frontend
├── server/           # Express.js backend
├── ats-engine/       # Python ATS microservice
├── shared/           # Resume templates, config
├── README.md
```
<p align="center">
  <a href="#top" style="font-size: 18px; padding: 8px 16px; display: inline-block; border: 1px solid #ccc; border-radius: 6px; text-decoration: none;">
    ⬆️ Back to Top
  </a>
</p>

