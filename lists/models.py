from django.db import models
from core import models as core_models

class Lists(core_models.TimeStampedModel):

    """ List Model Definition """

    name = models.CharField(max_length=140, blank=True)
    portfolio = models.ManyToManyField("portfolios.PortFolioModel", blank=True)

    def __str__(self):
        return self.name