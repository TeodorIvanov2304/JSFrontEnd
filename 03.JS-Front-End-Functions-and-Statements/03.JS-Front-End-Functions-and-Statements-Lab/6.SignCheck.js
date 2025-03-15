function signCheck(...numbers) {
  let positiveCount = 0;
  let negativeCount = 0;

  function predicate(number) {
    return number > 0;
  }

  for (let i = 0; i < numbers.length; i++) {
    //If predicate returns true
    if (predicate(numbers[i])) {
      positiveCount++;
    } else {
      negativeCount++;
    }
  }
  
  if (negativeCount % 2 == 0) {
    return console.log("Positive");
  }

  return console.log("Negative");
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);

console.log('*********************')

function signCheck2(...params) {
    let asString = params.join();

    //Using regex,to match all char '-'. If '-' 
    //count is even, return positive, else - negative.
    //If asString.match(/-/g)? is null, return 0 and return positive
    if((asString.match(/-/g)?.length || 0 )% 2 == 0) {
        console.log('Positive');
    }
    else {
        console.log('Negative');
    }
  }
  
  signCheck2(5, 12, -15);
  signCheck2(-6, -12, 14);
  signCheck2(-1, -2, -3);
  signCheck2(-5, 1, 1);
