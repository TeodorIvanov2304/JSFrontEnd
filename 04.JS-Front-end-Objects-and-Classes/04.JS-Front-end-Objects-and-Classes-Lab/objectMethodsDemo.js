let woman = {
  firstName: "Sara",
  lastName: "Connor",
  age: 21,
  sayHello: function () {
    console.log("I am Sara");
  },
};

console.log(woman.firstName);
woman.sayHello();

let woman2 = {
  firstName: "Dara",
  lastName: "Monnor",
  age: 21,
  sayHello() {
    //without :function
    console.log("I am Dara");
  },
};

console.log(woman2.firstName);
woman2.sayHello();

let woman3 = {
  firstName: "Gara",
  lastName: "Dembele",
  age: 21,
  sayHello, // Short writing for declared function like property
};

function sayHello() {
  console.log("I am Gara");
}

console.log(woman2.firstName);
woman3.sayHello();

//Create new object function
woman.saySomething = () => console.log("Hi, everyone");
woman.saySomething();

//With Object.keys we can get an array of all object properties
let keys = Object.keys(woman);
console.log(keys);

for (key of keys) {
  console.log(`${key} -> ${woman[key]}`);
}

console.log("**************************");
//With Object.values we get the values of the object
let values = Object.values(woman);
console.log(values);
for (let value of values) {
  console.log(value);
}

console.log("**************************");
//Return array of key-value pairs - the object properties
let entries = Object.entries(woman);
console.log(entries);
for (let entry of entries) {
  console.log(entry);
}

