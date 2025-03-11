function solve(word, text) {
  let splitWord = word.split(", ");
  let splitText = text.split(" ");
  for (w of splitText) {
    if (w.startsWith("*") && w.endsWith("*")) {
      for (sw of splitWord) {
        if (sw.length == w.length) {
          text = text.replace(w, sw);
        }
      }
    }
  }
  console.log(text);
}

solve("great", "softuni is ***** place for learning new programming languages");
solve( "great, learning", "softuni is ***** place for ******** new programming languages");

//Faster verion, because of switching loops
function solve2(wordsAsString, text) {
  const words = wordsAsString.split(", ");
  let tokens = text.split(" ");
  for (let word of words) {
    let stars = "*".repeat(word.length);
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] == stars) {
        tokens[i] = word;
        break;
      }
    }
  }
  console.log(tokens.join(' '));
}

solve2("great", "softuni is ***** place for learning new programming languages");
solve2( "great, learning", "softuni is ***** place for ******** new programming languages");
