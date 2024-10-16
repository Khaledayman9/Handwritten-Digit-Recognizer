# Handwritten-Digit-Recognizer
A web application that recognizes handwritten digits using a deep learning model. Users can either draw digits on a canvas or upload images of handwritten digits for prediction. The application uses a Flask backend and a TensorFlow model for processing.

![](https://github.com/Khaledayman9/Handwritten-Digit-Recognizer/blob/main/Layout.gif)

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
- Some digiits can be confusing to humans and Deep learning models like this one, you cant verify whether the person typed 1 or 7. 
![error](https://github.com/user-attachments/assets/1ec8c4cf-9fdd-4845-9efa-729738ad4d22)


# Features
- **Drawing Canvas**: Users can draw digits directly on a canvas.
- **Image Upload**: Users can upload images of handwritten digits for prediction.
- **Real-time Prediction**: Click a button to predict the digit drawn or uploaded.
- **Responsive Design**: The application is designed to work on various screen sizes.


 
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
- Microsoft Visual Studio Code
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
