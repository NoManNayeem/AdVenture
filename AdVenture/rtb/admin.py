from django.contrib import admin
from .models import Bid

@admin.register(Bid)
class BidAdmin(admin.ModelAdmin):
    list_display = ('campaign', 'ad_slot', 'bid_amount', 'timestamp')
    search_fields = ('campaign__name', 'ad_slot__name')
