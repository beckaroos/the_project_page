from django.urls import path, include

from .views import DocumentListCreate

urlpatterns = [
    path('', DocumentListCreate.as_view()),
]