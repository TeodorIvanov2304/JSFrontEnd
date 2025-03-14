function mathPower(number, power) {
    console.log(Math.pow(number,power));
}

mathPower(2,8);
mathPower(3,4);

function mathPower2(number, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= number;
    }
    return console.log(result);
}

mathPower2(2,8);
mathPower2(3,4);

