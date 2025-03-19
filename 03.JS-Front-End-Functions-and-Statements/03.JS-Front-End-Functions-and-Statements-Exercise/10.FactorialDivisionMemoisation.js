function memoization(p,q) {

    //In this cache are stored key pair values of n as a key
    //and value of n! as a value
    let cache = new Map();

    function factorial(n) {

        //Bottom of recursion
        if(n == 1) {
            return 1;
        }

        //Checks if the value of n! already exist in the map
        if(cache.has(n)){
            return cache.get(n);
        }
        
        let value = n * factorial(n - 1);
        //Set new key-value pair n! - value
        cache.set(n, value);
        return value;
    }
    console.log((factorial(p) / factorial(q)).toFixed(2));
}

memoization(5,2);
memoization(6,2);
memoization(3,4);