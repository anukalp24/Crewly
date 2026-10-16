from fastapi import APIRouter

auth = APIRouter()

auth.add_api_route("/signin" ,      , methods=["POST"])
auth.add_api_route("login" ,   , methods=["POST"])