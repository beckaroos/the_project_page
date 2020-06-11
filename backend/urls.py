from django.urls import path, include

urlpatterns = [
    path('data/', include('backend.data.api.urls')),
    path('auth/', include('backend.accounts.api.urls')),
]
