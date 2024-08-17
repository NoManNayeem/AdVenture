from rest_framework import serializers
from .models import AdSlot

class AdSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdSlot
        fields = ['id', 'name', 'width', 'height', 'format', 'publisher', 'ad_content', 'ad_image', 'ad_html_content']
