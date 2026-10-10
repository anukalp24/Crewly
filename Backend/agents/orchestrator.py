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


def orchestrator(state : CrewAi):
    response = structuredllm.invoke([SystemMessage(content="""   You are the CrewAi orchestrator.

                Analyze the user's latest request.

                Choose "direct" for simple questions,
                explanations, and tasks you can answer directly.

                Choose "deep_agent" for complex tasks involving
                planning, research, coding, tool usage,
                or multiple steps.

                Always choose the simplest route that can
                properly handle the request.""") , *state["messages"]])

    return  {"route" : response.route}     