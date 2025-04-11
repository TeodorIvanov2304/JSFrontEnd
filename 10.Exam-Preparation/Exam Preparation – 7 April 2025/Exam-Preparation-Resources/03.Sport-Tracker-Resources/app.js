const link = 'http://localhost:3030/jsonstore/workout/';
let currentWorkout = null;

let loadBtn = document.getElementById('load-workout');
loadBtn.addEventListener('click', onLoadWorkout);

let editBtn = document.getElementById('edit-workout');
editBtn.addEventListener('click', onEditWorkout);

let addBtn = document.getElementById('add-workout');
addBtn.addEventListener('click', onAddWorkout);

async function onLoadWorkout() {
    let data = await getAllWorkouts();
    let list = document.getElementById('list');
    list.replaceChildren();

    for (let item of data) {
        let divContainer = document.createElement('div');
        divContainer.className = 'container';

        let h2 = document.createElement('h2');
        h2.textContent = item.workout;
        divContainer.appendChild(h2);

        let h3Date = document.createElement('h3');
        h3Date.textContent = item.date;
        divContainer.appendChild(h3Date);

        let h3Location = document.createElement('h3');
        h3Location.textContent = item.location;
        divContainer.appendChild(h3Location);

        let divBtns = document.createElement('div');
        divBtns.id = 'buttons-container';

        let changeBtn = document.createElement('button');
        changeBtn.className = 'change-btn';
        changeBtn.textContent = 'Change';
        changeBtn.addEventListener('click', (e) => onChange(e, item));
        divBtns.appendChild(changeBtn);

        let doneBtn = document.createElement('button');
        doneBtn.className = 'delete-btn';
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', () => onDone(item._id));
        divBtns.appendChild(doneBtn);

        divContainer.appendChild(divBtns);
        list.appendChild(divContainer);
    }

    editBtn.disabled = true;
}

async function onAddWorkout(e) {
    e.preventDefault();

    let workout = document.getElementById('workout').value;
    let location = document.getElementById('location').value;
    let date = document.getElementById('date').value;

    await addWorkout(workout, location, date);

    document.querySelector('form').reset();
    await onLoadWorkout();
}

function onChange(e, item) {
    document.getElementById('workout').value = item.workout;
    document.getElementById('location').value = item.location;
    document.getElementById('date').value = item.date;

    currentWorkout = item;

    e.target.closest('.container').remove();

    editBtn.disabled = false;
    addBtn.disabled = true;
}

async function onEditWorkout() {
    if (!currentWorkout) return;

    let workout = document.getElementById('workout').value;
    let location = document.getElementById('location').value;
    let date = document.getElementById('date').value;

    let record = {
        workout,
        location,
        date
    };

    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    };

    await fetch(link + currentWorkout._id, options);

    currentWorkout = null;
    document.querySelector('form').reset();
    editBtn.disabled = true;
    addBtn.disabled = false;

    await onLoadWorkout();
}

async function onDone(id) {
    await deleteWorkout(id);
    await onLoadWorkout();
}

// GET
async function getAllWorkouts() {
    try {
        let res = await fetch(link);
        if (!res.ok) {
            throw new Error('Error getting response');
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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    };

    await fetch(link, options);
}

// DELETE
async function deleteWorkout(id) {
    const options = {
        method: 'DELETE'
    };

    await fetch(link + id, options);
}