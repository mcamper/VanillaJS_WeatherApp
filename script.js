let weather = {
    paris: {
        temp: 19.7,
        humidity: 80
    },
    tokyo: {
        temp: 17.3,
        humidity: 50
    },
    lisbon: {
        temp: 30.2,
        humidity: 20
    },
    "san francisco": {
        temp: 20.9,
        humidity: 100
    },
    oslo: {
        temp: -5,
        humidity: 20
    }
};












function changeCity() {
    let city = prompt("What city do you live in?");
    let temperature = prompt("What temperature is it?");
    let heading = document.querySelector("h1");
    if (temperature < 0) {
        heading.innerHTML = "😔<br />Currently " + temperature + 
        "°C in " + city;
    } else {
        heading.innerHTML = "😊<br />Currently " + temperature + 
        "°C in " + city; 
    }
    }

let changeButton = document.querySelector("button");
changeButton.addEventListener("click", changeCity);

