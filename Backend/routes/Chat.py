from fastapi import APIRouter
from agents.graph import Chat_function
Chat = APIRouter()

Chat.add_api_route("/chat" , Chat_function , methods=["POST"] )