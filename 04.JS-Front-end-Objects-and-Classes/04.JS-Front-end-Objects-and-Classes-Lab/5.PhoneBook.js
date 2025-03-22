function phoneBook(arr) {
    let personMap = new Map();

    for(let entry of arr) {
        let splittedEntry = entry.split(' ');
        let name = splittedEntry[0];
        let phoneNumber = splittedEntry[1];
        personMap[name] = phoneNumber;
    }

    let entries = Object.entries(personMap);
    for(let entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);

phoneBook([
    "George 0552554", 
    "Peter 087587", 
    "George 0453112", 
    "Bill 0845344"
]);

