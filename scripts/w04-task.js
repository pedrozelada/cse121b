/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Pedro Zelada',
    photo: 'images/profilePedro.png',
    favoriteFoods: ['Encebollado', 'Hamburger', 'Pizza', 'Chicken', 'Pasta', 'Seafood'],
    hobbies: ['Play violin', 'Reading', 'Movies'],
    placesLived: [],

};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
    place: "Bogota",
    length: "1 month",
    }
)
myProfile.placesLived.push(
    {
    place: "Guayaquil",
    length: "1 year",
    }
)
myProfile.placesLived.push(
    {
    place: "Cuenca",
    length: "3 months",
    }
)
myProfile.placesLived.push(
    {
    place: "Moscow",
    length: "2 years",
    }
)


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').innerHTML = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});



