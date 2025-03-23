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

function createMan(firstName, lastName, age){
    let man = {
        firstName, // <= this is called composition, assigning the variables
        lastName, //without their key. Compose the variables inside the object
        age
    };
}

createMan('Dirk','Yensen',22);


//Destructuring -> the opposite of composition
function destructuring(){
    let man = {
        'firstName':'Star',
        'lastName': 'Channel',
        'age': 22
    };

    let {age} = man;
    console.log(age);
}

destructuring();
