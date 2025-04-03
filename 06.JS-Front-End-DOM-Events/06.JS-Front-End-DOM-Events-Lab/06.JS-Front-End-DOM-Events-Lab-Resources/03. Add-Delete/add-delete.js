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
    
    let link = document.createElement('a');
    link.href = '#';
    link.textContent = '[Delete]';
    li.appendChild(link);

    link.addEventListener('click',deleteItem);



    input.value = '';

    function deleteItem(e){
        let item = e.target.parentElement;
        item.remove();
    }
  }

  
