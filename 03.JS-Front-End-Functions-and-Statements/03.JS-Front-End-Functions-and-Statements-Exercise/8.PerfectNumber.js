function perfectNumber(num){
    let divisors = [];

    //For loop from 1 (the smallest possible divisor) and ends at num - 1.
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            divisors.push(i);
        }
    }

    let sum = 0;
    //Sum divisors
    for (let divisor of divisors) {
        sum += divisor;
    }

    //If the sum of all divisors == num, the number is perfect
    if (sum == num) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);

console.log('*************************');
function perfectNumber2(num){
    
    let sum = 0;

    //The number can not be divided wihtour remainder if the divider is > than number / 2
    for (let i = 1; i <= num / 2; i++) {
        if(num % i == 0) {
            sum += i;
        }
    }
    
    if (sum == num) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}

perfectNumber2(6);
perfectNumber2(28);
perfectNumber2(1236498);
