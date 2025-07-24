# ats-engine/app.py
from flask import Flask, request, jsonify
import spacy

app = Flask(__name__)
nlp = spacy.load("en_core_web_sm")  # Make sure to install it

def extract_skills(text):
    doc = nlp(text.lower())
    return {token.text for token in doc if token.pos_ in ["NOUN", "PROPN"]}

@app.route('/match', methods=['POST'])
def match_skills():
    data = request.get_json()
    resume = data.get("resume", "")
    jd = data.get("jd", "")

    resume_skills = extract_skills(resume)
    jd_skills = extract_skills(jd)

    missing = list(jd_skills - resume_skills)
    common = list(jd_skills & resume_skills)

    return jsonify({
        "missing": missing,
        "keywords": common
    })

if __name__ == "__main__":
    app.run(port=8000)
