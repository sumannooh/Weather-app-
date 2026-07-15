const apiKey = "b2ba745a456ff9bcccc96780f20a1c1c";

async function getWeather() {

    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("cityName").innerHTML =
            data.name + ", " + data.sys.country;

        document.getElementById("temp").innerHTML =
            Math.round(data.main.temp) + "°C";

        document.getElementById("condition").innerHTML =
            data.weather[0].description;

        document.getElementById("humidity").innerHTML =
            data.main.humidity;

        document.getElementById("wind").innerHTML =
            data.wind.speed;

        document.getElementById("icon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    } catch (error) {

        alert("❌ City not found!");

    }
}
