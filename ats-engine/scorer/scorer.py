# from .keyword_match import score_keywords
# from .formatting import score_formatting
# from .sentence_structure import score_sentence_structure
# from .length import score_length

# def score_resume(text: str, job_keywords: list):
#     try:
#         keyword_score, keyword_feedback = score_keywords(text, job_keywords)
#     except Exception as e:
#         print("Error in score_keywords:", e)
#         keyword_score, keyword_feedback = 0, ["Keyword match scoring failed."]

#     try:
#         formatting_score, formatting_feedback = score_formatting(text)
#     except Exception as e:
#         print("Error in score_formatting:", e)
#         formatting_score, formatting_feedback = 0, ["Formatting scoring failed."]

#     try:
#         sentence_score, sentence_feedback = score_sentence_structure(text)
#     except Exception as e:
#         print("Error in score_sentence_structure:", e)
#         sentence_score, sentence_feedback = 0, ["Sentence structure scoring failed."]

#     try:
#         length_score, length_feedback = score_length(text)
#     except Exception as e:
#         print("Error in score_length:", e)
#         length_score, length_feedback = 0, ["Length scoring failed."]

#     total_score = keyword_score + formatting_score + sentence_score + length_score

#     return {
#         "total_score": total_score,
#         "score_breakdown": {
#             "keyword_match": keyword_score,
#             "formatting": formatting_score,
#             "sentence_structure": sentence_score,
#             "length": length_score
#         },
#         "feedback": keyword_feedback + formatting_feedback + sentence_feedback + length_feedback
#     }

from .keyword_match import score_keywords
from .formatting import score_formatting
from .sentence_structure import score_sentence_structure
from .length import score_length
from .keyword_extractor import extract_keywords  # 👈 new import (you must create this)

def score_resume(text: str, job_description: str):
    try:
        job_keywords = extract_keywords(job_description)  # 👈 extract from JD
    except Exception as e:
        print("Error in extract_keywords:", e)
        job_keywords = []

    try:
        keyword_score, keyword_feedback = score_keywords(text, job_keywords)
    except Exception as e:
        print("Error in score_keywords:", e)
        keyword_score, keyword_feedback = 0, ["Keyword match scoring failed."]

    try:
        formatting_score, formatting_feedback = score_formatting(text)
    except Exception as e:
        print("Error in score_formatting:", e)
        formatting_score, formatting_feedback = 0, ["Formatting scoring failed."]

    try:
        sentence_score, sentence_feedback = score_sentence_structure(text)
    except Exception as e:
        print("Error in score_sentence_structure:", e)
        sentence_score, sentence_feedback = 0, ["Sentence structure scoring failed."]

    try:
        length_score, length_feedback = score_length(text)
    except Exception as e:
        print("Error in score_length:", e)
        length_score, length_feedback = 0, ["Length scoring failed."]

    total_score = keyword_score + formatting_score + sentence_score + length_score

    return {
        "total_score": total_score,
        "score_breakdown": {
            "keyword_match": keyword_score,
            "formatting": formatting_score,
            "sentence_structure": sentence_score,
            "length": length_score
        },
        "feedback": keyword_feedback + formatting_feedback + sentence_feedback + length_feedback
    }
