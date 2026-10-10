function getWeather() {

    let city = document.getElementById("city").value;

    fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + city)
    .then(r => r.json())
    .then(location => {

        if (!location.results) {
            alert("City not found");
            return;
        }

        let x = location.results[0];

        fetch("https://api.open-meteo.com/v1/forecast?latitude="
            + x.latitude
            + "&longitude=" + x.longitude
            + "&current=temperature_2m,relative_humidity_2m,wind_speed_10m")
        .then(r => r.json())
        .then(data => {

            document.getElementById("place").innerHTML =
                "📍 " + x.name;

            document.getElementById("temp").innerHTML =
                data.current.temperature_2m + "°C";

            document.getElementById("humidity").innerHTML =
                data.current.relative_humidity_2m;

            document.getElementById("wind").innerHTML =
                data.current.wind_speed_10m;
        });
    })
    .catch(() => alert("Unable to get weather"));
}