"use strict!";

let errorHandlingButton = document.getElementById("errorHandlingButton");
errorHandlingButton.addEventListener("click", function() {
  // ERRORS
  // As soon as an error is thrown code stops executing
  // Can use try catch logic
  // Can use finally block and have code run regardless of whether there was an error
  try {
    let car = new Car();
  } catch (error) {
    console.log("error is: ", error);
  } finally {
    console.log("this always runs");
  }
  console.log("continuing to run....");

  // USER DEFINED ERRORS
  try {
    // some code goes here
    throw new Error("my custom error");
  } catch (error) {
    console.log("error is: ", error);
  }
});
