from django.urls import path
from . import views

urlpatterns = [
    # path('', views.index, name = 'index')
    path(r'^?basket_adding/$', views.basket_adding, name='basket_adding')


]
