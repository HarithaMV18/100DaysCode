const apiKey="8dc8e720eaafd3f2ee86020b60cb2234";
const getWeatherBtn=document.getElementById("getWeather");
const getWeatherInput=document.getElementById("input");
const weather_details=document.querySelector(".weather-details")
const getWeatherData=async(city)=>{
    try {
        const weatherDetails= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`).then((response)=>{return response.json()}).catch((error)=>{
            console.log(error)
        })
        console.log(weatherDetails);
        weather_details.style.display="block";
        const humidity=weatherDetails.main.humidity;
        const temperature=Math.round(weatherDetails.main.temp)+'°C';
        const speed=Math.round(weatherDetails.wind.speed)+'m/s';
        const icon=`http://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}.png`;
        const desc=weatherDetails.weather[0].description;
        weather_details.innerHTML=` <img src='${icon}' alt="">
        <h4>${temperature}</h4>
        <p>${desc}</p>
        <div class="properties">
         
            <div class="weather-props">Humidity: ${humidity}%</div>
            <div class="weather-props">wind speed: ${speed}</div>
        </div>`
        
    } catch (error) {
        weather_details.innerHTML="No city found"
    }
   

}
const getWeatherDetails=(e)=>{
    e.preventDefault();
    const city=getWeatherInput.value;
    getWeatherData(city);
}
getWeatherBtn.addEventListener("click",function (e){getWeatherDetails(e)})
