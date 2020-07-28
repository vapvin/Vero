from django.db import models
from core import models as core_models

class Posts(core_models.TimeStampedModel):

    """ Post Model Definition """

    name = models.CharField(max_length=140, null=True, default='')
    content = models.TextField(null=True)
