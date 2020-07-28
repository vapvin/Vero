from django.contrib import admin
from . import models

@admin.register(models.PortFolioModel)
class PostAdmin(admin.ModelAdmin):

    pass
