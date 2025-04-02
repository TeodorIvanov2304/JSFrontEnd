function deleteByEmail() {
    let input = document.querySelector('label input');
    let text = input.value;

    if(!text){
        return;
    }

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    for(let row of rows){

        if(row.textContent.includes(text)){
            row.remove();
            document.getElementById('result').textContent = `Deleted.`;
            input.value = '';
        }
        else {
            document.getElementById('result').textContent = `Not found.`
        }

    }
}
