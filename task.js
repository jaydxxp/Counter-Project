// script.js

let count = 0;
const history = [0];
let currentIndex = 0;

const counterDisplay = document.getElementById('counter');
const progressBar = document.getElementById('progressBar');
const subtractBtn = document.getElementById('subtractBtn');
const addBtn = document.getElementById('addBtn');
const undoBtn = document.getElementById('undoBtn');
const redoBtn = document.getElementById('redoBtn');

const updateDisplay = () => {
  counterDisplay.textContent = `Counter: ${count}`;
  progressBar.style.width = `${(count / 150) * 100}%`;
};

const handleAdd = () => {
  if (count < 150) {
    count++;
    history.splice(currentIndex + 1);
    history.push(count);
    currentIndex++;
    updateDisplay();
  }
};

const handleSubtract = () => {
  if (count > 0) {
    count--;
    history.splice(currentIndex + 1);
    history.push(count);
    currentIndex++;
    updateDisplay();
  }
};

const handleUndo = () => {
  if (currentIndex > 0) {
    currentIndex--;
    count = history[currentIndex];
    updateDisplay();
  }
};

const handleRedo = () => {
  if (currentIndex < history.length - 1) {
    currentIndex++;
    count = history[currentIndex];
    updateDisplay();
  }
};

subtractBtn.addEventListener('click', handleSubtract);
addBtn.addEventListener('click', handleAdd);
undoBtn.addEventListener('click', handleUndo);
redoBtn.addEventListener('click', handleRedo);

updateDisplay();
