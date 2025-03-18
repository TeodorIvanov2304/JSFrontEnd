function nMatrix(n){

    for(let i = 0; i < n; i++) {
        let arr = [];

        for (let j = 0; j < n; j++) {
            arr.push(n);
        }

        console.log(arr.join(' '));
    }
}

nMatrix(3);
nMatrix(7);
nMatrix(2);
nMatrix(1);
nMatrix(10);

function nMatrix2(n){
    for(let i = 0; i < n; i++) {
        console.log(`${n} `.repeat(n));
    }
}

nMatrix2(3);
nMatrix2(7);
nMatrix2(2);
nMatrix2(1);
nMatrix2(10);
