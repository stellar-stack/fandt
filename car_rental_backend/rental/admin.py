from django.contrib import admin
from .models import Service, Booking, Payment, Feedback

admin.site.register(Service)
admin.site.register(Booking)
admin.site.register(Payment)
admin.site.register(Feedback)