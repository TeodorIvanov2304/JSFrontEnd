//The first two solutions are slow, beacuse of shift (O(n))
function solve(arr) {
  let ascending = arr.sort((a, b) => a - b);
  let customOrder = [];
  while (ascending.length > 0) {
    let front = ascending.shift();
    customOrder.push(front);
    if (ascending.length == 0) {
      break;
    }
    let back = ascending.pop();
    customOrder.push(back);
  }
  return customOrder;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 101]);
solve([1, 65, 3, 52, 99]);

console.log("*************************");

function solve2(arr) {
  arr.sort((a, b) => a - b);
  let customOrder = [];
  while (arr.length > 0) {
    customOrder.push(arr.shift());
    if (arr.length == 0) {
      break;
    }
    customOrder.push(arr.pop());
  }
  return customOrder;
}

solve2([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
solve2([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 101]);
solve2([1, 65, 3, 52, 99]);

console.log("*************************");

function test(arr) {
  arr.sort((a, b) => a - b);
  let customOrder = [];

  while (arr.length > 0) {
    customOrder.push(arr.shift());
    if (arr.length == 0) {
      break;
    }
    customOrder.push(arr.pop());
  }
  console.log(customOrder);
  return customOrder;
}

test([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
test([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 101]);
test([1, 65, 3, 52, 99]);
console.log("*************************");

function solve3(arr) {
  arr.sort((a, b) => a - b);
  let customOrder = [];
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    customOrder.push(arr[left++]); //Takes from the beginning
    if (left <= right) {
      customOrder.push(arr[right--]); // Takes from the end
    }
  }

  console.log(customOrder);
  return customOrder;
}

solve3([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
solve3([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 101]);
solve3([1, 65, 3, 52, 99]);

console.log("*************************");

function solve4(arr) {
  arr.sort((a, b) => a - b);
  let customOrder = [];
  while (arr.length > 0) {
    if (arr.length % 2 == 0) {
      customOrder.push(arr.shift());
    } 
    else {
      customOrder.push(arr.pop());
    }
  }
  console.log(customOrder);
  return customOrder;
}

solve4([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
solve4([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 101]);
solve4([1, 65, 3, 52, 99]);
