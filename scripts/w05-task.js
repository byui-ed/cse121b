/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");

    // Add temple elements here

    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  const data = await response.json();
  templeList = data;
};

/* reset Function */
const reset = () => {
  // Code to reset the temple elements
};

/* filterTemples Function */
const filterTemples = (selectedValue) => {
  templeList.forEach((temple) => {
    // Add code to filter temples based on the selectedValue
  });
};

/* Call the functions */
getTemples();
reset();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  filterTemples(selectedValue);
});