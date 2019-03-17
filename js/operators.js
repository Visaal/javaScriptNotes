// OPERATORS

let operatorsButton = document.getElementById("operatorsButton");
operatorsButton.addEventListener("click", function() {
  // EQUALITY OPERATORS
  let numericId = 1234;
  console.log(numericId == "1234"); // true
  console.log(numericId === "1234"); // false
  /// the === is a strict check where the both type and value have to match

  // UNARY OPERATORS
  // ++ after variable incremements after an operation e.g. below the year is printed and then incremented
  let year = 1965;
  console.log(year++); // 1965
  console.log(year); //1966

  // ++ before a variable increments before an operation
  let newYear = 1975;
  console.log(++newYear); // 1976
  console.log(newYear); // 1976

  // + before a string converts to a number
  let stringYear = "1985";
  console.log(+stringYear); // 1985
  console.log(typeof +stringYear); // number

  // - before a string converts to a negative number
  let newStringYear = "1995";
  console.log(-newStringYear); // -1995
  console.log(typeof -newStringYear); // number

  // - before a number converts to a negative number if positive (or positive if negative)
  let negativeNumber = -900;
  console.log(-negativeNumber); // 900

  // CONDITIONAL OPERATORS
  // lets you have simple if else logic in a single statment
  let aNumber = 18;
  let result = aNumber > 5 ? "yes" : "no";
  console.log(result); // "yes"
  // Statement is the equivalent of the following if else block
  // if (aNumber > 5) {
  //   result = "yes";
  // } else {
  //   result = "no";
  // }
});
