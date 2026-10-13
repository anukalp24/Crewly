# this whole thing is an outer agent system combine with inner deep agent got it

# this itself an agent

# what is an ai agent??
# ans : an ai agent is a ai system that uses an llm to understand a task , make decision , chooses tools and take actions to acheive a goal , it can analyze tool result , and can decide what to do next , it can repeat the same tool mamany times until the taks is done
 

# what is an agentic ai??

from langgraph.prebuilt import ToolNode , tools_condition
from langchain_groq import ChatGroq
from langgraph.graph import START , END , StateGraph
from dotenv import load_dotenv
load_dotenv()
from agents.state import CrewAi
from agents.orchestrator import orchestrator  # orchestrator is a function

from langchain_core.messages import AIMessage

llm = ChatGroq(model="openai/gpt-oss-120b")

from agents.deep_agent import supervisor

builder = StateGraph(CrewAi)

# langraph automatic sends the current state in these function
this full is an agent system ok and ai agent part is onlt this
def direct_ans(state):
   result = llm.invoke(state["messages"])
   return {"messages" : [result]}
   

def deep_agent(state):
 result = supervisor(state)
 return result
# return the result to langgrpah so it couls update the state 



def route_request(state):
    return state["route"]


# state update tab hi hota hain jab tum apne node se result ko return karte ho
builder.add_node("orchestrator" , orchestrator)
builder.add_node("direct_answer" , direct_ans )
builder.add_node("deep_agent" , deep_agent  )
# if func retrusn direct run the direct func else run the deeo agent
builder.add_edge(START , "orchestrator")
builder.add_conditional_edges("orchestrator" , route_request , {"direct" : "direct_answer" , "deep_agent" : "deep_agent"} )
builder.add_edge("direct_answer" , END)
builder.add_edge("deep_agent" , END)
 

graph = builder.compile()

question = graph.invoke({"messages" : [{"role" : "user" , "content" : "Research how JWT refresh tokens work and write a simple FastAPI implementation"}]})
print(question["messages"][-1].content)



# chatgpt se poocha na ki matlba fir ageent irf retun invoke wala or tool node hi hua fir to??