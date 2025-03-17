function oddAndEvenSum(num) {
  let numbers = num.toString();
  let evenSum = 0;
  let oddSum = 0;

  for (const number of numbers) {
    addToSum(number);
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

  function addToSum(element) {
    element = Number(element);
    if (element % 2 == 0) {
      evenSum += element;
    } else {
      oddSum += element;
    }
  }
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
