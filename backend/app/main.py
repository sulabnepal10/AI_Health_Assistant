from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
from app.agents.summarizer import summarizer_agent
from app.agents.symptom_advisor import symptom_advisor_agent
from app.agents.research_assistant import research_assistant_agent
from app.utils.phi_detection import privacy_checker_agent
from app.agents.drug_interaction import drug_interaction_agent

app = FastAPI(title="AI Health Assistant API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# === INPUT MODELS ===
class SummarizeInput(BaseModel):
    text: str

class SymptomMessage(BaseModel):
    role: str
    content: str

class SymptomInput(BaseModel):
    messages: List[SymptomMessage]

class PaperInput(BaseModel):
    query: str

class PrivacyInput(BaseModel):
    text: str

class DrugInput(BaseModel):
    drug1: str
    drug2: str

class SymptomMessage(BaseModel):
    role: str
    content: str

class SymptomInput(BaseModel):
    messages: List[SymptomMessage]    

# === ROUTES ===
@app.get("/")
def home():
    return {"message": "AI Health Assistant Backend Running!"}

@app.post("/summarize")
def summarize_text(data: SummarizeInput):
    result = summarizer_agent.invoke(data.text)
    return {"summary": result.content}

@app.post("/symptoms")
def symptom_chat(data: SymptomInput):
    
    history_list = []
    for msg in data.messages:
        history_list.append(f"{msg.role}: {msg.content}")

    current_question = history_list.pop()

    chat_history_str = "\n".join(history_list)

    print("--- SYMPTOM REQUEST RECEIVED ---") 

    result = symptom_advisor_agent.invoke({
        "chat_history": chat_history_str,
        "question": current_question
    })

    print("--- OLLAMA RESPONSE RECEIVED ---")
    
    return {"response": result.content}

@app.post("/papers")
def research_papers(data: PaperInput):
    result = research_assistant_agent(data.query)
    return {"response": result}

@app.post("/privacy")
def check_privacy(data: PrivacyInput):
    return privacy_checker_agent(data.text)

@app.post("/drug-check")
def drug_check(data: DrugInput):
    return {"interaction": drug_interaction_agent(data.drug1, data.drug2)}