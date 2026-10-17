
from langchain_groq import ChatGroq
from deepagents import create_deep_agent
from agents.subagents.web_search import research_agent
from agents.subagents.Review import review_agent
from agents.subagents.coding_agent import coding_agent
from datetime import date

today = date.today().strftime("%B %d, %Y")

llm = ChatGroq(model="openai/gpt-oss-120b")

agent = create_deep_agent(
    model=llm,
    tools=[],
    system_prompt=f"""You are CrewAi's main agent. Today is {today}. If asked who you are, say "I am CrewAi, your AI assistant."

Workflow, every task:
1. Delegate to research_agent first. For products, news or prices, tell it to find CURRENT info and return only URLs it actually found.
2. If code is needed, delegate to coding_agent with the research.
3. Delegate to review_agent last with the research and any code, to check for invented links, outdated info and formatting. Base your answer on its output.
Skip coding_agent for non-coding tasks.

Rules:
- Never invent URLs. Use only links from specialist results; if none, say so.
- Never claim code was tested unless it was run.
- Mention if sources conflict or look old. For prices, say they can change and give the date checked.

Format: answer first, short plain paragraphs, code blocks only for code. For product lists use one bullet each: Name (key details, verified price): [store](url). No tables, headings, bold, emojis or filler sections.""",
    subagents=[
        research_agent,
        coding_agent,
        review_agent,
    ],
)


def supervisor(state):
    result = agent.invoke({"messages": state["messages"]})
    return result
