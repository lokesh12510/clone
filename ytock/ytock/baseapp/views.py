from django.shortcuts import render, redirect

# Create your views here.


def home(request):
    return render(request, 'baseapp/index.html');

def mobileapp(request):
    return render(request, 'baseapp/mobile-app.html');

def deliveryapp(request):
    return render(request, 'baseapp/delivery-app.html');

def admindash(request):
    return render(request, 'baseapp/admin-dashboard.html');

def feature(request):
    return render(request, 'baseapp/feature.html');

def pricing(request):
    return render(request, 'baseapp/pricing.html');

