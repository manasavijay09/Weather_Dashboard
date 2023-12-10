
var currentcity = document.getElementsByClassName('current-city');
var fivedayWeather = document.getElementsByClassName('five-day-forecast');
var button = document.getElementsByClassName('Search_Btn');
var cityEl = document.getElementById('search');
var srchBtn = document.getElementById('srch_btn');

var myApiKey ="e1083fdefbd4e667c6efe2e8e7398d90"

srchBtn.addEventListener("click", srchHandler);

function  displayWeather(city, data){
    //tbc
}
function  fetchWeatherFromOpenWeathermap(city,){
    //tbc
    
   //
  // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
   
    let weathertForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${myApiKey}`;

    fetch(weathertForecastUrl)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log("data= ", data);
       displayWeather(city,data)
    })
    .catch(function (error) {
        console.error('error');

    })
}


function currentWeather(city) {
    //
    let geoCodingUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=imperial`;

    fetch(geoCodingUrl)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
           
                console.log("data= ", data);
            var currentCityEl=document.querySelector(".current-city")
            var currentForecastData=`  <div><span current-city> 
            ${data.name}</span><span></span></div>
            <div>Temp: <span>${data.main.temp}</span><sup>0</sup>F<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></div>
            <div>wind: <span>${data.wind.speed}</span>mph</div>
            <div>Humidity: <span>${data.main.humidity}</span>%</div>`
            currentCityEl.innerHTML = currentForecastData
        })
        .catch(function (error) {
            console.error('error',error);

        })
}

function srchHandler() {
    let city = cityEl.value.trim();
    console.log("city= ", city);

    currentWeather(city);
    fetchWeatherFromOpenWeathermap(city)
}