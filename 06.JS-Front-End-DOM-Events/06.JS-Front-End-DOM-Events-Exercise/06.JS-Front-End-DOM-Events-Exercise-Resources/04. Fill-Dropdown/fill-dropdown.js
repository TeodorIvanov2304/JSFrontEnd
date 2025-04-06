document.addEventListener('DOMContentLoaded', solve);

function solve() {
  

    let btn = document.querySelector('[type="submit"]');
    btn.addEventListener('click', addOption);
  
    function addOption(e) {
  
      let inputTypeText = document.getElementById('newItemText').value;
      let inputTypeValue = document.getElementById('newItemValue').value;
      e.preventDefault();
      let opt = document.createElement('option');
  
      opt.textContent = inputTypeText;
      opt.value = inputTypeValue;
  
      let menu = document.getElementById('menu');
  
      if(inputTypeText != '' && 
        inputTypeValue != '' && 
        !Array.from(menu.options).some(opt => opt.textContent === inputTypeText)){
          menu.appendChild(opt);
      }
      
      document.getElementById('newItemText').value = '';
      document.getElementById('newItemValue').value = '';
      document.getElementById('newItemText').focus();
    } 
  }

