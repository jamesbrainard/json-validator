function validateJSON() {
    const jsonInput = document.getElementById('jsonInput').value;
    const resultContainer = document.getElementById('result');

    try {
        const parsedJSON = JSON.parse(jsonInput);
        resultContainer.innerHTML = '<span style="color: green;">JSON is valid!</span>';
        console.log(parsedJSON); 
    } catch (error) {
        resultContainer.innerHTML = `<span style="color: red;">Error: ${error.message}</span>`;
    }
}

function updateLineNumbers() {
    const jsonInput = document.getElementById('jsonInput');
    const lineNumbersContainer = document.querySelector('.line-numbers');

    lineNumbersContainer.innerHTML = '';

    const lineCount = jsonInput.value.split('\n').length;

    for (let i = 1; i <= lineCount; i++) {
        const lineNumberDiv = document.createElement('div');
        lineNumberDiv.textContent = i;
        lineNumbersContainer.appendChild(lineNumberDiv);
    }
}

updateLineNumbers();