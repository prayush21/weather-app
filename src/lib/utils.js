export const temperatureUtil = (tempInCelsius) => {
  const tempInFahrenheit = Math.round(parseFloat(tempInCelsius) * (9 / 5) + 32);

  return {
    cel: tempInCelsius,
    fah: tempInFahrenheit,
  };
};

export const displayTemp = (value, unit) => {
  if (unit == "C") return value ? Math.round(value) : "-";
  else return value ? Math.round(parseInt(value) * (9 / 5) + 32) : "-";
};

export const weekDayMap = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

export const hourlyMap = {
  0: "12AM",
  1: "1AM",
  2: "2AM",
  3: "3AM",
  4: "4AM",
  5: "5AM",
  6: "6AM",
  7: "7AM",
  8: "8AM",
  9: "9AM",
  10: "10AM",
  11: "11AM",
  12: "12PM",
  13: "1PM",
  14: "2PM",
  15: "3PM",
  16: "4PM",
  17: "5PM",
  18: "6PM",
  19: "7PM",
  20: "8PM",
  21: "9PM",
  22: "10PM",
  23: "11PM",
};

export const degreeToDirection = (d) => {
  {
    if (typeof d !== "number" || isNaN(d)) {
      return -1;
    }

    // keep within the range: 0 <= d < 360
    d = d % 360;

    if (11.25 <= d && d < 33.75) {
      return "NNE";
    } else if (33.75 <= d && d < 56.25) {
      return "NE";
    } else if (56.25 <= d && d < 78.75) {
      return "ENE";
    } else if (78.75 <= d && d < 101.25) {
      return "E";
    } else if (101.25 <= d && d < 123.75) {
      return "ESE";
    } else if (123.75 <= d && d < 146.25) {
      return "SE";
    } else if (146.25 <= d && d < 168.75) {
      return "SSE";
    } else if (168.75 <= d && d < 191.25) {
      return "S";
    } else if (191.25 <= d && d < 213.75) {
      return "SSW";
    } else if (213.75 <= d && d < 236.25) {
      return "SW";
    } else if (236.25 <= d && d < 258.75) {
      return "WSW";
    } else if (258.75 <= d && d < 281.25) {
      return "W";
    } else if (281.25 <= d && d < 303.75) {
      return "WNW";
    } else if (303.75 <= d && d < 326.25) {
      return "NW";
    } else if (326.25 <= d && d < 348.75) {
      return "NNW";
    } else {
      return "N";
    }
  }
};
