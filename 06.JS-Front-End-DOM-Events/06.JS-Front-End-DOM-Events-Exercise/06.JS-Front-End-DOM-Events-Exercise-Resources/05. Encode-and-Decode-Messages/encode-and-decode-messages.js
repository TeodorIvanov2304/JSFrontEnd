document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let encodeBtn = document.querySelector('#encode button');
    encodeBtn.addEventListener('click', onClickEncode);

    let decodeBtn = document.querySelector('#decode button');
    decodeBtn.addEventListener('click', onClickDecode);

    function onClickEncode(e){
    e.preventDefault();
    let input = document.querySelector('#encode textarea');
    let inputText = input.value;

    if(!inputText){
        return;
    }

    let encodedMsg = '';

    //Encode
    for(let i = 0; i < inputText.length;i++){

        let letter = String.fromCharCode(inputText.charCodeAt(i) + 1);
        encodedMsg += letter;
    }

    input.value = '';
    let output = document.querySelector('#decode textarea');
    output.value = encodedMsg;
    }
    
    function onClickDecode(e){
        e.preventDefault();
        let input = document.querySelector('#decode textarea');
        let inputText = input.value;

        if(!inputText){
            return;
        }

        let decodedMsg = '';

        //Decode
        for(let i = 0; i < inputText.length;i++){

            let letter = String.fromCharCode(inputText.charCodeAt(i) - 1);
            decodedMsg += letter;
        }

        input.value = decodedMsg;
    }
}
