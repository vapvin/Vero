from django.db import models
from core import models as core_models
from markdownx.models import MarkdownxField
from markdownx.utils import markdownify

class Posts(core_models.TimeStampedModel):

    """ Post Model Definition """

    name = models.CharField(max_length=200, null=True, default='')
    content = MarkdownxField('CONTENT', null=True)
    author = models.ForeignKey('auth.User', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name

    def formatted_markdown(self):
        return markdownify(self.content)
