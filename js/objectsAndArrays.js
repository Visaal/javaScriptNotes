// OBJECTS AND ARRAYS

let objectsAndArraysButton = document.getElementById("objectsAndArraysButton");
objectsAndArraysButton.addEventListener("click", function() {
  // CONSTRUCTOR FUNCTIONS
  // Used to instantiate new objects (used before clases were available in JavaScript)
  // make sure to use the 'this' keyword when defined properties and methods to access the context of the object
  function Car(id) {
    // note the convention of using a capital for the constructor name
    this.carId = id;
  }
  let car = new Car(123); // using the new keyword means the function gets a brand new context
  console.log(car.carId); // 123

  function Car2(id) {
    this.carId = id;
    this.start = function() {
      console.log("start: " + this.carId);
    };
  }
  let car2 = new Car2(456);
  car2.start(); // start: 456

  // PROTOTYPES
  // Looking at Car2 above - if mutliple objects were created with this constructor the 'start' function would be replicated multiple times
  // Only one version of the 'start' function is required - this is achieved with prototypes
  function Car3(id) {
    this.carId = id;
  }
  // Can create mutliple objects now and only one 'start' function exists - this saves memory
  Car3.prototype.start = function() {
    console.log("start: " + this.carId);
  };
  let car3 = new Car3(789);
  car3.start(); // start: 789

  // POLYFILLS - EXPANDING OBJECTS USING PROTOTYPES
  // Can expand objects or even JavaScript built in constructors
  // Example Below: Any string now has access to the function 'hello'
  String.prototype.hello = function() {
    return this.toString() + " HELLO!";
  };
  console.log("foo".hello()); // foo HELLO!

  // ARRAY ITERATION
  // Now have methods on the Array object that can be used to iterate through an array
  let carIds = [
    {
      carId: 123,
      style: "sedan"
    },
    {
      carId: 456,
      style: "convertible"
    },
    {
      carId: 789,
      style: "sedan"
    }
  ];
  carIds.forEach(car => console.log(car));
  carIds.forEach((car, index) => console.log(car, index));

  // FILTERING ON ITERATION
  let convertibles = carIds.filter(car => car.style === "convertible");
  console.log(convertibles); // [{ carId: 456, style: "convertible" }]

  // CHECKING CONDITION FOR EVERY ITEM
  let result = carIds.every(car => car.carId > 0);
  console.log(result); // true - as all ids are above 0

  // FINDING FIRST INSTANCE WHEN CONDITION MET
  let carWanted = carIds.find(car => car.carId > 400); // execution stopped when condition first met
  console.log(carWanted); // { carId: 456, style: "convertible" }
});
