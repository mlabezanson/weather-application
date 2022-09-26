// Code to update Date & Time
function formatWeekday() {
  let dayIndex = weekdays[now.getDay()];
  return dayIndex;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();

  return weekdays[day];
}

function formatForecastDate(timestamp) {
  let date = new Date(timestamp * 1000);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${month}/${day}`;
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#future-forecast");
  let forecastHTML = `<div class="row future-forecast">`;
  //celciusForecastHigh = Math.round(
  //   response.data.list[1].main.temp_max
  // );
  // celciusTemperatureForecastLow = Math.round(
  //   response.data.list[1].main.temp_min
  // );
  let forecastHigh = document.querySelector("#forecast-high");
  let forecastLow = document.querySelector("#forecast-low");

  //celciusForecastHigh = forecastHigh.innerHTML;

  let forecastDayNumber = [
    `${now.getDay() + 1}`,
    `${now.getDay() + 2}`,
    `${now.getDay() + 3}`,
    `${now.getDay() + 4}`,
    `${now.getDay() + 5}`,
  ];

  if (forecastDayNumber[0] > 6) {
    forecastDayNumber[0] = forecastDayNumber[0] - 7;
  }
  if (forecastDayNumber[1] > 6) {
    forecastDayNumber[1] = forecastDayNumber[1] - 7;
  }
  if (forecastDayNumber[2] > 6) {
    forecastDayNumber[2] = forecastDayNumber[2] - 7;
  }
  if (forecastDayNumber[3] > 6) {
    forecastDayNumber[3] = forecastDayNumber[3] - 7;
  }
  if (forecastDayNumber[4] > 6) {
    forecastDayNumber[4] = forecastDayNumber[4] - 7;
  }

  let dateArray = [
    new Date(response.data.daily[1].dt * 1000),
    new Date(response.data.daily[2].dt * 1000),
    new Date(response.data.daily[3].dt * 1000),
    new Date(response.data.daily[4].dt * 1000),
    new Date(response.data.daily[5].dt * 1000),
  ];

  // let forecastDay =

  let forecast = response.data.daily;
  console.log(forecast);
  // [
  //   [
  //     `${weekdays[forecastDayNumber[0]]}`,
  //     `${dateArray[0].getMonth() + 1}/${dateArray[0].getDate()}`,
  //     `${Math.round(response.data.daily[1].temp.max)} °C`,
  //     `${Math.round(response.data.daily[1].temp.min)} °C`,
  //     `http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`,
  //   ],
  //   [
  //     `${weekdays[forecastDayNumber[1]]}`,
  //     `${dateArray[1].getMonth() + 1}/${dateArray[1].getDate()}`,
  //     `${Math.round(response.data.daily[2].temp.max)} °C`,
  //     `${Math.round(response.data.daily[2].temp.min)} °C`,
  //     `http://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`,
  //   ],
  //   [
  //     `${weekdays[forecastDayNumber[2]]}`,
  //     `${dateArray[2].getMonth() + 1}/${dateArray[2].getDate()}`,
  //     `${Math.round(response.data.daily[3].temp.max)} °C`,
  //     `${Math.round(response.data.daily[3].temp.min)} °C`,
  //     `http://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`,
  //   ],
  //   [
  //     `${weekdays[forecastDayNumber[3]]}`,
  //     `${dateArray[3].getMonth() + 1}/${dateArray[3].getDate()}`,
  //     `${Math.round(response.data.daily[4].temp.max)} °C`,
  //     `${Math.round(response.data.daily[4].temp.min)} °C`,
  //     `http://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`,
  //   ],
  //   [
  //     `${weekdays[forecastDayNumber[4]]}`,
  //     `${dateArray[4].getMonth() + 1}/${dateArray[4].getDate()}`,
  //     `${Math.round(response.data.daily[5].temp.max)} °C`,
  //     `${Math.round(response.data.daily[5].temp.min)} °C`,
  //     `http://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`,
  //   ],
  // ];

  forecast.forEach(function (forecastDay, index) {
    if (index > 0 && index < 6) {
      forecastHTML =
        forecastHTML +
        `<div class="col">
            <div
              class="future-forecast-day border border-dark shadow rounded"
              >
              <div class="day" id="forecast-day">${formatDay(
                forecastDay.dt
              )}</div>
              <div class="date" id="forecast-date">${formatForecastDate(
                forecastDay.dt
              )}</div>
              <span class="high-low"
              ><span class="high" id="forecast-high">${Math.round(
                forecastDay.temp.max
              )}</span> /
              <span class="low" id="forecast-low">${Math.round(
                forecastDay.temp.min
              )}</span
              ></span>
              <div class="forecast-emoji">
                <img
                  src="http://openweathermap.org/img/wn/${
                    forecastDay.weather[0].icon
                  }@2x.png"
                  alt=""
                  class="forecast-icon"
                  id="forecast-icon"
                  />
                  </div>
                  </div>`;

      forecastHTML = forecastHTML + `</div>`;
      forecastElement.innerHTML = forecastHTML;
    }
  });
}

function formatDate() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthIndex = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();

  return `${monthIndex} ${date}, ${year}`;
}

function formatTime() {
  let hour = now.getHours();
  let minute = now.getMinutes();

  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (minute === 0) {
    minute = `00`;
  }

  if (hour > 12) {
    return `${hour - 12}:${minute} PM`;
  } else {
    return `${hour}:${minute} AM`;
  }
}

function switchUnitToFahrenheit(event) {
  event.preventDefault();

  document.querySelector("#current-temperature").innerHTML = `${Math.round(
    (celciusTemperature * 9) / 5 + 32
  )}`;

  document.querySelector("#feels-like").innerHTML = `${Math.round(
    (celciusTemperatureFeelsLike * 9) / 5 + 32
  )} °F`;

  document.querySelector("#high").innerHTML = `${Math.round(
    (celciusTemperatureHigh * 9) / 5 + 32
  )} °F`;

  document.querySelector("#low").innerHTML = `${Math.round(
    (celciusTemperatureLow * 9) / 5 + 32
  )} °F`;

  document.querySelector("#forecast-high").innerHTML = `°F`;

  document.querySelector("#forecast-low").innerHTML = `°F`;

  // let forecastHigh = document.querySelector("#forecast-high");
  // let fahrenheitForecastHigh = Math.round((celciusForecastHigh * 9) / 5 + 32);
  // forecastHigh.innerHTML = `${fahrenheitForecastHigh} °F`;

  //let temperatureForecastOneLow = document.querySelector("#forecast-one-low");
  // let fahrenheitForecastOneLow = Math.round(
  //   (celciusTemperatureOneLow * 9) / 5 + 32
  // );
  // temperatureForecastOneLow.innerHTML = `${fahrenheitForecastOneLow} °F`;

  // let temperatureForecastTwoHigh = document.querySelector("#forecast-two-high");
  // let fahrenheitForecastTwoHigh = Math.round(
  //   (celciusTemperatureTwoHigh * 9) / 5 + 32
  // );
  // temperatureForecastTwoHigh.innerHTML = `${fahrenheitForecastTwoHigh} °F`;
  // let temperatureForecastTwoLow = document.querySelector("#forecast-two-low");
  // let fahrenheitForecastTwoLow = Math.round(
  //   (celciusTemperatureTwoLow * 9) / 5 + 32
  // );
  // temperatureForecastTwoLow.innerHTML = `${fahrenheitForecastTwoLow} °F`;

  // let temperatureForecastThreeHigh = document.querySelector(
  //   "#forecast-three-high"
  // );
  // let fahrenheitForecastThreeHigh = Math.round(
  //   (celciusTemperatureThreeHigh * 9) / 5 + 32
  // );
  // temperatureForecastThreeHigh.innerHTML = `${fahrenheitForecastThreeHigh} °F`;
  // let temperatureForecastThreeLow = document.querySelector(
  //   "#forecast-three-low"
  // );
  // let fahrenheitForecastThreeLow = Math.round(
  //   (celciusTemperatureThreeLow * 9) / 5 + 32
  // );
  // temperatureForecastThreeLow.innerHTML = `${fahrenheitForecastThreeLow} °F`;

  // let temperatureForecastFourHigh = document.querySelector(
  //   "#forecast-four-high"
  // );
  // let fahrenheitForecastFourHigh = Math.round(
  //   (celciusTemperatureFourHigh * 9) / 5 + 32
  // );
  // temperatureForecastFourHigh.innerHTML = `${fahrenheitForecastFourHigh} °F`;
  // let temperatureForecastFourLow = document.querySelector("#forecast-four-low");
  // let fahrenheitForecastFourLow = Math.round(
  //   (celciusTemperatureFourLow * 9) / 5 + 32
  // );
  // temperatureForecastFourLow.innerHTML = `${fahrenheitForecastFourLow} °F`;

  // let temperatureForecastFiveHigh = document.querySelector(
  //   "#forecast-five-high"
  // );
  // let fahrenheitForecastFiveHigh = Math.round(
  //   (celciusTemperatureFiveHigh * 9) / 5 + 32
  // );
  // temperatureForecastFiveHigh.innerHTML = `${fahrenheitForecastFiveHigh} °F`;
  // let temperatureForecastFiveLow = document.querySelector("#forecast-five-low");
  // let fahrenheitForecastFiveLow = Math.round(
  //   (celciusTemperatureFiveLow * 9) / 5 + 32
  // );
  // temperatureForecastFiveLow.innerHTML = `${fahrenheitForecastFiveLow} °F`;

  celciusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
}

function switchUnitToCelcius(event) {
  event.preventDefault();

  document.querySelector("#current-temperature").innerHTML = `${Math.round(
    celciusTemperature
  )}`;

  document.querySelector("#feels-like").innerHTML = `${Math.round(
    celciusTemperatureFeelsLike
  )} °C`;

  document.querySelector("#high").innerHTML = `${Math.round(
    celciusTemperatureHigh
  )} °C`;

  document.querySelector("#low").innerHTML = `${Math.round(
    celciusTemperatureLow
  )} °C`;

  document.querySelector("#forecast-high").innerHTML = `°C`;

  document.querySelector("#forecast-low").innerHTML = `°C`;

  // let temperatureForecastOneHigh = document.querySelector("#forecast-one-high");
  // temperatureForecastOneHigh.innerHTML = `${Math.round(
  //   celciusTemperatureOneHigh
  // )} °C`;
  // let temperatureForecastOneLow = document.querySelector("#forecast-one-low");
  // temperatureForecastOneLow.innerHTML = `${Math.round(
  //   celciusTemperatureOneLow
  // )} °C`;

  // let temperatureForecastTwoHigh = document.querySelector("#forecast-two-high");
  // temperatureForecastTwoHigh.innerHTML = `${Math.round(
  //   celciusTemperatureTwoHigh
  // )} °C`;
  // let temperatureForecastTwoLow = document.querySelector("#forecast-two-low");
  // temperatureForecastTwoLow.innerHTML = `${Math.round(
  //   celciusTemperatureTwoLow
  // )} °C`;

  // let temperatureForecastThreeHigh = document.querySelector(
  //   "#forecast-three-high"
  // );
  // temperatureForecastThreeHigh.innerHTML = `${Math.round(
  //   celciusTemperatureThreeHigh
  // )} °C`;
  // let temperatureForecastThreeLow = document.querySelector(
  //   "#forecast-three-low"
  // );
  // temperatureForecastThreeLow.innerHTML = `${Math.round(
  //   celciusTemperatureThreeLow
  // )} °C`;

  // let temperatureForecastFourHigh = document.querySelector(
  //   "#forecast-four-high"
  // );
  // temperatureForecastFourHigh.innerHTML = `${Math.round(
  //   celciusTemperatureFourHigh
  // )} °C`;
  // let temperatureForecastFourLow = document.querySelector("#forecast-four-low");
  // temperatureForecastFourLow.innerHTML = `${Math.round(
  //   celciusTemperatureFourLow
  // )} °C`;

  // let temperatureForecastFiveHigh = document.querySelector(
  //   "#forecast-five-high"
  // );
  // temperatureForecastFiveHigh.innerHTML = `${Math.round(
  //   celciusTemperatureFiveHigh
  // )} °C`;
  // let temperatureForecastFiveLow = document.querySelector("#forecast-five-low");
  // temperatureForecastFiveLow.innerHTML = `${Math.round(
  //   celciusTemperatureFiveLow
  // )} °C`;

  celciusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function newCitySearch(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#current-city");
  let cityInput = document.querySelector("#city-search-input");
  cityElement.innerHTML = cityInput.value;
  let apiKey = "59f81d670602d254d31607e29d1fe6d5";
  let unit = "metric";
  let apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${unit}`;
  axios.get(`${apiUrlWeather}&appid=${apiKey}`).then(displayTemperature);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let unit = "metric";
  let apiKey = "6f578b96aa9505bcce148ac22cb85794";
  let apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
  axios.get(`${apiUrlWeather}`).then(displayTemperature);
}

function getForecast(coordinates) {
  let apiKey = "6f578b96aa9505bcce148ac22cb85794";
  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude={currently,hourly,minutely,alerts}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrlForecast}`).then(displayForecast);
}

// function showForecast(response) {

// celciusTemperatureTwoHigh = Math.round(response.data.list[1].main.temp_max);
// celciusTemperatureTwoLow = Math.round(response.data.list[1].main.temp_min);
// celciusTemperatureThreeHigh = Math.round(response.data.list[2].main.temp_max);
// celciusTemperatureThreeLow = Math.round(response.data.list[2].main.temp_min);
// celciusTemperatureFourHigh = Math.round(response.data.list[3].main.temp_max);
// celciusTemperatureFourLow = Math.round(response.data.list[3].main.temp_min);
// celciusTemperatureFiveHigh = Math.round(response.data.list[4].main.temp_max);
// celciusTemperatureFiveLow = Math.round(response.data.list[4].main.temp_min);
//}

function displayTemperature(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#feels-like").innerHTML = `${Math.round(
    response.data.main.feels_like
  )} °C`;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#high").innerHTML = `${Math.round(
    response.data.main.temp_max
  )} °C`;
  document.querySelector("#low").innerHTML = `${Math.round(
    response.data.main.temp_min
  )} °C`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity: ${response.data.main.humidity}%`;
  document.querySelector("#wind").innerHTML = `Wind Speed: ${Math.round(
    response.data.wind.speed
  )} km/h`;
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  celciusTemperature = response.data.main.temp;
  celciusTemperatureFeelsLike = response.data.main.feels_like;
  celciusTemperatureHigh = response.data.main.temp_max;
  celciusTemperatureLow = response.data.main.temp_min;

  getForecast(response.data.coord);
}

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let now = new Date();
let dayElement = document.querySelector("#day");
let dateElement = document.querySelector("#month-date-year");
let timeElement = document.querySelector("#time");

let button = document.querySelector("#current-city-button");
button.addEventListener("click", getCurrentPosition);

let citySearchForm = document.querySelector("#city-search-form");
citySearchForm.addEventListener("submit", newCitySearch);

let celciusTemperature,
  celciusTemperatureFeelsLike,
  celciusTemperatureHigh,
  celciusTemperatureLow,
  celciusForecastHigh,
  celciusForecastLow = null;
// let celciusTemperatureTwoHigh = null;
// let celciusTemperatureTwoLow = null;
// let celciusTemperatureThreeHigh = null;
// let celciusTemperatureThreeLow = null;
// let celciusTemperatureFourHigh = null;
// let celciusTemperatureFourLow = null;
// let celciusTemperatureFiveHigh = null;
// let celciusTemperatureFiveLow = null;

let fahrenheitLink = document.querySelector("#secondary-unit");
fahrenheitLink.addEventListener("click", switchUnitToFahrenheit);

let celciusLink = document.querySelector("#primary-unit");
celciusLink.addEventListener("click", switchUnitToCelcius);

dayElement.innerHTML = formatWeekday(now);
dateElement.innerHTML = formatDate(now);
timeElement.innerHTML = formatTime(now);

navigator.geolocation.getCurrentPosition(showPosition);
