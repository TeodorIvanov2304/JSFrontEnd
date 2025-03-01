function roadRadar(currentSpeed,zone) {
    let zones =  {
        'motorway': 130,
        'interstate': 90,
        'residential': 20,
        'city': 50
    };

    let limit = zones[zone];
    let diffrence = currentSpeed - limit;

    if(diffrence <= 0) {
        console.log(`Driving ${currentSpeed} km/h in a ${limit} zone`)
    }
    else if(diffrence <= 20) {
        console.log(`The speed is ${diffrence} km/h faster than the allowed speed of ${limit} - speeding`);
    }
    else if(diffrence <= 40) {
        console.log(`The speed is ${diffrence} km/h faster than the allowed speed of ${limit} - excessive speeding`);
    }
    else {
        console.log(`The speed is ${diffrence} km/h faster than the allowed speed of ${limit} - reckless driving`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
