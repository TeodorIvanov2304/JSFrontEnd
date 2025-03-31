function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;

    let result = Number(firstNumber) - Number(secondNumber);
    let rValue = document.getElementById('result');
    rValue.textContent = result;
}
