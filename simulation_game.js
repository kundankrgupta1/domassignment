function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function() {
    this.speed = this.speed;
    console.log(`The ${this.brand} ${this.model} is accelerating and speed is ${this.speed}`);
}

Vehicle.prototype.break = function() {
    this.speed -= 5;
    console.log(`The ${this.brand} ${this.model} is breaking and speed is ${this.speed}`);
}

Vehicle.prototype.refuel = function() {
    console.log(`The ${this.brand} ${this.model} is Refueling.`);
}

function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType, numberOfWheels)
    this.numberOfWheels = numberOfWheels || 4;
}

Car.prototype = Object.create(Vehicle.prototype)

Car.prototype.honk = function() {
    console.log(`The ${this.brand} ${this.model} is Honking.`);
}

let myCar = new Car("TATA", "Nexon", 40, "Diesel", 4)

console.log(myCar);

myCar.accelerate();
myCar.break();
myCar.refuel();
myCar.honk();



// Airplane

// Airplane constructor function
function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}

Airplane.prototype = Object.create(Vehicle.prototype);
  
Airplane.prototype.takeOff = function() {
    console.log(`${this.brand} ${this.model} is taking off!`);
};

let myAirplane = new Airplane('AirIndia', 'I5-560', 500, 'Jet Fuel', 4, true);

myAirplane.accelerate();
myAirplane.break();
myAirplane.refuel();
myAirplane.takeOff();
