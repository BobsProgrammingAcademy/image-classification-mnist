# Image Classification MNIST

This is an image classification app built using **TensorFlow 2**, **Django 3**, **Django REST Framework 3**, **React 17**, and **Material UI 5**. The app uses a machine learning model built in TensorFlow and trained on the MNIST dataset to recognize handwritten digits.

![plot](https://github.com/BobsProgrammingAcademy/Image-Classification-MNIST/blob/master/frontend/src/assets/images/drawing_editor.png?raw=true)


## Table of Contents 
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the application](#run-the-application)
- [Copyright and License](#copyright-and-license)


## Prerequisites

Install the following prerequisites:

1. [Python 3.7-3.9](https://www.python.org/downloads/)
<br>This project uses **TensorFlow v2.7.0**. For TensorFlow to work, you must have a correct Python version installed on your machine. More information [here](https://www.tensorflow.org/install/source#tested_build_configurations).
2. [Node.js](https://nodejs.org/en/)
3. [Visual Studio Code](https://code.visualstudio.com/download)


## Installation

### 1. Create a virtual environment

From the **root** directory run:

```bash
cd backend
```
```bash
python -m venv venv
```

### 2. Activate the virtual environment

From the **backend** directory run:

On macOS:

```bash
source venv/bin/activate
```

On Windows:

```bash
venv\scripts\activate
```

### 3. Install required backend dependencies

From the **backend** directory run:

```bash
pip install -r requirements.txt
```

### 4. Run migrations

From the **backend** directory run:

```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

### 5. Install required frontend dependencies

From the **root** directory run:

```bash
cd frontend
```
```bash
npm install
```

## Run the application

To run the application, you need to have both the backend and the frontend up and running.

### 1. Run backend

From the **backend** directory run:

```bash
python manage.py runserver
```

### 2. Run frontend

From the **frontend** directory run:

```bash
npm start
```

### 3. View the application

Go to http://localhost:3000/ to view the application.


## Copyright and License

Copyright © 2022 Bob's Programming Academy. Code released under the MIT license.
