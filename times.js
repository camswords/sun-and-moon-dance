var places = require("./lib/places");
var sun = require("./lib/sun");
var moment = require("moment-timezone");


var tomorrow = moment().tz(places.London.timezone).add(1, "day");
console.log(sun.sunriseAt(places.London, tomorrow).format());
