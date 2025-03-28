function edit(){

    //Get the text from the form by id of the element id="message"
    let input = document.getElementById("message");
    //Assign it to another variable
    let message = input.value;

    //Get the element with id="title"
    let element = document.getElementById('title');
    
    //Add the variable to the textContent
    element.textContent += '' + message;
}

function getByClass(){
    let collection = document.getElementsByClassName('blue');

    for(let item of collection){
        let what = item.textContent;
        prompt(what);
    }
}

function getByTag(){
   
    let collection = document.getElementsByTagName("h1")
    let text = '';
    for(let heading1 of collection){
        text += heading1.textContent;
    }

    alert(text);
}

function getByQuery(){
   
    let collection = document.querySelectorAll("h1,p")
    let text = '';
    for(let heading1 of collection){
        text += '\n' + heading1.textContent;
    }

    alert(text);
}
