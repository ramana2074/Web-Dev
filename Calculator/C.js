let result = document.getElementById('result');

// Append value to the display
function appendValue(value) {
    result.value += value;
}

// Clear the display
function clearResult() {
    result.value = '';
}

// Delete the last character
function deleteLast() {
    result.value = result.value.slice(0, -1);
}

// Perform calculation
function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
