function circleArea(radius) {

    let inputType = typeof(radius);

    if (inputType == 'number') {

        let area = Math.PI * (radius * radius);
        console.log(`${area.toFixed(2)}`);
    }

    else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

circleArea(5);
circleArea('name');
circleArea([2,2,3]);
