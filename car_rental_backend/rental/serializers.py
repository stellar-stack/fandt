from rest_framework import serializers
from .models import Service, Booking, Feedback

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True, default=None)
    service = serializers.PrimaryKeyRelatedField(read_only=True, default=None)

    class Meta:
        model = Booking
        fields = '__all__'

class FeedbackSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True, default=None)

    class Meta:
        model = Feedback
        fields = '__all__'