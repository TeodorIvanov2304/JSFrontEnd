document.addEventListener('DOMContentLoaded', solve);

function solve() {
   
   let submitBtn = document.querySelector('input[type="submit"');
   submitBtn.addEventListener('click', addContent)
   

   function addContent(ev){
      ev.preventDefault();

      let input = document.querySelector('input[type="text"').value;
      let sections = input.split(', ');
      let content = document.getElementById('content');

      for(let entry of sections){
         let div = document.createElement('div');
         let p = document.createElement('p');
         p.textContent = entry;
         div.appendChild(p);

         content.appendChild(div);
      }

   }
}

