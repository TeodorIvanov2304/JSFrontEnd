function solve(arr,rotations) {
    for (let i = 0; i < rotations; i++) {
        let element = arr.shift();
        arr.push(element);
        //arr.push(arr.shift());
    }
    console.log(arr.join(' '));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);

//With while

function solve2(arr,rotations) {
    while(rotations > 0) {
        let element = arr.shift();
        arr.push(element);
        rotations--;
    }

    console.log(arr.join(' '));
}

solve2([51, 47, 32, 61, 21], 2);
solve2([32, 21, 61, 1], 4);
solve2([2, 4, 15, 31], 5);

//3 variant
function solve3(arr,rotations) {
    for (let i = 0; i < rotations % arr.length; i++) {
        arr.push(arr.shift());
    }
    console.log(arr.join(' '));
}

solve3([51, 47, 32, 61, 21], 2);
solve3([32, 21, 61, 1], 4);
solve3([2, 4, 15, 31], 5);

//4 variant with slice

function solve4(arr,rotations) {
    let newArr = [];
    rotations = rotations % arr.length;
    newArr = arr.slice(rotations).concat(arr.slice(0,rotations));
    console.log(newArr.join(' '));
}

solve4([51, 47, 32, 61, 21], 2);
solve4([32, 21, 61, 1], 4);
solve4([2, 4, 15, 31], 5);