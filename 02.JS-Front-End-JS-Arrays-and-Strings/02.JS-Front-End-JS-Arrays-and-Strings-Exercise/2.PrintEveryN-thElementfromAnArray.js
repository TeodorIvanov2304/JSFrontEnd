function solve(arr,step) {
    let array = [];
    for (let i = 0; i < arr.length; i+=step) {
        array.push(arr[i]);
    }
    return array;
}

solve(["5", "20", "31", "4", "20"], 2);
solve(["dsa", "asd", "test", "tset"], 2);
solve(["1", "2", "3", "4", "5"], 6);


//Second solution, 2x slower
function solve2(arr,step) {
    //filter takes two parameters, element(e) an index(i)
    return arr.filter((e, i) => i % step == 0);
}

solve2(["5", "20", "31", "4", "20"], 2);
solve2(["dsa", "asd", "test", "tset"], 2);
solve2(["1", "2", "3", "4", "5"], 6);
