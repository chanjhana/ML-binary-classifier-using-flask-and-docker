# ML binary classification model that classifies images as cat or dog 
This project demonstrates a simple web application that predicts whether an uploaded image contains a cat or not. It uses a pretrained machine learning model (h5 format). It is deployed using Flask and containerized using docker.

## Docker Deployment
Build the Docker image:    <b>docker image build -t catdog .</b>

Run the Docker container:    <b>docker run -p 5000:5000 -d catdog</b>

Access the app at http://127.0.0.1:5000/upload

## Usage
Upload an image using the web form.

The app will predict whether the image contains a cat or not.

## Demo video
file:///C:/Users/Elango/Downloads/demo.mp4
