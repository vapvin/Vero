from django.contrib import admin
from . import models

@admin.register(models.ProductType)
class ProductTypeAdmin(admin.ModelAdmin):

    pass

@admin.register(models.PortFolioModel)
class PortFolioAdmin(admin.ModelAdmin):

    pass
