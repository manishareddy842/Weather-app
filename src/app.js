function displayForecastWeatherTemp(){
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

function showTemperature(response) {
            console.log(response);
           let anything= document.querySelector(".place")
           let temperatureElement=document.querySelector("#temperature")
           let humidityElement=document.querySelector("#humidity")
           let windElement=document.querySelector("#wind")
           let descriptionElement=  document.querySelector("#of")
           anything.innerHTML = response.data.name;
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
        }
          
        let apiKey = "eb5b124d80c197ea4ca7358f030ee172";
            let input = document.querySelector("#city-Input").value;
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${input}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(showTemperature);
            displayForecastWeatherTemp();
          
          let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let latest = new Date();
        let date = latest.getDate();
        let time = latest.getTime();
        let hour = latest.getHours();
        let minutes = latest.getMinutes();
        let day = days[latest.getDay()];
        let then = document.querySelector("#day");
        then.innerHTML = `${day} ${hour} ${minutes}`
function changeToFarenhite(event){
    event.preventDefault()
let temperatureElement=document.querySelector("#temperature") 
let farenhiteTemp=(temperatureElement.innerHTML * 9/5) + 32;
temperatureElement.innerHTML=Math.round(farenhiteTemp);
}
let tempChange=document.querySelector("#farenhite")
tempChange.addEventListener("click",changeToFarenhite)
 let celsiusLink=null;

 function changeToCelsius(event){
event.preventDefault()
let temperatureElement=document.querySelector("#temperature")
temperatureElement.innerHTML=celsius;
}
let tempeChange=document.querySelector("#celsius")
tempeChange.addEventListener("click",changeToCelsius)
    