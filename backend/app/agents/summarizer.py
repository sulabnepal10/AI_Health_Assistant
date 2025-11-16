from langchain_groq import ChatGroq
from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import Runnable

# 1. Initialize Ollama
llm = ChatGroq(
    model="llama3-8b" 
)

# 2. Prompt
prompt = PromptTemplate(
    input_variables=["input"],
    template="""You are a clinical summarizer. Extract key medical facts.

Conditions, Medications, Recommendations, Timeline.

Clinical Note:
{input}

Summary (bullet points):"""
)

# 3. Create the agent by "piping" the prompt and llm
# This is the modern replacement for LLMChain
summarizer_agent: Runnable = prompt | llm