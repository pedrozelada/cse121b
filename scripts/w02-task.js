/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Pedro Zelada';
const currentYear = new Date().getFullYear();;
const profilePicture = 'images/profilePedro.png';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}` );



/* Step 5 - Array */
let fav_food = ['encebollado', 'hamburger', 'pizza', 'chicken', 'pasta', 'seafood'];
foodElement.innerHTML = fav_food;
let new_fod = 'potate chips';
fav_food.push(new_fod);
foodElement.innerHTML += `<br>${fav_food}`;
fav_food.shift();
foodElement.innerHTML += `<br>${fav_food}`;
fav_food.pop();
foodElement.innerHTML += `<br>${fav_food}`;

