import re
from sklearn.feature_extraction.text import CountVectorizer

def extract_keywords(job_description: str, top_n: int = 15):
    vectorizer = CountVectorizer(stop_words='english', max_features=top_n)
    X = vectorizer.fit_transform([job_description])
    return vectorizer.get_feature_names_out().tolist()
