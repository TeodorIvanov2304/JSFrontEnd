function solve(num1, num2,operator) {

    if(operator == '+') {
        console.log(num1 + num2);
    }
    else if(operator == '-') {
        console.log(num1 - num2);
    }
    else if(operator == '*') {
        console.log(num1 * num2);
    }
    else if(operator == '/') {
        console.log(num1 / num2);
    }
    else if(operator == '%') {
        console.log(num1 % num2);
    }
    else if(operator == '**') {
        console.log(num1 **= num2);
    }
}

solve(5,6,'+');
solve(5,6,'-');
solve(3,5.5,'*');
solve(1000,10,'/');
solve(16,5,'%');
solve(10,2,'**');
