const link = 'http://localhost:3030/jsonstore/collections/students';
document.getElementById('submit').addEventListener('click', onPost);

onGet();

async function onGet() {
    try {
        let students = await getStudents();

        let list = document.querySelector('tbody');
        list.replaceChildren();

        for (let student of students) {
            let row = document.createElement('tr');
            row.innerHTML = [
                `<td>${student.firstName}</td>
                 <td>${student.lastName}</td>
                 <td>${student.facultyNumber}</td>
                 <td>${student.grade.toFixed(2)}</td>`
            ].join('');

            list.appendChild(row);
        }
    } catch (err) {
        alert('Error while loading students: ' + err.message);
    }
}

async function onPost(ev) {
    ev.preventDefault();

    let firstName = document.querySelector('[name="firstName"]').value;
    let lastName = document.querySelector('[name="lastName"]').value;
    let facultyNumber = document.querySelector('[name="facultyNumber"]').value;
    let grade = Number(document.querySelector('[name="grade"]').value);

    if (!firstName || !lastName || !facultyNumber || !grade) {
        return;
    }

    try {
        await postStudent(firstName, lastName, facultyNumber, grade);

        //Reset all values in the form element
        document.querySelector('form').reset();
        onGet();
    } catch (err) {
        alert('Error while submitting student: ' + err.message);
    }
}

//GET
async function getStudents() {
    try {
        let res = await fetch(link);

        if (!res.ok) {
            throw new Error('Failed to fetch students');
        }

        let data = await res.json();
        return Object.values(data);
    } catch (err) {
        throw new Error('Error fetching students: ' + err.message);
    }
}

//POST
async function postStudent(firstName, lastName,facultyNumber,grade) {
    let student = {
        firstName,
        lastName,
        facultyNumber,
        grade
    };

    const opitons = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(student)
    };

    await fetch(link,opitons);
}
