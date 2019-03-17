// LANGUAGE FEATURES

let languageFeaturesButton = document.getElementById("languageFeaturesButton");
languageFeaturesButton.addEventListener("click", function() {
  // REST PARAMETERS
  // the ...{variableName} converts the input to an array
  function stateDays(...allDays) {
    allDays.forEach(id => console.log(id)); // Mon, Tues, Weds
    console.log(allDays); // ["Mon", "Tues", "Weds"]
  }
  stateDays("Mon", "Tues", "Weds");

  // can specify explicit parameters however the rest parameters must be at end
  function stateDays(dayId, ...allDays) {
    allDays.forEach(id => console.log(id)); // Mon, Tues, Weds
    console.log(dayId); // 1
    console.log(allDays); // ["Mon", "Tues", "Weds"]
  }
  stateDays(1, "Mon", "Tues", "Weds");

  // DESTRUCTURING ARRAYS
  // lets you take array elements and assign them to variables
  let dayIds = [1, 2, 3];
  let [mon, tue, wed] = dayIds;
  console.log(mon, tue, wed); // 1 2 3

  // can use destructuring with rest parameters
  let carIds = [1, 2, 5];
  let car1, remainingCars;
  [car1, ...remainingCars] = carIds;
  console.log(car1, remainingCars); //1 [2, 5]

  // can use a comma to skip elements (can use more than one to skip multiple elements)
  [, ...otherCarIds] = carIds;
  console.log(otherCarIds); // [2, 5]

  // DESTRUCTURING OBJECTS
  // use curly braces rather than square brackets as working with an object
  let car = { id: 5000, style: "convertible" };
  let { id, style } = car;
  console.log(id, style); // 5000 convertible

  // if initialising variables before assignment you need brackets around the curly braces when assigning
  let day = { dayId: 1, name: "monday" };
  let dayId, name;
  ({ dayId, name } = day);
  console.log(dayId, name); // 1 monday

  // SPREAD SYNTAX
  // allows you to take an itterable and spread out its elements
  function storeCards(card1, card2, card3) {
    console.log(card1, card2, card3);
  }

  let cardIds = [10, 20, 30];
  storeCards(...cardIds); // 10 20 30

  let cardCodes = "akq";
  storeCards(...cardCodes); // a k q

  // COMMON TYPE CONVERSIONS

  // convert to a string
  foo = 100;
  foo.toString();

  // convert string to an integer
  Number.parseInt("55"); // 55 as a number

  // convert string to number
  Number.parseFloat("55.99"); // 55.99 as a number
  Number.parseFloat("55.88AAAAA"); // 55.88 as a number - will ignore end numbers (but has to start as a number)

  // CONTROLLING LOOPS

  // breaking out of a loop (note how you do not need to initiate i in the for statement - but still need the ;)
  let i = 0;
  for (; i < 12; i++) {
    if (i === 8) {
      break;
    }
  }
  console.log(i); // 8

  // skipping items in a loop
  for (let n = 0; n < 4; n++) {
    if (n === 2) {
      continue;
    }
    console.log(n);
  }
  // 0 1 3
});
