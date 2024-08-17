from rest_framework.routers import DefaultRouter
from .views import AdSlotViewSet

router = DefaultRouter()
router.register(r'adslots', AdSlotViewSet)

urlpatterns = router.urls
