function assocArray() {
  let associativeArray = {
    "John Smith": "09821121",
  };

  console.log(associativeArray.hasOwnProperty("John Smith"));

  delete associativeArray["John Smith"];

  console.log(associativeArray.hasOwnProperty("John Smith"));
}

assocArray();


let phonebook = {
  'John Smith':'292929223',
  'Arnold Shwarzenegger': '292929888',
  'Peter Parker':'392929888'
}

let entries = Object.entries(phonebook);

//Order by name

entries.sort(compareEntries);
console.log(entries);

//Before sort
console.log(phonebook);

//After sort
const sortedBook = Object.fromEntries(entries);
console.log(sortedBook);

function compareEntries(a,b) {
  return a[0].localeCompare(b[0]);
}

