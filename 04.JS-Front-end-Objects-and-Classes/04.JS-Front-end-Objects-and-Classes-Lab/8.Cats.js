function solve(catsDescriptors) {

class Cat {
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

let cats = catsDescriptors.map(parseCatData);

for(let cat of cats) {
    cat.meow();
}

function parseCatData(entry){
    let [name, age] = entry.split(' ');
    return cat = new Cat(name, Number(age));
}
}

solve(['Mellow 2', 'Tom 5']);
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);
