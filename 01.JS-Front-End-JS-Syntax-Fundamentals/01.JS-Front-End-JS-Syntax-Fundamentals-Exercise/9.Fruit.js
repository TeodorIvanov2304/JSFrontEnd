function fruits(fruit,weight,price) {
    weight /= 1000;
    let finalPrice = weight * price;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

fruits('orange', 2500, 1.80);
fruits('apple', 1563, 2.35);
