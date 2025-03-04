function solve(n, array) {
  let reversedArray = array.splice(0, n);
  reversedArray.reverse();
  console.log(reversedArray.join(" "));
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);



function solve2(n, array) {
  let myArr = array.slice(0, n);
  let reversed = myArr.reverse();
  let asString = reversed.join(' ');
  console.log(asString);
  
}

solve2(3, [10, 20, 30, 40, 50]);
solve2(4, [-1, 20, 99, 5]);
solve2(2, [66, 43, 75, 89, 47]);


function solve3(n, array) {
    console.log(array.slice(0,n).reverse().join(' '));
   
}
  
  solve3(3, [10, 20, 30, 40, 50]);
  solve3(4, [-1, 20, 99, 5]);
  solve3(2, [66, 43, 75, 89, 47]);
  
