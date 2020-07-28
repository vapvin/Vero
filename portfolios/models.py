from django.db import models
from core import models as core_models


class AbstractItem(core_models.TimeStampedModel):

    """ Abstract Item """

    name = models.CharField(max_length=80)

    class Meta:
        abstract = True

    def __str__(self):
        return self.name

class ProductType(AbstractItem):

    """ ProductType Model Definition """

    pass

class PortFolioModel(core_models.TimeStampedModel):
    """ Class Portfolio Definition """

    name = models.CharField(max_length=140)
    description = models.TextField(null=True)
    product_type = models.ForeignKey(ProductType, on_delete=models.SET_NULL, null=True)
    skills = models.CharField(max_length=140)
    period = models.IntegerField(default=1)
    linked = models.URLField(default='')

    def __str__(self):
        return self.name
