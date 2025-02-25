function solve(number1,number2, number3) {
    
    let largestNumber = number1;

    if(number2 > largestNumber) {
        largestNumber = number2;
    }
    if(number3 > largestNumber) {
        largestNumber = number3;
    }

    console.log(`The largest number is ${largestNumber}.`);
}

solve(5, -3, 16);
solve(-3, -5, -22.5);

//Solve 2 with Math.max!

function solve2(number1, number2, number3) {
    let largestNumber = Math.max(number1, number2, number3);
    console.log(`The largest number is ${largestNumber}.`);
}
