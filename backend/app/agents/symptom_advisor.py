
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import Runnable

llm = ChatGroq(
    model="llama-3.1-8b-instant" 
)

prompt = ChatPromptTemplate.from_template("""
You are a medical symptom advisor. Based on user symptoms, suggest possible conditions and doctor type.

Chat history:
{chat_history}

User: {question}
""")

symptom_advisor_agent: Runnable = prompt | llm