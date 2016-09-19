var SunCalc = require("suncalc");

module.exports = {
  sunriseAt: (place, date) => {
    var times = SunCalc.getTimes(date.toDate(), place.latitude, place.longitude);
    return times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
  }
};
