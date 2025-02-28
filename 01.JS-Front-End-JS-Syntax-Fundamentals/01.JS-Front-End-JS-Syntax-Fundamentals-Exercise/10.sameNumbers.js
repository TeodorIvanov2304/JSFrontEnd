function sameNumbers(number) {
    let sum = 0;
    let isCharSame = true;
    let asString = number.toString();
    let firstChar = asString[0];

    for(let char of asString) {
        sum +=Number(char);

        if(char != firstChar) {
            isCharSame = false;
        }
    }

    console.log(isCharSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
