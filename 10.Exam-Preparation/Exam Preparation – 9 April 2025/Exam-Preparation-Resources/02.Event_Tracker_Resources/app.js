window.addEventListener("load", solve);

function solve(){
    let saveBtn = document.getElementById('save');
    saveBtn.addEventListener('click',onSave);

    let deleteBtn = document.querySelector('[class="btn delete"]');
    deleteBtn.addEventListener('click', onDelete);

    function onSave(e) {
        e.preventDefault(); 
    
        let eventName = document.getElementById('event').value.trim();
        let note = document.getElementById('note').value.trim();
        let date = document.getElementById('date').value.trim();
    
   
        if (!eventName || !note || !date) {
            return;
        }

        let list = document.getElementById('upcoming-list');
        let li = document.createElement('li');
        li.className = 'event-item';
        list.appendChild(li);
    
        let divContainer = document.createElement('div');
        divContainer.className = 'event-container';
        li.appendChild(divContainer);
    
        let article = document.createElement('article');
        divContainer.appendChild(article);
    
        let nameP = document.createElement('p');
        nameP.textContent = `Name: ${eventName}`;
        article.appendChild(nameP);
    
        let noteP = document.createElement('p');
        noteP.textContent = `Note: ${note}`;
        article.appendChild(noteP);
    
        let dateP = document.createElement('p');
        dateP.textContent = `Date: ${date}`;
        article.appendChild(dateP);
    
        let divButtons = document.createElement('div');
        divButtons.className = 'buttons';
        divContainer.appendChild(divButtons);
    
        let editBtn = document.createElement('button');
        editBtn.className = 'btn edit';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', (e) => onEdit(e, eventName, note, date));
    
        let doneBtn = document.createElement('button');
        doneBtn.className = 'btn done';
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', (e) => onDone(e, eventName, note, date));
    
        divButtons.appendChild(editBtn);
        divButtons.appendChild(doneBtn);
    
        document.querySelector('form').reset();
    }
    
    function onEdit(e, eventName,note,date){
        
    
        document.getElementById('event').value = eventName;
        document.getElementById('note').value = note;
        document.getElementById('date').value = date;

        
        let container = e.target.parentElement.parentElement.parentElement;
        container.remove();
      
    }
    
    function onDone(e, eventName, note, date){
        let container = e.target.parentElement.parentElement.parentElement;
        container.remove();
    
        let list = document.getElementById('events-list');
    
        //Create li
        let li = document.createElement('li');
        li.className = 'event-item';
        list.appendChild(li);
    
        //Create article
        let article = document.createElement('article');
        li.appendChild(article);
    
        //Crate nameP
        let nameP = document.createElement('p');
        nameP.textContent = `Name: ${eventName}`;
        article.appendChild(nameP);
    
        //Create noteP
        let noteP = document.createElement('p');
        noteP.textContent = `Note: ${note}`;
        article.appendChild(noteP);;
    
        let dateP = document.createElement('p');
        dateP.textContent = `Date: ${date}`;
        article.appendChild(dateP);
    }
    
    function onDelete(){
        let list = document.getElementById('events-list');
        list.replaceChildren();
    }
}




