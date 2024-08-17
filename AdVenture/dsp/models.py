from django.db import models

class Campaign(models.Model):
    name = models.CharField(max_length=255)
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()
    advertiser = models.ForeignKey('accounts.User', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
