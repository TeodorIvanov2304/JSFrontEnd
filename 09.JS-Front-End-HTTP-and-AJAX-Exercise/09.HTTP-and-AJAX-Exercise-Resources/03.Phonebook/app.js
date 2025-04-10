const link = 'http://localhost:3030/jsonstore/phonebook/';


function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', onCreate);
}

attachEvents();

async function onCreate() {
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');

    let person = personInput.value;
    let phone  = phoneInput.value;
    
    if (!person || !phone) {
        return;
    }

    try {
        await postPhone(person, phone);
        onLoad();
    } catch (err) {
        alert('Error while creating a phone record: ' + err.message);
    }
}

async function onLoad() {
    try {
        let phones = await getPhones();

        let phonebook = document.getElementById('phonebook');
        phonebook.replaceChildren();

        for (let phone of phones) {
            let li = document.createElement('li');
            li.textContent = `${phone.person}: ${phone.phone}`;

            //Create delete button
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';

            //Add event listener with arrow function, where we can attach variables
            deleteBtn.addEventListener('click', () => onDelete(li, phone._id));

            li.appendChild(deleteBtn);
            phonebook.appendChild(li);
        }
    } catch (err) {
        alert('Error while loading phone records: ' + err.message);
    }
}

async function onDelete(li, phoneId) {
    try {
        await deletePhone(phoneId);
        li.remove();
    } catch (err) {
        alert('Error while deleting the phone record: ' + err.message);
    }
}

//GET
async function getPhones() {
    let res = await fetch(link);
    let data = await res.json();

    if(!res.ok){
        throw new Error('Error occured');
    }

    return Object.values(data);
}

//POST
async function postPhone(person, phone) {
    let record = {
        phone,
        person
    };

    const opitons = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(record)
    };

    await fetch(link,opitons);
}

//DELETE
async function deletePhone(phoneId) {
    const options = {method: 'delete'};
    await fetch(link + phoneId,options);
}
