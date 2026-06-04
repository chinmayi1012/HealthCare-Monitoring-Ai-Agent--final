from fastapi import APIRouter
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("OPENROUTER_API_KEY")
router = APIRouter()

client = OpenAI(
    api_key=api_key,
    base_url="https://openrouter.ai/api/v1"
)

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
def chat(data: ChatRequest):

    completion = client.chat.completions.create(
        model="openai/gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "You are a healthcare assistant. Give short healthcare advice. Always recommend consulting a doctor for serious symptoms."
            },
            {
                "role": "user",
                "content": data.message
            }
        ]
    )

    answer = completion.choices[0].message.content

    return {
        "response": answer
    }