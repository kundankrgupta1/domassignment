// Base class for FourWheeler
function FourWheeler(type, wheels, fuelType) {
    this.type = type;
    this.wheels = wheels;
    this.fuelType = fuelType;
}

FourWheeler.prototype.start = function () {
    console.log('Engine started.');
};

let mahindra = Object.create(FourWheeler);
mahindra.model = "Thar";

let newCar = new FourWheeler("Thar", 4, "Diesel")

console.log(newCar);
newCar.start();