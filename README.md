# SmartCV

![License](https://img.shields.io/badge/license-MIT-green)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)
![GSSoC'25](https://img.shields.io/badge/GSSoC-2025-orange)


# 📄 SmartCV – ATS Score Checker & Resume Builder

🚀 An open-source, modern Resume Builder with a powerful ATS Score Checker that helps users build professional resumes and get instant feedback based on job descriptions.

🧑‍💻 Built with the MERN Stack + Python NLP.  
🎯 Ideal for job seekers, developers, and students preparing for placements.



## 🌟 Features

- ✨ **Drag-and-Drop Resume Builder**
- 🎨 **Multiple Templates & Themes**
- 🧠 **ATS Score Checker** using NLP (Python)
- 📥 Upload PDF/DOCX resumes & get real-time analysis
- 📝 Export resumes as PDF
- 🔐 JWT-based authentication
- 📊 Dashboard for saved resumes and reports
- 📂 Resume versioning and history

[⬆️ Back to Top](#smartcv)



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

[⬆️ Back to Top](#smartcv)


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

[⬆️ Back to Top](#smartcv)


## 🧑‍💻 Getting Started

### 🔧 Prerequisites

- Node.js (v16+)
- Python (3.9+)
- MongoDB (local or Atlas)
- Git

---

[⬆️ Back to Top](#smartcv)


### 📦 Clone & Install

```bash
git clone https://github.com/your-username/smartcv.git
cd smartcv

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
  <a href="#top" style="font-size: 18px; padding: 8px 16px; display: inline-block; border: 1px solid #ccc; border-radius: 6px; text-decoration: none;"  target="_blank" rel="noopener noreferrer">
    ⬆️ Back to Top
  </a>
</p>

[⬆️ Back to Top](#smartcv)


## 📄 License

This project is licensed under the [MIT License](LICENSE).

