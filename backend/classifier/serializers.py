import base64
import uuid
from django.core.files.base import ContentFile
from rest_framework import serializers

from .models import Classifier


class Base64ImageField(serializers.ImageField):
    def to_internal_value(self, data):
        _format, str_img = data.split(";base64,")
        decoded_file = base64.b64decode(str_img)
        file_name = f'{str(uuid.uuid4())[:10]}.png'
        data = ContentFile(decoded_file, name=file_name)
        return super().to_internal_value(data)


class ClassifierSerializer(serializers.ModelSerializer):
    image = Base64ImageField()

    class Meta:
        model = Classifier
        fields = '__all__'
