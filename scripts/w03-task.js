/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let add1 = parseFloat(document.getElementById('add1').value);
    let add2 = parseFloat(document.getElementById('add2').value);
    document.getElementById('sum').value = add(add1, add2);
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract  = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let add1 = parseFloat(document.getElementById('subtract1').value);
    let add2 = parseFloat(document.getElementById('subtract2').value);
    document.getElementById('difference').value = subtract(add1, add2);
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply  = (number1, number2) => number1 * number2; 
    

const multiplyNumbers =  () => {
    let add1 = parseFloat(document.getElementById('factor1').value);
    let add2 = parseFloat(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(add1, add2);
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
    return number1 / number2;
}

function divideNumbers () {
    let add1 = parseFloat(document.getElementById('dividend').value);
    let add2 = parseFloat(document.getElementById('divisor').value);
    document.getElementById('quotient').value = divide(add1, add2).toFixed(2);
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function getTotal () {
    let subtotal = parseFloat(document.getElementById('subtotal').value);

    if(document.getElementById('member').checked) {
        subtotal = subtotal - subtotal * 0.2;
    } 
    document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
}
document.getElementById('getTotal').addEventListener('click', getTotal);


/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById('array').textContent = numbersArray;

/* Output Odds Only Array */
document.getElementById('odds').textContent = numbersArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */
document.getElementById('evens').textContent = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.getElementById('sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.getElementById('multiplied').textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
let array2 = numbersArray.map(number => number * 2);
let arraysum = array2.reduce((sum, number) => sum + number);

document.getElementById('sumOfMultiplied').textContent = arraysum;
