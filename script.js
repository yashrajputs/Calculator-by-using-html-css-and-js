// Function to clear the display
function clearDisplay() {
    document.getElementsByName('display')[0].value = '';
}

// Function to delete the last character
function deleteLast() {
    var display = document.getElementsByName('display')[0];
    display.value = display.value.slice(0, -1);
}

// Function to append a value to the display
function appendValue(value) {
    document.getElementsByName('display')[0].value += value;
}

// Function to calculate the result
function calculateResult() {
    var display = document.getElementsByName('display')[0];
    display.value = eval(display.value);
}
