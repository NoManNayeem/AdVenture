from django.contrib import admin
from .models import Campaign

@admin.register(Campaign)
class CampaignAdmin(admin.ModelAdmin):
    list_display = ('name', 'budget', 'start_date', 'end_date', 'advertiser')
    search_fields = ('name', 'advertiser__username')
