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

let cats = [];

for(let entry of catsDescriptors) {
    let [name, age] = entry.split(' ');
    let cat = new Cat(name, Number(age));
    cats.push(cat);
}

for(let cat of cats) {
    cat.meow();
}
}

solve(['Mellow 2', 'Tom 5']);
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);
