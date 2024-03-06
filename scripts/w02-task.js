/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

// About Me

/* Step 2 - Variables */
let fullName = 'Otu Godwin';
console.log(`Full Name: ${fullName}`);

const currentYear = new Date().getFullYear(); // Get the current year
console.log(`Year: ${currentYear}`);

let profilePicture = 'image/realmen.png';
console.log(`Picture: ${profilePicture}`);

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#profile-picture');

/* Step 4 - Adding Content */
nameElement.innerHTML = `${fullName}`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);

/* Step 5 - Array */
const favFoods = ['Pizza', 'Sushi', 'Burger']; // Assume favFoods is an array
const foodElement = document.getElementById('foods');
foodElement.innerHTML += `
${favFoods.join('')}`; // Display each favorite food on a new line
