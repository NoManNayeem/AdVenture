from django.db import models
from ssp.models import AdSlot
from dsp.models import Campaign

class Bid(models.Model):
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    ad_slot = models.ForeignKey(AdSlot, on_delete=models.CASCADE)
    bid_amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.campaign.name} - {self.bid_amount}"
