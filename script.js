let now = new Date();
console.log(now);

let options = { hour12: true, timeStyle: 'short'};
let timeString = now.toLocaleTimeString('en-Us', options);
console.log(timeString);


let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// let day = days[currentTime.get]

let day = days[now.getDay()];
let hours = timeString;
let minutes = now.getMinutes();

let currentDateTime = document.querySelector("#currentDateTime");

currentDateTime.innerHTML = `${day} ${hours}:${minutes}`;








// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let weather = {
//     paris: {                                         
//         temp: 19.7,                            
//         humidity: 80
//     },
//     tokyo: {                             
//         temp: 17.3,
//         humidity: 50
//     },
//     lisbon: {
//         temp: 30.2,
//         humidity: 20
//     },
//     "san francisco": {
//         temp: 20.9,
//         humidity: 100
//     },
//     oslo: {
//         temp: -5,
//         humidity: 20
//     }
// };

// // function enterCity() {

// let city = prompt('Enter a city');
// city = city.toLowerCase();
// if(weather[city] !== undefined) {
//     let temperature = weather[city].temp;
//     let humidity = weather[city].humidity;
//     let celsiusTemperature = Math.round(temperature);
//     let farenheitTemperature = Math.round((temperature * 9)/5+32 );

//     alert(`It is currently ${celsiusTemperature}°C (${farenheitTemperature})°F in ${city} with a humidity of  ${humidity}%.`);
// } else {
//     alert(`Sorry, we don't know the weather for this ${city}, try going to https://www.google.com/search?q=weather+sydney.`);
// }

// enterCity();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let changeButton = document.querySelector("button");
// changeButton.addEventListener("click", changeCity);

// function changeCity() {
//     let city = prompt("What city do you live in?");
//     let temperature = prompt("What temperature is it?");
//     let heading = document.querySelector("h1");
//     if (temperature < 0) {
//         heading.innerHTML = "😔<br />Currently " + temperature + 
//         "°C in " + city;
//     } else {
//         heading.innerHTML = "😊<br />Currently " + temperature + 
//         "°C in " + city; 
//     }
//     }



