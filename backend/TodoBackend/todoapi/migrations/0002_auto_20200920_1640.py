# Generated by Django 3.1.1 on 2020-09-20 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todoapi', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='completed',
            field=models.BooleanField(default=False),
        ),
    ]
