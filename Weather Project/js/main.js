"use strict"

// ---------- Element References ----------
const currDate = document.getElementById("current-date");
const controls = document.getElementById("controls");
const citySelect = document.getElementById("city-select");
const themeSelect = document.getElementById("theme-select");
const forecast = document.getElementById("forecast");


// ---------- Condition Icons ----------
// Decimal codes for the weather condition symbols
const ICON_CODES = {
    sun: 9728,
    cloudy: 9729,
    partly: 9925,
    rain: 127783,
    snow: 127784,
}
// Make the icon display as the colored emoji rather than flat text
const EMOJI_SELECTOR = 65039;

// Function to return the icon character for a condition
function getIcon(name) {
    const code = ICON_CODES[name] || ICON_CODES.sun;
    return EMOJI_SELECTOR
        ? String.fromCodePoint(code, EMOJI_SELECTOR)
        : String.fromCodePoint(code);
}

// ---------- Formatting helpers ----------
// Adds the degree symbol. Units value pulling from weatherData.js
function formatTemp (value) {
    return value + "°" + units;
}

/* Runs once for every day of data in the forecast
    Create a new date object starting with current date and adds an offset for days after current day
    Return that date back so the forecast card displays the correct day name(Sunday, Monday..),
    month & day number
    */
function addDays(offset) {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d;
}

/* Function to populate current Date and 
format in local format using options to display the full weekday and month names */
function getCurrDate () {
    currDate.textContent = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
} 

// Functions to show the forecast cards pulls data from weatherData.js
function renderForecast() {
    forecastData.slice(0, 3).forEach(function (day, index) {
        const card = document.getElementById("day-" + (index + 1));
        const date = addDays(index);

        card.querySelector(".day-name").textContent = date.toLocaleDateString("en-US", { weekday: "long" });
        card.querySelector(".day-date").textContent = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
        card.querySelector(".day-icon").textContent = getIcon(day.icon);
        card.querySelector(".day-high").textContent = formatTemp(day.high);
        card.querySelector(".day-low").textContent = formatTemp(day.low);
        card.querySelector(".day-desc").textContent = day.description;
    });
}



// Start Up
getCurrDate();
renderForecast();