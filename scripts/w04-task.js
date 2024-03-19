/* Profile Object  */
let myProfile = {
    name: "Otu Godwin",
    favoriteFoods: ["Rice", "Sandwich", "Pizza", "Sushi", "Burger"],
    hobbies: ["Reading", "Coding", "Playing Guitar", "Marshal Art"],
    placesLived: [
        { place: 'Calabar, Nigeria', length: '20 years'}
    ]
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: 'Accra, Ghana',
    length: '7 years'
});

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
let placesList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(place => {
    let item = document.createElement('option');
    item.textContent = `${place.place} for ${place.length}`;
    placesList.appendChild(item);
});