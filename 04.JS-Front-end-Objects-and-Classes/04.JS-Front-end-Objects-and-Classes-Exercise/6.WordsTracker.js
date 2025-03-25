function wordsTracker(words) {
    let wordCounts = {};
    let searchWords = words[0].split(' ');

    for (let word of searchWords) {
        wordCounts[word] = 0;
    }

    for (let i = 1; i < words.length; i++) {
        let currentWord = words[i];
        if (wordCounts.hasOwnProperty(currentWord)) {
            wordCounts[currentWord]++;
        }
    }

    let sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}

wordsTracker([
  'this sentence',
  'In',
  'this',
  'sentence',
  'you',
  'have',
  'to',
  'count',
  'the',
  'occurrences',
  'of',
  'the',
  'words',
  'this',
  'and',
  'sentence',
  'because',
  'this',
  'is',
  'your',
  'task',
]);
wordsTracker([
  'is the',
  'first',
  'sentence',
  'Here',
  'is',
  'another',
  'the',
  'And',
  'finally',
  'the',
  'the',
  'sentence',
]);
