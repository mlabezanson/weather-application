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

  if (hour < 12) {
    return `${hour}:${minute} PM`;
  } else {
    return `${hour}:${minute} AM`;
  }
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

// Code to get weather API and utilize search function

function newCitySearch(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#current-city");
  let cityInput = document.querySelector("#city-search-input");
  cityElement.innerHTML = cityInput.value;
  let apiKey = "59f81d670602d254d31607e29d1fe6d5";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${unit}`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let citySearchForm = document.querySelector("#city-search-form");
citySearchForm.addEventListener("submit", newCitySearch);

// Code to switch between temperature units
// Cannot get the units to switch back from F to C!!!

function switchUnit(event) {
  event.preventDefault();
  let primaryUnit = document.querySelector("#primary-unit");
  let secondaryUnit = document.querySelector("#secondary-unit");
  let temperatureElement = document.querySelector("#current-temperature");
  let fahrenheitTemperature = Math.round(
    (temperatureElement.innerHTML * 9) / 5 + 32
  );

  //if ()
  temperatureElement.innerHTML = `${fahrenheitTemperature}`;
  primaryUnit.innerHTML = "°F |";
  secondaryUnit.innerHTML = "°C";
  console.log(secondaryUnit.innerHTML);

  function switchUnitToCelcius(event) {
    event.preventDefault();
    let unitElement = document.querySelector("#primary-unit");
    let temperatureElement = document.querySelector("#current-temperature");
    let fahrenheitTemperature = Math.round(
      (temperatureElement.innerHTML * 9) / 5 + 32
    );
    let celciusTemperature = Math.round((fahrenheitTemperature - 32) * (5 / 9));

    temperatureElement.innerHTML = `${celciusTemperature}`;
    unitElement.innerHTML = "°C |";
    fahrenheitLink.innerHTML = "°F";
  }
}

function defineUnit() {
  let primaryUnit = document.querySelector("#primary-unit");
  let secondaryUnit = document.querySelector("#secondary-unit");
  let unit = "metric";
  if (unit === "metric") {
    primaryUnit.innerHTML = "°C |";
    secondaryUnit.innerHTML = "°F";
  }
}

let fahrenheitLink = document.querySelector("#secondary-unit");
fahrenheitLink.addEventListener("click", switchUnit, { once: true });

defineUnit();

//Code to show current location & temperature upon load and when Current City button is pressed

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let unit = "metric";
  let apiKey = "59f81d670602d254d31607e29d1fe6d5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
  axios.get(`${apiUrl}`).then(showTemperature);
}

function showTemperature(response) {
  console.log(response);
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#feels-like").innerHTML = `Feels like: ${Math.round(
    response.data.main.feels_like
  )} °C`;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#high").innerHTML = `High: ${Math.round(
    response.data.main.temp_max
  )} °C`;
  document.querySelector("#low").innerHTML = `Low: ${Math.round(
    response.data.main.temp_min
  )} °C`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity: ${response.data.main.humidity}%`;
  document.querySelector("#wind").innerHTML = `Wind Speed: ${Math.round(
    response.data.wind.speed
  )} km/h`;
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

navigator.geolocation.getCurrentPosition(showPosition);
