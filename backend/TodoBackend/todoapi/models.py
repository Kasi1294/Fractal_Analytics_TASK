from django.db import models

# Create your models here.
class Todo(models.Model):
    todoId = models.PositiveIntegerField(primary_key=True)
    text = models.TextField()
    completed = models.BooleanField(default = False)