from django.shortcuts import render  # Imports Django's shortcut to render templates

# This is the function that handles what happens when a user visits the home page
def home(request):
    # This tells Django to render the index.html template found in checker/templates/checker/
    return render(request, 'checker/index.html')
