import cv2
import os
import numpy as np
import tensorflow as tf
from django.conf import settings
from django.db import models
from PIL import Image


class Classifier(models.Model):
    image = models.ImageField(upload_to='images')
    result = models.CharField(max_length=3, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        img = Image.open(self.image)
        img_array = tf.keras.preprocessing.image.img_to_array(img)

        new_img = cv2.cvtColor(img_array, cv2.COLOR_BGR2GRAY)

        dimensions = (28, 28)

        # Interpolation - a method of constructing new data points within the range
        # of a discrete set of known data points.
        resized_image = cv2.resize(new_img, dimensions, interpolation=cv2.INTER_AREA)

        ready_image = np.expand_dims(resized_image, axis=2)
        ready_image = np.expand_dims(ready_image, axis=0)

        try:
            file_model = os.path.join(settings.BASE_DIR, 'ml_model/cnn_model.h5')
            graph = tf.compat.v1.get_default_graph()

            with graph.as_default():
                model = tf.keras.models.load_model(file_model)
                prediction = np.argmax(model.predict(ready_image))
                self.result = str(prediction)
                print(f'Classified as {prediction}')
        except Exception:
            print('Failed to classify')
            self.result = 'F'

        return super().save(*args, **kwargs)
