import docx
import logging

logger = logging.getLogger(__name__)

def extract_text_from_docx(file):
    """
    Extracts plain text from a DOCX file.
    Returns the extracted text and the format status.
    """
    try:
        doc = docx.Document(file)
        text = "\n".join(paragraph.text for paragraph in doc.paragraphs)
        return text, "docx"
    except Exception as e:
        logger.error(f"DOCX extraction error: {e}")
        return "", "failed"
