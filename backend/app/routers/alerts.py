from fastapi import APIRouter

router = APIRouter()

@router.get("/alert")

def alert():

    return {
        "alert": "High fever detected"
    }