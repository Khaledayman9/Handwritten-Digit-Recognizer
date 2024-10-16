# Handwritten-Digit-Recognizer
A web application that recognizes handwritten digits using a deep learning model. Users can either draw digits on a canvas or upload images of handwritten digits for prediction. The application uses a Flask backend and a TensorFlow model for processing.

![](https://github.com/Khaledayman9/Handwritten-Digit-Recognizer/blob/main/Layout.gif)

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

![Predict](https://github.com/user-attachments/assets/4f1639d5-7a4e-4107-8d4e-824bc0ab87ec)

![drawing](https://github.com/user-attachments/assets/a69773de-5754-41f6-9c3c-1d22f38ea765)

![drawing2](https://github.com/user-attachments/assets/713aff97-0b4f-4eed-b6fd-08daee8ac1e4)

## Uploading images and Predicting it:

![Testing 2](https://github.com/user-attachments/assets/4a2fd700-c755-4ff4-8b5a-1202d8501eba)

![Testing 3](https://github.com/user-attachments/assets/ee32b300-e5f5-45bd-8638-374d9dd41adf)

![testing 4](https://github.com/user-attachments/assets/23d6e323-6e8b-49dc-8c88-d2f5cdc51d0e)

## Error Handling:
### When the user presses predict and a prediction is already displayed:
![error11](https://github.com/user-attachments/assets/6c23e088-c8c4-4300-970d-1c62b4ff67fb)
### When the user presses clear and the drawing canvas is already clear:
![error2](https://github.com/user-attachments/assets/c17f127e-37bd-4bbc-9e0c-8b0380904481)
### When the user presses predict and the drawing canvas empty and no image uploaded:
![error3](https://github.com/user-attachments/assets/2824a19c-2dab-4b86-8d90-9f137fc75699)

## Some Unique Test Cases:
- Certain digits, like 1 and 7, can be difficult to distinguish for both humans and deep learning models. This can lead to ambiguity in predictions, making it challenging to verify the correct input.
![error](https://github.com/user-attachments/assets/1ec8c4cf-9fdd-4845-9efa-729738ad4d22)


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
