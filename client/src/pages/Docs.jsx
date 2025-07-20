import {
  Book,
  Code,
  Database,
  Download,
  Github,
  Layers,
  Settings,
  Terminal,
  FileText,
  Brain,
  Zap,
  CheckCircle,
  ExternalLink,
  Copy,
  Play,
  Folder,
  Server,
  Globe,
  Monitor,
  Smartphone,
  Users,
  ArrowRight,
  Info,
} from "lucide-react";
import React, { useState } from "react";

function Docs() {
  const [activeSection, setActiveSection] = useState("overview");
  const [copiedCommand, setCopiedCommand] = useState("");

  const copyToClipboard = (text, commandId) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(commandId);
    setTimeout(() => setCopiedCommand(""), 2000);
  };

  const navigationItems = [
    { id: "overview", label: "Overview", icon: Book },
    { id: "features", label: "Features", icon: Zap },
    { id: "tech-stack", label: "Tech Stack", icon: Layers },
    { id: "ats-engine", label: "ATS Engine", icon: Brain },
    { id: "installation", label: "Installation", icon: Download },
    { id: "project-structure", label: "Project Structure", icon: Folder },
    { id: "api-reference", label: "API Reference", icon: Code },
    { id: "deployment", label: "Deployment", icon: Server },
  ];

  const features = [
    {
      icon: FileText,
      title: "Drag-and-Drop Resume Builder",
      description: "Intuitive interface for building resumes",
    },
    {
      icon: Monitor,
      title: "Multiple Templates & Themes",
      description: "Professional templates for every industry",
    },
    {
      icon: Brain,
      title: "ATS Score Checker",
      description: "NLP-powered analysis using Python",
    },
    {
      icon: Download,
      title: "PDF/DOCX Upload",
      description: "Upload existing resumes for analysis",
    },
    {
      icon: FileText,
      title: "PDF Export",
      description: "Download resumes in professional format",
    },
    {
      icon: Settings,
      title: "JWT Authentication",
      description: "Secure user authentication system",
    },
    {
      icon: Database,
      title: "Dashboard & Analytics",
      description: "Manage resumes and view reports",
    },
    {
      icon: Folder,
      title: "Version Control",
      description: "Track resume changes over time",
    },
  ];

  const techStack = [
    {
      layer: "Frontend",
      tech: "React.js, Tailwind CSS, Formik",
      icon: Monitor,
    },
    { layer: "Backend", tech: "Node.js, Express.js", icon: Server },
    { layer: "Database", tech: "MongoDB + Mongoose", icon: Database },
    {
      layer: "ATS Engine",
      tech: "Python (Flask/FastAPI), spaCy, scikit-learn",
      icon: Brain,
    },
    { layer: "File Uploads", tech: "Multer, React Dropzone", icon: Download },
    { layer: "PDF Export", tech: "html2pdf.js / Puppeteer", icon: FileText },
    {
      layer: "Hosting",
      tech: "Vercel (FE), Render/Railway (BE), MongoDB Atlas",
      icon: Globe,
    },
  ];

  const atsSteps = [
    {
      step: 1,
      title: "Upload Resume",
      description: "Upload your resume (PDF or DOCX format)",
    },
    {
      step: 2,
      title: "Add Job Description",
      description: "Paste the target job description",
    },
    {
      step: 3,
      title: "Content Parsing",
      description: "System extracts keywords, skills, and experience",
    },
    {
      step: 4,
      title: "Analysis",
      description:
        "Matches content using cosine similarity and keyword analysis",
    },
    {
      step: 5,
      title: "Results",
      description:
        "Get ATS Score (0-100), keyword matches, skills gap, and suggestions",
    },
  ];

  const installCommands = [
    {
      id: "clone",
      title: "Clone Repository",
      command:
        "git clone https://github.com/AbhinavDhiman34/SmartC.V.git\ncd SmartC.V",
    },
    {
      id: "frontend",
      title: "Install Frontend Dependencies",
      command: "cd client\nnpm install",
    },
    {
      id: "backend",
      title: "Install Backend Dependencies",
      command: "cd ../server\nnpm install",
    },
    {
      id: "python",
      title: "Install Python ATS Service",
      command: "cd ../ats-engine\npip install -r requirements.txt",
    },
  ];

  const projectStructure = `smartresume/
  ├── client/           # React frontend
  │   ├── src/
  │   │   ├── components/
  │   │   ├── pages/
  │   │   ├── hooks/
  │   │   └── utils/
  ├── server/           # Express.js backend
  │   ├── models/
  │   ├── routes/
  │   ├── middleware/
  │   └── controllers/
  ├── ats-engine/       # Python ATS microservice
  │   ├── models/
  │   ├── services/
  │   └── api/
  ├── shared/           # Resume templates, config
  └── README.md`;

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                📄 SmartC.V. - ATS Score Checker & Resume Builder
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                🚀 An open-source, modern Resume Builder with a powerful ATS
                Score Checker that helps users build professional resumes and
                get instant feedback based on job descriptions.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-2">
                  🧑‍💻 Built with the MERN Stack + Python NLP
                </h3>
                <p className="text-blue-800">
                  🎯 Ideal for job seekers, developers, and students preparing
                  for placements.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <Users className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-green-900 mb-2">
                  For Job Seekers
                </h3>
                <p className="text-green-800 text-sm">
                  Create ATS-optimized resumes that pass automated screening
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <Code className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-purple-900 mb-2">
                  For Developers
                </h3>
                <p className="text-purple-800 text-sm">
                  Open-source platform to contribute and learn from
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <Book className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="font-semibold text-orange-900 mb-2">
                  For Students
                </h3>
                <p className="text-orange-800 text-sm">
                  Prepare professional resumes for campus placements
                </p>
              </div>
            </div>
          </div>
        );

      case "features":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🌟 Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "tech-stack":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🧱 Tech Stack
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Layer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Technology
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {techStack.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4 text-blue-600" />
                          <span className="font-medium text-gray-900">
                            {item.layer}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{item.tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "ats-engine":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🧠 ATS Score Checker – How It Works
            </h2>
            <div className="space-y-6">
              {atsSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < atsSteps.length - 1 && (
                    <div className="w-px h-8 bg-gray-300 ml-4 mt-8" />
                  )}
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-900 mb-2">
                    Technical Implementation
                  </h4>
                  <p className="text-yellow-800 text-sm">
                    The scoring engine is built with Python and uses NLP
                    libraries like{" "}
                    <code className="bg-yellow-100 px-1 rounded">spaCy</code>,
                    <code className="bg-yellow-100 px-1 rounded mx-1">
                      scikit-learn
                    </code>
                    , and
                    <code className="bg-yellow-100 px-1 rounded ml-1">
                      sentence-transformers
                    </code>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "installation":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🧑‍💻 Getting Started
            </h2>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                🔧 Prerequisites
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">Node.js (v16+)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">Python (3.9+)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">
                    MongoDB (local or Atlas)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">Git</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                📦 Installation Steps
              </h3>
              {installCommands.map((item, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm font-medium">
                      {item.title}
                    </span>
                    <button
                      onClick={() => copyToClipboard(item.command, item.id)}
                      className="flex items-center gap-1 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs text-gray-300 transition-colors"
                    >
                      {copiedCommand === item.id ? (
                        <CheckCircle className="h-3 w-3" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                      {copiedCommand === item.id ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{item.command}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        );

      case "project-structure":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              📂 Project Structure
            </h2>
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300 font-medium">
                  Directory Structure
                </span>
                <button
                  onClick={() => copyToClipboard(projectStructure, "structure")}
                  className="flex items-center gap-1 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm text-gray-300 transition-colors"
                >
                  {copiedCommand === "structure" ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copiedCommand === "structure" ? "Copied!" : "Copy"}
                </button>
              </div>
              <pre className="text-gray-300 text-sm overflow-x-auto">
                <code>{projectStructure}</code>
              </pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <Monitor className="h-6 w-6 text-blue-600 mb-2" />
                <h4 className="font-medium text-blue-900 mb-1">client/</h4>
                <p className="text-blue-800 text-sm">
                  React frontend application with components and pages
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <Server className="h-6 w-6 text-green-600 mb-2" />
                <h4 className="font-medium text-green-900 mb-1">server/</h4>
                <p className="text-green-800 text-sm">
                  Express.js backend with API routes and middleware
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <Brain className="h-6 w-6 text-purple-600 mb-2" />
                <h4 className="font-medium text-purple-900 mb-1">
                  ats-engine/
                </h4>
                <p className="text-purple-800 text-sm">
                  Python microservice for ATS scoring
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <Folder className="h-6 w-6 text-orange-600 mb-2" />
                <h4 className="font-medium text-orange-900 mb-1">shared/</h4>
                <p className="text-orange-800 text-sm">
                  Resume templates and shared configuration
                </p>
              </div>
            </div>
          </div>
        );

      case "api-reference":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🔌 API Reference
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Authentication Endpoints
                </h3>
                <div className="space-y-4">
                  <div className="border border-gray-100 rounded p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono">
                        POST
                      </span>
                      <code className="text-gray-700">/api/auth/register</code>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Register a new user account
                    </p>
                  </div>
                  <div className="border border-gray-100 rounded p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono">
                        POST
                      </span>
                      <code className="text-gray-700">/api/auth/login</code>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Authenticate user and return JWT token
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Resume Management
                </h3>
                <div className="space-y-4">
                  <div className="border border-gray-100 rounded p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-mono">
                        GET
                      </span>
                      <code className="text-gray-700">/api/resumes</code>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Get all resumes for authenticated user
                    </p>
                  </div>
                  <div className="border border-gray-100 rounded p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono">
                        POST
                      </span>
                      <code className="text-gray-700">/api/resumes</code>
                    </div>
                    <p className="text-gray-600 text-sm">Create a new resume</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  ATS Analysis
                </h3>
                <div className="space-y-4">
                  <div className="border border-gray-100 rounded p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono">
                        POST
                      </span>
                      <code className="text-gray-700">/api/ats/analyze</code>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Analyze resume against job description and return ATS
                      score
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

        case "deployment":
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">🚀 Deployment</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Frontend */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <Globe className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">
            Frontend (DigitalOcean App Platform)
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Deploy your React frontend on DigitalOcean App Platform with GitHub integration.
          </p>
          <a
            href="https://docs.digitalocean.com/products/app-platform/"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
          >
            Setup Guide <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Backend */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <Server className="h-8 w-8 text-green-600 mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">
            Backend (Node.js on DigitalOcean)
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Deploy your Node.js/Express backend using DigitalOcean Droplets with secure CI/CD setup.
          </p>
          <a
            href="https://docs.digitalocean.com/products/droplets/how-to/deploy-nodejs/"
            className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-sm"
          >
            Deploy Node.js <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Database */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <Database className="h-8 w-8 text-purple-600 mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">
            Database (MongoDB Atlas)
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Use MongoDB Atlas for a secure and scalable cloud database.
          </p>
          <a
            href="https://mongodb.com/atlas"
            className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm"
          >
            MongoDB Atlas <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* CI/CD Section */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="font-semibold text-green-900 mb-4">CI/CD with GitHub Actions</h3>
        <p className="text-green-800 mb-4">
          All contributions go through PRs on the <code>dev</code> branch. Deployment only happens when changes are merged into <code>main</code>.
        </p>
        <div className="bg-white border border-green-200 rounded p-4">
          <pre className="text-sm text-gray-700 overflow-x-auto">
{`# .github/workflows/deploy.yml
name: Deploy to DigitalOcean

on:
  push:
    branches: [ main ]  # Only deploy on merge to main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: \${{ secrets.DIGITALOCEAN_HOST }}
          username: \${{ secrets.DIGITALOCEAN_USER }}
          key: \${{ secrets.DIGITALOCEAN_SSH_KEY }}
          script: |
            cd /var/www/your-app
            git pull origin main
            npm install
            pm2 restart all
`}
          </pre>
        </div>
        <p className="text-sm text-gray-600 mt-3">
          🔐 Secrets like <code>DIGITALOCEAN_HOST</code>, <code>USER</code>, and <code>SSH_KEY</code> are safely stored in GitHub Actions secrets.
        </p>
      </div>

      {/* Environment Variables */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-4">Environment Variables</h3>
        <p className="text-blue-800 mb-4">
          Add these environment variables in your <code>.env</code> and <code>.env.local</code> files.
        </p>
        <div className="bg-white border border-blue-200 rounded p-4">
          <pre className="text-sm text-gray-700">
{`# Backend (.env)
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ATS_SERVICE_URL=your_python_service_url

# Frontend (.env.local)
REACT_APP_API_URL=your_backend_url
REACT_APP_ATS_API_URL=your_ats_service_url`}
          </pre>
        </div>
      </div>
    </div>
  );


      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-0">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">Documentation</h1>
            <p className="text-gray-600 text-sm mt-1">
              SmartC.V. Technical Docs
            </p>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors ${
                      activeSection === item.id
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-gray-200 mt-auto">
            <a
              href="https://github.com/AbhinavDhiman34/SmartC.V."
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl">{renderSection()}</div>
        </div>
      </div>

      {/* Quick Links Footer */}
      <div className="bg-gray-900 text-white py-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Quick Start</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="#installation" className="hover:text-white">
                    Installation Guide
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-white">
                    Features Overview
                  </a>
                </li>
                <li>
                  <a href="#ats-engine" className="hover:text-white">
                    ATS Engine
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Development</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="#project-structure" className="hover:text-white">
                    Project Structure
                  </a>
                </li>
                <li>
                  <a href="#api-reference" className="hover:text-white">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#tech-stack" className="hover:text-white">
                    Tech Stack
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Deployment</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="#deployment" className="hover:text-white">
                    Deployment Guide
                  </a>
                </li>
                <li>
                  <a href="https://vercel.com" className="hover:text-white">
                    Vercel Hosting
                  </a>
                </li>
                <li>
                  <a href="https://railway.app" className="hover:text-white">
                    Railway Backend
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Community</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a
                    href="https://github.com/AbhinavDhiman34/SmartC.V."
                    className="hover:text-white"
                  >
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AbhinavDhiman34/SmartC.V./issues"
                    className="hover:text-white"
                  >
                    Report Issues
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AbhinavDhiman34/SmartC.V./blob/main/CONTRIBUTING.md"
                    className="hover:text-white"
                  >
                    Contributing Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docs;
