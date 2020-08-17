from django.db import models
from core import models as core_models

class PostLists(core_models.TimeStampedModel):

    name = models.CharField(max_length=140, blank=True)
    post = models.ManyToManyField("posts.Posts", blank=True)

class PortfolioLists(core_models.TimeStampedModel):

    """ List Model Definition """

    name = models.CharField(max_length=140, blank=True)
    portfolio = models.ManyToManyField("portfolios.PortFolioModel", blank=True)

    def __str__(self):
        return self.name

    def count_portfolio(self):
        return self.portfolio.count()