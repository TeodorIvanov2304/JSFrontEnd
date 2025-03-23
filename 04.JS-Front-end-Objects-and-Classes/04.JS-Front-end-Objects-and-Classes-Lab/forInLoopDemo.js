function forInLoop() {
    let dictionary = {};
    dictionary['one'] = 1;
    dictionary['two'] = 2;
    dictionary['three'] = 3;

    //for in loops through all the keys of the map
    for(let key in dictionary) {
        console.log(`${key} = ${dictionary[key]}`);
    }
}

forInLoop();
