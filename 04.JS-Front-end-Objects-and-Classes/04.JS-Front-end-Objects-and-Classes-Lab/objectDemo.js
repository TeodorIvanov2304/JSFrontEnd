let myFirstObject = {name: 'Garo', age: 1000};

console.log(myFirstObject);
console.log(myFirstObject.name);
//Equivalent of myFirstObject.name with indexing operator
console.log(myFirstObject['name']);
console.log(myFirstObject.age);

//You can add new property
myFirstObject.occupation = 'Jersey';
console.log(myFirstObject);

//Remove property with delete operator
delete myFirstObject.age;
console.log(myFirstObject);

//Create empty object
let person = {};