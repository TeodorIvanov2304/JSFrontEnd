function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then(onResponse)
        .then(onData)
        .catch(onError); 

    function onResponse(res) {
        if (!res.ok) {
            throw new Error(`Error: ${res.status} (Not Found)`);
        }
        return res.json();
    }

    function onData(data) {
        let list = document.getElementById('commits');
        list.innerHTML = '';
        for (let commit of data) {
            const author = commit.commit.author.name;
            const message = commit.commit.message;
            const li = document.createElement('li');
            li.textContent = `${author}: ${message}`;
            list.appendChild(li);
        }
    }

    function onError(err) {
        let list = document.getElementById('commits');
        list.innerHTML = '';
        let li = document.createElement('li');
        li.textContent = err?.message || 'Unknown error';
        list.appendChild(li);
    }
}
