function smallestOfThreeNumbers(number1, number2, number3) {
  function minNumber(a, b, c) {
    return Math.min(a, b, c);
  }

  console.log(minNumber(number1, number2, number3));
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);

console.log("***************");

function smallestOfThreeNumbersV2(number1, number2, number3) {
  if (number1 <= number2 && number1 <= number3) {
    console.log(number1);
  } else if (number2 <= number1 && number2 <= number3) {
    console.log(number2);
  } else if (number3 <= number2 && number3 <= number1) {
    console.log(number3);
  }
}

smallestOfThreeNumbersV2(2, 5, 3);
smallestOfThreeNumbersV2(600, 342, 123);
smallestOfThreeNumbersV2(25, 21, 4);
smallestOfThreeNumbersV2(2, 2, 2);

console.log("***************");

function smallestOfThreeNumbersV3(number1, number2, number3) {
  return console.log(Math.min(number1, number2, number3));
}

smallestOfThreeNumbersV3(2, 5, 3);
smallestOfThreeNumbersV3(600, 342, 123);
smallestOfThreeNumbersV3(25, 21, 4);
smallestOfThreeNumbersV3(2, 2, 2);

console.log("***************");

function smallestOfThreeNumbersV4(number1, number2, number3) {
  if (number1 > number2) {
    number1 = number2;
  }
  if (number1 > number3) {
    number1 = number3;
  }
  return console.log(number1);
}

smallestOfThreeNumbersV4(2, 5, 3);
smallestOfThreeNumbersV4(600, 342, 123);
smallestOfThreeNumbersV4(25, 21, 4);
smallestOfThreeNumbersV4(2, 2, 2);
