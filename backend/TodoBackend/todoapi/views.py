from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializers import TodoSerializer
from .models import Todo


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all().order_by('todoId')
    serializer_class = TodoSerializer