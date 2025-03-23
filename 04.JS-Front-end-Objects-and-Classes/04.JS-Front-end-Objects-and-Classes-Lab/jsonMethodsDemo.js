let obj = {
    firstName: 'Sam',
    lastName: 'Serious',
    //Functions and code are not serialized!
    middleName: undefined,
    //Null is serilized
    driversLicense: null
};

//Serialization
let text = JSON.stringify(obj);
console.log(text);

//Deserialization
let obj2 = JSON.parse(text);
console.log(obj2);