var SunCalc = require("suncalc");
var moment = require("moment-timezone");

module.exports = {
  sunriseAt: (place, date) => {
    var times = SunCalc.getTimes(date.clone().toDate(), place.latitude, place.longitude);
    return moment(times.sunrise).tz(place.timezone);
  }
};
