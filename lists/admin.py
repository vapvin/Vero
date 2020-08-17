from django.contrib import admin
from . import models


@admin.register(models.PostLists)
class PostListAdmin(admin.ModelAdmin):

    """ List Admin Definition """

    pass

@admin.register(models.PortfolioLists)
class PortfolioAdmin(admin.ModelAdmin):

    """ List Admin Definition """

    pass