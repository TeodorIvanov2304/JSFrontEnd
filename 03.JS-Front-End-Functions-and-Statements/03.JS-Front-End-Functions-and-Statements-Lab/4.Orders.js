function orders(product, quantity) {

//Create variables
const coffee = 1.50
const water = 1.00
const coke = 1.40
const snacks = 2.00
let totalPrice = 0;

//Calculate the price
function calculatePrice(productToCalclulate, quantityToCalculate) {
    return totalPrice += productToCalclulate * quantityToCalculate;
}

//Determine the product price and invoke the calculatePrice function
if (product == 'coffee') {
    calculatePrice(coffee,quantity);
}
else if (product == 'water'){
    calculatePrice(water,quantity);
}
else if (product == 'coke'){
    calculatePrice(coke,quantity);
}
else {
    calculatePrice(snacks,quantity);
}

//Print result
console.log(totalPrice.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);
