/* LESSON 3 - Programming Tasks */
/* FUNCTIONS */

/* Function Definition - Add Numbers */
function add(Number1, number2) {
    return Number1 + number2;
  }
  
  /* Event handling and calling add function */
  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  
  /* Function Expression - Subtract Numbers */
  let subtract = function (Number1, number2) {
    return Number1 - number2;
  };
  
  /* Arrow Function - Multiply Numbers */
  let multiply = (Number1, number2) => Number1 * number2;
  
  /* Open Function Use - Divide Numbers */
  function divide(Number1, number2) {
    return Number1 / number2;
  }
  
  /* ARRAY METHODS - Functional Programming */
  /* Output Source Array */
  let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  
  /* Output Odds Only Array */
  document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);
  
  /* Output Evens Only Array */
  document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
  
  /* Output Sum of Org. Array */
  let sumOfArray = numbersArray.reduce((sum, number) => sum + number);
  console.log(sumOfArray);
  
  /* Output Multiplied by 2 Array */
  let multipliedByTwo = numbersArray.map(number => number * 2);
  console.log(multipliedByTwo);
  
  /* Output Sum of Multiplied by 2 Array */
  let sumOfMultipliedByTwo = multipliedByTwo.reduce((sum, number) => sum + number);
  console.log(sumOfMultipliedByTwo);
  
  