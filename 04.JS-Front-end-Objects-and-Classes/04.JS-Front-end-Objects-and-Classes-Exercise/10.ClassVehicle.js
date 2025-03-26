class Vehicle {
    type;
    model;
    //Create parts as empty object
    parts = {};
    fuel;
    constructor(type, model, parts, fuel){
        this.type = type;
        this.model = model;
        //Initialize the engine object properties
        this.parts.engine = parts.engine;
        this.parts.power = parts.power;
        this.parts.quality = parts.power * parts.engine;
        this.fuel = fuel;
    }

    drive(fuelSpent){
        this.fuel -= fuelSpent;
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

let parts2 = {engine: 9, power: 500};
let vehicle2 = new Vehicle('l', 'k', parts2, 840);
vehicle2.drive(20);
console.log(vehicle2.fuel);

console.log(vehicle);
console.log(vehicle2);
