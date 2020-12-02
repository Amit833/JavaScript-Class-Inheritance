// Create a class called Vehicle
//It should have three properties. Model, colour, maxSpeed
// It should have four methods. changeColour, showColour, changeMaxSpeed and showMaxSpeed
// Create three instances of land based vehicles
// using the methods described chain the methods to change the colour,
// show the colour, change max speed and show the max speed
// create another class called AirVehicle
// This class should inherit from Vehicle
// Add a property to this class called wingCount
// create two methods to this class called changeWingCount and showWingCount
// create two instances of AirVehicle
class Vehicle {
  constructor(Model, Colour, maxSpeed) {
    this.Model = Model;
    this.Colour = Colour;
    this.maxSpeed = maxSpeed;
  }
  changeColor(newColour) {
    this.Colour = newColour;
  }

  showColour() {
    console.log("showColour =", this.Colour);
  }

  changeMaxSpeed(newSpeed) {
    this.maxSpeed = newSpeed;
  }

  showMaxSpeed() {
    console.log("showMaxSpeed =", this.maxSpeed);
  }
}
const vehicle = new Vehicle("Audi", "Black", "280kmh");

vehicle.changeColor("white");
vehicle.showColour();
vehicle.changeMaxSpeed("350kmh");
vehicle.showMaxSpeed();
console.log("vehicle =", vehicle);

const vehicle2 = new Vehicle("BMW", "Blue", "300kmh");
const vehicle3 = new Vehicle("Mecedes", "Red", "250khm");

console.log("vehicle2 =", vehicle2);
console.log("vehicle3 =", vehicle3);

class AirVehicle extends Vehicle {
  constructor(Model, Colour, maxSpeed, wingCount) {
    super(Model, Colour, maxSpeed);
    this.wingCount = wingCount;
  }
  changeWingCount(newWing) {
    this.wingCount = newWing;
  }

  showWingCount() {
    console.log("showWing =", this.wingCount);
  }
}

const airVehicle = new AirVehicle("Audi", "Black", "280kmh", 4);
const airVehicle2 = new AirVehicle("Skoda", "navyBlue", "200kmh", 6);

airVehicle.changeWingCount(2);
airVehicle.showWingCount();
airVehicle.showColour();

console.log("airVehicle =", airVehicle);
console.log("airVehicle2 =", airVehicle2);
