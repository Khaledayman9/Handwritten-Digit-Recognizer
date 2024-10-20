# Handwritten-Digit-Recognizer
A web application that recognizes handwritten digits using a deep learning model. Users can either draw digits on a canvas or upload images of handwritten digits for prediction. The application uses a Flask backend and a TensorFlow model for processing.


![](https://github.com/Khaledayman9/Handwritten-Digit-Recognizer/blob/main/Layout.gif)


# Live Demo
This demo showcases only the frontend interface, without the backend logic for digit recognition, as GitHub Pages can only host static content (HTML, CSS, and JavaScript). To see the full functionality with backend processing, please follow the setup instructions to run the app locally or check out the deployed version with backend integration.

[Click here to view the live demo](https://khaledayman9.github.io/Handwritten-Digit-Recognizer)


# Aim
The aim of the Handwritten Digit Recognizer application is to provide an intuitive and efficient tool for users to draw or upload images of handwritten digits and receive accurate predictions using a machine learning model. The application leverages Flask for backend processing and TensorFlow for digit recognition, presenting a user-friendly interface for seamless interaction.

# Objectives
- **Digit Recognition:** Implement a TensorFlow model capable of recognizing and predicting handwritten digits from user inputs, either through direct drawing on a canvas or by uploading images.

- **User Interface:** Develop a modern and responsive frontend using HTML, CSS, and JavaScript that enhances user experience by providing clear instructions and feedback.

- **Canvas Interaction:** Enable users to draw digits directly on the canvas with responsive features, such as a clear button to reset the drawing area.

- **Image Upload Functionality**: Allow users to upload images of handwritten digits, with appropriate preprocessing to ensure accurate predictions.

- **Error Handling:** Implement effective error handling and user notifications to guide users when inputs are missing or invalid.

- **Modern Design:** Create a visually appealing layout with animations and hover effects, ensuring a polished and engaging user experience.

- **Documentation:** Provide comprehensive documentation, including installation instructions, usage guidelines, and descriptions of the project structure, to facilitate ease of use and contributions.


# Layout
## Entering the Page:

![current webpage](https://github.com/user-attachments/assets/c3d299f9-dbdb-4a3d-99b4-6f975d6ef1c4)

## Drawing Digits and Predicting it:

![Test 11](https://github.com/user-attachments/assets/917bacac-7528-49ad-ab11-2f34d01d4e6a)

![Test 2](https://github.com/user-attachments/assets/82b7d16b-078a-4154-b755-4a743a606575)

![test 3](https://github.com/user-attachments/assets/6d0b4c36-3c3f-452d-a711-3256289bc75b)

## Uploading images and Predicting it:

![Num test](https://github.com/user-attachments/assets/b84d505e-4be7-4f03-86d7-3b84534d9a85)

![num tes 2](https://github.com/user-attachments/assets/e9d52f9e-1a78-4f2d-81bf-32a368327e07)

![num tes 3](https://github.com/user-attachments/assets/6902513e-4ad6-4f71-8dff-749631613921)

## Error Handling:
### When the user presses predict and a prediction is already displayed:
![Error 1](https://github.com/user-attachments/assets/7d67edab-2120-471b-9c8d-dde67d025c19)


### When the user presses clear and the drawing canvas is already clear:
![Error 2](https://github.com/user-attachments/assets/3f3c2d94-35f9-4baa-bef3-f506e207e286)


### When the user presses predict and the drawing canvas empty and no image uploaded:
![Error 3](https://github.com/user-attachments/assets/550f09dd-ee38-4f17-9e15-46e2a00d3d75)


### When the user presses clear, everything is cleared (drawing canvas and uploads):
![](https://github.com/Khaledayman9/Handwritten-Digit-Recognizer/blob/main/Clear.gif)

## Some Unique Test Cases:
- Certain digits, like 1 and 7, can be difficult to distinguish for both humans and deep learning models. This can lead to ambiguity in predictions, making it challenging to verify the correct input.
  
![Error 4](https://github.com/user-attachments/assets/2505bbb0-288c-44e4-b195-c71e025babb2)



# Features
- **Drawing Canvas**: Users can draw digits directly on a canvas.
- **Image Upload**: Users can upload images of handwritten digits for prediction.
- **Real-time Prediction**: Click a button to predict the digit drawn or uploaded.
- **Responsive Design**: The application is designed to work on various screen sizes.


# Model Details
**- The handwritten digit recognizer is built using a Convolutional Neural Network (CNN), which is well-suited for image recognition tasks due to its ability to capture spatial hierarchies in images. The network is trained on the MNIST dataset, which contains 28x28 grayscale images of handwritten digits (0-9). Here’s a detailed breakdown of the model:**

## 1. Input Preprocessing
- Normalization: The pixel values of the images are scaled to a range of 0 to 1 by dividing by 255. This improves model performance and speeds up convergence.
- Reshaping: The images are reshaped from (28, 28) to (28, 28, 1) to include the channel dimension (1 channel for grayscale).

## 2. Data Augmentation
- ImageDataGenerator is used to artificially expand the training set by applying random transformations, helping the model generalize better:
  - Rotation: Randomly rotates the image up to 15 degrees.
  - Shifting: Shifts the image horizontally or vertically by 20% of the image size.
  - Zooming: Randomly zooms in or out by up to 20%.
  - Shearing: Applies random shearing transformations.
  - Fill Mode: Fills the missing pixels created by these transformations using the nearest pixel values.

## 3. Model Layers
```plaintext
+--------------------------+
|      Input Layer          |
|   (28x28x1 grayscale)     |
+--------------------------+
            |
            V
+--------------------------+
|    Conv2D Layer (32)      |
|  32 filters, 3x3 kernel   |
|  Activation: ReLU         |
+--------------------------+
            |
            V
+--------------------------+
|    MaxPooling2D Layer     |
|  Pool Size: 2x2           |
+--------------------------+
            |
            V
+--------------------------+
|    Conv2D Layer (64)      |
|  64 filters, 3x3 kernel   |
|  Activation: ReLU         |
+--------------------------+
            |
            V
+--------------------------+
|    MaxPooling2D Layer     |
|  Pool Size: 2x2           |
+--------------------------+
            |
            V
+--------------------------+
|    Conv2D Layer (128)     |
|  128 filters, 3x3 kernel  |
|  Activation: ReLU         |
+--------------------------+
            |
            V
+--------------------------+
|    MaxPooling2D Layer     |
|  Pool Size: 2x2           |
+--------------------------+
            |
            V
+--------------------------+
|    Flatten Layer          |
|  Output: 1280 units       |
+--------------------------+
            |
            V
+--------------------------+
|    Dense Layer (128)      |
|  Activation: ReLU         |
+--------------------------+
            |
            V
+--------------------------+
|    Dropout Layer (0.5)    |
|  50% Neurons Dropped      |
+--------------------------+
            |
            V
+--------------------------+
|    Dense Output Layer     |
|  10 units (Softmax)       |
+--------------------------+
            |
            V
+--------------------------+
|    Output (Digits 0-9)    |
+--------------------------+
```

## 4. Compilation and Training
- Optimizer: The model is compiled using the Adam optimizer, which adapts the learning rate and accelerates convergence.
- Loss Function: The sparse categorical crossentropy loss function is used because this is a multi-class classification problem.
- Metrics: The model tracks accuracy during training and validation.
- Training: The model is trained for 30 epochs with a batch size of 32 using the augmented dataset. The validation set is the unmodified test dataset.

## 5. Results
- The Convolutional Neural Network (CNN) model for digit recognition is built with the TensorFlow and Keras libraries, scoring around 95% training accuracy and around 98% validation accuracy.

## 6. Model Saving
- The trained model is saved as mnist_model.h5 for later use in predictions through the Flask backend.
 


# Backend
## 1. Imports and Initialization
- Flask: The web framework used to build the application.
- PIL (Pillow): A Python Imaging Library to handle image processing.
- NumPy: A library for numerical operations.
- TensorFlow: A deep learning framework used to load and run the pre-trained model.
- base64: A module for encoding and decoding data in Base64 format.
- io: For handling byte streams.
- skimage (exposure): A module for image processing, specifically to adjust the intensity of images.
- cv2 (OpenCV): A library for computer vision tasks.
## 2. Model Loading
- Loading our trained model (mnist_model.h5) that was trained on the MNIST dataset, which consists of handwritten digits.
```python
model = tf.keras.models.load_model('mnist_model.h5')
```
## 3. Image Preprocessing Functions
**Two preprocessing functions are defined to prepare images for digit recognition:**
- preprocess_image(image):
  - Converts the uploaded image to grayscale.
  - Resizes it to the input size expected by the model (28x28 pixels).
  - Inverts the pixel values (white background becomes black, and vice versa).
  - Normalizes the pixel values to a range of [0, 1].
  - Reshapes the image to include the batch dimension.
- preprocess_uploaded_image(image):
  - Converts the uploaded image to grayscale.
  - Applies binary thresholding to create a binary image (black and white).
  - Checks the percentage of white pixels; if more than 50%, the image is inverted.
  - Rescales the intensity of pixel values.
  - Resizes the image to 28x28 pixels.
  - Normalizes the pixel values.
  - Reshapes the image to include the batch dimension.

## 4. Flask Routes
- **/:** Serves the main index.html file from the frontend.

- **/<path:path>:** Serves static files (like CSS and JavaScript) from the frontend directory.

- **/recognize:**
  - This endpoint is for recognizing digits drawn on the canvas.
  - It expects a POST request with an image encoded in Base64.
  - The image is decoded, preprocessed, and passed to the model for prediction.
  - Returns the predicted digit as a JSON response.
- **/recognize-upload:**
  - Similar to the /recognize route but specifically for uploaded images.
  - Handles the same workflow of decoding, preprocessing, and predicting.

## 5. Running the Application
At the end of the script, the Flask application is run in debug mode. This allows for easier debugging and development.
```python
if __name__ == '__main__':
    app.run(debug=True)
```


# Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Khaledayman9/Handwritten-Digit-Recognizer.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd Handwritten-Digit-Recognizer
   ```
3. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```
4. **Install the required Python packages listed in requirements.txt (create a virtual environment if necessary):**
   ```bash
   pip install -r requirements.txt
   ```
5. **Run the Flask server:**
   ```bash
   python app.py
   ```

# Usage
- Draw a digit on the canvas using your mouse or touch screen.
- Click the Predict button to get the recognized digit.
- Alternatively, upload an image of a handwritten digit using the provided file input.
- Use the Clear button to reset the canvas.


# Future Improvements
- Improve the accuracy of the digit recognition model.
- Add support for different image formats.
- Implement a more sophisticated user interface design.
- Include user feedback mechanisms for predictions.



# Technologies
- **Microsoft Visual Studio Code**
- **Frontend**: 
  - HTML
  - CSS (Bootstrap for styling)
  - JavaScript (for frontend logic and drawing on canvas)
- **Backend**:
  - Flask (for handling requests and serving the model)
  - TensorFlow (for digit recognition model)
  - Scikit-learn
  - Scikit-image
  - OpenCV
