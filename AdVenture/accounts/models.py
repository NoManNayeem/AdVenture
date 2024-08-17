from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class User(AbstractUser):
    ROLES = (
        ('publisher', 'Publisher'),
        ('advertiser', 'Advertiser'),
    )
    role = models.CharField(max_length=20, choices=ROLES)

    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_set',  # Custom related name to avoid conflict
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_permissions_set',  # Custom related name to avoid conflict
        blank=True,
    )

    def __str__(self):
        return self.username
