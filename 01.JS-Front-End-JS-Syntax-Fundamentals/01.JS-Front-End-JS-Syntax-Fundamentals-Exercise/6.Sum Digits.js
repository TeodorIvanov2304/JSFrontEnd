function sumDigits (number) {
    let numbers = number.toString();
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        
        sum += Number(numbers[i]);
    }
    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
