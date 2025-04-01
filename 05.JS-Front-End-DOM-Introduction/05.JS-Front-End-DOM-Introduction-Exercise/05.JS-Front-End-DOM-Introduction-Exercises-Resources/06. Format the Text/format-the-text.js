function solve() {
  let input = document.getElementById('input').value;
  
  // Remove the empty elements
  let sentences = input.split('.').filter(s => s.trim() !== ''); 
  let paragraphs = [];
  let text = [];

  for (let i = 0; i < sentences.length; i++) {
    text.push(sentences[i].trim() + '.');

    if ((i + 1) % 3 === 0 || i === sentences.length - 1) {
      paragraphs.push(`<p>${text.join(' ')}</p>`);

      //Nullify the temp array
      text = []; 
    }
  }

  document.getElementById('output').innerHTML = paragraphs.join('');
}
