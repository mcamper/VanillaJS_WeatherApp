let now = new Date();
console.log(now);

let options = { hour12: true, timeStyle: 'short'};
let timeString = now.toLocaleTimeString('en-Us', options);

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let day = days[now.getDay()];
let hours = timeString;

let currentDateTime = document.querySelector("#currentDateTime");
currentDateTime.innerHTML = `${day} ${hours}`;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Add EventListeners
function search(event){
    event.preventDefault();

    let searchInput = document.querySelector("#search-input");
    let searchCity = document.querySelector("#search-city");
    if(searchInput.value){
        searchCity.innerHTML = `${searchInput.value}`;
        return null;
    }

}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);