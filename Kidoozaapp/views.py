from django.shortcuts import render
from django.http import HttpResponse




# Create your views here.

def home(request):
    return render(request, 'Homepage/index.html')


def user(request):
     return render(request,"customers/index.html")

def login(request):
     return render(request, 'loginpage/login.html')

