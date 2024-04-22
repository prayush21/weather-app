export const temperatureUtil = (tempInCelsius) => {
  const tempInFahrenheit = Math.round(parseFloat(tempInCelsius) * (9 / 5) + 32);

  return {
    cel: tempInCelsius,
    fah: tempInFahrenheit,
  };
};

export const displayTemp = (value, unit) => {
  if (unit == "C") return Math.round(value);
  else return Math.round(parseInt(value) * (9 / 5) + 32);
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
