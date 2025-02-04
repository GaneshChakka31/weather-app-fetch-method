let inputEle = document.getElementById("location-input");
let tempEle = document.getElementById("temp-value");
let locEle = document.getElementById("location");
let pressureEle = document.getElementById("pressure")
let windEle = document.getElementById("wind-speed")
let weatherdescEle = document.getElementById('Weatherdesc');
let btnEle = document.getElementById("btn");
let weatherIconEle = document.getElementById("weather-icon");  

const apikey = 'd97712d130b37eaa93143e58e898fda8';  

btnEle.onclick = function() {
    if (inputEle.value == "") {
        alert("Please enter the city");
    } else {
        let loc = inputEle.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`; 
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data, data.weather[0].main);
                const name = data.name;
                const feels_like = data.main.feels_like;
                const description = data.weather[0].main;
                const iconCode = data.weather[0].icon;  
                const pressure = data.main.pressure;
                const windspeed = data.wind.speed;

                tempEle.innerText = `Temperatute:${Math.floor(feels_like - 273)}°C` ; 
                locEle.innerText = `Location:${name}`;
                weatherdescEle.innerText = `Weather:${description}`;
                pressureEle.innerText =`pressure:${pressure}`;  
                windEle.innerText = `wind-speed:${windspeed}`;

                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;  
                weatherIconEle.src = iconUrl; 
            })
            .catch(() => {
                alert("Please enter a valid city");
            });
            
            inputEle.value = ""; 
    }
};