from django.db import models

class AdSlot(models.Model):
    name = models.CharField(max_length=100)
    width = models.IntegerField()
    height = models.IntegerField()
    format = models.CharField(max_length=50)
    publisher = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    ad_content = models.TextField(blank=True, null=True)  # Text or basic content
    ad_image = models.URLField(blank=True, null=True)     # URL to an image
    ad_html_content = models.TextField(blank=True, null=True)  # Full HTML content

    def __str__(self):
        return self.name
