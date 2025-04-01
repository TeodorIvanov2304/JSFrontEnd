function solve() {
   let input = document.getElementById('searchText').value;
   let items = document.getElementById('towns').children;

   let matchCounter = 0;

   for(let item of items){
      if(item.textContent.includes(input)){
         item.style.fontWeight = 'bold';
         item.style.textDecoration = 'underline';
         matchCounter++;
      } else {
         item.style.fontWeight = 'normal';
         item.style.textDecoration = 'none';
      }
   }

   let result = document.getElementById('result');
   result.textContent = `${matchCounter} matches found`;
}
