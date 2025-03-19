function factorielDivision(p, q) {
    let result = 1;

    if(p > q) {
        for (let n = p; n > q; n--) {
            result *= n;
        }
    } else {
        for(let n = q; n > p; n--) {
            result /= n;
        }
    }

    console.log(result.toFixed(2));
}

factorielDivision(5,2);
factorielDivision(6,2);
factorielDivision(3,4);
console.log('*********************');

function factorielDivision2(p, q) {
    
    function factorial(n) {
        let fact = 1
        for (let i = 2; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
    
    let factorial1 = factorial(p);
    let factorial2 = factorial(q);

    let result = factorial1 / factorial2;
    console.log(result.toFixed(2));
    //console.log((factorial(p) / factorial(q)).toFixed(2));
}

factorielDivision2(5,2);
factorielDivision2(6,2);
factorielDivision2(3,4);

console.log('*********************');

//With recursion
function factorielDivision3(p, q) {
    
    function factorial(n) {
        if(n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    let factorial1 = factorial(p);
    let factorial2 = factorial(q);

    console.log((factorial1 / factorial2).toFixed(2));
}

factorielDivision3(5,2);
factorielDivision3(6,2);
factorielDivision3(3,4);
