function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove',(ev) => {
        //ev.offsetX is for the X axis, offsetY is for Y axis

        //Get the value in percents
        let value = Math.floor(ev.offsetX / gradient.clientWidth * 100);

        document.getElementById('result').textContent = `${value}%`;
    });
}
