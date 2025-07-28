# Import Django's path function to define URL routes
from django.urls import path

# Import your views so you can link URLs to functions (like home())
from . import views  # The dot means "import from the same folder"

# Define URL patterns for this app
urlpatterns = [
    # When someone visits the root URL (e.g., /), show the 'home' view
    path('', views.home, name='home'),

    # You can add more routes here later like:
    # path('results/', views.results, name='results'),
]
