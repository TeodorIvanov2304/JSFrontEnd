function solve(string,startIndex, count) {
    let substr = string.substring(startIndex,startIndex + count);
    console.log(substr);
}

solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);
