from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Document(models.Model):
    owner = models.ForeignKey(
        User, related_name="documents", on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=250)
    content = models.TextField()

    def __str__(self):
        return self.title