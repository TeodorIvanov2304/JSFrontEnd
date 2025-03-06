function solve(sentence, word) {
    let result = sentence.replaceAll(word, '*'.repeat(word.length));
    console.log(result);
}

solve('A small sentence with some words', 'small');
solve('A small sentence with some small words', 'small');
solve('Find the hidden word', 'hidden');


//Without replaceAll
function solve2(sentence, word) {
    
    while (sentence.includes(word)) {
        sentence = sentence.replace(word, '*'.repeat(word.length));
    }
    console.log(sentence);
}

solve2('A small sentence with some words', 'small');
solve2('A small sentence with some small words', 'small');
solve2('Find the hidden word', 'hidden');
