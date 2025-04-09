const link = 'http://localhost:3030/jsonstore/messenger';

function attachEvents() {
    document.getElementById('submit').addEventListener('click', onPost);
    document.getElementById('refresh').addEventListener('click', onRefresh);

}

attachEvents();

//GET
async function getMessages() {
    let resolve = await fetch(link);
    let data = await resolve.json();

    return Object.values(data);
}

//POST

async function postMessage(author, content) {
    let message = {author,content};

    let options = {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(message)
    };

    await fetch(link, options); 
}



async function onPost() {
    let authorInput = document.querySelector('[name="author"]');
    let contentInput = document.querySelector('[name="content"]');

    let author = authorInput.value;
    let content = contentInput.value;

    await postMessage(author,content);

    authorInput.value = '';
    contentInput.value = '';
}

async function onRefresh() {
    let messages = await getMessages();
    
    let output = messages.map(m => `${m.author}: ${m.content}`);
    
    document.getElementById('messages').value = output.join('\n');
}
