const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let count = 0;

function updateCounter() {
    counterDisplay.textContent = count;

    if (count > 0) {
        counterDisplay.style.color = 'green';
    } else if (count < 0) {
        counterDisplay.style.color = 'red';
    } else {
        counterDisplay.style.color = 'black';
    }
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

updateCounter();


// === Задание 2: Координаты курсора ===
const coordsBox = document.getElementById('coordsBox');
const coordsDisplay = document.getElementById('coordsDisplay');

coordsBox.addEventListener('mousemove', (e) => {
    const rect = coordsBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    coordsDisplay.textContent = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
});

coordsBox.addEventListener('mouseleave', () => {
    coordsDisplay.textContent = 'X: -, Y: -';
});


// === Задание 3: Смена цвета фона ===
const colorInput = document.getElementById('colorInput');
const currentColorSpan = document.getElementById('currentColor');

const validColors = [
    'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown',
    'black', 'white', 'gray', 'grey', 'cyan', 'magenta', 'lime', 'teal',
    'indigo', 'violet', 'gold', 'silver', 'beige', 'navy', 'maroon',
    'olive', 'aqua', 'fuchsia', 'turquoise', 'salmon', 'plum', 'orchid'
];

colorInput.addEventListener('input', () => {
    const value = colorInput.value.trim().toLowerCase();
    let isValid = false;

    const testElement = document.createElement('div');
    testElement.style.color = '';
    testElement.style.color = value;

    if (testElement.style.color !== '' || validColors.includes(value)) {
        document.body.style.backgroundColor = value;
        currentColorSpan.textContent = value;
        isValid = true;
    }

    if (!isValid) {
        document.body.style.backgroundColor = 'white';
        currentColorSpan.textContent = 'white (некорректный цвет)';
    }
});

colorInput.addEventListener('blur', () => {
    if (!colorInput.value.trim()) {
        document.body.style.backgroundColor = 'white';
        currentColorSpan.textContent = 'white';
    }
});
