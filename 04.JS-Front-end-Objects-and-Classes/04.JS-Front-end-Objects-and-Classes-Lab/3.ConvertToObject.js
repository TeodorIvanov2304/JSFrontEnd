function convertToObject(jsonString) {
    let person = JSON.parse(jsonString);
    let entries = Object.entries(person);
    for(let [key,value] of entries){
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');

console.log('************************');

function convertToObject2(jsonString) {
    let entries = Object.entries(JSON.parse(jsonString));
    for(let entry of entries){
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}

convertToObject2('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject2('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
