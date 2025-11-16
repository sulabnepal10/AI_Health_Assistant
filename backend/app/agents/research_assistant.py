# app/agents/research_assistant.py

import os
from langchain_groq import ChatGroq # Use ChatOllama
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import Runnable

# 1. Initialize the LLM (Using ChatOllama is better)
llm = ChatGroq(
    model="llama3-8b-8192" # <--- CHANGED (use a specific model)
)

# 2. Create a prompt
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful research assistant. The user will ask you about a topic, and you should provide a concise summary based on your general knowledge."),
    ("human", "{input}"),
])

# 3. Create the agent by "piping" the prompt and llm
research_agent_runnable: Runnable = prompt | llm

# 4. Define the function that main.py will import
def research_assistant_agent(query: str):
    """
    This is the function main.py calls.
    It runs the agent.
    """
    try:
        # Run the agent
        result = research_agent_runnable.invoke({
            "input": query
        })
        # Return the final 'output' from the agent
        return result.content # .content is used for Chat models
    
    except Exception as e:
        print(f"Error in research agent: {e}")
        return "An error occurred while trying to find research."