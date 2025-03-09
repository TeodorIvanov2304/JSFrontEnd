function solve(names) {
    names.sort((a , b) => a.localeCompare(b));;
    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`);
    }
}

solve(['John', 'Bob', 'Christina', 'Ema']);

console.log('**********************************');

solve(['Lary', 'Gary', 'Johnatan', 'Yasmeen','Jerry']);

console.log('**********************************');

solve(['Michael', 'An-Marie', 'David', 'Klara','Johnny','Ted']);
