def score_formatting(text):
    feedback = []
    score = 25

    if text.count("•") == 0 and "-" not in text:
        feedback.append("Use bullet points for readability.")
        score -= 5

    if len([line for line in text.split("\n") if line.strip() == ""]) < 3:
        feedback.append("Add more spacing between sections.")
        score -= 5

    return score, feedback
