function charsInRange(symbol1, symbol2) {
  //Get the number from ASCII symbol
  let start = symbol1.charCodeAt(0) + 1;
  let end = symbol2.charCodeAt(0) - 1;

  if (start > end) {
    swap();
  }

  let arrWithSymbols = [];
  for (let i = start; i <= end; i++) {
    //Get the ASCII symbol from the ASCII number
    arrWithSymbols.push(String.fromCharCode(i));
  }

  console.log(arrWithSymbols.join(" "));

  function swap() {
    let temp = start;
    start = end + 2;
    end = temp - 2;
  }
}

charsInRange("a", "d");
charsInRange("#", ":");
charsInRange('C', '#');

console.log('***********');

function charsInRangeV2(symbol1, symbol2) {
   let code1 = symbol1.charCodeAt(0);
   let code2 = symbol2.charCodeAt(0);
   let result = [];

   for(let i = Math.min(code1,code2) + 1; i < Math.max(code1,code2); i++) {
    result.push(String.fromCharCode(i));    
   }

   console.log(result.join(' '));
  }
  
  charsInRangeV2("a", "d");
  charsInRangeV2("#", ":");
  charsInRangeV2('C', '#');
  