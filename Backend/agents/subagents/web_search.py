from langchain_tavily import TavilySearch
search = TavilySearch(max_results=3 , include_images=True , include_image_description=True)

def web_search(question : str):
 """Search the web for information relevant to the given query."""
 return search.invoke({"query" : question})

research_agent = {
    "name" : "research_agent",
    "description" : ("Researches topics using web search, compares sources, "
        ) ,

        "tools" : [web_search] ,
        "system_prompt" : (
           "You are a research specialist. "
        "Investigate the task carefully, use web search "
        "when relevant, and distinguish evidence from assumptions."
        )
}