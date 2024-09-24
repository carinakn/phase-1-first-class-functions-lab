// Declare the variable returnFirstTwoDrivers and assign an anonymous function to it
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Declare the variable returnLastTwoDrivers and assign an anonymous function to it
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // This is an array containing the two functions we previously defined
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function that creates a fare multiplier
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Declare fareDoubler and assign a function that doubles the fare
  const fareDoubler = createFareMultiplier(2);
  
  // Declare fareTripler and assign a function that triples the fare
  const fareTripler = createFareMultiplier(3);
  
  // Function to select different drivers based on the provided function
  const selectDifferentDrivers = function(drivers, fn) {
    return fn(drivers);
  };
  
  // Example usages
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // => ['Antonia', 'Nuru']
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // => ['Amari', 'Mo']
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // => ['Antonia', 'Nuru']
  console.log(fareDoubler(10)); // => 20
  console.log(fareTripler(10)); // => 30