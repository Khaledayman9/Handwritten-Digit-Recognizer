# Handwritten-Digit-Recognizer
A web application that recognizes handwritten digits using a deep learning model. Users can either draw digits on a canvas or upload images of handwritten digits for prediction. The application uses a Flask backend and a TensorFlow model for processing.

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


# Folder Structure
handwritten-digit-recognizer/
│
├── backend/                # Backend files (Requirements, Flask and AI model)
│   ├── app.py              # Flask backend
│   ├── model.py  
│   ├── mnist_model.h5
│   └── requirements.txt
│
└── frontend/               # Frontend files (HTML, CSS, JS)
    ├── index.html          # Frontend UI
    ├── style.css           # Styling
    ├── script.js           # JavaScript for canvas drawing and API calls
    └── Images/             # Contains the frame image used to surround the drawing canvas
        └── frame.png       # The frame image file


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
