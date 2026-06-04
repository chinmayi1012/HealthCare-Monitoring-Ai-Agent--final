from fastapi import APIRouter

router = APIRouter()

@router.get("/reminder")

def reminder():

    return {
        "msg": "Take medicine at 8 PM"
    }