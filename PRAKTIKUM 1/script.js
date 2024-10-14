let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === '') return;
    currentInput += operator;
    updateDisplay();
}

function clearResult() {
    currentInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        updateDisplay();
    } catch (error) {
        alert("Invalid operation");
        clearResult();
    }
}
