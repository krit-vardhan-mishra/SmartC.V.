def score_length(text):
    words = len(text.split())
    feedback = []
    score = 20

    if words < 150:
        feedback.append("Resume content is too short. Try adding more relevant experiences.")
        score -= 5
    elif words > 600:
        feedback.append("Resume is too long. Try trimming down unnecessary details.")
        score -= 5

    return score, feedback
