# SmartCV Professional - Enterprise ATS Resume Analysis Platform

🚀 **Next-generation AI-powered resume analysis and ATS scoring system with enterprise-grade design and advanced PDF processing capabilities.**

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![Python](https://img.shields.io/badge/python-3.8+-green.svg)
![Flask](https://img.shields.io/badge/Flask-3.1.1-red.svg)
![License](https://img.shields.io/badge/license-MIT-yellow.svg)

## ✨ Features

### 🎨 **Professional Enterprise Design**
- **Glass-morphism UI** with corporate color scheme
- **Responsive design** that works on all devices
- **Professional typography** using Inter font family
- **Modern animations** and smooth transitions
- **Accessibility-focused** interface design

### 🔧 **Advanced PDF Processing**
- **Multi-method extraction**: pdfplumber → PyPDF2 → OCR fallback
- **OCR support** for stylized resumes with complex layouts
- **Smart file handling** with drag & drop functionality
- **Support for PDF, DOCX, and direct text input**
- **16MB file size limit** with real-time validation

### 🤖 **AI-Powered Analysis**
- **Enhanced keyword extraction** using spaCy NLP
- **Named entity recognition** for technologies and skills
- **Comprehensive scoring** across multiple dimensions
- **Professional feedback** and optimization recommendations
- **Real-time processing** with performance metrics

### 📊 **Enterprise Features**
- **Health monitoring** endpoint (`/health`)
- **API documentation** endpoint (`/api/info`)
- **Comprehensive logging** and error tracking
- **CORS support** for modern web applications
- **Security features** with file sanitization

## 🚀 Quick Start

### Prerequisites
```bash
# System dependencies
sudo apt-get install tesseract-ocr  # For OCR functionality

# Python 3.8+ required
python --version
```

### Installation
```bash
# Clone the repository
git clone https://github.com/007-SARANG/SmartCV.git
cd SmartCV/ats-engine

# Install Python dependencies
pip install -r requirements.txt

# Download spaCy language model
python -m spacy download en_core_web_sm

# Run the application
python app.py
```

### Access the Application
- **Main Application**: http://localhost:8000
- **Health Check**: http://localhost:8000/health
- **API Documentation**: http://localhost:8000/api/info

## 📋 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Main application interface |
| `/score` | POST | Resume scoring and analysis |
| `/extract-text` | POST | Text extraction from documents |
| `/health` | GET | System health check |
| `/api/info` | GET | API documentation |

### Example Usage

#### Text Analysis
```bash
curl -X POST http://localhost:8000/score \
  -F "resume_text=Your resume content here..."
```

#### File Upload
```bash
curl -X POST http://localhost:8000/score \
  -F "resume_file=@/path/to/resume.pdf"
```

#### Response Format
```json
{
  "total_score": 85,
  "score_breakdown": {
    "keyword_match": 22,
    "formatting": 20,
    "sentence_structure": 23,
    "length": 20
  },
  "feedback": [
    "Strong keyword optimization",
    "Professional formatting detected",
    "Excellent sentence structure"
  ],
  "extraction_method": "pdfplumber",
  "processing_time": 1.23,
  "keywords_used": 25,
  "text_length": 1456
}
```

## 🏗️ Architecture

### Technology Stack
- **Backend**: Flask 3.1.1 with CORS support
- **PDF Processing**: pdfplumber, PyPDF2, PyMuPDF
- **OCR Engine**: Tesseract with pytesseract
- **NLP**: spaCy with en_core_web_sm model
- **Frontend**: Modern HTML5/CSS3/JavaScript
- **Styling**: Professional enterprise design system

### Processing Pipeline
1. **File Upload** → Validation & Security Check
2. **Text Extraction** → Multi-method fallback system
3. **NLP Analysis** → Keyword extraction & entity recognition
4. **Scoring Algorithm** → Multi-dimensional evaluation
5. **Response Generation** → Professional feedback & metrics

## 📁 Project Structure

```
ats-engine/
├── app.py                  # Main Flask application
├── requirements.txt        # Python dependencies
├── README.md              # Project documentation
├── scorer/                # Scoring algorithms
│   ├── scorer.py          # Main scoring logic
│   ├── keyword_match.py   # Keyword matching
│   ├── formatting.py      # Format analysis
│   ├── sentence_structure.py  # Language quality
│   └── length.py          # Content length scoring
├── templates/             # HTML templates
│   └── score_resume.html  # Professional UI
├── utils/                 # Utility functions
│   └── pdf_reader.py      # PDF processing utilities
└── temp_uploads/          # Temporary file storage
```

## 🔧 Configuration

### Environment Variables
```bash
# Optional configurations
FLASK_ENV=development        # Development/production mode
FLASK_DEBUG=True            # Debug mode
MAX_CONTENT_LENGTH=16MB     # Maximum file size
```

### Customization
- **Scoring weights**: Modify `scorer/scorer.py`
- **UI styling**: Update `templates/score_resume.html`
- **File limits**: Adjust `app.py` configuration
- **OCR settings**: Configure `pytesseract` parameters

## 🧪 Testing

### Manual Testing
1. **Text Input**: Paste resume content and analyze
2. **File Upload**: Upload PDF/DOCX files
3. **Stylized PDFs**: Test with designed resumes
4. **Error Handling**: Try invalid files/empty content

### Health Check
```bash
curl http://localhost:8000/health
```

Expected response:
```json
{
  "status": "healthy",
  "version": "2.0.0",
  "features": {
    "pdf_extraction": true,
    "ocr_support": true,
    "docx_support": true,
    "ai_keyword_extraction": true
  }
}
```

## 🚨 Troubleshooting

### Common Issues

#### OCR Not Working
```bash
# Install Tesseract
sudo apt-get install tesseract-ocr tesseract-ocr-eng
```

#### spaCy Model Missing
```bash
python -m spacy download en_core_web_sm
```

#### File Upload Errors
- Check file size (max 16MB)
- Verify file format (PDF/DOCX only)
- Ensure proper MIME types

### Error Logs
Check application logs for detailed error information:
```bash
tail -f logs/application.log  # If logging to file
```

## 🔮 Future Enhancements

- [ ] **Machine Learning Models** for advanced scoring
- [ ] **Multiple Language Support** for international resumes
- [ ] **Integration APIs** for HR management systems
- [ ] **Batch Processing** for multiple resumes
- [ ] **Analytics Dashboard** with detailed metrics
- [ ] **A/B Testing** for scoring algorithms

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- **GitHub Issues**: [Create an issue](https://github.com/AbhinavDhiman34/SmartCV/issues)
- **Documentation**: [API Docs](http://localhost:8000/api/info)
- **Health Check**: [System Status](http://localhost:8000/health)

---

**Built with ❤️ for the future of resume analysis and ATS optimization.**
