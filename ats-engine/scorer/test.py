import spacy
import language_tool_python

nlp = spacy.load("en_core_web_sm")
tool = language_tool_python.LanguageTool('en-US')

text = "This are bad sentence"

# Test spaCy
doc = nlp(text)
print("Nouns/Props:", [token.text for token in doc if token.pos_ in ["NOUN", "PROPN"]])

# Test grammar tool
matches = tool.check(text)
print("Grammar issues:", len(matches))
