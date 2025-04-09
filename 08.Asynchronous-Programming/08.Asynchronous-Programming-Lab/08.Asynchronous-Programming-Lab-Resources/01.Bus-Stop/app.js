/*
Before start:
cmd in server folder -> node server.js
npm i in terminal with current project
npm start

npm test to run the tests
*/

async function getInfo() {
    let stopId = document.getElementById('stopId').value;
    
    let list = document.getElementById('buses');
    list.replaceChildren();
    
    let info;

    try {

        info = await getBusInfo(stopId);

    } catch (error) {

        onError();
        
        return;
    }

    document.getElementById('stopName').textContent = info.name;

    for (let [busId, time] of Object.entries(info.buses)) {
        let item = document.createElement('li');
        item.textContent = `Bus ${busId} arrives in ${time} minutes`;
    
        list.appendChild(item);
    }
}

function onError(){
    document.getElementById('stopName').textContent = 'Error';
}

//Networking code
async function getBusInfo(stopId){
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    let response = await fetch(url);

        if(response.status == 204){
            throw new Error('No information for stop ' + stopId);
        }    
        let data = await response.json();

        return data;

}
