from django.db import models
from core import models as core_models

class PortFolioModel(core_models.TimeStampedModel):
    """ Class Portfolio Definition """

    name = models.CharField(max_length=140)
    description = models.TextField(null=True)
    skills = models.CharField(max_length=140)
    period = models.IntegerField(default=1)
    linked = models.URLField(default='')
