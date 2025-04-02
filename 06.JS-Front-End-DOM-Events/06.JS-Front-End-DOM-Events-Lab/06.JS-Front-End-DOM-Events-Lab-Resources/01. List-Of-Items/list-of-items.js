function addItem() {
  let input = document.getElementById('newItemText');
  let text = input.value;
  
  //If input is empty
  if (!text) {
    return;
  }

  let li = document.createElement('li');
  li.textContent = text;
  
  let ul = document.getElementById('items');
  ul.appendChild(li);

  input.value = '';
}

