import re

def score_formatting(text):
    feedback = []
    score = 25  # Start with full formatting score

    # --- Helper Function ---
    def has_section(keyword):
        return re.search(rf"(?i)\b{keyword}\b", text) is not None

    # --- 1. Bullet Points ---
    if not any(b in text for b in ["•", "-", "*", "–", "·"]):
        feedback.append("Use bullet points to structure responsibilities and achievements.")
        score -= 1

    # --- 2. Section Spacing ---
    if len(re.findall(r"\n\s*\n", text)) < 3:
        feedback.append("Insert blank lines between resume sections.")
        score -= 1

    # --- 3. Line Length ---
    if sum(1 for line in text.split("\n") if len(line.strip()) > 120) > 3:
        feedback.append("Break long lines for clarity and ATS friendliness.")
        score -= 1

    # --- 4. Section Presence ---
    expected_sections = ["summary", "experience", "education", "skills", "projects", "certifications"]
    for sec in expected_sections:
        if not has_section(sec):
            feedback.append(f"Consider adding a '{sec.title()}' section.")
            score -= 1

    # --- 5. ASCII & Symbol Safety ---
    if re.search(r"[^\x00-\x7F]", text):
        feedback.append("Avoid non-ASCII characters.")
        score -= 1
    if re.search(r"(\.{3}|==>|<--|->|~~)", text):
        feedback.append("Avoid decorative symbols like '==>' — not ATS-safe.")
        score -= 1

    # --- 6. Contact Info ---
    if not re.search(r"\+?\d{10,}", text):
        feedback.append("Add your phone number.")
        score -= 1
    if not re.search(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text):
        feedback.append("Include a professional email.")
        score -= 1
    if not re.search(r"(linkedin\.com\/in\/[a-zA-Z0-9-]+)", text):
        feedback.append("Add LinkedIn to build credibility.")
        score -= 1
    if not re.search(r"github\.com\/[a-zA-Z0-9_-]+", text):
        feedback.append("Add GitHub if you're in tech.")
        score -= 1

    # --- 7. Dates ---
    if len(re.findall(r"\b(19|20)\d{2}\b", text)) < 2:
        feedback.append("Add dates for experience and education.")
        score -= 1

    # --- 8. Length ---
    if len(text.split("\n")) > 100:
        feedback.append("Resume is quite long — keep it concise.")
        score -= 1

    # --- 9. Resume Title ---
    if not re.search(r"(?i)\bresume\b|\bcurriculum vitae\b|\bCV\b", text[:300]):
        feedback.append("Add a header with your name/title.")
        score -= 1

    # --- 10. Capitalization & Font Case ---
    headings = re.findall(r"^\s*[A-Z][A-Z\s]{2,}$", text, re.MULTILINE)
    if len(headings) < 2:
        feedback.append("Use UPPERCASE section headers for clarity.")
        score -= 1

    # --- 11. Summary/Objectives ---
    if not re.search(r"(?i)summary|objective|profile", text[:600]):
        feedback.append("Add a short Summary or Objective at the top.")
        score -= 1

    # --- 12. Word Count ---
    if len(text.split()) < 150:
        feedback.append("Too short — expand on responsibilities and results.")
        score -= 1

    # --- 13. Table/Column Characters ---
    if "|" in text or "\t" in text:
        feedback.append("Avoid tables/columns — use plain text.")
        score -= 1

    # --- 14. First-person Language ---
    if re.search(r"\b(I|me|my)\b", text, flags=re.IGNORECASE):
        feedback.append("Avoid first-person language (e.g., 'I', 'my').")
        score -= 1

    # --- 15. Passive Voice / Weak Phrasing ---
    passive_phrases = [
        r"\b(responsible for)\b", r"\b(tasked with)\b", r"\b(duties included)\b",
        r"\b(accountable for)\b", r"\b(was involved in)\b", r"\b(was required to)\b",
        r"\b(was expected to)\b", r"\b(part of a team that)\b", r"\b(assisted with)\b"
    ]
    passive_matches = [phrase for phrase in passive_phrases if re.search(phrase, text, re.IGNORECASE)]
    if passive_matches:
        feedback.append(
            "Use strong action verbs instead of passive phrases like: " +
            ", ".join(set([p.strip(r"\b()") for p in passive_matches])) + "."
        )
        score -= 1

    # --- 16. Skills Length ---
    skills_section = re.search(r"(?i)skills\s*\n(.*?)(\n[A-Z]{2,}|$)", text, re.DOTALL)
    if skills_section and len(skills_section.group(1).split(',')) < 5:
        feedback.append("Expand Skills section — add tech tools, soft skills, programming languages, frameworks.")
        score -= 1

    # --- 17. Keyword Density ---
    keywords = [
        # Programming
        "python", "java", "c++", "c", "javascript", "typescript", "html", "css", "bash", "shell", "go", "rust",
        # Web Dev
        "react", "next.js", "node.js", "express", "redux", "vite", "tailwind", "bootstrap", "material ui",
        "fastapi", "flask", "django", "rest api", "graphql", "jwt", "axios", "cors",
        # ML / AI
        "machine learning", "deep learning", "data science", "ai", "scikit-learn", "xgboost",
        "tensorflow", "keras", "pytorch", "opencv", "nlp", "transformers", "huggingface",
        # Data Tools
        "pandas", "numpy", "matplotlib", "seaborn", "plotly", "eda", "sql", "mysql",
        "postgresql", "mongodb", "sqlite", "bigquery", "data wrangling", "spark", "hadoop", "airflow",
        # DevOps / Cloud
        "docker", "kubernetes", "linux", "aws", "azure", "gcp", "jenkins", "git", "github actions",
        "ci/cd", "cloud computing", "terraform", "ansible",
        # Problem Solving
        "dsa", "algorithms", "data structures", "leetcode", "codeforces", "hackerrank", "competitive programming",
        # Tools
        "git", "github", "jira", "postman", "notion", "vs code", "intellij",
        # Soft Skills & Internship
        "internship", "collaboration", "teamwork", "leadership", "communication", "agile", "scrum"
    ]
    keyword_count = sum(1 for kw in keywords if re.search(rf"\b{re.escape(kw)}\b", text.lower()))
    if keyword_count < 5:
        feedback.append("Add more tech-related keywords relevant to your role.")
        score -= 2

    # --- 18. Contact Header Placement ---
    if not re.search(r"(?i)(phone|email|contact)", text[:500]):
        feedback.append("Put your contact details at the top of the resume.")
        score -= 1

    # --- 19. Dense Formatting ---
    if max(len(line.strip()) for line in text.split("\n") if line.strip()) > 150:
        feedback.append("Avoid dense blocks — break into smaller, readable chunks.")
        score -= 1

    # --- 20. Section Order ---
    section_order = [m.group().strip().lower() for m in re.finditer(r"^[A-Z\s]{3,}$", text, re.MULTILINE)]
    desired = ["summary", "skills", "education", "experience", "projects"]
    if any(
        s in desired and section_order.index(s) > section_order.index("experience")
        for s in ["skills", "summary"]
        if s in section_order and "experience" in section_order
    ):
        feedback.append("Reorder sections to prioritize Experience and Skills near the top.")
        score -= 1

    return max(score, 0), feedback
