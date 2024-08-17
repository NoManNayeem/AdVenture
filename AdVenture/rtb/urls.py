from rest_framework.routers import DefaultRouter
from .views import BidViewSet

router = DefaultRouter()
router.register(r'bids', BidViewSet)

urlpatterns = router.urls
