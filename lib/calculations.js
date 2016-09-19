
var SunCalc = require("suncalc");

// get today's sunlight times for London
var times = SunCalc.getTimes(new Date(), 51.5, -0.1);

// format sunrise time from the Date object
var sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();

// get position of the sun (azimuth and altitude) at today's sunrise
var sunrisePos = SunCalc.getPosition(times.sunrise, 51.5, -0.1);

// get sunrise azimuth in degrees
var sunriseAzimuth = sunrisePos.azimuth * 180 / Math.PI;

console.log("sunrise", sunriseStr);
console.log("sunrise pos", sunrisePos);
console.log("sunrise azimuth", sunriseAzimuth);
