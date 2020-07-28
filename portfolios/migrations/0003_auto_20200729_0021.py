# Generated by Django 2.2.5 on 2020-07-28 15:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('portfolios', '0002_auto_20200729_0017'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='portfoliomodel',
            name='product_type',
        ),
        migrations.AddField(
            model_name='portfoliomodel',
            name='product_type',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='portfolios.ProductType'),
        ),
    ]
