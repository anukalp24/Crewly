from langchain_tavily import TavilySearch
search = TavilySearch(max_results=3)

def web_search(question : str):
 """Search the web for information relevant to the given query."""
 return search.invoke({"query" : question})

research_agent = {
    "name" : "research_agent",
    "description" : ("Researches topics using web search, compares sources, "
        ) ,

        "tools" : [web_search] ,
        "system_prompt": """You are CrewAI's Research Agent.
Use web_search at most 3 times; one precise query beats several vague ones.
Report only what results actually say. List only URLs that appeared in results.
Return what the main agent needs: key findings with source URL and date if shown. No background or filler.
Follow any length the main agent asks for; otherwise keep it brief. Use bullets for separate facts and short paragraphs for explanations or comparisons.
If sources conflict or look old, say so in one line. If nothing useful was found, say so."""
}