import os
from langchain_groq import ChatGroq 
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import Runnable


llm = ChatGroq(
    model="llama-3.1-8b-instant" 
)

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful research assistant. The user will ask you about a topic, and you should provide a concise summary based on your general knowledge."),
    ("human", "{input}"),
])

research_agent_runnable: Runnable = prompt | llm

def research_assistant_agent(query: str):
    """
    This is the function main.py calls.
    It runs the agent.
    """
    try:

        result = research_agent_runnable.invoke({
            "input": query
        })
        return result.content 
    
    except Exception as e:
        print(f"Error in research agent: {e}")
        return "An error occurred while trying to find research."