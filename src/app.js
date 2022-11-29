let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let latest = new Date();
        let date = latest.getDate();
        let time = latest.getTime();
        let hour = latest.getHours();
        let minutes = latest.getMinutes();
        let day = days[latest.getDay()];
        let then = document.querySelector("#day");
        then.innerHTML = `${day} ${hour} ${minutes}`

function displayForecast(){
        let forecastElement=document.querySelector("#forecast") 
let forecast=`<div class="row">`
let daysin=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
daysin.forEach(function(day) {
forecast=forecast +`
        <div class="col-2">
            <div class ="weather-forecast" id="forecast">${day}</div>
            <div><img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"> </div>
            <div class="forecast-weather-temp"> 
                <span class="max">18</span>
                <span class="min">10</span>
            </div>

    </div>`;

});

forecast=forecast+`</div>`;
    forecastElement.innerHTML=forecast;
    console.log(forecast)
}
function getForecast(coordinates){
console.log(coordinates)
let apiKey= "eb5b124d80c197ea4ca7358f030ee172";
let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayForecast)
}
function showTemperature(response) {
            console.log(response);
           let cityElement= document.querySelector("#place")
           let temperatureElement=document.querySelector("#temperature")
           let humidityElement=document.querySelector("#humidity")
           let windElement=document.querySelector("#wind")
           let descriptionElement=  document.querySelector("#of")
           cityElement.innerHTML = response.data.name;
           celsius = response.data.main.temp ;
           temperatureElement.innerHTML=celsius;
           humidityElement.innerHTML = response.data.main.humidity;
           windElement.innerHTML = Math.round(response.data.wind.speed);
          descriptionElement.innerHTML = response.data.weather[0].main;
            let iconElement=document.querySelector("#icon");
            iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

getForecast(response.data.coord);
        }

function search(city) {

  let apiKey = "eb5b124d80c197ea4ca7358f030ee172";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
 displayForecast();
}

function handlesubmit(event){
    event.preventDefault()
 let cityInputElement = document.querySelector("#city-Input"); 
 search(cityInputElement.value)  
  
}
let form=document.querySelector("#form")
form.addEventListener("submit",handlesubmit)

function changeToFarenhite(event){
    event.preventDefault()
let temperatureElement=document.querySelector("#temperature") 
let farenhiteTemp=(celsius* 9/5) + 32;
temperatureElement.innerHTML=Math.round(farenhiteTemp);
}
let tempChange=document.querySelector("#farenhite")
tempChange.addEventListener("click",changeToFarenhite)
 let celsius=null;

 function changeToCelsius(event){
event.preventDefault()
let temperatureElement=document.querySelector("#temperature")
temperatureElement.innerHTML=celsius;
}
let tempeChange=document.querySelector("#celsius")
tempeChange.addEventListener("click",changeToCelsius)
  search ("London");
