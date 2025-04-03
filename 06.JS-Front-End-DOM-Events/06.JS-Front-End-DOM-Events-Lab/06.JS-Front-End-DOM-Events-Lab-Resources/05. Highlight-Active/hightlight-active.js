document.addEventListener('DOMContentLoaded', focused);
//focus, blur and now deprecated!
function focused() {
    let inputs = document.querySelectorAll('input');

    for(let input of inputs){

        //Аdd the 2 events to all the elements
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    }

    function onFocus(e){
        //Activate CSS class focused
        e.target.parentElement.classList.add('focused');
    }

    function onBlur(e){
        //Deactivate CSS class focused
        e.target.parentElement.classList.remove('focused');
    }
}


function focused2(){

    document.querySelector('main').addEventListener('focusin', onFocus);
    document.querySelector('main').addEventListener('focusout', onBlur);

    function onFocus(e){
        //Activate CSS class focused
        e.target.parentElement.classList.add('focused');
    }

    function onBlur(e){
        //Deactivate CSS class focused
        e.target.parentElement.classList.remove('focused');
    }
}
