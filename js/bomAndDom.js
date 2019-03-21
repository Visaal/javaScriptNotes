"use stict!";

let bomAndDomButton = document.getElementById("bomAndDomButton");
bomAndDomButton.addEventListener("click", function() {
  // THE BOM (BROWSER OBJECT MODEL)

  // WINDOW OBJECT
  // This is the global object in JavaScript
  // Common Properties: document, location, console, innerHeight, pageXOffset...
  // Common Methods: alert(), back(), confirm()
  // https://developer.mozilla.org/en-US/docs/Web/API/Window
  year = 1956; // if variable is not delcared it is put on the window object
  console.log(year);
  console.log(innerWidth);
  // when working within a module that has been imported
  //    - Varibales must be declared
  //    - Window properies must be accessed using the window object i.e. window.innerWidth

  // TIMERS
  // Work asynchronously allowing other code to execute while waiting for the time to fire

  // To fire an event once use setTimeout
  let timeoutId = setTimeout(function() {
    console.log("1 second passed");
  }, 1000);

  // To fire an event at a set interval use setInterval
  let intervalId = setInterval(function() {
    console.log("1 second passed ");
  }, 1000);

  // To cancel a timeout use
  clearTimeout(timeoutId);

  // To cancel an interval use
  clearInterval(intervalId);

  // LOCATION
  // Part of the BOM and provides info on the url
  // Common Properties: href, hostname, port, pathname, search
  // Common Methods: assign(), reload()
  console.log(location.href);
  console.log(location.hostname);
  console.log(location.port);
  console.log(location.host);
  console.log(location.pathname);
  console.log(location.search);

  // DOCUMENT OBJECT (DOM)
  // Common Properties: body, forms, links
  // Common Methods: createElement(), createEvent(), getElementById(), getElementsByClassName(), getElementsByTagName()
  // Common Events: onload, onclick, onkeypress

  // Example of manipulation
  let pageHeader = document.getElementById("pageHeader");
  pageHeader.textContent = "JavaScript Notes DOM Manipulation";
  pageHeader.setAttribute("name", "nameVale");
  pageHeader.classList.add("customHeader");
  pageHeader.style.color = "green";
  console.log(pageHeader);
});
