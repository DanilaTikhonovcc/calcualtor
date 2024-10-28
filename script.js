const buttons = document.querySelectorAll('button');
const input = document.getElementById('inputtext');
const historyLog = document.getElementById('history-log');

function operation(buttonValue) {
    if (buttonValue === 'C') {
        input.value = '';
    } else if (buttonValue === 'DEL') {
        input.value = input.value.slice(0, -1);
    } else if (buttonValue === '=') {
        const result = calculate(input.value);
        if (result !== 'error') addToHistory(input.value + " = " + result);
        input.value = result;
    } else {
        input.value += buttonValue;
    }
}

function calculate(expression) {
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'error';
    }
}

function addToHistory(entry) {
    const historyEntry = document.createElement('div');
    historyEntry.classList.add('history-log-entry');
    historyEntry.innerText = entry;
    historyLog.appendChild(historyEntry);
}

buttons.forEach(button => {
    const buttonValue = button.innerText;
    button.addEventListener('click', function(){operation(buttonValue)});
});
