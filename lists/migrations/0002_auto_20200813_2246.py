# Generated by Django 2.2.5 on 2020-08-13 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_auto_20200729_0010'),
        ('portfolios', '0004_auto_20200802_1703'),
        ('lists', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Lists',
            new_name='PortfolioLists',
        ),
        migrations.CreateModel(
            name='PostLists',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated', models.DateTimeField(auto_now=True, null=True)),
                ('name', models.CharField(blank=True, max_length=140)),
                ('post', models.ManyToManyField(blank=True, to='posts.Posts')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
