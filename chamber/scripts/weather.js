// DERIVED FROM VIDEO EXAMPLES
// SELECT HTML ELEMENTS IN THE DOCUMENT
// ---------- Current Weather
const temperature = document.querySelector('#temperature');
const graphic = document.querySelector('#graphic');
const description = document.querySelector('#description');
const tempHigh = document.querySelector('#tempHigh');
const tempLow = document.querySelector('#tempLow');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const forecast = document.querySelector('#forecast');

// ********** CREATE REQUIRED VARIABLES FOR THE URL
const myKey = "498853e6f84ebc89b9bed65bfa5b177e";
const myKeyForecast = "fe84923e86ff3cd59d1f309606b6493b";
// ---------- 33.352804134817404, -111.78901263627377 - Gilbert, Arizona
const myLat = "33.352804134817404";
const myLon = "-111.78901263627377";
// CONSTRUCT A FULL PATH USING TEMPLATE LITERALS
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKeyForecast}&units=imperial`;
// ********** TRY TO GRAB THE CURRENT WEATHER DATA
async function apiFetchCurrent() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayCurrentResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
// ********** DISPLAY THE JSON DATA ONTO MY WEB PAGE
function displayCurrentResults(data) {
    temperature.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    graphic.setAttribute('src', iconsrc);
    graphic.setAttribute('alt', data.weather[0].description);
    description.innerHTML = data.weather[0].description;
    tempHigh.innerHTML = `High: ${Math.round(data.main.temp_max)}&deg;F`;
    tempLow.innerHTML = `Low: ${Math.round(data.main.temp_min)}&deg;F`;
    humidity.innerHTML = `Humidity: ${Math.round(data.main.humidity)}%`;
    const sunriseDate = new Date(data.sys.sunrise * 1000);
    sunrise.innerHTML = `Sunrise: ${sunriseDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
    const sunsetDate = new Date(data.sys.sunset * 1000);
    sunset.innerHTML = `Sunset: ${sunsetDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
}

// ********** FORECAST
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;
// ----- const urlForecast = `https://api.open-meteo.com/v1/forecast?latitude=33.3528&longitude=-111.789&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,weather_code&timezone=America%2FDenver&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`;
async function apiFetchForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const dataForecast = await response.json();
            // console.log(dataForecast);
            displayForecastResults(dataForecast);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
// ********** DISPLAY THE JSON DATA ONTO MY WEB PAGE ----- ${Math.round(data.main.temp)}&deg;F
function displayForecastResults(data) {
    const dailyTemps = {};
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dayKey = date.toISOString().split('T')[0];
        if (!dailyTemps[dayKey]) {
            dailyTemps[dayKey] = {
                date: date,
                high: item.main.temp_max,
                low: item.main.temp_min,
                description: item.weather[0].description,
                icon: item.weather[0].icon
            };
        } else {
            // keep the highest temperature for the key
            if (item.main.temp_max > dailyTemps[dayKey].high) dailyTemps[dayKey].high = item.main.temp_max;
            if (item.main.temp_min < dailyTemps[dayKey].low) dailyTemps[dayKey].low = item.main.temp_min;
        }
    });
    // show first 3 days
    let htmlForecast = '';
    Object.values(dailyTemps).slice(0, 3).forEach((day, index) => {
        const weekday = index === 0 ? "Today" : day.date.toLocaleDateString('en-US', { weekday: 'long' });
        const dateStr = day.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

        const iconUrl = `https://openweathermap.org/img/wn/${day.icon}@2x.png`;
        htmlForecast += `
        <div class="forecast-day">
          <img src="${iconUrl}" alt="${day.description}" class="weather-icon">
          
          <div class="day-info">
            <div class="day-name">${weekday}</div>
            <div class="description">${day.description}</div>
          </div>
          
          <div class="temp-range">
            <div class="high">High: ${day.high.toFixed(1)}°F</div>
            <div class="low">Low: ${day.low.toFixed(1)}°F</div>
          </div>
        </div>
      `;
    });
    // console.log(dailyTemps);
    forecast.innerHTML = htmlForecast;
}

apiFetchCurrent();
apiFetchForecast();