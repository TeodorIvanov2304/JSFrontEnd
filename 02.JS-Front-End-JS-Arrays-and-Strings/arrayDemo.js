let myArr = [10,20,30,40,50,60,70];

//Log array on console
console.log(myArr);

//Get element by index
console.log(myArr[2]);

//Get array length
console.log(myArr.length);

//Get the last element
console.log(myArr[myArr.length-1]);

//Rewrite element value
myArr[2] = 33;
console.log(myArr[2]);

//Get element by non-existing index returns undefined
console.log(myArr[12]);

//Invalid index also returns undefined
console.log(myArr[-1]);

//Add element in the end of the array
myArr.push(75);
console.log(myArr);