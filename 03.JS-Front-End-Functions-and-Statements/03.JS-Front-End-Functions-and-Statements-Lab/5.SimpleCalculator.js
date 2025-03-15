function simpleCalculator(a, b, operation) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    switch (operation) {
        case 'multiply':
            console.log(multiply(a,b));
            break;
        case 'divide':
            console.log(divide(a,b));
            break;
        case 'add':
            console.log(add(a,b));
            break;
        case 'subtract':
            console.log(subtract(a,b));
            break;
    }
}

simpleCalculator(5, 5, "multiply");
console.log('------------------');
simpleCalculator(40, 8, "divide");
console.log('------------------');
simpleCalculator(12, 19, "add");
console.log('------------------');
simpleCalculator(50, 13, "subtract");

console.log('******************')

//Solution wihout if, else or ternary
function simpleCalculator2(a, b, operator) {
    
    let operationsMap = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    };
    let action = operationsMap[operator];
    console.log(action(a,b));

    //Another variant, without action variable
    //console.log(operationsMap[operator](a,b));
}

simpleCalculator2(5, 5, "multiply");
console.log('------------------');
simpleCalculator2(40, 8, "divide");
console.log('------------------');
simpleCalculator2(12, 19, "add");
console.log('------------------');
simpleCalculator2(50, 13, "subtract");
