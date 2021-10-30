let weather = {
    "apiKey": "23f16c74515bbcc07c5031e4acc310c1",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apiKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data) {

    }
}