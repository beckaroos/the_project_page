from ..models import Document
from .serializers import DocumentSerializer
from rest_framework import generics

class DocumentListCreate(generics.ListCreateAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer