import language_tool_python

def score_sentence_structure(text):
    tool = language_tool_python.LanguageTool('en-US')
    matches = tool.check(text)

    score = 20
    feedback = []

    if len(matches) > 5:
        feedback.append("Too many grammar/spelling issues detected.")
        score -= 5

    if any(word in text.lower() for word in ["responsible for", "was involved in"]):
        feedback.append("Use action verbs instead of passive voice.")
        score -= 5

    return score, feedback
    