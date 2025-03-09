from openai import OpenAI
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings

client = OpenAI(api_key=settings.OPENAI_API_KEY)

@api_view(['POST'])
def generate_fact(request):
    category = request.data.get('category')
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": f"Generate a fact about {category}."},
        ],
    )
    fact = response.choices[0].message.content.strip()
    return Response({"fact": fact})