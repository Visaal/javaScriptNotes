"use strict";

import { MotorBike } from "./vehiclesTypes/motorBike.js";

let classesAndModulesButton = document.getElementById(
  "classesAndModulesButton"
);
classesAndModulesButton.addEventListener("click", function() {
  // CLASSES, CONSTRUCTORS, PROPERTIES, METHODS
  class Car {
    constructor(id) {
      this.id = id;
    }
    identify(suffix) {
      // use 'this' if working with class properties
      return `this car has id of ${this.id}${suffix}`;
    }
  }
  let fordFocus = new Car(555);
  console.log(fordFocus.id); // 555
  console.log(fordFocus.identify("!!!")); // this car has an id of 555!!!

  // INHERITANCE
  class Vehicle {
    constructor() {
      this.type = "lorry";
    }
    start() {
      return `starting the vehicle`;
    }
  }

  class Lorry extends Vehicle {
    constructor() {
      // to be able to add properties for a child class the 'super' constructor must be called using super()
      super();
      this.size = "massive";
    }
    // can override the method in the parent
    start() {
      return `starting the ${this.type}`;
    }
  }

  let redLorry = new Lorry();
  // type proprty does not exist on Lorry class but belongs on the base/parent class
  console.log(redLorry.type); // lorry
  console.log(redLorry.start()); // starting the lorry
  console.log(redLorry.size); // massive

  // MODULES
  // Created a module found in vehicleTypes/motorBike.js - note the export keyword
  // To import it use the statement "import { MotorBike } from "./vehiclesTypes/motorBike.js";"" at top of file
  // Also need to have type="module" in the script tag of the file importing the module e.g. <script src="js/classesAndModules.js" type="module"></script>
  let vespa = new MotorBike();
  console.log(vespa.type); // motor bike
});
