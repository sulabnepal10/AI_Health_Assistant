# app/agents/symptom_advisor.py

from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import Runnable

# 1. Initialize model
llm = ChatGroq(
    model="llama3.1-8b-instant" # <--- CHANGED (use a specific model)
)

# 2. Prompt
# We will pass chat_history and question in from main.py
prompt = ChatPromptTemplate.from_template("""
You are a medical symptom advisor. Based on user symptoms, suggest possible conditions and doctor type.

Chat history:
{chat_history}

User: {question}
""")

# 3. Create the agent by "piping" the prompt and llm
# This is the modern replacement for LLMChain
symptom_advisor_agent: Runnable = prompt | llm