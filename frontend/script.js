const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let drawing = false;
let uploadedImage = null;
let predictionMade = false;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = 'black';
ctx.lineWidth = 15;
ctx.lineCap = 'round';

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(getMousePos(e).x, getMousePos(e).y);
});
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath();
});
canvas.addEventListener('mousemove', (event) => draw(event));

function draw(event) {
    if (!drawing) return;
    ctx.lineTo(getMousePos(event).x, getMousePos(event).y);
    ctx.stroke();
}

function getMousePos(event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    };
}

document.getElementById('clear-btn').addEventListener('click', () => {
    if (ctx.getImageData(0, 0, canvas.width, canvas.height).data.some((value) => value !== 255) || uploadedImage) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        uploadedImage = null;
        document.getElementById('result-text').textContent = '';
        predictionMade = false;
    } else {
        showPopup("The canvas is already clear!");
    }
});

document.getElementById('upload').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                uploadedImage = img;
                predictionMade = false;
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('predict-btn').addEventListener('click', async() => {
    let image;

    if (uploadedImage || ctx.getImageData(0, 0, canvas.width, canvas.height).data.some((value) => value !== 255)) {
        if (predictionMade) {
            showPopup("A prediction is already done! Please clear the canvas to predict again.");
            return;
        }

        if (uploadedImage) {
            image = canvas.toDataURL('image/png');
            const response = await fetch('/recognize-upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image }),
            });
            if (response.ok) {
                const result = await response.json();
                document.getElementById('result-text').textContent = `Predicted Digit: ${result.prediction}`;
                predictionMade = true;
            } else {
                console.error('Error in response:', response.statusText);
                document.getElementById('result-text').textContent = 'Error in prediction';
            }
        } else {
            image = canvas.toDataURL('image/png');
            const response = await fetch('/recognize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image }),
            });
            if (response.ok) {
                const result = await response.json();
                document.getElementById('result-text').textContent = `Predicted Digit: ${result.prediction}`;
                predictionMade = true;
            } else {
                console.error('Error in response:', response.statusText);
                document.getElementById('result-text').textContent = 'Error in prediction';
            }
        }
    } else {
        showPopup("Please draw or upload an image before predicting!");
    }
});

function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.textContent = message;
    popup.classList.remove('hidden');
    popup.style.display = 'block';

    setTimeout(() => {
        popup.classList.add('hidden');
        popup.style.display = 'none';
    }, 5000);
}

function createDigits() {
    const digits = [...Array(10).keys()];
    const container = document.querySelector('.background-effects');
    container.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const digit = digits[Math.floor(Math.random() * digits.length)];
        const digitDiv = document.createElement('div');
        digitDiv.className = 'digit';
        digitDiv.textContent = digit;
        digitDiv.style.position = 'absolute';
        digitDiv.style.left = `${Math.random() * 100}vw`;
        digitDiv.style.top = `${Math.random() * 100}vh`;
        const rotation = Math.random() * 360;
        digitDiv.style.transform = `rotate(${rotation}deg)`;
        digitDiv.style.fontSize = `${Math.random() * 50 + 30}px`;
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#F0E68C'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        digitDiv.style.color = randomColor;
        container.appendChild(digitDiv);
        digitDiv.style.opacity = 0;

        setTimeout(() => {
            digitDiv.style.transition = 'opacity 2s, transform 10s linear';
            digitDiv.style.opacity = 1;
            digitDiv.style.transform = `translateY(-100vh) rotate(${rotation}deg)`;
        }, 0);

        setTimeout(() => {
            digitDiv.style.transition = 'opacity 2s';
            digitDiv.style.opacity = 0;
            setTimeout(() => {
                digitDiv.remove();
            }, 2000);
        }, 5000);
    }
    createBubbles();
}

function createBubbles() {
    const container = document.querySelector('.background-effects');
    const digits = [...Array(10).keys()];

    for (let i = 0; i < 40; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.position = 'absolute';
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.top = `${Math.random() * 100}vh`;
        const bubbleSize = Math.random() * 50 + 20;
        bubble.style.width = `${bubbleSize}px`;
        bubble.style.height = `${bubbleSize}px`;
        container.appendChild(bubble);
        bubble.style.transition = 'transform 5s ease-in-out';
        bubble.style.transform = 'translateY(-100vh)';

        setTimeout(() => {
            bubble.remove();
        }, 5000);
    }
}

createDigits();
setInterval(createDigits, 3000);