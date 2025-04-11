const link = 'http://localhost:3030/jsonstore/workout/';

let addBtn = document.getElementById('add-workout');
let editBtn = document.getElementById('edit-workout');

document.getElementById('load-workout').addEventListener('click',showWorkouts);
addBtn.addEventListener('click',onAdd);
editBtn.addEventListener('click',onEdit);

async function onAdd() {
    let workoutInput = document.getElementById('workout');
    let locaitonInput = document.getElementById('location');
    let dateInput = document.getElementById('date');

    if(!workoutInput.value || !locaitonInput.value || !dateInput.value){
        return;
    }

    await addWorkout(workoutInput.value,locaitonInput.value,dateInput.value);
    
    workoutInput.value = '';
    locaitonInput.value = '';
    dateInput.value = '';



    showWorkouts();
}

async function onEdit() {
    let workoutInput = document.getElementById('workout');
    let locationInput = document.getElementById('location'); // поправено тук!
    let dateInput = document.getElementById('date');

    let id = editBtn.dataset.id;
    
    if (!workoutInput.value || !locationInput.value || !dateInput.value) {
        return;
    }

    await updateWorkout(id, workoutInput.value, locationInput.value, dateInput.value);

    workoutInput.value = '';
    locationInput.value = '';
    dateInput.value = '';

    editBtn.disabled = true;
    addBtn.disabled = false;

    showWorkouts();
}


async function onRecordEdit(record) {
    document.getElementById('workout').value = record.workout;
    document.getElementById('location').value = record.location;
    document.getElementById('date').value = record.date;

    //Add dataset to editBtn
    editBtn.dataset.id = record._id;

    addBtn.disabled = true;
    editBtn.disabled = false;
}

async function showWorkouts() {
    let data = await getAllWorkouts();

    let list = document.getElementById('list');
    list.replaceChildren();

    for(let record of data){

        let changeBtn = create('button',['Change']);
        //Pass the whole record
        changeBtn.addEventListener('click',() => onRecordEdit(record));
        changeBtn.className = 'change-btn';

        let deleteBtn = create('button',['Done']);
        //Pass the id
        deleteBtn.addEventListener('click', async () => {
            await deleteWorkout(record._id);
            showWorkouts();
        });
        deleteBtn.className = 'delete-btn';

        let controlDiv = create('div',[
            changeBtn, 
            deleteBtn], 'buttons-container') ;       //add id="buttons-container"
        
        let element = create('div', [
            create('h2',[record.workout]),
            create('h3',[record.date]),
            create('h3',[record.location], 'location' ), // add id="location",
            controlDiv
        ]);

        

        element.className = 'container';
        list.appendChild(element);
    }
}



// GET
async function getAllWorkouts() {
    try {
        let res = await fetch(link);
        if (!res.ok) {
            throw new Error('Error getting response');
        }
        if (res.status == 204) {
            return [];
        }

        let data = await res.json();
        return Object.values(data);

    } catch (error) {
        console.error(error.message);
    }
}

// POST
async function addWorkout(workout, location, date) {
    let record = { workout, location, date };

    const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    };

    await fetch(link, options);
}


//PUT
async function updateWorkout(_id, workout, location, date) {
    let record = {_id, workout, location, date };

    const options = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    };

    await fetch(link + _id, options);
}

// DELETE
async function deleteWorkout(id) {
    const options = {
        method: 'delete'
    };

    await fetch(link + id, options);
}

//Factory create element

function create(tagName,content, id){

  let element = document.createElement(tagName);

  if(id){
    element.id = id;
  }

  for(let child of content){
    if(typeof child == 'object'){
      element.appendChild(child);
    } else {
      let node = document.createTextNode(child);

      element.appendChild(node);
    }
  }

  return element;
}