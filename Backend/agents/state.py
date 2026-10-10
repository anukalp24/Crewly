from typing import Annotated , TypedDict , Literal
from langchain_core.messages import AnyMessage
# Any message is a type alias that can contain any message
from langgraph.graph.message import add_messages

# crew ai here is a class that inherits typed dict
# add messages is a reducer which appends the new message into the old state

# this is the state schema
class CrewAi(TypedDict):
    messages: Annotated[list[AnyMessage] , add_messages]
    routes: Literal["direct" , "deep_agent"]


    # whats th ened fo givign scham to stategroah will it kalaos validatate 