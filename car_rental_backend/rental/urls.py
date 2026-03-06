from django.urls import path
from . import views

urlpatterns = [
    path('services/', views.get_services),
    path('bookings/', views.create_booking),
    path('feedback/', views.submit_feedback),
]