
var currentcity = document.getElementsByClassName('current-city');
var fivedayWeather = document.getElementsByClassName('five-day-forecast');
var button = document.getElementsByClassName('Search_Btn');
var cityEl = document.getElementById('search');
var srchBtn = document.getElementById('srch_btn');

var myApiKey = "e1083fdefbd4e667c6efe2e8e7398d90";

srchBtn.addEventListener("click", srchHandler);

function  fetchWeatherFromOpenWeathermap(data){
    //tbc
}

function fetchGeoCoordinates(city) {
    let geoCodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${myApiKey}`;

    fetch(geoCodingUrl)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            if (!data[0]) {
                alert('city not found')
            } else {
                console.log("data= ", data);
                fetchWeatherFromOpenWeathermap(data[0]);
            }
        })
        .catch(function (error) {
            console.error(error);

        })
}

function srchHandler() {
    let city = cityEl.value.trim();
    console.log("city= ", city);

    fetchGeoCoordinates(city);
}