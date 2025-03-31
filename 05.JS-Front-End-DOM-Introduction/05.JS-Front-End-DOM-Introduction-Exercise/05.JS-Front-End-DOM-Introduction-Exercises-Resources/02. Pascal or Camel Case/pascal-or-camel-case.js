function solve() {
  let textToTransform = document.getElementById('text').value.toLowerCase().split(' ');
  let textConvention = document.getElementById('naming-convention').value;

  let output = document.getElementById('result');

  if(textConvention != 'Pascal Case' && textConvention != 'Camel Case') {
    output.textContent = 'Error!';
    return;
  }

  for(let i = 1; i < textToTransform.length; i++) {
    let word = textToTransform[i];
    word = word[0].toUpperCase() + word.slice(1);
    textToTransform[i] = word;
  }

  if(textConvention == 'Pascal Case'){
    let word = textToTransform[0];
    textToTransform[0] = word[0].toUpperCase() + word.slice(1);
    
  } 

  output.textContent = textToTransform.join('');
}
