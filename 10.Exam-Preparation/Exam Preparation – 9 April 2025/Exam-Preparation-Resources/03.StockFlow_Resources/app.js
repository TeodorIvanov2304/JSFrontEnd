const link = 'http://localhost:3030/jsonstore/orders';

let loadBtn = document.getElementById('load-orders');
loadBtn.addEventListener('click', loadOrders);

let orderBtn = document.getElementById('order-btn');
orderBtn.addEventListener('click', onCreate);

let editBtn = document.getElementById('edit-order');
editBtn.addEventListener('click', onEdit);

async function onDelete(_id) {
    await deleteOrder(_id);

    loadOrders();
}

async function onCreate(ev) {
    ev.preventDefault();
    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    let date = document.getElementById('date').value;

    if(!name || !quantity || !date){
        return;
    }

    await createOrder(name,quantity,date);

    document.getElementById('name').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('date').value = '';

    loadOrders();

}

async function onEdit(ev) {
    ev.preventDefault();
    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    let date = document.getElementById('date').value;
    let _id = editBtn.dataset.id;

    await updateOrder(_id,name, quantity, date);

    orderBtn.disabled = false;
    editBtn.disabled = true;

    document.querySelector('form').reset();

    loadOrders();
}

function editClick(entry,element){
    document.getElementById('name').value = entry.name;
    document.getElementById('quantity').value = entry.quantity;
    document.getElementById('date').value = entry.date;
    editBtn.dataset.id = entry._id;
    element.remove();

    orderBtn.disabled = true;
    editBtn.disabled = false;
}

async function loadOrders() {
    let data = await getAllOrders();

    let list = document.getElementById('list');
    list.replaceChildren();

    for(let entry of data){
        let element = create('div',[
        create('h2',[entry.name]),
        create('h3',[entry.date]),
        create('h3',[entry.quantity]),
        create('button',['Change'],'change-btn', () =>editClick(entry, element)),
        create('button',['Done'],'done-btn', () => onDelete(entry._id)),
        ],'container');

        list.appendChild(element);
    }
}

// GET
async function getAllOrders() {
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
async function createOrder(name, quantity, date) {
    let entry = { name, quantity, date };

    const options = {
      method: "post",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(entry),
    };

    await fetch(link, options);
}


//PUT
async function updateOrder(_id, name, quantity, date) {
    let record = {_id, name, quantity, date};

    let options = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    };

    await fetch(`${link}/${_id}`, options);
}

// DELETE
async function deleteOrder(_id) {
    const options = {
        method: 'delete'
    };

    await fetch(`${link}/${_id}`, options);
}

//Factory
function create(tagName,content = [],className = [], callback){
    let element = document.createElement(tagName);

    for(let item of content){
        if(typeof item != 'object'){
            item = document.createTextNode(item);
        }

        element.appendChild(item);
    }

    if(className){
        element.className = className;
    }

    if(typeof callback == 'function'){
        element.addEventListener('click', callback); 
    }

    return element;
}
