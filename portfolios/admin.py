from django.contrib import admin
from . import models

@admin.register(models.ProductType)
class ProductTypeAdmin(admin.ModelAdmin):

    list_display = ("name",)

@admin.register(models.PortFolioModel)
class PortFolioAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "description",
        "product_type",
        "skills",
        "period",
        "linked",
        "count_photos"
    )

    ordering = (
        "name",
        "product_type",
        "skills"
    )

    list_filter = (
        "product_type",
        "skills"
    )

    search_fields = ("=skills", "^name")

    def count_photos(self, obj):
        return obj.photos.count()


@admin.register(models.Photo)
class PhotoAdmin(admin.ModelAdmin):

    pass

