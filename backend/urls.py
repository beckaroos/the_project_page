from django.urls import path, include

urlpatterns = [
    path('data/', include('backend.data.api.urls')),
]
