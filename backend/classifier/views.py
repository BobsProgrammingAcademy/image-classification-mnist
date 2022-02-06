from rest_framework import viewsets

from .serializers import ClassifierSerializer
from .models import Classifier


class ClassifierViewSet(viewsets.ModelViewSet):
    queryset = Classifier.objects.all()
    serializer_class = ClassifierSerializer
