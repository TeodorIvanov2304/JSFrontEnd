function palindromeIntegers(arrOfIntegers) {
    for (let element of arrOfIntegers) {

        //Cast the element to string and reverse it
        let reversedElement = element.toString().split('').reverse().join('');
        
        //Compare element with reversed element
        if(element == reversedElement){
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);

console.log('*****************');

function palindromeIntegers2(arrOfIntegers) {
    for (let integer of arrOfIntegers) {
        let integerAsString = integer.toString();
        let isPalindrome = true;

        for (let i = 0; i < (integerAsString.length -1) / 2; i++) {
            if(integerAsString[i] != integerAsString[integerAsString.length - i - 1]) {
                isPalindrome = false;
                break;
            }
        }
        console.log(isPalindrome);
    }
}

palindromeIntegers2([123,323,421,121]);
palindromeIntegers2([32,2,232,1010]);
