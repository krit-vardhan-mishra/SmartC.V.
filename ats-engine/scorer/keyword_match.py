def score_keywords(text, keywords):
    found = [kw for kw in keywords if kw.lower() in text.lower()]
    match_ratio = len(found) / len(keywords) if keywords else 0
    score = round(match_ratio * 35)
    
    missing = [kw for kw in keywords if kw.lower() not in text.lower()]
    feedback = []
    if missing:
        feedback.append(f"Missing keywords: {', '.join(missing)}")
    return score, feedback
