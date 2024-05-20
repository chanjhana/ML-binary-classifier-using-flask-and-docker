# ML binary classification model that classifies images as cat or dog 
To build a web application using flask and containerize it using docker using .H5 pretrained Model for cat vs dog classification.

## Docker Deployment
Build the Docker image:    <b>docker image build -t catdog .</b>

Run the Docker container:    <b>docker run -p 5000:5000 -d catdog</b>

Access the app at http://127.0.0.1:5000/upload

## Usage
Upload an image using the web form.

The app will predict whether the image contains a cat or not.

