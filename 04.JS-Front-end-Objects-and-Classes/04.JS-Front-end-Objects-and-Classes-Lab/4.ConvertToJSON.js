function convertToJSON(name, lastName, hairColor) {
  let person = {
    name: name,
    lastName: lastName,
    hairColor: hairColor,
  };

  let personToJSON = JSON.stringify(person);
  console.log(personToJSON);
}

convertToJSON("George", "Jones", "Brown");
convertToJSON("Peter", "Smith", "Blond");

console.log("----------------------");

function convertToJSON2(name, lastName, hairColor) {
  let person = {
    name,
    lastName,
    hairColor,
  };

  console.log(JSON.stringify(person));
}

convertToJSON2("George", "Jones", "Brown");
convertToJSON2("Peter", "Smith", "Blond");
