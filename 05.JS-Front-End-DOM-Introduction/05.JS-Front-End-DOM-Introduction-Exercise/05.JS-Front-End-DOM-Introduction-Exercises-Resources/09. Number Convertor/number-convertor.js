function solve() {
    let input = Number(document.getElementById('input').value);
    
    let options = document.getElementById('selectMenuTo').children;
    let result = '';

    for(let option of options){
        if(option.value == 'binary' && option.selected){
            //Convert to binary
            result = input.toString(2);
        }
        else if(option.value == 'hexadecimal' && option.selected){
            //Convert to hexadecimal
            result = input.toString(16).toUpperCase();
        }
    }

    let output = document.getElementById('result');
    output.value = result;
}
