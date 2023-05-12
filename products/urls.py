from django.urls import path, include, re_path
from . import views

urlpatterns = [
    path('<product_id>', views.product, name='product'),
    path('', views.index, name = 'index')
]
