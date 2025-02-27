function charsToString(paramA,paramB,paramC) {
    let chars = [paramA,paramB,paramC];
    let str = '';
    for (let i = 0; i < chars.length; i++) {
        str = str.concat(chars[i]);
    }
    console.log(str);
}

charsToString('a', 'b', 'c');
charsToString('%', '2', 'o');
charsToString('1', '5', 'p');
