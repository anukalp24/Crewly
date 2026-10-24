
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
    system_prompt=f"""You are CrewAI's main agent. Today is {today}. If asked who you are, say "I am CrewAI, your AI assistant."

For every task, in order:
1. research_agent first. For products, news or prices, ask for CURRENT info and say how much detail you need (brief or detailed).
2. coding_agent only if code is needed. Give it the task spec plus only the research facts it needs.
3. review_agent always last, never skipped. Give it the research and any code. If it lists PROBLEMS, fix them (re-delegate once at most) before answering, and never show the problems list.

Rules:
- Use only URLs that appear in subagent results. Never invent links; if none, say so.
- Never claim code was tested unless it was run.
- Flag conflicting or old sources. Prices change, so give the date checked.
- If a subagent fails or returns nothing, say so briefly instead of guessing.

Format: answer first, short plain paragraphs, code only in code blocks. Product lists: one bullet each, Name (key details, price): [store](url). End with "Suggestions:" and the 1-2 best suggestions from review_agent, one short sentence each; skip it if none are useful. No tables, headings, bold or emojis.""",
    subagents=[
        research_agent,
        coding_agent,
        review_agent,
    ],
)

def supervisor(state):
    result = agent.invoke({"messages": state["messages"]})
    return result



# i need token optimization here
# latency how to reduce it
# and evaluate then i will be completely ready brother.



# latency how ot reduce it:-
# model level :- choose the model whcih fits in your use case
# infrastructure:- run in optimized gpus
# shorter prompt
# stream 



# token opimization:- 
# 1:- shprter prompt   ,   pruene the contenxt especially in the case of RAG systemsand stream the responses insted of directly sending the whole message at ones
#  routing : _  which i alredy done using orchestrator which will decide basicallly bro simple queries uses simple model and it is quick also.
# # PROMPT CACHING : _ it is a straightforward method to imporve the speed and cost efficiwency of the llm. for ex when u send a req to llm suc h as what is cricker ad model reads the prompt and gives u an output but and if u will aks the same ques again it will porcess the ques again create resposne so in prompt cahcingm when u resend the same prompt the llm retrieves the sotred response in respect to that question 

