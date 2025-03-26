function piccolo(allCars) {
    let parking = new Set();

    for(let item of allCars){
        let [direction, car] = item.split(', ');
        if(direction == 'IN'){
            parking.add(car);
        }
        else if(direction == 'OUT'){
            parking.delete(car);
        }
    }

    //Converting the set to an array so it can be sorted, then print with foreach
    if(parking.size > 0){
        return Array.from(parking).sort().forEach(c => console.log(c));;
    }

    console.log('Parking Lot is Empty');
}

piccolo([
  'IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU',
]);
piccolo([
    'IN, CA2844AA', 
    'IN, CA1234TA', 
    'OUT, CA2844AA', 
    'OUT, CA1234TA'
]);
