from rest_framework import viewsets
from .models import AdSlot
from .serializers import AdSlotSerializer

class AdSlotViewSet(viewsets.ModelViewSet):
    queryset = AdSlot.objects.all()
    serializer_class = AdSlotSerializer
