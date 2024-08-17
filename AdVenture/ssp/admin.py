from django.contrib import admin
from .models import AdSlot

@admin.register(AdSlot)
class AdSlotAdmin(admin.ModelAdmin):
    list_display = ('name', 'width', 'height', 'format', 'publisher')
    search_fields = ('name', 'publisher__username')
