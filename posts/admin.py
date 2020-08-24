from django.contrib import admin
from . import models
from markdownx.admin import MarkdownxModelAdmin

@admin.register(models.Posts)
class PostAdmin(MarkdownxModelAdmin):

    pass