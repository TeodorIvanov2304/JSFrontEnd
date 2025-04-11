window.addEventListener("load", solve);

function solve() {
  
  let nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', onNext);

  function onNext(){
    let email = document.querySelector('[placeholder="Email"]').value;
    let event = document.querySelector('[placeholder="Event"]').value;
    let location = document.querySelector('[placeholder="Location"]').value;

    if(!email || !event || !location){
      return;
    }

    let list = document.getElementById('preview-list');

    //Create li
    let li = createLi(list, email, event, location);

    //Craete button edit
    let editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'edit';
    
    li.appendChild(editBtn);

    //Create button apply
    let applyBtn = document.createElement('button');
    applyBtn.className =  'action-btn apply';
    applyBtn.textContent = 'apply';
    
    li.appendChild(applyBtn);

    nextBtn.disabled = true;
    document.querySelector('[placeholder="Email"]').value = '';
    document.querySelector('[placeholder="Event"]').value = '';
    document.querySelector('[placeholder="Location"]').value = '';

    applyBtn.addEventListener('click',() => onApply(email, event, location));
    editBtn.addEventListener('click', () => onEdit(email, event, location));
  }

  function onEdit(email,event,location){
    document.querySelector('[placeholder="Email"]').value = email;
    document.querySelector('[placeholder="Event"]').value = event;
    document.querySelector('[placeholder="Location"]').value = location;
    document.getElementById('preview-list').replaceChildren();
    nextBtn.disabled = false;
  }

  function onApply(email, event, location){
    let oldList = document.getElementById('preview-list');
    oldList.replaceChildren();

    let list = document.getElementById('event-list');
    //Create li
    let li = createLi(list, email, event, location);

    nextBtn.disabled = false;
  }

  function createLi(list, email, event, location) {
    let li = document.createElement('li');
    li.className = 'application';
    list.appendChild(li);

    //Create article
    let article = document.createElement('article');
    li.appendChild(article);

    //Create h4
    let h4 = document.createElement('h4');
    h4.textContent = email;
    article.appendChild(h4);

    //Create p
    let p = document.createElement('p');
    article.appendChild(p);
    p.innerHTML = `<strong>Event:</strong><br>${event}`;

    //Create p2
    let p2 = document.createElement('p');
    article.appendChild(p2);
    p2.innerHTML = `<strong>Location:</strong><br>${location}`;
    return li;
  }
}

//Without innerHTML

function solve2() {
  let nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', onNext);

  function onNext() {
    let emailInput = document.querySelector('[placeholder="Email"]');
    let eventInput = document.querySelector('[placeholder="Event"]');
    let locationInput = document.querySelector('[placeholder="Location"]');

    let email = emailInput.value;
    let event = eventInput.value;
    let location = locationInput.value;

    if (!email || !event || !location) {
      return;
    }

    let list = document.getElementById('preview-list');

    let li = createLi(list, email, event, location);

    let editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'edit';
    li.appendChild(editBtn);

    let applyBtn = document.createElement('button');
    applyBtn.className = 'action-btn apply';
    applyBtn.textContent = 'apply';
    li.appendChild(applyBtn);

    nextBtn.disabled = true;
    emailInput.value = '';
    eventInput.value = '';
    locationInput.value = '';

    editBtn.addEventListener('click', () => onEdit(email, event, location));
    applyBtn.addEventListener('click', () => onApply(email, event, location));
  }

  function onEdit(email, event, location) {
    document.querySelector('[placeholder="Email"]').value = email;
    document.querySelector('[placeholder="Event"]').value = event;
    document.querySelector('[placeholder="Location"]').value = location;
    document.getElementById('preview-list').replaceChildren();
    nextBtn.disabled = false;
  }

  function onApply(email, event, location) {
    document.getElementById('preview-list').replaceChildren();
    let list = document.getElementById('event-list');
    createLi(list, email, event, location);
    nextBtn.disabled = false;
  }

  function createLi(list, email, event, location) {
    let li = document.createElement('li');
    li.className = 'application';
    list.appendChild(li);

    let article = document.createElement('article');
    li.appendChild(article);

    let h4 = document.createElement('h4');
    h4.textContent = email;
    article.appendChild(h4);

    let pEvent = document.createElement('p');
    let strongEvent = document.createElement('strong');
    strongEvent.textContent = 'Event:';
    pEvent.appendChild(strongEvent);
    pEvent.append(`${event}`);
    article.appendChild(pEvent);

    let pLocation = document.createElement('p');
    let strongLocation = document.createElement('strong');
    strongLocation.textContent = 'Location:';
    pLocation.appendChild(strongLocation);
    pLocation.append(`${location}`);
    article.appendChild(pLocation);

    return li;
  }
}

//Factory create element

// function create(tagName,content){

//   let element = document.createElement(tagName);

//   for(let child of content){
//     if(typeof child == 'object'){
//       element.appendChild(child);
//     } else {
//       let node = document.createTextNode(child);
//       element.appendChild(node);
//     }
//   }

//   return element;
// }

// let usingCreateFuncion = create('li',[
//   create('article',[
//     create('h4',[email]),
//     create('p',[
//       create('strong',['Event:']),
//       create('br',[]),
//       event
//     ]),
//     create('p',[
//       create('strong',['Event:']),
//       create('br',[]),
//       location
//     ]),
//   ]),
// ]);
// let factoryCreateButton = create('button',['edit']);
