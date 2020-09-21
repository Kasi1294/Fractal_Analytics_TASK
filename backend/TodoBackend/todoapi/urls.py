# myapi/urls.py
from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'restTodo', views.TodoViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('todo/getAll', views.GetAllTodoList),
    path('todo/postAll', views.PostAllTodoList),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]