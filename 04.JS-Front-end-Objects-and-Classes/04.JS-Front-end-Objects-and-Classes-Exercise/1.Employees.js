function employees(names) {
    let employeeList = {};
    for(let name of names){
        employeeList[name] = name.length;
    }

    let entries = Object.entries(employeeList);

    for(let [name, number] of entries) {
        console.log(`Name: ${name} -- Personal Number: ${number}`);
    }

    //Shorter
    //entries.forEach(([name,personalNumber]) => console.log(`Name: ${name} -- Personal Number: ${personalNumber}`))
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);

console.log('*******************************');

//With For-in
function employees2(names) {
    let employeeList = {};
    for(let name of names){
        employeeList[name] = name.length;
    }

    for(let employee in employeeList) {
        console.log(`Name: ${employee} -- Personal Number: ${employeeList[employee]}`);
    }
}

employees2(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees2(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);
