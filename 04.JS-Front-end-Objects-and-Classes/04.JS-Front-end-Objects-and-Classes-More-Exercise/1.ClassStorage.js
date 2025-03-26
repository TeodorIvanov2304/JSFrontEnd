class Storage{
    capacity;
    storage =[];
    totalCost = 0;

    constructor(capacity){
        this.capacity = capacity;
    }

    addProduct(product){
        this.storage.push(product);
        this.capacity -= product.quantity;
        this.totalCost += product.quantity * product.price;
    }

    getProducts(){
        return this.storage.map(p => JSON.stringify(p)).join('\n');
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

console.log('**************************');

let productOne2 = {name: 'Tomato', price: 0.90, quantity: 19};
let productTwo2 = {name: 'Potato', price: 1.10, quantity: 10};
let storage2 = new Storage(30);
storage.addProduct(productOne2);
storage.addProduct(productTwo2);
console.log(storage.totalCost2);
