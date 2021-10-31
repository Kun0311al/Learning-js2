let weather = {
        "apiKey": "23f16c74515bbcc07c5031e4acc310c1",
        fetchWeather: function(city) {
            fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
        },
        displayWeather: function(data) {
            const {name} = data;
            const {icon ,description} = data.weather[0];
            const {temp ,humidity} = data.main;
            const {speed} = data.wind;
            console.log(name,icon,description,temp,humidity,speed);
            document.querySelector(".city").innerHTML = `weather in ${name}`;
            document.querySelector(".temp").innerHTML = `${temp}°C`;
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            document.querySelector(".discription").innerHTML = description;
            document.querySelector(".humidity").innerHTML = `Humidity : ${humidity}%`;
            document.querySelector(".wind").innerHTML = `wind Speed : ${speed} km/h`;
            },
        search: function(){
            this.fetchWeather(document.querySelector(".search-bar").value);
        }
    };
let input = document.getElementsByClassName("search-bar").value;
document.querySelector(".getData").addEventListener("click",function(){
    weather.search();
})

