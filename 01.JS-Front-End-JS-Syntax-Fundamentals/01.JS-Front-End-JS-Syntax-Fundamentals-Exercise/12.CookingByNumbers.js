function cooking(number, op1, op2, op3, op4, op5) {
    
    //Create array
    let operations = [op1, op2, op3, op4, op5];

    //Using of for...of
    for(let operation of operations) {

        if(operation == 'chop') {
            number /= 2;
        }
        else if(operation == 'dice') {
            number = Math.sqrt(number);
        }
        else if(operation == 'spice') {
            number += 1;
        }
        else if(operation == 'bake') {
            number *= 3;
        }
        else if(operation == 'fillet') {
            number *= 0.8;
        }

        console.log(number);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

console.log('--------------------------------------------')

//Use rest operator...
function cooking2(number,...actions) {
    
   //Create dictionary 
   // (n) => n / 2 == lambda
   let options = {
    'chop': (n) => n / 2,
    'dice': (n) => Math.sqrt(n),
    'spice': (n) => n + 1,
    'bake': (n) => n * 3,
    'fillet': (n) => n * 0.8
   };

   for(let action of actions) {
    let option = options[action];

    //Option becomes a function
    number = option(number);
    console.log(number);
   }
}

cooking2('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking2('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
