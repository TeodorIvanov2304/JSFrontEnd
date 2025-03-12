function solve(word, text) {
    //includes() method does not count intervals, so we split the string. Includes will find bye 
    //in goodbye and will return true 
    let textToLower = text.toLowerCase().split(' ');
    let wordToLower = word.toLowerCase().trim();
    let isIncluded = textToLower.includes(wordToLower);
    if (isIncluded == true) {
        return word.toLowerCase();    
    }
    else {
        return`${word.toLowerCase()} not found!`;
    }
}

solve('javascript', 'JavaScript is the best programming language');
solve('javascript            ', '2JavaScript is the best programming language');
solve('Javascript', 'javascript is the best programming language');
solve('Javascript', 'nojavascriptno is the best programming language');
solve('python','JavaScript is the best programming language');
solve('Python','JavaScript is the best programming language');
solve('Javascript','JavaScript is the best programming language');

function solve2(word, text) {
    let splittedWords = text.split(' ');
    for(let w of splittedWords) {
        if (word.toLowerCase() == w.toLowerCase()) {
            return word;
        }
    }
    return `${word} not found!`;
}

solve('javascript', 'JavaScript is the best programming language');
solve('javascript            ', '2JavaScript is the best programming language');
solve('Javascript', 'javascript is the best programming language');
solve('Javascript', 'nojavascriptno is the best programming language');
solve('python','JavaScript is the best programming language');
solve('Python','JavaScript is the best programming language');
solve('Javascript','JavaScript is the best programming language');
