import re

def score_keywords(text: str, keywords: list[str]):
    text_lower = text.lower()
    words = set(re.findall(r'\b\w+\b', text_lower))  # Tokenize into words

    found = [kw for kw in keywords if kw.lower() in words]
    match_ratio = len(found) / len(keywords) if keywords else 0
    score = round(match_ratio * 35)

    missing = [kw for kw in keywords if kw.lower() not in words]
    feedback = []
    if missing:
        feedback.append("Missing keywords: " + ", ".join(missing))

    return score, feedback
