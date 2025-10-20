const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch {
    display.value = 'Error';
  }
}

// ✅ Keyboard Support
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});