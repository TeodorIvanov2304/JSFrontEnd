function addAndSubtract(num1, num2, num3) {
  function sum(num1, num2) {
    return num1 + num2;
  }

  function subtract(result, num3) {
    return result - num3;
  }

  let result = sum(num1, num2);
  result = subtract(result, num3);
  return console.log(result);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);

function addAndSubtractV2(num1, num2, num3) {
  function sum(num1, num2) {
    return num1 + num2;
  }

  function subtract(result, num3) {
    return result - num3;
  }

  console.log(subtract(sum(num1, num2), num3));
}

addAndSubtractV2(23, 6, 10);
addAndSubtractV2(1, 17, 30);
addAndSubtractV2(42, 58, 100);

//With lambda
function addAndSubtractV3(num1, num2, num3) {
  let sum = (a, b) => a + b;
  let subtract = (a, b) => a - b;

  console.log(subtract(sum(num1, num2), num3));
}

addAndSubtractV3(23, 6, 10);
addAndSubtractV3(1, 17, 30);
addAndSubtractV3(42, 58, 100);
