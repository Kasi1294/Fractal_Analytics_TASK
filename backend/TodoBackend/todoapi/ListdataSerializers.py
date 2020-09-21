from rest_framework import serializers

class ItemsSerializer(serializers.Serializer):
    Todo = serializers.ListField(child= serializers.IntegerField())