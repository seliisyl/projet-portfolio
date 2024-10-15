from django.db import models
from django.contrib.auth.models import User

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateTimeField()
    location = models.CharField(max_length=200)
    organizer = models.ForeignKey(User, on_delete=models.CASCADE)
    participants = models.ManyToManyField(User, related_name='events')
    stream_url = models.URLField(blank=True)
    videos = models.JSONField(blank=True, default=list)
    photos = models.JSONField(blank=True, default=list)

    def __str__(self):
        return self.title
