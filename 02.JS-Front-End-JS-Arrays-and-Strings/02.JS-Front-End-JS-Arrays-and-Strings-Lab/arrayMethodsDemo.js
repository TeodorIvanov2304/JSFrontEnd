let myArr = [10,20,30,40,50,60,70];

console.log(myArr);

//Pop removes the last element of the array
let lastElement = myArr.pop();
console.log(lastElement);
console.log(myArr);

//Shift
console.log(myArr.length);
//Shift removes the first element
console.log(myArr.shift());
console.log(myArr);

//Unshift ads one or more elements to the beginning of the array
//and returns the new length of the array
let nums = [30,40,50];
console.log(nums.length); //3 elements
console.log(nums.unshift(30)); //4 elements
console.log(nums.unshift(10,20)); //6 elements
console.log(nums);

//Splice chenges the content of an array by removing or replacing 
// existing elements and/or adding new elemengs
let numbers = [1,3,4,5,6];
//Insert 2 at index 0, delete elements 0
numbers.splice(1,0,2);
console.log(numbers);
//Insert 199 at index 4
numbers.splice(4,1,199);
console.log(numbers);

//Removes 1 element at index 2
let el = numbers.splice(2,1);
console.log(numbers);
console.log(el);

//Reverse - reverses the array
let stringArray = ['Laphroaig','Oban','Talisker','Lagavulin'];
stringArray.reverse();
console.log(stringArray);

//Join - joins the array elements and creates new string array
let natureElements = ['Air','Water','Fire'];
//Join with ',';
console.log(natureElements.join());
//Join without spaces
console.log(natureElements.join(''));
//Join with dash
console.log(natureElements.join('-'));
console.log(natureElements.join(' - - - '));
//Join with new line
console.log(natureElements.join('\n'));

//Slice - returns a shallow copy of a portion of an array into a new array
//selected from begin to end (end not included)
//The original array will not be modified

let fruits = ['Bannana','Orange','Lemon', 'Apple'];
//Slice from index 1 to 3, 3 NOT included
let citrus = fruits.slice(1,3);
let fruitsCopy = fruits.slice();
console.log(fruitsCopy);
console.log(citrus);


//Includes - return true or false if array contains a certain element
let letters = ['a','b','c'];
console.log(letters.includes('b')); //True
console.log(letters.includes('h')); //False


//indexOf - returns the first index at which a given element can be found in
//the array. If element not found returns -1 !
const beasts = ['ant','bison','camel','duck','bison'];
console.log(beasts.indexOf('bison'));
//Start from index 2
console.log(beasts.indexOf('bison',2));
console.log(beasts.indexOf('giraffe')); // -1

//Map - creates a new array with the results of calling a provided
//function on every element in the calling array

let numbersToMap = [1,4,9];
//Apply square root to all elements of numbersToMap and save in new array, 
// without changing the first. map() == Select() in C#
let roots = numbersToMap.map(function(num,i,arr) {
    return Math.sqrt(num);
});
console.log(roots);
//With lambda
let output = numbersToMap.map(n => n * 2);
console.log(output);

//Find - returns the first value in the array, if an element in the array satisfies the
// provided tesing function or undefined if not found
let array1 = [5,12,,8,130,44];
let found = array1.find(function(element){
    return element > 10;
})
console.log(found);

//Filter - returns all elements that satisfy a condition,
// or undefined if not found
let arrayToFilter = [10,20,30,40,50,60,70];
let filtered = arrayToFilter.filter(n => n > 10 && n < 70);
console.log(filtered);

