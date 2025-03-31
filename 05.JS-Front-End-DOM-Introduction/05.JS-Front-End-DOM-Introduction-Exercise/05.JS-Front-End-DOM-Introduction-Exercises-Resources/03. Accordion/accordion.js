function toggle() {
    let hidden = document.getElementById('extra');
    let text = document.querySelector('.button');
    
    if (text.textContent == 'More') {
        //Toggle on
        text.textContent = 'Less';
        hidden.style.display = 'block';
    } else if(text.textContent == 'Less') {
        //Toggle off
        hidden.style.display = 'none';
        text.textContent = 'More';
    }
}
