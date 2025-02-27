function reverseChar(paramA,paramB,paramC) {
    let chars = [paramA,paramB,paramC];
    let reverseChar = [];
    for (let i = chars.length-1; i >= 0; i--) {
        reverseChar.push(chars[i]);
    }
    console.log(reverseChar.join(' '));
}

reverseChar('A','B','C');
reverseChar('1','L','&');
