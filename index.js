function findMin() {
    let inputNumbers = document.getElementById('inputNumbers').value;
    let numbers = inputNumbers.split(',').map(Number);

    if (numbers.some(isNaN)) {
        alert("Please provide valid numbers.");
        return;
    }

    let min = Math.min(...numbers);
    document.getElementById('result').innerText = `The minimum number is: ${min}`;
}

function findMax() {
    let inputNumbers = document.getElementById('inputNumbers').value;
    let numbers = inputNumbers.split(',').map(Number);

    if (numbers.some(isNaN)) {
        alert("Please provide valid numbers.");
        return;
    }

    let max = Math.max(...numbers);
    document.getElementById('result').innerText = `The maximum number is: ${max}`;
}
