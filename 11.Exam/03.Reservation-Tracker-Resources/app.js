const link = 'http://localhost:3030/jsonstore/reservations';

let loadBtn = document.getElementById('load-history');
loadBtn.addEventListener('click', onLoadReservations);

let addReservationBtn = document.getElementById('add-reservation');
addReservationBtn.addEventListener('click', onAdd);

let editBtn = document.getElementById('edit-reservation');
editBtn.addEventListener('click', onEdit);

async function onAdd() {
    let names = document.getElementById('names').value;
    let days = document.getElementById('days').value;
    let date = document.getElementById('date').value;

    if (!names || !days || !date) {
        return;
    }

    await addReservation(names, days, date);

    document.getElementById('names').value = '';
    document.getElementById('days').value = '';
    document.getElementById('date').value = '';

    onLoadReservations();
}

async function onLoadReservations() {
    let data = await getAllReservations();

    //Get reservation list
    let list = document.getElementById('list');
    list.replaceChildren();

    for (let reservation of data) {

        //Crate divContainer
        let div = document.createElement('div');
        div.className = 'container';
        list.appendChild(div);

        //Create h2 name
        let h2 = document.createElement('h2');
        h2.textContent = reservation.names;
        div.appendChild(h2);

        //Create h3 date
        let h3Date = document.createElement('h3');
        h3Date.textContent = reservation.date;
        div.appendChild(h3Date);

        //Create h3 days
        let h3Days = document.createElement('h3');
        h3Days.id = 'reservation_days';
        h3Days.textContent = reservation.days;
        div.appendChild(h3Days);

        //Create divButtons
        let divBtns = document.createElement('div');
        divBtns.className = 'buttons-container';
        div.appendChild(divBtns);

        //Create change button
        let changeBtn = document.createElement('button');
        changeBtn.className = 'change-btn';
        changeBtn.textContent = 'Change';
        // dataset
        changeBtn.dataset.id = reservation._id; 
        changeBtn.addEventListener('click', (e) => onChange(e, reservation));
        divBtns.appendChild(changeBtn);

        //Create done button
        let doneBtn = document.createElement('button');
        doneBtn.className = 'delete-btn';
        doneBtn.textContent = 'Done';
        // dataset
        doneBtn.dataset.id = reservation._id; 
        doneBtn.addEventListener('click', onDone);
        divBtns.appendChild(doneBtn);
    }
}

async function onChange(e, reservation) {
    e.preventDefault();
    let record = e.target.parentElement.parentElement;
    record.remove();

    document.getElementById('names').value = reservation.names;
    document.getElementById('days').value = reservation.days;
    document.getElementById('date').value = reservation.date;

    // Save ID to dataset
    editBtn.dataset.id = reservation._id; 

    editBtn.disabled = false;
    addReservationBtn.disabled = true;
}

async function onEdit() {
    const id = editBtn.dataset.id;
    if (!id) return;

    let names = document.getElementById('names').value;
    let days = document.getElementById('days').value;
    let date = document.getElementById('date').value;

    await updateReservation(id, names, days, date);

    document.getElementById('names').value = '';
    document.getElementById('days').value = '';
    document.getElementById('date').value = '';

    editBtn.disabled = true;
    addReservationBtn.disabled = false;

    //Remove dataset
    delete editBtn.dataset.id;

    onLoadReservations();
}

async function onDone(e) {
    let id = e.target.dataset.id;
    if (!id) return;

    await deleteReservation(id);
    onLoadReservations();
}

async function getAllReservations() {
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
async function addReservation(names, days, date) {
    let record = { names, days, date };

    const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    };

    await fetch(link, options);
}

// PUT
async function updateReservation(_id, names, days, date) {
    let record = { _id, names, days, date };

    const options = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    };

    await fetch(`${link}/${_id}`, options);
}

// DELETE
async function deleteReservation(_id) {
    const options = {
        method: 'delete'
    };

    await fetch(`${link}/${_id}`, options);
}
