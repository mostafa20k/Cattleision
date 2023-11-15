from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import views
import http
from .models import User

from . import serializers

class LoginView(views.APIView):
    queryset = User.objects.all()

    # This view should be accessible also for unauthenticated users.
    # permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = serializers.LoginSerializer(data=self.request.data,
            context={ 'request': self.request })
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return Response(None, status=http.status.HTTP_202_ACCEPTED)