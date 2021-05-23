from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('mobileapp/', views.mobileapp, name='mobile-app'),
    path('deliveryapp/', views.deliveryapp, name='delivery-app'),
    path('admindash/', views.admindash, name='admin-dashboard'),
    path('feature/', views.feature, name='feature'),
    path('pricing/', views.pricing, name='pricing'),
]