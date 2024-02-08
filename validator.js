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