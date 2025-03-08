let arr = [7,2,13,1,3,-4,5];
console.log(arr);
//a - b for ascending order, b - a for descending
arr.sort((a , b) => a - b);
console.log(arr);


//Order strings aplphabetically with localeCompare(a)
let stringArray = ['Michael', 'An-Marie', 'David', 'Klara','Johnny','Ted'];
stringArray.sort((a,b) => a.localeCompare(b));
console.log(stringArray);
//From z to a
stringArray.sort((a,b) => b.localeCompare(a));
console.log(stringArray);
