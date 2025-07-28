# Import Django's admin site and the tools for defining and including URLs
from django.contrib import admin
from django.urls import path, include  # 'include' lets you connect to app-level urls

# This list defines how URLs are routed in your Django project
urlpatterns = [
    # This route sends users to the Django admin site when they visit /admin/
    path('admin/', admin.site.urls),

    # This connects the root URL (http://127.0.0.1:8000/) to the checker app's urls.py
    path('', include('checker.urls')),

    # Later, you could add more apps like:
    # path('simulator/', include('phishing_simulator.urls')),
]
