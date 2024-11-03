//----------Classes----------
// parent

class Vehicle {
  constructor(color, wheels, doors) {
    this.color = color;
    this.wheels = wheels;
    this.doors = doors;
  }
  describe() {
    return `This Vehicle is ${this.color}, it has ${this.wheels}X wheels and ${this.doors}X doors.`;
  }
}

//Child 1

class Car extends Vehicle {
  constructor(color, wheels, doors, topSpeed) {
    super (color, wheels, doors);
    this.topSpeed = topSpeed;
  }
  getTopSpeed() {
    return (
      super.describe() + `The top speed of the car is ${this.topSpeed} km/h.`
    );
  }
}

//Child 2

class Truck extends Vehicle {
  constructor(color, wheels, doors, maxLoadWeight) {
    super(color, wheels, doors);
    this.maxLoadWeight = maxLoadWeight;
  }
  getMaxLoadWeight() {
    return (
      super.describe() +
      `The maximum load weight of this truck is ${this.maxLoadWeight} kgs`
    );
  }
}


//Vehicle Factory will create Vehicles of different types

class VehicleFactory {
  create(type, specs) {
    switch (type) {
      case "Car":
        return new Car(specs.color, specs.wheels, specs.doors, specs.topSpeed);
      case "Truck":
        return new Truck(
          specs.color,
          specs.wheels,
          specs.doors,
          specs.maxLoadWeight
        );
      default:
        return `Unknown vehicle type`;
    }
  }
}
 

//----------Car Implementation----------

//Create JSON string object from schema

const json_carObject = ` {  "id": 1, "wheels": 4, "color": "white",  "doors": 5}`;
console.log(json_carObject);

//Convert JSON object to JS Object
const json_carobject = ` {  "id": 1, "wheels": 4, "color": "white",  "doors": 5}`;
const js_carObj = JSON.parse(json_carObject);
console.log(js_carObj);

//Add topSpeed to the JS Obj
function addCarProperty() {
  js_carObj.topSpeed = 150;
  console.log(js_carObj);
}
addCarProperty();

//Create CarFactory and a Car

const vehicleFactory = new VehicleFactory();
const myCar = vehicleFactory.create("Car", js_carObj);
console.log(myCar.getTopSpeed())


const car = new Car(js_carObj);

//----------Truck Implementation----------

//Create JSON string object from schema
const json_truckObject = `{  "id": 2,  "wheels": 18, "color": "yellow",  "doors": 2}`;
console.log(json_truckObject);

//Convert JSON object to JS Object
const json_TruckObject = `{  "id": 2,  "wheels": 18, "color": "yellow",  "doors": 2}`;
const js_TruckObj = JSON.parse(json_TruckObject);
console.log(js_TruckObj);

//Add maxLoadWeight to the JS Obj
function addTruckProperty() {
  js_TruckObj.maxLoadWeight = 2000;
  console.log(js_TruckObj);
}
addTruckProperty();//testing


//Create TruckFactory and a Truck

const myTruck = vehicleFactory.create("Truck", js_TruckObj);
console.log(myTruck.getMaxLoadWeight()); 
const truck = new Truck(js_TruckObj);
 


