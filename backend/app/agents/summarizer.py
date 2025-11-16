from langchain_groq import ChatGroq
from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import Runnable

llm = ChatGroq(
    model="llama-3.1-8b-instant" 
)

prompt = PromptTemplate(
    input_variables=["input"],
    template="""You are a clinical summarizer. Extract key medical facts.

Conditions, Medications, Recommendations, Timeline.

Clinical Note:
{input}

Summary (bullet points):"""
)

summarizer_agent: Runnable = prompt | llm