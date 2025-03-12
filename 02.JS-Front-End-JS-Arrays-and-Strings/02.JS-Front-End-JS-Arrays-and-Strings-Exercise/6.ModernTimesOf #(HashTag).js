function solve(text) {

    //If we remove the g in the end of the pattern, match returns different kind of 
    //array with group and indexes
    let pattern = /^#([A-Za-z]+)$/;
    let tokens = text.split(' ');
    for(let token of tokens) {
        const match = token.match(pattern);
        if (match != null) {
            console.log(match[1]);
        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');

console.log('***********************');
function solve2(text) {
    let pattern = /\B#([A-Za-z]+)\b/g;
    let matches = text.match(pattern);
    for(let match of matches) {
        console.log(match.substring(1,match.length));
    }
}
solve2('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve2('The symbol # is known #variously in English-speaking #regions as the #number sign');
