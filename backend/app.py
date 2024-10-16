from flask import Flask, request, jsonify, send_from_directory
from PIL import Image
import numpy as np
import tensorflow as tf
import base64
from io import BytesIO
from skimage import exposure
import cv2

app = Flask(__name__, static_folder='../frontend', template_folder='../frontend')

model = tf.keras.models.load_model('mnist_model.h5')

def preprocess_image(image):
    image = image.convert('L')
    image = image.resize((28, 28), Image.ANTIALIAS)
    image = np.array(image)
    image = 255 - image
    image = image / 255.0
    image = image.reshape(1, 28, 28, 1)
    return image

def preprocess_uploaded_image(image):
    image = image.convert('L')
    image = np.array(image)
    _, image = cv2.threshold(image, 127, 255, cv2.THRESH_BINARY_INV)
    white_pixel_count = np.sum(image == 255)
    total_pixels = image.size
    white_pixel_percentage = (white_pixel_count / total_pixels) * 100
    if white_pixel_percentage > 50:
        image = cv2.bitwise_not(image)
    image = exposure.rescale_intensity(image, out_range=(0, 255))
    image = cv2.resize(image, (28, 28), interpolation=cv2.INTER_AREA)
    image = image / 255.0
    image = image.reshape(1, 28, 28, 1)
    return image

@app.route('/')
def index():
    return send_from_directory('../frontend', 'index.html')

@app.route('/<path:path>')
def serve_static_files(path):
    return send_from_directory('../frontend', path)

@app.route('/recognize', methods=['POST'])
def recognize_digit():
    data = request.get_json()
    img_data = data['image'].split(",")[1]
    img = Image.open(BytesIO(base64.b64decode(img_data)))
    processed_image = preprocess_image(img)
    prediction = model.predict(processed_image)
    predicted_digit = prediction.argmax()
    return jsonify({'prediction': int(predicted_digit)})

@app.route('/recognize-upload', methods=['POST'])
def recognize_uploaded():
    data = request.get_json()
    img_data = data['image'].split(",")[1]
    img = Image.open(BytesIO(base64.b64decode(img_data)))
    processed_image = preprocess_uploaded_image(img)
    prediction = model.predict(processed_image)
    predicted_digit = prediction.argmax()
    return jsonify({'prediction': int(predicted_digit)})

if __name__ == '__main__':
    app.run(debug=True)
