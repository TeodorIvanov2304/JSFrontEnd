function solve(passwords) {
    let username = passwords[0];
    let reversedPassword = '';

    for (let i = username.length - 1; i >= 0; i--) {
        reversedPassword += username[i];
    }

    let counter = 0;

    for (let i = 1; i < passwords.length; i++) {
        counter++;
        if(passwords[i] == reversedPassword) {
            console.log(`User ${username} logged in.`)
        }
        else {
            if(counter < 4) {
                console.log(`Incorrect password. Try again.`)     
            }
            else {
                return console.log(`User ${username} blocked!`);
            }
        }
    }
}

solve(['Acer','login','go','let me in','recA']);
solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);

console.log('-----------------------------');

//With ternary operator
function solve2(passwords) {
    let username = passwords[0];
    let reversedPassword = '';

    for (let i = username.length - 1; i >= 0; i--) {
        reversedPassword += username[i];
    }

    let counter = 0;

    for (let i = 1; i < passwords.length; i++) {
        counter++;
        if(passwords[i] == reversedPassword) {
            console.log(`User ${username} logged in.`)
        }
        else {
            counter < 4 ? console.log(`Incorrect password. Try again.`) : console.log(`User ${username} blocked!`);
        }
    }
}

solve2(['Acer','login','go','let me in','recA']);
solve2(['momo','omom']);
solve2(['sunny','rainy','cloudy','sunny','not sunny']);

console.log('-----------------------------');

//With reverse function
function solve3(passwords) {
    let username = passwords[0];
    let reversedPassword = username.split('').reverse().join('');    
    let counter = 0;

    for (let i = 1; i < passwords.length; i++) {
        counter++;
        if(passwords[i] == reversedPassword) {
            console.log(`User ${username} logged in.`)
        }
        else {
            counter < 4 ? console.log(`Incorrect password. Try again.`) : console.log(`User ${username} blocked!`);
        }
    }
}

solve3(['Acer','login','go','let me in','recA']);
solve3(['momo','omom']);
solve3(['sunny','rainy','cloudy','sunny','not sunny']);
