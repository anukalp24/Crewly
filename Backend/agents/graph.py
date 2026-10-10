from langgraph.prebuilt import ToolNode , tools_condition
from langchain_groq import ChatGroq
from langgraph.graph import START , END , StateGraph


from agents.state import CrewAi
from agents.orchestrator import orchestrator  # orchestrator is a function

from langchain_core.messages import AIMessage

llm = ChatGroq(model="openai/gpt-oss-120b")



builder = StateGraph(CrewAi)



def direct_ans(state : CrewAi):



builder.add_node("orchestrator" , orchestrator)
builder.add_node("direct_answer" , direct_ans )
builder.add_node("deep_agents" ,  )

builder.add_edge(START , orchestrator)
builder.add_edge()