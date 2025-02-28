function roadRadar(currentSpeed,area) {

    let speedLimit;
    let status;

    if (area == 'residential') {
        speedLimit = 20;
        if(currentSpeed <= speedLimit) {
            console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`)
        }
        else {
            if(currentSpeed - speedLimit <= 20) {
                status = 'speeding';
            }
            else if(currentSpeed - speedLimit > 20 && currentSpeed - speedLimit <= 40) {
                status = 'excessive speeding';
            }
            else if(currentSpeed - speedLimit > 40) {
                status = 'reckless driving';
            }

            console.log(`The speed is ${currentSpeed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        }
    }

    else if(area =='city') {
        speedLimit = 50;
        if(currentSpeed <= speedLimit) {
            console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`)
        }
        else {
            if(currentSpeed - speedLimit <= 20) {
                status = 'speeding';
            }
            else if(currentSpeed - speedLimit > 20 && currentSpeed - speedLimit <= 40) {
                status = 'excessive speeding';
            }
            else if(currentSpeed - speedLimit > 40) {
                status = 'reckless driving';
            }

            console.log(`The speed is ${currentSpeed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        }
    }

    else if(area =='interstate') {
        speedLimit = 90;
        if(currentSpeed <= speedLimit) {
            console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`)
        }
        else {
            if(currentSpeed - speedLimit <= 20) {
                status = 'speeding';
            }
            else if(currentSpeed - speedLimit > 20 && currentSpeed - speedLimit <= 40) {
                status = 'excessive speeding';
            }
            else if(currentSpeed - speedLimit > 40) {
                status = 'reckless driving';
            }
            
            console.log(`The speed is ${currentSpeed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)

        }
    }

    else if(area =='motorway') {
        speedLimit = 130;
        if(currentSpeed <= speedLimit) {
            console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`)
        }
        else {
            if(currentSpeed - speedLimit <= 20) {
                status = 'speeding';
            }
            else if(currentSpeed - speedLimit > 20 && currentSpeed - speedLimit <= 40) {
                status = 'excessive speeding';
            }
            else if(currentSpeed - speedLimit > 40) {
                status = 'reckless driving';
            }

            console.log(`The speed is ${currentSpeed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            
        }
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
