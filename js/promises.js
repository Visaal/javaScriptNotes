"use strict";

let promiseButton = document.getElementById("promiseButton");
promiseButton.addEventListener("click", function() {
  // PROMISES
  // Designed to work with asynchronous javascript like a http call
  // Temporary holder that is retireived once that async action is completed
  let promise = new Promise(
    // promise is a function that accepts two functions - resolve and reject
    // promise will execute immediately
    function(resolve, reject) {
      // Code goes here - such as a http call
      // For example using a timer and calling the 'resolve' function as assuming it was successful
      setTimeout(resolve, 2000, "Some value has been returned");
      setTimeout(reject, 2000, "Some value has been returned"); // to reject the promise
    }
  );
  // Logging out the promise we can see the status and the value returned however it can not be accessed
  console.log(promise);

  // To access the value that is returned by the promise we need to 'Settle' the Promise
  // The settlement is a function that takes two arguments, one that executes on successful resolution and another on failure
  promise.then(
    value => console.log("fufilled: " + value),
    error => console.log("rejected: " + error)
  );

  // Can run other code while waiting for the promise to resolve
  for (let i = 0; i < 10000; i++) {
    console.log("hello");
  }
});
