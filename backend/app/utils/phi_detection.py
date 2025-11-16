import spacy
from langchain_ollama import ChatOllama

nlp = spacy.load("en_core_web_sm")
llm = ChatOllama(model="llama3")

def detect_phi_spacy(text):
    doc = nlp(text)
    entities = [(ent.text, ent.label_) for ent in doc.ents if ent.label_ in ["PERSON", "DATE", "GPE", "NORP"]]
    return entities

def privacy_checker_agent(text):
    spacy_hits = detect_phi_spacy(text)
    prompt = f"""Check if this text contains PHI (HIPAA):
    Text: {text}
    spaCy found: {spacy_hits}
    List any PHI and suggest redaction."""
    result = llm.invoke(prompt)
    return {"spacy": spacy_hits, "llm": result.content}