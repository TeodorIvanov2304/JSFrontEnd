function passwordValidator(password) {
    let chars = password.split('');
    let intCounter = 0;
    let isLettersAndDigits = true;
    let isLengthValid = (password.length < 6 || password.length > 10) == false;

    for(let char of chars) {
        
        //Get the char code in the ASCII table
        let code = char.charCodeAt(0);
        //Number.isInteger(Number(char)) - alternative
        if(code >= 48 && code <= 57){
            intCounter++;
        }
        
        if(!((code >= 48 && code <= 57) || //Digits
             (code >= 65 && code <= 90) || //Capital letters
             (code >= 97 && code <= 122))) { //Letters
            isLettersAndDigits = false;
        }
    }

    if(isLengthValid && 
       isLettersAndDigits && 
       intCounter >= 2){
        return console.log(`Password is valid`);
    }

    if(!isLengthValid){
        console.log(`Password must be between 6 and 10 characters`);
    }

    if(!isLettersAndDigits) {
        console.log(`Password must consist only of letters and digits`);
    }
    
    if(intCounter < 2) {
        console.log(`Password must have at least 2 digits`);
    }
}

passwordValidator('logIn');
console.log(`---------------------`);
passwordValidator('MyPass123');
console.log(`---------------------`);
passwordValidator('Pa$s$s');
console.log(`---------------------`);
