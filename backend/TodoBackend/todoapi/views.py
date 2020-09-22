from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from .serializers import TodoSerializer
from .models import Todo
from rest_framework.decorators import api_view


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all().order_by('todoId')
    serializer_class = TodoSerializer

"""
getAllData is a function used to get all todo
"""
def getAllData():
    allTodo = TodoSerializer(Todo.objects.all(), many=True)
    return allTodo.data

"""
deleteAllData is a function used to delete all todo
"""
def deleteAllData():
    Todo.objects.all().delete()
    return
"""
GetAllTodoList handle the GET request for all todo
"""
@api_view(['GET', 'POST', 'DELETE'])
def GetAllTodoList(request):
    if request.method == 'GET':
        return JsonResponse(getAllData(), safe=False)
    else :
        return JsonResponse(allTodo.errors, status=status.HTTP_400_BAD_REQUEST)

"""
PostAllTodoList handle the POST request for all todo
"""
@api_view(['GET', 'POST', 'DELETE'])
def PostAllTodoList(request):
    if request.method == 'POST':
        deleteAllData()
        add_data = JSONParser().parse(request).get('savePayload')
        for todoItem in add_data:
            todo_serializer = TodoSerializer(data = todoItem)
            if todo_serializer.is_valid():
                todo_serializer.save()
            else :
                return JsonResponse(todo_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return JsonResponse(getAllData(), status=status.HTTP_201_CREATED, safe=False)
