"""
Copyright (C) 2017 Semester.ly Technologies, LLC

Semester.ly is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Semester.ly is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
"""

# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-06-01 15:07


import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("student", "0004_auto_20160521_2343"),
    ]

    operations = [
        migrations.AddField(
            model_name="reaction",
            name="time_created",
            field=models.DateTimeField(
                auto_now_add=True,
                default=datetime.datetime(2016, 6, 1, 10, 7, 48, 768592),
            ),
            preserve_default=False,
        ),
    ]
