function phoneBook(arr) {
    let phonebook = new Map();

    for(let entry of arr) {
        let splittedEntry = entry.split(' ');
        let name = splittedEntry[0];
        let phoneNumber = splittedEntry[1];
        phonebook[name] = phoneNumber;
    }
    

    let entries = Object.entries(phonebook);
    for(let entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }

    console.log(phonebook.has('Tim'));
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

console.log('************************');

//With for-in
function phoneBook2(data) {
    let phonebook = {};

    for(let item of data) {
        let [name, phone] = item.split(' ');
        phonebook[name] = phone;
    }

    for (const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`)
    }
}

phoneBook2([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);

phoneBook2([
    "George 0552554", 
    "Peter 087587", 
    "George 0453112", 
    "Bill 0845344"
]);

console.log('************************');

//With fromEntries
function phoneBook3(data) {
    
    let entries  = data.map(i => i.split(' '));

    let phonebook = Object.fromEntries(entries);
    
    for (const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`)
    }
}

phoneBook3([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);

phoneBook3([
    "George 0552554", 
    "Peter 087587", 
    "George 0453112", 
    "Bill 0845344"
]);
