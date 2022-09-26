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

  let forecast = response.data.daily;
  console.log(forecast);

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
              )}°</span> /
              <span class="low" id="forecast-low">${Math.round(
                forecastDay.temp.min
              )}°</span
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
  )} m/s`;
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );

  getForecast(response.data.coord);
}

function restorePlaceholder(event) {
  event.preventDefault;
  let inputValue = document.querySelector("#city-search-input");
  inputValue.value = "";
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
citySearchForm.addEventListener("submit", restorePlaceholder);

dayElement.innerHTML = formatWeekday(now);
dateElement.innerHTML = formatDate(now);
timeElement.innerHTML = formatTime(now);

navigator.geolocation.getCurrentPosition(showPosition);
