# Generated by Django 4.0.4 on 2022-04-30 12:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Batch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('batch', models.CharField(max_length=4)),
            ],
            options={
                'verbose_name_plural': 'batches',
            },
        ),
    ]
