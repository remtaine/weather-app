//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=57c048c9f23d40a5a79648f61d282f79
const searchButton = document.getElementById("search-country");
const textBox = document.getElementById("search-term");
const form = document.querySelector("form");

const country = document.getElementById("country");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const feels_like = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const BLANK = "";
const API_KEY = "57c048c9f23d40a5a79648f61d282f79";
const searchTerm = "London,uk";
// const searchTerm = "ssdf";

const tempUsed = "Fahrenheit";
const openWeather = "https://api.openweathermap.org/data/2.5/weather?q=";

searchButton.addEventListener("click", searchLocation);
// form.addEventListener("submit", searchLocation);

function searchLocation() {
    // console.log(textBox.value);
    // const loc = searchTerm;
    const loc = textBox.value;
    const api_url = openWeather + loc + "&APPID=" + API_KEY;
    fetch(api_url, {mode: 'cors'})
        .then(function(response) {
            return (response.json());
        }).then(function(response) {
            console.log(response);
            console.log(response.name);
            country.textContent = (response.name);

            console.log(response.weather[0].description);
            description.textContent = (response.weather[0].description);

            console.log(response.main.temp);
            temperature.textContent = (response.main.temp) + " " + tempUsed;
            
            console.log(response.main.feels_like);
            feels_like.textContent = "Feels like: " + (response.main.feels_like) + " " + tempUsed;

            console.log(response.main.humidity);
            humidity.textContent = "Humidity: " + (response.main.humidity);

            console.log(response.wind.speed);
            wind.textContent = "Wind: " + (response.wind.speed) + "km/h";
        }).catch(function(error) {
            country.textContent = ("Location not found");
            description.textContent = (BLANK);
            temperature.textContent = (BLANK);
            feels_like.textContent = (BLANK);
            humidity.textContent = (BLANK);
            wind.textContent = (BLANK);
        });
}