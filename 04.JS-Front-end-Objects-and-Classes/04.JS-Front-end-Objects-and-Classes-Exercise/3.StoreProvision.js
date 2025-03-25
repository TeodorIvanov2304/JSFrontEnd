function storeProvision(stock, order) {
  let store = {};

  for (let i = 0; i < stock.length; i++) {
    if (checkForEven(i)) {
      addProduct(i, stock);
    }
  }

  for (let i = 0; i < order.length; i++) {
    if (checkForEven(i) && checkForProduct(i)) {
      addToQuantity(i);
    } else if (checkForEven(i) && !checkForProduct(i)) {
      addProduct(i, order);
    }
  }

  for (let item in store) {
    console.log(`${item} -> ${store[item]}`);
  }

  function addToQuantity(i) {
    store[order[i]] += Number(order[i + 1]);
  }

  function checkForProduct(i) {
    return store.hasOwnProperty(order[i]);
  }

  function addProduct(i, listOfProducts) {
    store[listOfProducts[i]] = Number(listOfProducts[i + 1]);
  }

  function checkForEven(i) {
    return i % 2 == 0;
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);

console.log("***********************");

function storeProvision2(initial, orders) {
  let stock = new Map();

  for (let i = 0; i < initial.length; i += 2) {
    let key = initial[i];
    let value = Number(initial[i + 1]);
    stock.set(key, value);
  }

  for (let i = 0; i < orders.length; i+=2) {
    let key = orders[i];
    let value = Number(orders[i + 1]);

    if (!stock.has(key)) {
      stock.set(key, 0);
    }

    let current = stock.get(key);
    stock.set(key, current + value);
  }

  for(let [key, value] of stock) {
    console.log(`${key} -> ${value}`);
  }
}

storeProvision2(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
storeProvision2(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
