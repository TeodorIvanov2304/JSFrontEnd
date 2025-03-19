function loadingBar(number) {
    let bar = ['['];
    let percentNumber = number / 10;

    for (let i = 1; i <= percentNumber; i++) {
        bar.push('%');
    }

    for (let i = percentNumber; i < 11; i++) {
        if(i == 10) {
            bar.push(']');
        } else {
            bar.push('.');
        }
    }

    console.log(`${number}% ${bar.join('')}`);

    if (number == 100) {
        console.log('100% Complete!');
    } else {
        console.log(`Still loading...`)
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);

console.log('****************');

function loadingBar2(number) {
    
    //Early exit
    if (number == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
        return;
    } 
    
    let progress = number / 10;
    let remaining = 10 - progress;

    console.log(`${number}% [${'%'.repeat(progress)}${'.'.repeat(remaining)}]`);
    console.log(`Still loading...`)
    
}

loadingBar2(30);
loadingBar2(50);
loadingBar2(100);
