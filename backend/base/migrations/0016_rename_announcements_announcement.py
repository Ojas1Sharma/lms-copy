# Generated by Django 4.0.4 on 2022-05-11 04:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0015_rename_notifications_notification_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Announcements',
            new_name='Announcement',
        ),
    ]
