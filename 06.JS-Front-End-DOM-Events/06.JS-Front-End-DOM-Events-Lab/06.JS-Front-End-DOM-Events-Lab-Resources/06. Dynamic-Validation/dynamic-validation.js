document.addEventListener('DOMContentLoaded', validate);

function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', performValidation);
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;
  
    function performValidation(e) {
      let email = e.target.value;
      if (pattern.test(email)) {
        e.target.classList.remove('error');
      } else {
        e.target.classList.add('error');
      }
    }
  }
  
