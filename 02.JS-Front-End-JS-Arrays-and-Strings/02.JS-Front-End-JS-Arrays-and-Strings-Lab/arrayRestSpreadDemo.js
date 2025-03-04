let myArr = [10,20,30,40,50,60,70];

console.log(myArr);

//Extract the first two values of the array into 2 separate variables and 
// the other variables copy in separate array called rest
//Rest operator " ... "
let [a,b, ...rest] = myArr;
console.log(a);
console.log(b);
console.log(rest);


console.log('--------------------------------')

//Spread operator " ... "
let array1 = [10,20,30];
let array2 = [40,50,60,70];

let concat = [...array1, ...array2];
console.log(concat)

