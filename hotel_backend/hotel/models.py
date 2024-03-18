from django.db import models

class Room(models.Model):
  room_number = models.IntegerField()
  floor_number = models.IntegerField()
  
