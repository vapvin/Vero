from django.db import models

class PortFolioModel():
    """ Class Portfolio Definition """

    name = models.CharField(max_length=140)
    description = models.TextField()
    skills = models.CharField(max_length=140)
    period = models.IntegerField()
    linked = models.URLField()