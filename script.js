 
let now = new Date();

let options = { hour12: true, timeStyle: 'short'};
let timeString = now.toLocaleTimeString('en-US', options);

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let day = days[now.getDay()];
let hours = timeString;

let currentDateTime = document.querySelector("#currentDateTime");
currentDateTime.innerHTML = `${day} ${hours}`;


function search(event){
    event.preventDefault();

    let searchInput = document.querySelector("#search-input");
    let searchCity = document.querySelector("#search-city");
    if(searchInput.value){
        searchCity.innerHTML = `${searchInput.value}`;
      
   
    let apiKey = "77ao6ba83c370f60fbc94613061ab8t5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=imperial`;
    
   
    axios.get(apiUrl).then(displayTemperature).catch(handleError);

    return null;
    }

}  

function displayTemperature (response) {
    console.log(response.data);

    let currentTemp = Math.round(response.data.temperature.current);
    let temp = document.querySelector("#temp");
    temp.innerHTML = `${currentTemp}`;
 
    let description = response.data.condition.description;
    let weatherDescription = document.querySelector("#weather-description");
    weatherDescription.innerHTML = `${description}`;

    let humidity = response.data.temperature.humidity;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${humidity}%`;

    let windSpeed = Math.round(response.data.wind.speed);
    let windElement = document.querySelector("#wind-speed");
    windElement.innerHTML = `${windSpeed} km/h`;

    let icon = response.data.condition.icon_url;
    let tempIcon = document.querySelector(".temp-icon");
    tempIcon.innerHTML = `<img src="${icon}" alt="${description}" />`;

   
}

function handleError(error) {
    console.error("An error occurred:", error);
    let temp = document.querySelector("#temp");
    temp.innerHTML = `Unable to fetch data. Check the city name!`;
}

 let form = document.querySelector("#search-form");
 form.addEventListener("submit", search); 




// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Test API response
// // let apiKey = "77ao6ba83c370f60fbc94613061ab8t5";
// // let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Sydney&key=${apiKey}&units=imperial`;
// // console.log(apiUrl);
