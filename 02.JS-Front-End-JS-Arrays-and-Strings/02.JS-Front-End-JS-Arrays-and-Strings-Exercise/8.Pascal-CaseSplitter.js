function solve(text) {
    let pattern = /[A-Z][a-z]*/g;
    let matches = text.match(pattern);
    console.log(matches.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');

function solve2(text) {
    //Split to separator before capital letter
    let pattern = /(?=[A-Z])/g;
    let splitedText = text.split(pattern);
    console.log(splitedText.join(', '));
}

solve2('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve2('HoldTheDoor');
solve2('ThisIsSoAnnoyingToDo');
