/*
Before start:
cmd in server folder -> node server.js
npm i in terminal with current project
npm start

npm test to run the tests
*/

function solve() {
    let currentStopId = 'depot';
    let currentStopName = '';

    async function depart() {
        try {
            let link = `http://localhost:3030/jsonstore/bus/schedule/${currentStopId}`;

            let res = await fetch(link);

            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }

            let data = await res.json();

            currentStopName = data.name;
            currentStopId = data.next;

            document.querySelector('#info span').textContent = `Next stop ${currentStopName}`;
            document.getElementById('depart').disabled = true;
            document.getElementById('arrive').disabled = false;

        } catch (error) {

            document.querySelector('#info span').textContent = 'Error';
            document.getElementById('depart').disabled = true;
            document.getElementById('arrive').disabled = true;
        }
    }

    function arrive() {
        document.querySelector('#info span').textContent = `Arriving at ${currentStopName}`;
        document.getElementById('depart').disabled = false;
        document.getElementById('arrive').disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();