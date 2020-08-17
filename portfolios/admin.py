from django.contrib import admin
from . import models
from django.utils.html import mark_safe

@admin.register(models.ProductType)
class ProductTypeAdmin(admin.ModelAdmin):

    list_display = ("name",)

class PhotoInline(admin.TabularInline):

    model = models.Photo

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

    raw_id_fields = ("skills", )

    search_fields = ("=skills", "^name")

    def count_photos(self, obj):
        return obj.photos.count()

    def save(self, *args, **kwargs):
        self.city = str.capitalize(self.city)
        super().save(*args, **kwargs)



@admin.register(models.Photo)
class PhotoAdmin(admin.ModelAdmin):

    list_display = ('__str__', 'get_thumb')

    def get_thumb(self,obj):
        return mark_safe(f'<img src="{obj.file.url}" width="50px" />')
    get_thumb.short_description = "Thumbnail"
