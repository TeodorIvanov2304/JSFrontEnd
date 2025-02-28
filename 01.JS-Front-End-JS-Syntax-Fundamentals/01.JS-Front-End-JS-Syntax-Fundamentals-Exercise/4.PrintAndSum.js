function printAndSum (start, end) {

    let sum = 0;
    let numbers = [];

    for (let i = start; i <= end; i++) {
        
        numbers.push(i)

        sum += i;
    }

    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}

printAndSum(5,10);
printAndSum(0,26);
printAndSum(50,60);

console.log('---------------------------------------')

function printAndSumString (start, end) {

    let sum = 0;
    let numbers = '';

    for (let i = start; i <= end; i++) {
        
        numbers += i;
        numbers += ' ';

        sum += i;
    }

    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

printAndSumString(5,10);
printAndSumString(0,26);
printAndSumString(50,60);
