from django.urls import path
from . import views

urlpatterns = [
    path('booking/', views.create_booking),
    path('feedback/', views.submit_feedback),
]