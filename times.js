var places = require("./lib/places");
var sun = require("./lib/sun");
var moment = require("moment");


var tomorrow = moment().add(1, "day");
console.log(sun.sunriseAt(places.Sydney, tomorrow));
