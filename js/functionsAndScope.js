let functionsAndScopeButton = document.getElementById(
  "functionsAndScopeButton"
);
functionsAndScopeButton.addEventListener("click", function() {
  // FUNCTION SCOPE
  function startCar1(carId) {
    let message1 = "Starting...";
  }
  startCar1(123);
  // console.log(message1); // reference error, message1 is not defined

  function startCar2(carId) {
    let message2 = "Starting...";
    let startFn = function turnKey() {
      console.log(message2); // 'Starting...'
      // will print as function looks at parent functions up the chain to see if it can find the variable
    };
    startFn();
  }
  startCar2(123); // 'Starting...'

  function startCar3(carId) {
    let message3 = "Starting...";
    let startFn = function turnKey() {
      let message3 = "Override";
    };
    startFn();
    console.log(message3); // 'Starting...'
    // if child function uses the same variable name as its parent it will go out of scope
  }

  // BLOCK SCOPE
  if (5 === 5) {
    let message4 = "Equal";
    var messageFour = "Var Equal";
  }
  // console.log(message4); // reference error, message4 is not defined
  console.log(messageFour); // Var Equal

  let message5 = "Outside";
  var messageFive = "Five Outside";
  if (5 === 5) {
    let message5 = "Equal";
    var messageFive = "Five Equal";
    console.log(message5); // Equal - overrides the outside message5 variable
    console.log(messageFive); // Five Equal
  }
  console.log(message5); // Outside
  console.log(messageFive); // Five Equal

  // IIFE - IMMEDIATLEY INVOKED FUNCTION EXPRESSION
  // Surround function in brackets
  (function() {
    console.log("IIFE function executing");
  })();

  // Normal practice to assign values to a variable
  let app = (function() {
    let appId = 111;
    console.log("in IIFE function");
    return {
      appId: appId
    };
  })();
  console.log(app); // {appID: 111}

  // CLOSURES
  // Allows for variables and functions to still be available once a function has executed
  let newApp = (function() {
    let cardId = 10;
    let getId = function() {
      return cardId;
    };
    return {
      getId: getId
    };
  })();
  console.log(newApp.getId()); // 10 - the IIFE function return a reference to the getId function so it is persisted after the IIFE executes along with the IIFE and any parent functions

  // "this" KEYWORD
  // Refers to an object however not to the function as an object but a special object called the context for the function
  // Most commonly seen/used when functions are a property of an object
  let o = {
    carId: 123,
    getId: function() {
      console.log(o); // the o object
      return this.carId;
    }
  };
  console.log(o.getId()); // 123

  // CALL AND APPLY
  // Two different ways to call a function with the main purpose being to change the value of "this"
  // This changes the object that is the cotext of the function

  // CALL
  let c1 = {
    carId: 123,
    getId: function() {
      return this.carId;
    }
  };
  let newCar = { carId: 456 };
  console.log(c1.getId.call(newCar)); // 456

  // APPLY
  // Is similar to CALL however it allows arguements to be passed in
  let c2 = {
    carId: 123,
    getId: function(prefix) {
      console.log(this); // this now refers to newestCar object which is now the context
      return prefix + this.carId;
    }
  };
  let newestCar = { carId: 456 };
  console.log(c2.getId.apply(newestCar, ["ID: "])); // ID: 456

  // BIND
  // Creates a copy of the function and changes the "this" value so the copy is now the context
  // CALL and APPLY still use the existing function
  let c3 = {
    carId: 123,
    getId: function() {
      return this.carId;
    }
  };
  let newCar1 = { carId: 456 };
  let newFn = c3.getId.bind(newCar1);
  console.log(newFn()); // 456
});
