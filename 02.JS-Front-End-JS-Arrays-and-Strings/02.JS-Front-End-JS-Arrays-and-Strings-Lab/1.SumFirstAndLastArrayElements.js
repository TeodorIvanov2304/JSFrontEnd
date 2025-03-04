function solve (numbers) {
    console.log(numbers[0] + numbers[numbers.length-1]);
}

solve([20, 30, 40]);
solve([10, 17, 22, 33]);
solve([11, 58, 69]);

console.log('**********************')

function solve2 (arrayNumbers) {
    let first = arrayNumbers.shift();
    let last = arrayNumbers.pop();
    console.log(first + last);
}

solve2([20, 30, 40]);
solve2([10, 17, 22, 33]);
solve2([11, 58, 69]);
