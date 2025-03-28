function extractText() {
    let listItems = document.getElementsByTagName("li");
    let result = '';
    for(let item of listItems){
        result += item.textContent + '\n';
    }
    document.getElementById('result').textContent = result;
}

function extractText2() {

    //Get the list by id
    let list = document.getElementById('items');

    //Get the lists children (li)
    let items = list.children;

    let result = [];

    for(let li of items){
        result.push(li.textContent);
    }

    let output = document.getElementById('result');
    output.value = result.join('\n');
}
