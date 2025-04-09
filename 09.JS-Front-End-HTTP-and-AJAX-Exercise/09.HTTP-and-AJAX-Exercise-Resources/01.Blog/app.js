async function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click',loadPosts);
    document.getElementById('btnViewPost').addEventListener('click',loadDetails);
}

attachEvents();

async function loadPosts() {

    let posts = await getAllPosts();
    let menu = document.getElementById('posts');
    menu.replaceChildren();

    for(let post of posts){
        let option = document.createElement('option');
        option.value = post.id;
        option.textContent = post.title;
        menu.appendChild(option);
    }
}

async function loadDetails() {
    let menu = document.getElementById('posts');
    let postId = menu.value;
    let postData = await getPostById(postId);
    let comments = await getCommentsByPostId(postId);

    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;
    
    let list = document.getElementById('post-comments');
    list.replaceChildren();

    for(let comment of comments){
        let li = document.createElement('li');
        li.id = comment.id;
        li.textContent = comment.text;

        list.appendChild(li);
    }
}


async function getAllPosts(){
    let response = await fetch('http://localhost:3030/jsonstore/blog/posts');

    if(!response.ok){
        alert('Request error');
        throw new Error('Request error');
    }

    let data = await response.json();
    
    return Object.values(data);
}

async function getPostById(postId) {
    let response = await fetch('http://localhost:3030/jsonstore/blog/posts');
    let posts = await response.json();

    return posts[postId];
   
}

async function getCommentsByPostId(postId) {
    let response = await fetch('http://localhost:3030/jsonstore/blog/comments');
    let data = await response.json();

    return Object.values(data).filter(c => c.postId == postId);
}