window.addEventListener("load", solve);

function solve() {
    let addBtn = document.getElementById('add_btn');
    addBtn.addEventListener('click', addContact);

    function addContact(e){
        
        e.preventDefault();
        let firstName = document.getElementById('first_name').value;
        let lastName = document.getElementById('last_name').value;
        let phone = document.getElementById('phone').value;

        if(!firstName || !lastName || !phone){
            return;
        }

        let list = document.getElementById('pending_contact_list');

        //Create li
        let li = document.createElement('li');
        li.className = 'contact';
        list.appendChild(li);

        //Create span names
        let spanNames = document.createElement('span');
        spanNames.className = 'names';
        spanNames.textContent = `${firstName} ${lastName}`;
        li.appendChild(spanNames);

        //Create span number
        let spanNumber = document.createElement('span');
        spanNumber.className = 'phone_number';
        spanNumber.textContent = phone;
        li.appendChild(spanNumber);

        //Create edit button
        let editBtn = document.createElement('button');
        editBtn.className = 'edit_btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click',(e) => onEdit(e, firstName, lastName, phone));
        li.appendChild(editBtn);

        //Create verify butoon
        let verifyBtn = document.createElement('button');
        verifyBtn.className = 'verify_btn';
        verifyBtn.textContent = 'Verify';
        verifyBtn.addEventListener('click', (e) => onVerify(e, firstName, lastName, phone));
        li.appendChild(verifyBtn);

        document.getElementById('contact_form').reset();
    }

    function onEdit(e, firstName, lastName, phone){

        document.getElementById('first_name').value = firstName;
        document.getElementById('last_name').value = lastName;
        document.getElementById('phone').value = phone;

        onDelete(e);
    }

    function onVerify(e, firstName, lastName, phone){
        let contact = e.target.parentElement;
        contact.remove();

        //Create list
        let list = document.getElementById('contact_list');

        //Create li
        let li = document.createElement('li');
        li.className = 'verified_contact';
        list.appendChild(li);

        //Create span names
        let spanNames = document.createElement('span');
        spanNames.className = 'names';
        spanNames.textContent = `${firstName} ${lastName}`;
        li.appendChild(spanNames);

        //Create span number
        let spanNumber = document.createElement('span');
        spanNumber.className = 'phone_number';
        spanNumber.textContent = phone;
        li.appendChild(spanNumber);

        //Create delete button
        let deleteBtn= document.createElement('button');
        deleteBtn.className = 'delete_btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click',(e) => onDelete(e));
        li.appendChild(deleteBtn);
    }

    function onDelete(e){
        let contact = e.target.parentElement;
        contact.remove();
    }
};
