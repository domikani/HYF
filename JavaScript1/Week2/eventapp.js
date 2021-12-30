const getEventWeekDay = (days) => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayOfTheWeekNumeric = today.getDay();
  const eventDaysFromToday = days + dayOfTheWeekNumeric;
  const eventDayNumeric = eventDaysFromToday % weekDays.length;
  const eventDay = weekDays[eventDayNumeric];
  return `The event will be held on ${eventDay}`;
};

console.log(getEventWeekDay(2));
