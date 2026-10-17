from typing import Literal
from pydantic import BaseModel , Field
from langchain_groq import ChatGroq
from langchain_core.messages import SystemMessage

from agents.state import CrewAi

llm = ChatGroq(model="openai/gpt-oss-120b")
# RoutingDecision is a pydantic model class
class RoutingDecision(BaseModel):
    route: Literal["direct" , "deep_agent"]      # literal is a special form provided by pyhtons typing mpdile and it tells the pydantic that route can only have the specified values

structuredllm = llm.with_structured_output(RoutingDecision)
# it declares the structure of the llm output

# Routing decision
def orchestrator(state):
    response = structuredllm.invoke([SystemMessage(content="""Route the user's latest request. Use history only for context.

deep_agent: ONLY if it needs live web info or sourced research (current prices, shopping links, latest models/versions/news, "search for", up-to-date comparisons).

direct: everything else, including ALL coding (build, write, fix, explain code, even long ones), explanations, math, writing, advice and chat.

Coding alone never needs deep_agent. Pick the cheapest route; if unsure, direct. Return only the routing decision.""") , * state["messages"]])

    return  {"route" : response.route}     
# this will update the state bro


# LLM will look at the newest message because of the prompt but i changed it now we are givign full context so the llm will make the accurate decision while routing
    # here why not direclty send thr ques
    
