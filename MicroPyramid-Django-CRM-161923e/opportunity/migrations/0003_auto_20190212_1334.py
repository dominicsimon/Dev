# Generated by Django 2.1.5 on 2019-02-12 08:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("opportunity", "0002_opportunity_tags"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="opportunity",
            name="teams",
        ),
        migrations.AlterField(
            model_name="opportunity",
            name="closed_by",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AlterField(
            model_name="opportunity",
            name="created_by",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="opportunity_created_by",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]