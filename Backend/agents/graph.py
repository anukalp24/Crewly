from langgraph.prebuilt import ToolNode , tools_condition
from langchain_groq import ChatGroq
from langgraph.graph import START , END , StateGraph


from agents.state import CrewAi
from agents.orchestrator import orchestrator  # orchestrator is a function

from langchain_core.messages import AIMessage

llm = ChatGroq(model="openai/gpt-oss-120b")



builder = StateGraph(CrewAi)

# langraph automatic sends the current state in these function

def direct_ans(state):
    return

def deep_agent(state):
    return


def route_request(state):
    return state["route"]


builder.add_node("orchestrator" , orchestrator)
builder.add_node("direct_answer" , direct_ans )
builder.add_node("deep_agent" , deep_agent  )
# if func retrusn direct run the direct func else run the deeo agent
builder.add_edge(START , "orchestrator")
builder.add_conditional_edges("orchestrator" , route_request , {"direct" : "direct_answer" , "deep_agent" : "deep_agent"} )
builder.add_edge("direct_answer" , END)
builder.add_edge("deep_agent" , END)


graph = builder.compile()