function solve(sentence,word) {
    word = ` ${word} `;
    sentence = ` ${sentence} `;
    let count = 0;
    let startIndex = 0;
    
    while (true) {
        let index = sentence.indexOf(word, startIndex);

        if(index == -1) {
            break;
        }

        count++;
        startIndex = index + word.length -1 ;
    }

    console.log(count);
}

solve('This is a word and it also is a sentence','is');
solve('This is is a word and it also is a sentence','is');
solve('softuni is great place for learning new programming languages','softuni');

function solve2(sentence,match) {
    let words = sentence.split(' ');
    let counter = 0;

    for(let word of words) {
        if(word == match) {
            counter++;
        }
    }
    console.log(counter);
}

solve2('This is a word and it also is a sentence','is');
solve2('This is is a word and it also is a sentence','is');
solve2('softuni is great place for learning new programming languages','softuni');

//With filter
function solve3(sentence,match) {
    let words = sentence.split(' ');
    console.log(words.filter(w => w == match).length);
}

solve3('This is a word and it also is a sentence','is');
solve3('This is is a word and it also is a sentence','is');
solve3('softuni is great place for learning new programming languages','softuni');
