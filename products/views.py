from django.shortcuts import render
from products.models import *

def product(request, product_id):


    session_key = request.session.session_key
    if not session_key:
        request.session.cycle_key()


    return render(request, 'product/product.html', locals())

def index(request):
    products_image = ProductImage.objects.filter(is_active=True, is_main=True, product__is_active=True)

    session_key = request.session.session_key
    if not session_key:
        request.session.cycle_key()

    return render(request, 'base.html', locals())
