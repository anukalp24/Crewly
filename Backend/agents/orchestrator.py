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
    response = structuredllm.invoke([SystemMessage(content="""You are CrewlyAi's orchestrator.

Your job is to analyze the user's latest request and route it to the appropriate handler.

Use the conversation history to understand context, references, and follow-up requests, but make your routing decision based primarily on the user's latest request.

Choose **"direct"** for:
- Simple questions and explanations.
- General knowledge queries you can answer directly.
- Straightforward conversational follow-ups.
- Tasks that do not require research, coding, tool usage, or multi-step execution.

Choose **"deep_agent"** for:
- Tasks requiring web research or information gathering.
- Coding tasks requiring implementation or debugging.
- Tasks requiring tools or external actions.
- Complex tasks involving planning, multiple steps, or specialist delegation.
- Requests that benefit from the research, coding, and review subagents.

Always choose the simplest route that can properly handle the request.

Return only the routing decision in the required structured format. Do not answer the user's question yourself.""") , * state["messages"]])

    return  {"route" : response.route}     
# this will update the state bro


# LLM will look at the newest message because of the prompt but i changed it now we are givign full context so the llm will make the accurate decision while routing
    # here why not direclty send thr ques
    
