from langchain_groq import ChatGroq
llm = ChatGroq(model="openai/gpt-oss-120b")
from deepagents import create_deep_agent
from agents.subagents.web_search import research_agent
from agents.subagents.Review import  review_agent
from agents.subagents.coding_agent import coding_agent

# When you pass the full message history, the Deep Agent receives all three messages. Its current task is to answer "How do refresh tokens work?", using the earlier conversation for context.
# my crewai schema and deep agent schme is diff




# this is our agent 


# we can even make a mini orchestrator that will decide which which sub agents to call baby

# but we can also give it a prompr in the system prompt that u dont need necessary call the codign agent like this but due to the long systrm primpt i thign llm can miss that thats why we can also create a small workflow
agent = create_deep_agent(model=llm , tools = [] ,system_prompt="""
    You are CrewlyAi's main agent.

    For every complex task, follow this workflow strictly:

    1. ALWAYS delegate to research_agent first.
    2. After receiving the research results, determine
       whether the task requires coding.
    3. If coding is required, delegate to coding_agent
       and provide it with the research findings.
    4. ALWAYS delegate to review_agent at the end.
       Provide the reviewer with the research findings
       and coding results, if coding was required.
    5. Return the reviewer's result as the final answer.

    For non-coding tasks, skip coding_agent but still
    call review_agent after research_agent.

    Do not skip the research or review stages for complex
    tasks. Do not invent results or claim code was tested
    unless it actually was.

    Synthesize the specialist results into one useful
    response for the user.
    """,
    subagents=[
        research_agent,
        coding_agent,
        review_agent,
    ], )

def supervisor(state):
  result =  agent.invoke({"messages" : state["messages"]})
  return result