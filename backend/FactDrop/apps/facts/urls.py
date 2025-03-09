from django.urls import path
from .views import generate_fact

urlpatterns = [
    path('generate-fact/', generate_fact),
]
