// Code to update Date & Time
function formatWeekday() {
  let dayIndex = weekdays[now.getDay()];
  return dayIndex;
}

function formatForecastOneDay() {
  let dayOne = now.getDay() + 1;
  if (dayOne > 6) {
    dayOne = dayOne - 7;
  }
  let dayIndex = weekdays[dayOne];

  return dayIndex;
}

function formatForecastTwoDay() {
  let dayTwo = now.getDay() + 2;
  if (dayTwo > 6) {
    dayTwo = dayTwo - 7;
  }
  let dayIndex = weekdays[dayTwo];

  return dayIndex;
}

function formatForecastThreeDay() {
  let dayThree = now.getDay() + 3;
  if (dayThree > 6) {
    dayThree = dayThree - 7;
  }
  let dayIndex = weekdays[dayThree];

  return dayIndex;
}

function formatForecastFourDay() {
  let dayFour = now.getDay() + 4;
  if (dayFour > 6) {
    dayFour = dayFour - 7;
  }
  let dayIndex = weekdays[dayFour];

  return dayIndex;
}

function formatForecastFiveDay() {
  let dayFive = now.getDay() + 5;
  if (dayFive > 6) {
    dayFive = dayFive - 7;
  }
  let dayIndex = weekdays[dayFive];

  return dayIndex;
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

function formatForecastOneDate() {
  let dayOne = new Date();
  dayOne.setDate(new Date().getDate() + 1);
  let dayOneDate = dayOne.getDate();
  let dayOneMonth = dayOne.getMonth() + 1;
  if (dayOneMonth < 10) {
    dayOneMonth = `0${dayOneMonth}`;
  }

  return `${dayOneMonth}/${dayOneDate}`;
}

function formatForecastTwoDate() {
  let dayTwo = new Date();
  dayTwo.setDate(new Date().getDate() + 2);
  let dayTwoDate = dayTwo.getDate();
  let dayTwoMonth = dayTwo.getMonth() + 1;
  if (dayTwoMonth < 10) {
    dayTwoMonth = `0${dayTwoMonth}`;
  }

  return `${dayTwoMonth}/${dayTwoDate}`;
}

function formatForecastThreeDate() {
  let dayThree = new Date();
  dayThree.setDate(new Date().getDate() + 3);
  let dayThreeDate = dayThree.getDate();
  let dayThreeMonth = dayThree.getMonth() + 1;
  if (dayThreeMonth < 10) {
    dayThreeMonth = `0${dayThreeMonth}`;
  }

  return `${dayThreeMonth}/${dayThreeDate}`;
}

function formatForecastFourDate() {
  let dayFour = new Date();
  dayFour.setDate(new Date().getDate() + 4);
  let dayFourDate = dayFour.getDate();
  let dayFourMonth = dayFour.getMonth() + 1;
  if (dayFourMonth < 10) {
    dayFourMonth = `0${dayFourMonth}`;
  }

  return `${dayFourMonth}/${dayFourDate}`;
}

function formatForecastFiveDate() {
  let dayFive = new Date();
  dayFive.setDate(new Date().getDate() + 5);
  let dayFiveDate = dayFive.getDate();
  let dayFiveMonth = dayFive.getMonth() + 1;
  if (dayFiveMonth < 10) {
    dayFiveMonth = `0${dayFiveMonth}`;
  }

  return `${dayFiveMonth}/${dayFiveDate}`;
}

function formatTime() {
  let hour = now.getHours();
  let minute = now.getMinutes();

  if (hour > 12) {
    hour = `${hour - 12}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (minute === 0) {
    minute = `00`;
  }

  if (hour > 12) {
    return `${hour}:${minute} PM`;
  } else {
    return `${hour}:${minute} AM`;
  }
}

function switchUnitToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature");
  let fahrenheitTemperature = Math.round((celciusTemperature * 9) / 5 + 32);
  temperatureElement.innerHTML = `${fahrenheitTemperature}`;

  let temperatureElementFeelsLike = document.querySelector("#feels-like");
  let fahrenheitTemperatureFeelsLike = Math.round(
    (celciusTemperatureFeelsLike * 9) / 5 + 32
  );
  temperatureElementFeelsLike.innerHTML = `${fahrenheitTemperatureFeelsLike} °F`;

  let temperatureElementHigh = document.querySelector("#high");
  let fahrenheitTemperatureHigh = Math.round(
    (celciusTemperatureHigh * 9) / 5 + 32
  );
  temperatureElementHigh.innerHTML = `${fahrenheitTemperatureHigh} °F`;

  let temperatureElementLow = document.querySelector("#low");
  let fahrenheitTemperatureLow = Math.round(
    (celciusTemperatureLow * 9) / 5 + 32
  );
  temperatureElementLow.innerHTML = `${fahrenheitTemperatureLow} °F`;

  let temperatureForecastOneHigh = document.querySelector("#forecast-one-high");
  let fahrenheitForecastOneHigh = Math.round(
    (celciusTemperatureOneHigh * 9) / 5 + 32
  );
  temperatureForecastOneHigh.innerHTML = `${fahrenheitForecastOneHigh} °F`;
  let temperatureForecastOneLow = document.querySelector("#forecast-one-low");
  let fahrenheitForecastOneLow = Math.round(
    (celciusTemperatureOneLow * 9) / 5 + 32
  );
  temperatureForecastOneLow.innerHTML = `${fahrenheitForecastOneLow} °F`;

  let temperatureForecastTwoHigh = document.querySelector("#forecast-two-high");
  let fahrenheitForecastTwoHigh = Math.round(
    (celciusTemperatureTwoHigh * 9) / 5 + 32
  );
  temperatureForecastTwoHigh.innerHTML = `${fahrenheitForecastTwoHigh} °F`;
  let temperatureForecastTwoLow = document.querySelector("#forecast-two-low");
  let fahrenheitForecastTwoLow = Math.round(
    (celciusTemperatureTwoLow * 9) / 5 + 32
  );
  temperatureForecastTwoLow.innerHTML = `${fahrenheitForecastTwoLow} °F`;

  let temperatureForecastThreeHigh = document.querySelector(
    "#forecast-three-high"
  );
  let fahrenheitForecastThreeHigh = Math.round(
    (celciusTemperatureThreeHigh * 9) / 5 + 32
  );
  temperatureForecastThreeHigh.innerHTML = `${fahrenheitForecastThreeHigh} °F`;
  let temperatureForecastThreeLow = document.querySelector(
    "#forecast-three-low"
  );
  let fahrenheitForecastThreeLow = Math.round(
    (celciusTemperatureThreeLow * 9) / 5 + 32
  );
  temperatureForecastThreeLow.innerHTML = `${fahrenheitForecastThreeLow} °F`;

  let temperatureForecastFourHigh = document.querySelector(
    "#forecast-four-high"
  );
  let fahrenheitForecastFourHigh = Math.round(
    (celciusTemperatureFourHigh * 9) / 5 + 32
  );
  temperatureForecastFourHigh.innerHTML = `${fahrenheitForecastFourHigh} °F`;
  let temperatureForecastFourLow = document.querySelector("#forecast-four-low");
  let fahrenheitForecastFourLow = Math.round(
    (celciusTemperatureFourLow * 9) / 5 + 32
  );
  temperatureForecastFourLow.innerHTML = `${fahrenheitForecastFourLow} °F`;

  let temperatureForecastFiveHigh = document.querySelector(
    "#forecast-five-high"
  );
  let fahrenheitForecastFiveHigh = Math.round(
    (celciusTemperatureFiveHigh * 9) / 5 + 32
  );
  temperatureForecastFiveHigh.innerHTML = `${fahrenheitForecastFiveHigh} °F`;
  let temperatureForecastFiveLow = document.querySelector("#forecast-five-low");
  let fahrenheitForecastFiveLow = Math.round(
    (celciusTemperatureFiveLow * 9) / 5 + 32
  );
  temperatureForecastFiveLow.innerHTML = `${fahrenheitForecastFiveLow} °F`;

  celciusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
}

function switchUnitToCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = Math.round(celciusTemperature);

  let temperatureElementFeelsLike = document.querySelector("#feels-like");
  temperatureElementFeelsLike.innerHTML = `${Math.round(
    celciusTemperatureFeelsLike
  )} °C`;

  let temperatureElementHigh = document.querySelector("#high");
  temperatureElementHigh.innerHTML = `${Math.round(celciusTemperatureHigh)} °C`;

  let temperatureElementLow = document.querySelector("#low");
  temperatureElementLow.innerHTML = `${Math.round(celciusTemperatureLow)} °C`;

  let temperatureForecastOneHigh = document.querySelector("#forecast-one-high");
  temperatureForecastOneHigh.innerHTML = `${Math.round(
    celciusTemperatureOneHigh
  )} °C`;
  let temperatureForecastOneLow = document.querySelector("#forecast-one-low");
  temperatureForecastOneLow.innerHTML = `${Math.round(
    celciusTemperatureOneLow
  )} °C`;

  let temperatureForecastTwoHigh = document.querySelector("#forecast-two-high");
  temperatureForecastTwoHigh.innerHTML = `${Math.round(
    celciusTemperatureTwoHigh
  )} °C`;
  let temperatureForecastTwoLow = document.querySelector("#forecast-two-low");
  temperatureForecastTwoLow.innerHTML = `${Math.round(
    celciusTemperatureTwoLow
  )} °C`;

  let temperatureForecastThreeHigh = document.querySelector(
    "#forecast-three-high"
  );
  temperatureForecastThreeHigh.innerHTML = `${Math.round(
    celciusTemperatureThreeHigh
  )} °C`;
  let temperatureForecastThreeLow = document.querySelector(
    "#forecast-three-low"
  );
  temperatureForecastThreeLow.innerHTML = `${Math.round(
    celciusTemperatureThreeLow
  )} °C`;

  let temperatureForecastFourHigh = document.querySelector(
    "#forecast-four-high"
  );
  temperatureForecastFourHigh.innerHTML = `${Math.round(
    celciusTemperatureFourHigh
  )} °C`;
  let temperatureForecastFourLow = document.querySelector("#forecast-four-low");
  temperatureForecastFourLow.innerHTML = `${Math.round(
    celciusTemperatureFourLow
  )} °C`;

  let temperatureForecastFiveHigh = document.querySelector(
    "#forecast-five-high"
  );
  temperatureForecastFiveHigh.innerHTML = `${Math.round(
    celciusTemperatureFiveHigh
  )} °C`;
  let temperatureForecastFiveLow = document.querySelector("#forecast-five-low");
  temperatureForecastFiveLow.innerHTML = `${Math.round(
    celciusTemperatureFiveLow
  )} °C`;

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
  axios.get(`${apiUrlWeather}&appid=${apiKey}`).then(showTemperature);

  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&units=${unit}&appid=${apiKey}`;
  axios.get(`${apiUrlForecast}`).then(showForecast);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let unit = "metric";
  let apiKey = "59f81d670602d254d31607e29d1fe6d5";
  let apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
  axios.get(`${apiUrlWeather}`).then(showTemperature);
  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
  axios.get(`${apiUrlForecast}`).then(showForecast);
}

function showForecast(response) {
  console.log(response);
  document.querySelector("#forecast-one-high").innerHTML = `${Math.round(
    response.data.list[0].main.temp_max
  )} °C`;
  document.querySelector("#forecast-one-low").innerHTML = `${Math.round(
    response.data.list[0].main.temp_min
  )} °C`;
  document
    .querySelector("#forecast-one-icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`
    );
  document
    .querySelector("#forecast-one-icon")
    .setAttribute(
      "alt",
      `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].description}@2x.png`
    );
  document.querySelector("#forecast-two-high").innerHTML = `${Math.round(
    response.data.list[1].main.temp_max
  )} °C`;
  document.querySelector("#forecast-two-low").innerHTML = `${Math.round(
    response.data.list[1].main.temp_min
  )} °C`;
  document
    .querySelector("#forecast-two-icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[1].weather[0].icon}@2x.png`
    );
  document
    .querySelector("#forecast-two-icon")
    .setAttribute(
      "alt",
      `http://openweathermap.org/img/wn/${response.data.list[1].weather[0].description}@2x.png`
    );
  document.querySelector("#forecast-three-high").innerHTML = `${Math.round(
    response.data.list[2].main.temp_max
  )} °C`;
  document.querySelector("#forecast-three-low").innerHTML = `${Math.round(
    response.data.list[2].main.temp_min
  )} °C`;
  document
    .querySelector("#forecast-three-icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[2].weather[0].icon}@2x.png`
    );
  document
    .querySelector("#forecast-three-icon")
    .setAttribute(
      "alt",
      `http://openweathermap.org/img/wn/${response.data.list[2].weather[0].description}@2x.png`
    );
  document.querySelector("#forecast-four-high").innerHTML = `${Math.round(
    response.data.list[3].main.temp_max
  )} °C`;
  document.querySelector("#forecast-four-low").innerHTML = `${Math.round(
    response.data.list[3].main.temp_min
  )} °C`;
  document
    .querySelector("#forecast-four-icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[3].weather[0].icon}@2x.png`
    );
  document
    .querySelector("#forecast-four-icon")
    .setAttribute(
      "alt",
      `http://openweathermap.org/img/wn/${response.data.list[3].weather[0].description}@2x.png`
    );
  document.querySelector("#forecast-five-high").innerHTML = `${Math.round(
    response.data.list[4].main.temp_max
  )} °C`;
  document.querySelector("#forecast-five-low").innerHTML = `${Math.round(
    response.data.list[4].main.temp_min
  )} °C`;
  document
    .querySelector("#forecast-five-icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[4].weather[0].icon}@2x.png`
    );
  document
    .querySelector("#forecast-five-icon")
    .setAttribute(
      "alt",
      `http://openweathermap.org/img/wn/${response.data.list[4].weather[0].description}@2x.png`
    );
  celciusTemperatureOneHigh = Math.round(response.data.list[0].main.temp_max);
  celciusTemperatureOneLow = Math.round(response.data.list[0].main.temp_min);
  celciusTemperatureTwoHigh = Math.round(response.data.list[1].main.temp_max);
  celciusTemperatureTwoLow = Math.round(response.data.list[1].main.temp_min);
  celciusTemperatureThreeHigh = Math.round(response.data.list[2].main.temp_max);
  celciusTemperatureThreeLow = Math.round(response.data.list[2].main.temp_min);
  celciusTemperatureFourHigh = Math.round(response.data.list[3].main.temp_max);
  celciusTemperatureFourLow = Math.round(response.data.list[3].main.temp_min);
  celciusTemperatureFiveHigh = Math.round(response.data.list[4].main.temp_max);
  celciusTemperatureFiveLow = Math.round(response.data.list[4].main.temp_min);
}

function showTemperature(response) {
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
let forecastOneDay = document.querySelector("#forecast-one-day");
let forecastOneDate = document.querySelector("#forecast-one-date");
let forecastTwoDay = document.querySelector("#forecast-two-day");
let forecastTwoDate = document.querySelector("#forecast-two-date");
let forecastThreeDay = document.querySelector("#forecast-three-day");
let forecastThreeDate = document.querySelector("#forecast-three-date");
let forecastFourDay = document.querySelector("#forecast-four-day");
let forecastFourDate = document.querySelector("#forecast-four-date");
let forecastFiveDay = document.querySelector("#forecast-five-day");
let forecastFiveDate = document.querySelector("#forecast-five-date");

let button = document.querySelector("#current-city-button");
button.addEventListener("click", getCurrentPosition);

let citySearchForm = document.querySelector("#city-search-form");
citySearchForm.addEventListener("submit", newCitySearch);

let celciusTemperature = null;
let celciusTemperatureFeelsLike = null;
let celciusTemperatureHigh = null;
let celciusTemperatureLow = null;
let celciusTemperatureOneHigh = null;
let celciusTemperatureOneLow = null;
let celciusTemperatureTwoHigh = null;
let celciusTemperatureTwoLow = null;
let celciusTemperatureThreeHigh = null;
let celciusTemperatureThreeLow = null;
let celciusTemperatureFourHigh = null;
let celciusTemperatureFourLow = null;
let celciusTemperatureFiveHigh = null;
let celciusTemperatureFiveLow = null;

let fahrenheitLink = document.querySelector("#secondary-unit");
fahrenheitLink.addEventListener("click", switchUnitToFahrenheit);

let celciusLink = document.querySelector("#primary-unit");
celciusLink.addEventListener("click", switchUnitToCelcius);

dayElement.innerHTML = formatWeekday(now);
dateElement.innerHTML = formatDate(now);
timeElement.innerHTML = formatTime(now);
forecastOneDay.innerHTML = formatForecastOneDay();
forecastOneDate.innerHTML = formatForecastOneDate();
forecastTwoDay.innerHTML = formatForecastTwoDay();
forecastTwoDate.innerHTML = formatForecastTwoDate();
forecastThreeDay.innerHTML = formatForecastThreeDay();
forecastThreeDate.innerHTML = formatForecastThreeDate();
forecastFourDay.innerHTML = formatForecastFourDay();
forecastFourDate.innerHTML = formatForecastFourDate();
forecastFiveDay.innerHTML = formatForecastFiveDay();
forecastFiveDate.innerHTML = formatForecastFiveDate();

navigator.geolocation.getCurrentPosition(showPosition);
