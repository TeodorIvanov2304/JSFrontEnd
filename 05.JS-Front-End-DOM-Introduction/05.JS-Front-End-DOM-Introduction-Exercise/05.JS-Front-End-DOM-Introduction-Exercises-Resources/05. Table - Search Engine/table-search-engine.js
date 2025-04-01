function solve() {
   let table = document.querySelectorAll('tbody tr');
   let input = document.getElementById('searchField');
   let inputValue = input.value;
   for(let row of table){

      //Remove the old selectcions
      row.classList.remove('select');

      //Avoid selecting all rows if the search input is empty
      if(row.textContent.includes(inputValue) && inputValue != ''){
         
         //Add CSS class select to highlight the results
         row.classList.add('select');
      }
   }

   //Remove the previous search
   input.value = '';
}
